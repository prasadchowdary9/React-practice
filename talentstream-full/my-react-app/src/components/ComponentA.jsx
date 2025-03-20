import React, { Component } from 'react'
import ComponentB from './ComponentB';

class ComponentA extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"ComponentA"
        }
        console.log("ComponentA constructor")    

        this.changeState = this.changeState.bind(this);
    }

    changeState() {
        this.setState({ name: "Updated ComponentA" });
    }
    static getDerivedStateFromProps(){
        console.log("ComponentA getDerivedStateFromProps")
        return null
    }

    componentDidMount(){
        console.log("ComponentA componentDidMount")
    }

    shouldComponentUpdate(){
        console.log("ComponentA shouldComponentUpdate")
        return true
    }
    getSnapshotBeforeUpdate(){
        console.log("ComponentA getSnapshotBeforeUpdate")
        return null
    }
    componentDidUpdate(){
        console.log("ComponentA componentDidUpdate")
    }   
    
    
    render() {
        console.log("ComponentA render")
        return (
            <React.Fragment>
                
                <h1>Component A</h1>
                <button onClick={this.changeState}>change state</button>
                <ComponentB/>
            </React.Fragment>
        )
    }
    
  }

export default ComponentA
