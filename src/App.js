import './App.css';
import React, { Component } from 'react';
import Bio from './Bio';
import Finished from './Finished';
import Education from './Education';

//FIGURE OUT HOW TO RETURN SCHOOL OBJECT
// FROM EDUCATION COMPONENT //////////////////

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pushed: false,
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      schools: [],
      jobs: [],
      //temporary value variables
      schoolName: "",
      educationLevel: "",
      jobName: "",
      jobTitle: "",
      jobTasks: [],
      jobTask: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event){
    const {name, value} = event.target
    this.setState((prev) => ({
      ...prev,
      [name]: value 
      //pushed: false
    }))
  }

  handleSubmit(event) {
    const schoolArray = this.state.schools;
    event.preventDefault();
    this.setState((prev) => ({
      ...prev,
      schools: [
        ...schoolArray,
        {
          schoolName: this.state.schoolName,
          educationLevel: this.state.educationLevel
        }
      ],
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
          <Education 
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
          schools={this.state.schools}
        />

      </div>
    )
  }
}

export default App;
