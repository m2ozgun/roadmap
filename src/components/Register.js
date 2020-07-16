import React, { useState } from 'react'
import {  Icons, Form, Input, Button, Checkbox  } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { AUTH_TOKEN } from './constants'

const SIGNUP_MUTATION = gql`
  mutation SignupMutation($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password, name: $name) {
      token
    }
  }
`

//import {  UserOutlined, LockOutlined  } = icons;
const Register = (props) => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')


  
    const saveUserData = token => {
      // TODO Find a better way!
        localStorage.setItem(AUTH_TOKEN, token)
    }

    const confirm = async data => {
      const { token } = data.signup
      saveUserData(token)
      props.history.push(`/`)
    }
    const onFinish = values => {
        console.log('Received values of form: ', values);
      };
    
      return (
        <Form
          name="normal_register"
          className="login-register"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
        <Form.Item
            name="Name"
			onChange={e => setName(e.target.value)}
            rules={[
              {
                required: true,
                message: 'Please input your name!',
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Name" />
          </Form.Item>
          <Form.Item
            name="email"
			onChange={e => setEmail(e.target.value)}

            rules={[
              {
                required: true,
                message: 'Please input your Email!',
              },
            ]}
          >
            <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
			onChange={e => setPassword(e.target.value)}

            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>

			<Mutation
                  mutation={SIGNUP_MUTATION}
                  variables={{ email, name, password }}
                  onCompleted={data => confirm(data)}
              >
                {mutation => (
                  <Button type="primary" htmlType="submit" onClick={mutation} className="login-form-button">
                    Register
                  </Button>

                )}
			</Mutation>

            Do you have an account? Login.
          </Form.Item>
        </Form>
      );
}

export { Register as default }