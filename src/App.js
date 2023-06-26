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
      firstName: "FirstName",
      lastName: "LastName",
      title: "Job Title",
      phone: "123-456-7890",
      email: "myemail@gmail.com",
      summary: "Quis deserunt ea tempor pariatur. Exercitation adipisicing laborum eiusmod labore magna magna dolor et Lorem. Exercitation fugiat proident elit excepteur Lorem commodo. Proident ipsum esse in eu voluptate excepteur esse aute consectetur incididunt pariatur anim. Duis et ea adipisicing quis. Excepteur et adipisicing cupidatat mollit do nostrud elit incididunt dolor cillum duis. Tempor voluptate duis consequat est laborum eiusmod proident aute veniam ut. Dolore irure aliqua enim culpa adipisicing.",
      school: [
        {
          schoolName: "Mercer University",
          schoolDegree: "Bachelors",
          schoolYearStarted: "2023",
          schoolYearFinished: "2025",
          schoolStudy: "Software Application Development and Human-Computer Interaction",
          schoolAccomplishments: "Accomplishment One \n Accomplishment Two \n Accomplishment Three"
        }
      ],
      schoolName: "",
      schoolDegree: "",
      schoolYearStarted: "",
      schoolYearFinished: "",
      schoolStudy: "",
      schoolAccomplishments: "",
      job: [
        {
          jobName: "Comcast",
          jobDescription: "Line One \n Line Two \n Line Three",
          jobFrom: "2016",
          jobTo: "2023",
          jobTitle: "Communications Technician"
        }
      ],
      jobName: "",
      jobDescription: "",
      jobFrom: "",
      jobTo: "",
      jobTitle: ""
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
        schoolYearStarted: this.state.schoolYearStarted,
        schoolYearFinished: this.state.schoolYearFinished,
        schoolStudy: this.state.schoolStudy,
        schoolAccomplishments: this.state.schoolAccomplishments,
        key: `${this.state.school.length}${this.state.schoolName}`
      }
    } else if (name === "job") {
      newObj = {
        jobName: this.state.jobName,
        jobDescription: this.state.jobDescription,
        jobFrom: this.state.jobFrom,
        jobTo: this.state.jobTo,
        jobTitle: this.state.jobTitle,
        key: `${this.state.job.length}${this.state.jobName}`
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
          <h2>General Information</h2>
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
