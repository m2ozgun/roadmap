import React from 'react';
import { Layout, Menu } from 'antd';
import pageHeaderStyles from '../styles/header.module.scss'
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <Layout.Header>
        <div className={pageHeaderStyles.logo} />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1"><Link to="/">Main</Link></Menu.Item>
          <Menu.Item key="2"><Link to="/create">Create Card</Link></Menu.Item>
          <Menu.Item key="3"><Link to="/login">Login</Link></Menu.Item>
          <Menu.Item key="4"><Link to="/register">Register</Link></Menu.Item>

        </Menu>
      </Layout.Header>
    )
}

export { Header as default }