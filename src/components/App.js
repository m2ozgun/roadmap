import React from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import CardList from './CardList'
import CreateCard from './CreateCard'
import Header from './Header'
import { Switch, Route } from 'react-router-dom'

const App = () => (
  <div>
    <Header />
    <div>
      <Switch>
        <Route exact path="/" component={CardList} />
        <Route exact path="/create" component={CreateCard} />
      </Switch>
    </div>
  </div>

)


export default App;
