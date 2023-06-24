import React, { Component } from 'react';
import Bio from './components/Bio'

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

    const [name, value] = event.target;

    this.setState((oldState) => ({
      ...oldState,
      [name] : [value]
    }))
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
          />
        </div>
      </div>
    )
  }



}

export default App;