import React, { Component } from 'react'

export class Scores extends Component {
  render() {
    return (
      <div className="container">
        <a href={"#"} style={aStyle}>Scores</a>
        <a href={"#"} style={scoreBox}>8 </a> 
        <a href={"#"} style={winStyle}>Wins</a>
        <a href={"#"} style={scoreBox}>9 </a>
        <a href={"#"} style={lossStyle}>Losses</a>
      </div>
    )
  }
}
// a style
const aStyle = {
    background: '#27C8C1',
    color: '#E9E9E9',
    padding: '5px 9px',
    borderTopLeftRadius: '8px',
    borderBottomLeftRadius: '8px',
    cursor: 'pointer',
    float: 'center'
  }
  // scoreBox styles
  const scoreBox = {
      color: '#E9E9E9',
      padding: '5px 9px',
      background: '#8FB757',
      borderLeft: '5px solid #F4EA6B',
  }
  // win text style
  const winStyle = {
    color: '#E9E9E9',
    padding: '5px 9px',
    background: '#E52A40',
    borderLeft: '5px solid #F4EA6B',
  }
  // loss style
const lossStyle = {
    background: '#E52A40',
    color: '#E9E9E9',
    border: 'none', 
    padding: '5px 9px',
    borderTopRightRadius: '8px',
    borderBottomRightRadius: '8px',
    borderLeft: '5px solid #F4EA6B',
    cursor: 'pointer',
    float: 'center'
  }

export default Scores


