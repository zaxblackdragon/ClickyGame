import React, { Component } from 'react'

export class ClickBox extends Component {

  state = {
    count: 0,
  }


  clickCounter = (e) => {
    e.preventDefault();
    this.setState(({ count }) => ({
      count: count + 1
    }));
  }
  countEmpty = (e) => {
    e.preventDefault();
    this.setState(({ count }) => ({
      count: 0, 
    }));
  }
  getStyle = () => {
    return {
      background: '#E52A40',
      color: '#E9E9E9',
      width: '40px',
      height: '40px',
      textAlign: 'center',
      borderRadius: '10px',
      paddingTop: '4px',
      fontSize: '22px',
      fontWeight: 'bold',
    }
  }

  render() {
    return (
      <div className="wrapper" style={colFour}>
       <div className="row">
            <span className="col-4"></span>
            <p style={pStyle}>Click Counter: </p>
            <p style={countBox}>{this.state.count}</p>
        </div>
       
          <div className="row">
          <span className="col-3"></span>
            <button onClick={this.clickCounter} style={buttonStyle} >Button Counter</button>
            <button onClick={this.countEmpty} style={buttonStyle} >Reset</button>
          </div>
        </div>

  
    )
  }
}
const colFour = {
  marginTop: '10px',
}
const countBox = {
  background: '#E52A40',
  color: '#E9E9E9',
  width: '40px',
  height: '40px',
  textAlign: 'center',
  borderRadius: '10px',
  border: '2px solid  #F4EA6B',
  paddingTop: '2px',
  fontSize: '22px',
  fontWeight: 'bold',
}
const buttonStyle = {
  background: '#27C8C1',
  color: '#E9E9E9',
  margin: '10px',
  float: 'left',
  textAlign: 'center',
  borderRadius: '25px',
}
const pStyle = {
  textAlign: 'center',
  margin: '0px',

  width: '100px',
}


export default ClickBox;

