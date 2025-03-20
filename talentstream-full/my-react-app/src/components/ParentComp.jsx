import React, { Component } from 'react'
import RegCompo from './RegComp'

import PureComp from './MyPureComponent'

 class ParentComp extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
            name:"Vishwas"
      }
    }
    componentDidMount(){    
       setInterval(()=>{
        this.setState({
            name:"Vishwas"      
        }),12000
       })
    }
    
  render() {
    console.log('Parent Component render')  
    
    return (
      <div>
        <h1>Parent Component</h1>
        <RegCompo name={this.state.name}/>
         <PureComp name={this.state.name}/>
        
      </div>
    )
  }
}

export default ParentComp
