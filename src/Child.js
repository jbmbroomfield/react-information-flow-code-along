import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'

class Child extends Component {
  render() {
    const props = this.props
    return (
      <div
        onClick={() => props.handleColorChange(getRandomColor())}
        className="child"
        style={{backgroundColor: props.color}}
      ></div>
    )
  }
}

export default Child
