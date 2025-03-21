import React, { Component } from 'react'

class ComponentB extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"ComponentB"
        }
        console.log("ComponentB constructor")    
    }
    static getDerivedStateFromProps(){
        console.log("ComponentB getDerivedStateFromProps")
        return null
    }

    componentDidMount(){
        console.log("ComponentB componentDidMount")
    }
        shouldComponentUpdate(){
        console.log("ComponentB shouldComponentUpdate")
        return true
    }
    getSnapshotBeforeUpdate(){
        console.log("ComponentB getSnapshotBeforeUpdate")
        return null
    }
    componentDidUpdate(){
        console.log("ComponentB componentDidUpdate")
    }   
    
    
  render() {
    console.log("ComponentB render")
    return (
      <React.Fragment>
        <h1>Component B</h1>
          <h2>compound c</h2>
        
      </React.Fragment>
    )
  }
}

export default ComponentB
