import React, { Component } from 'react'
import ComponentB from './ComponentB'

class ComponentA extends Component {
  render() {
    return (
      <ComponentB></ComponentB>
    )
  }
}

export default ComponentA