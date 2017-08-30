import React, { Component } from 'react';
// import logo from './logo.svg';
import Clock from './Clock';
import Toggle from './Toggle';
import Condition from './Condition';
import MailBox from './MailBox';
import List from './List';
import NamedForm from './NamedForm';
import MultiInput from './MultiInput';
import Calculator from './Boil';
import Some from './Every';
// import Temperature from './Temperature';
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
        <MultiInput />
        <Calculator />
        {/* <Temperature scale="c" />
        <Temperature scale="f" /> */}
        <Some />
      </div>
    );
  }
}

export default App;
