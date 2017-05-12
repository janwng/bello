import React, { Component } from 'react';
import './styles/main.css';
import Navbar from './Navbar.js';
import Sidebar from './Sidebar.js';
import ChatSection from './ChatSection.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Sidebar />
        <ChatSection />
      </div>
    );
  }
}

export default App;
