import React, { Component } from 'react'

export class ReactRefDemo extends Component {
    constructor(props) {
      super(props)
      this.myInput = React.createRef()

    
    }
    componentDidMount() {   
        this.myInput.current.focus()
        }   
    clickHandler = () => {
        alert(this.myInput.current.value)
    }
    
  render() {
    return (
      <div>
        <input type="text" ref={this.myInput} />
        <button onClick={this.clickHandler}>Focus Input</button>
       
      </div>
    )
  }
}

export default ReactRefDemo
