import React, {Component} from 'react';

class NamedForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      value: 'hello',
      selected: 'coconut',
    };
    this.valueChange = this.valueChange.bind(this);
    this.valueSubmit = this.valueSubmit.bind(this);
    this.handleSelected = this.handleSelected.bind(this);
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
  handleSelected(event){
    this.setState({
      selected: event.target.value
    })
  }
  render(){
    return (
      <form action="">
        <textarea onChange={this.valueChange} value={this.state.value}></textarea>
        <input type="text" onChange={this.valueChange} value={this.state.value}/>
        <select value={this.state.selected} onChange={this.handleSelected}>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
        <button onClick={this.valueSubmit}>提交</button>
      </form>
    );
  }
}

export default NamedForm;