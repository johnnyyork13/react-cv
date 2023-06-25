import React, { Component } from 'react';
import Bio from './components/Bio'
import Education from './components/Education'
import Job from './components/Job'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bio: {
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
      },
      education: {
        schoolList: [],
        schoolName: "",
        schoolDegree: "",
      },
      job: {
        jobList: [],
        jobName: "",
        jobTitle: "",
        jobDescription: ""
      }
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    event.preventDefault();
    const {name, value} = event.target;
    let objReplaced;
    let objName;
    if (Object.hasOwn(this.state.bio, name)) {
      objName = "bio";
      objReplaced = this.state.bio;
    } else if (Object.hasOwn(this.state.education, name)) {
      objName = "education";
      objReplaced = this.state.education;
    } else if (Object.hasOwn(this.state.job, name)) {
      objName = "job";
      objReplaced = this.state.job;
    }
    
    this.setState((oldState) => ({
      ...oldState,
      [objName]: {
        ...objReplaced,
        [name] : value
      }
    }))
    console.log(this.state);
  }

  handleSubmit(event) {
    event.preventDefault();

  }

  render() {
    
    return (
      <div className="main-container">
        <div className="form-container">
          <Bio 
            handleChange={this.handleChange}
            {...this.state.bio}
          />
          <Education 
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            {...this.state.education}
          />
          <Job 
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    )
  }



}

export default App;