## functional component --> rafce
import React from 'react'

const FunctionalComponent = () => {
  return (
    <div>FunctionalComponent</div>
  )
}

export default FunctionalComponent

## class component --> rcc
import React, { Component } from 'react'

export default class ClassComponent extends Component {
  render() {
    return (
      <div>ClassComponent</div>
    )
  }
}

