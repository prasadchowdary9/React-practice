import React, { Component } from 'react';

import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      comments:"",
      topic:""
    };
  }

  handleChange = (event) => {
    this.setState({
      userName: event.target.value,
    });
  };

  handleSubmit = () => {
    // event.preventDefault();
    alert(`${this.state.userName} ${this.state.comments} ${this.state.topic}`);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Form</h1>
        
        <div>
          <label>Username</label>
          <h3>{this.state.userName}</h3>
          <input 
            type="text" 
            value={this.state.userName} 
            onChange={this.handleChange} 
          />
        </div>
        <div>
          <label>Comments</label><br />
          <h3>{this.state.comments}</h3>
          
          <textarea 
            value={this.state.comments} 
            onChange={(event) => this.setState({ comments: event.target.value })} 
          />
        </div>
        <div>
          <label>Topic</label>
          <
          h3>{this.state.topic}</h3>
          <br />          
          <select value={this.state.topic} onChange={(event) => this.setState({ topic: event.target.value })}>
            
            <option value="react">React</option>
            <option value="Angular">Angular</option>  
            <option value="Vue">Vue</option>
          </select>
        </div>
        <button className='primary' type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
