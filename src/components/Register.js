import React from 'react'
import {  Icons, Form, Input, Button, Checkbox  } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';

//import {  UserOutlined, LockOutlined  } = icons;
const Register = () => {
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
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Register
            </Button>
            Do you have an account? Login.
          </Form.Item>
        </Form>
      );
}

export { Register as default }