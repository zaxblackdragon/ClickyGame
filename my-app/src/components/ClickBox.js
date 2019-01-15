import React, { Component } from 'react'


let images = [
  {
    id: 1,
    src: './images/cow.jpg',
  }, 
  {
    id: 2,
    src: './images/cat.png',
  }, 
  {
    id: 3,
    src: './images/rat.jpeg',
  },
  {
    id: 4,
    src: './images/donkey.png',
  }

]

export class ClickBox extends Component {

  state = {
  count: 0,
  isClick: false,
}

isClick = (e) => {
  if(!this.count === 0) {
    this.setState(({ isClick }) => ({
      isClick: true,
      
    }));
    console.log('it works');
  }
}

  clickCounter = (e) => {
    e.preventDefault();
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  }
  countEmpty = (e) => {
    e.preventDefault();
    this.setState(({ count }) => ({
      count: 0, 
    }));
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

          <div>
           { images.map(image => 
            <button onClick={this.clickCounter}style={{ float: 'left', margin: '10px',}}><img style={{  height: '100px',  }}
              id={image.id}
              src={image.src} 
              />
            </button>) }
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

