import React, { Component } from 'react';
import MessageList from './MessageList.js';
import Chatbar from './Chatbar.js';

class Chatbox extends Component {
  render() {
    return (
      <div className="chatbox">
        <MessageList />
        <Chatbar />
      </div>
    );
  }
}

export default Chatbox;
