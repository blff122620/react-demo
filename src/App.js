import React, { Component } from 'react';
// import logo from './logo.svg';
import Clock from './Clock';
import Toggle from './Toggle';
import Condition from './Condition';
import MailBox from './MailBox';
import List from './List';
import NamedForm from './NamedForm';
import './App.css';

class App extends Component {
  render() {
    const list = [{id:1},{id:2},{id:3}];
    return (
      <div className="App">
        <Clock />
        <Clock />
        <Clock />
        <Toggle />  
        <Condition hi='1'/>
        <MailBox msg={[1,2,3]} />
        <List list={list} />
        <NamedForm />
      </div>
    );
  }
}

export default App;
