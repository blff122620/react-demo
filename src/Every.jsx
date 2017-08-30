import React from 'react';

class Every extends React.Component{
  render(){
    return (
      <div className={`some-${this.props.color}`}>
        {this.props.children}
      </div>
    );
  }
}

function Some(props){
  return (
    <Every color="red">
      <h1>123</h1>
      <h2>345</h2>
    </Every>
  );
}
export default Some;