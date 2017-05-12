import React, { Component } from 'react';
import Chatbox from './Chatbox.js';

class ChatSection extends Component {
  render() {
    return (
      <div className="chat-section">
        <Chatbox />
      </div>
    );
  }
}

export default ChatSection;
