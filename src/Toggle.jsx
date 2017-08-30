import React,{ Component } from 'react';

class Toggle extends Component{
  constructor(props){
    super(props);
    this.state = {
      isToggleOn: false
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle(){
    this.setState(prevStat => ({
      isToggleOn: !prevStat.isToggleOn
    }));
  }
  render(){
    return (
      <div onClick={this.toggle}>
        {this.state.isToggleOn? 'ok': 'not ok'}.
      </div>
    );
  }
}

export default Toggle;