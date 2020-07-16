import React from 'react';
import 'antd/dist/antd.css';
import Header from './Header'
import CardList from './CardList'
import CreateCard from './CreateCard'
import Login from './Login'
import Register from './Register'

import appStyles from '../styles/app.module.scss'

import { Layout, Row } from 'antd';
import { Switch, Route } from 'react-router-dom'

function App(props) {
  return (
    <Layout className="layout">
      <Header />

      <Layout.Content style={{ padding: '0 50px' }}>
            <div className={appStyles.content}>
                <Row gutter={16}>
                    <Switch>
                      <Route exact path="/" component={CardList} />
                      <Route exact path="/create" component={CreateCard} />
                      <Route exact path="/login" component={Login} />
                      <Route exact path="/register" component={Register} />

                  </Switch>
                </Row>
            </div>
        </Layout.Content>
        


      <Layout.Footer style={{ textAlign: 'center' }}>Mert Özgün © 2020</Layout.Footer>
    </Layout>

    );
}

export default App;
