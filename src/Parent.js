import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'
import Child from './Child'

class Parent extends Component {

  constructor() {
    super()
    this.state = {
      color: getRandomColor(),
      childrenColor: '#FFF',
    }
  }

  changeColor = newChildColor => {
    console.log(newChildColor)
    this.setState({
      color: getRandomColor(),
      childrenColor: newChildColor,
    })
  }

  render() {
    const state = this.state
    return (
      <div className="parent" style={{backgroundColor: this.state.color}}>
        <Child color={state.childrenColor} handleColorChange={this.changeColor}/>
        <Child color={state.childrenColor} handleColorChange={this.changeColor}/>
      </div>
    )
  }
}

export default Parent
