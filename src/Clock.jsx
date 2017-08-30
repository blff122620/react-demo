import React,{ Component } from 'react';
function FormattedDate(props){
  return <h1> it is {props.date.toLocaleTimeString()}.</h1>
}
class Clock extends Component{
  constructor(props){
    super(props);
    this.state = {
      date: new Date(),
      loop: true,
    };
  }
  componentDidMount() {

    this.timerID = setTimeout(
      () => this.tick(),
      1000
    );
    
  }

  componentWillUnmount() {
    this.loop = false;
    clearTimeout(this.timerID);    
  }

  tick(){
    if(this.state.loop){
      this.setState({
        date: new Date(),
      });
      this.timerID = setTimeout(
        () => this.tick(),
        1000
      );
    }
    
  }
  render(){
    
    return (
      <div>
        <h1>Hello, world!</h1>
        <FormattedDate date={this.state.date} />
      </div>
    );
  }
}
export default Clock;