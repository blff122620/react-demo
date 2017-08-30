import React,{ Component } from 'react';

class MailBox extends Component{
  render(){
    const msgs = this.props.msg;
    return (
      <div>
        {msgs.length > 0 && 
          <h2>
          还有{msgs.length}条数据
          </h2>
        }
      </div>
    );
  }
}

export default MailBox;