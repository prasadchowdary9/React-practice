import React, { Component } from 'react'

 class RegComp extends Component {
  render() {
    console.log("my regular component")
    return (
      <div>
        <h1>Regular Component</h1>
        <p>This is a regular component.</p> 
        {this.props.name}
      </div>
    )
  }
}

export default RegComp
