import React, { useState } from 'react'
import gql from 'graphql-tag'
import {  Form, Input, Button, Checkbox  } from 'antd';


const CreateCard = () => {


    return (
        <Form>
            <Form.Item 
                label="Title"
                name="Title"
                >
                    <Input />
            </Form.Item>
            <Form.Item 
                label="Description"
                name="Description"
                >
                    <Input />
            </Form.Item>
            <Form.Item 
                label="Feed"
                name="Feed"
                >
                    <Input />
            </Form.Item>
            <Form.Item>
            <Button type="primary" htmlType="submit">
              Add Card
            </Button>
            </Form.Item>
        </Form>
    )
}

export { CreateCard as default }