import React, { Component } from 'react';
// CSS Styles - genera;
import './App.css';
// Header component
import Header from './components/layout/Header';
// Scores component
import Scores from './components/Scores';
// ClickBox counter component
import ClickBox from './components/ClickBox';

class App extends Component {
  state = {
    count: 0,
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <Scores />
          <ClickBox count={this.state.count} />
        </div>
      </div>
    );
  }
}
// Exports to index.js
export default App;
