import React, { useState } from 'react'
import {  Icons, Form, Input, Button, Checkbox  } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { AUTH_TOKEN } from './constants'

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`

const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const saveUserData = token => {
      // TODO Find a better way!
      localStorage.setItem(AUTH_TOKEN, token)
  }

    const confirm = async data => {
      const { token } = data.login
      saveUserData(token)
      props.history.push(`/`)
    }
    const onFinish = values => {
        console.log(values)

      };
    
      return (
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}

        >
          <Form.Item
            name="email"
            onChange={e => {
              setEmail(e.target.value)
              console.log("hey")
            }}

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
              onChange={e => setPassword(e.target.value)}
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
    
            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item>
    
          <Form.Item>
              <Mutation
                  mutation={LOGIN_MUTATION}
                  variables={{ email, password }}
                  onCompleted={data => confirm(data)}
              >
                {mutation => (
                  <Button type="primary" htmlType="submit" onClick={mutation} className="login-form-button">
                    Log in
                  </Button>

                )}
              </Mutation>

            Or <a href="">register now!</a>
          </Form.Item>
        </Form>
      );
}

export { Login as default }