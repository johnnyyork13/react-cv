import './App.css';
import React, { Component } from 'react';
import Bio from './Bio';
import Finished from './Finished';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pushed: false,
      firstName: "",
      lastName: "",
      email: "",
      phone: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState((prev) => ({
      ...prev,
      [event.target.name]:event.target.value,
      pushed: false
    }))
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState((prev) => ({
      ...prev,
      pushed: true
    }))
  }

  render() {
    return (
      <div className="app">
        <div className="form">
          <Bio 
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          />
        </div>
        
        <Finished 
          pushed={this.state.pushed}
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          email={this.state.email}
          phone={this.state.phone}
        />

      </div>
    )
  }
}

export default App;
