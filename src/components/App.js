import React from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import CardList from './CardList'
import CreateCard from './CreateCard'
import Login from './Login'

import Header from './Header'
import { Switch, Route } from 'react-router-dom'

const App = () => (
  <div>
    <Header />
    <div>
      <Switch>
        <Route exact path="/" component={CardList} />
        <Route exact path="/create" component={CreateCard} />
        <Route exact path="/login" component={Login} />

      </Switch>
    </div>
  </div>

)


export default App;
