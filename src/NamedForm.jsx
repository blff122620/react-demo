import React, {Component} from 'react';

class NamedForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      value: '',
    };
    this.valueChange = this.valueChange.bind(this);
    this.valueSubmit = this.valueSubmit.bind(this);
  }
  valueChange(event){
    this.setState({
      value: event.target.value.toUpperCase()
    });
   
  }
  valueSubmit(event){
    alert(`提交的内容是${this.state.value}`);
    event.preventDefault();
  }
  render(){
    return (
      <form action="">
        <input type="text" onChange={this.valueChange} value={this.state.value}/>
        <button onClick={this.valueSubmit}>提交</button>
      </form>
    );
  }
}

export default NamedForm;