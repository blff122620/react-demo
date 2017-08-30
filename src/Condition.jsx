import React,{ Component } from 'react';

function Greet(props){
  return <button onClick={props.click}>登陆</button>;
}

function User(props){
  return <button onClick={props.click}>登出</button>;
}

class Condition extends Component{
  constructor(props){
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }
  handleLoginClick() {
    console.log(this.props);
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }
  render(){
    let button = null;
    if(this.state.isLoggedIn){
      button = <User click={this.handleLogoutClick} />;
    }
    else{
      button = <Greet click={this.handleLoginClick} />;
    }
    return button;
  }
}

export default Condition;