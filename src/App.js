import './App.css';
import { Component } from 'react';
import Bio from './components/Bio';
import School from "./components/School";
import Job from './components/Job';
import Resume from './components/Resume';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      title: "",
      phone: "",
      email: "",
      school: [],
      schoolName: "",
      schoolDegree: "",
      schoolYear: "",
      job: [],
      jobName: "",
      jobDescription: "",
      jobFrom: "",
      jobTo: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSchoolDelete = this.handleSchoolDelete.bind(this);
    this.handleJobDelete = this.handleJobDelete.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    const {name, value} = event.target;

    this.setState((oldObj) => ({
      ...oldObj,
      [name] : value
    }))
  }
  
  handleSubmit(event) {
    event.preventDefault();
    const {name} = event.target;
    let newObj = {};
    if (name === "school") {
      newObj = {
        schoolName: this.state.schoolName,
        schoolDegree: this.state.schoolDegree,
        schoolYear: this.state.schoolYear,
        key: `${this.state.school.length}${this.state.schoolName}`
      }
    } else if (name === "job") {
      newObj = {
        jobName: this.state.jobName,
        jobDescription: this.state.jobDescription,
        key: `${this.state.school.length}${this.state.schoolName}`
      }
    }

    this.setState((oldObj) => ({
      ...oldObj,
      [name] : [
        ...oldObj[name],
        newObj
      ]
    }))

    console.log(this.state);
  }

  handleSchoolDelete(e) {
    this.setState((oldObj) => ({
      ...oldObj,
      school: oldObj.school.filter((obj) => obj.key !== e)
    }))
  }

  handleJobDelete(e) {
    this.setState((oldObj) => ({
      ...oldObj,
      job: oldObj.job.filter((obj) => obj.key !== e)
    }))
  }

  render() {
    return(
      <div className="main-container">
        <div className="form-container">
          <Bio
            handleChange={this.handleChange}
          />
          <School
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
          />
          <Job
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
          />
        </div>
        <div className="resume-container">
          <Resume 
            handleSchoolDelete={this.handleSchoolDelete}
            handleJobDelete={this.handleJobDelete}
            {...this.state}
          />
        </div>


      </div>
    )
  }
}


export default App;
