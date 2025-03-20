import React, { PureComponent } from 'react'

class MyPureComponent extends PureComponent {
  render() {
    console.log('My Pure Component render')
    return (
      <div>
        <h1>My Pure Component</h1>
        <p>This is a pure component.</p>
        {this.props.name}
        
      </div>
    )
  }
}

export default MyPureComponent
