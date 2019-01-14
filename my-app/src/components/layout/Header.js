import React, { Component } from 'react';

export class Header extends Component {
  render() {
    return (
        <header>
          <h1 style={headerStyle}>Click Stuff Game</h1>
          <p style={pStyles} className={""}>Click on the images below and try not to click on the same image twice.</p>
        </header>
    )
  }
}
const headerStyle = {
  background: '#27C8C1',
  fontWieght: 'bold',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
  margin: '0px'
}
const pStyles = {
  background: '#0F0F0F',
  color: '#E9E9E9',
  padding: '10px'
}

export default Header;


