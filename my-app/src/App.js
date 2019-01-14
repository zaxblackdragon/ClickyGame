import React, { Component } from 'react';
// CSS Styles - genera;
import './App.css';
// Header component
import Header from './components/layout/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
        </div>
      </div>
    );
  }
}
// Exports to index.js
export default App;
