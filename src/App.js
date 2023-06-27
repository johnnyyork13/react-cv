import './App.css';
import { Component } from 'react';
import Header from './components/Header'
import Bio from './components/Bio';
import School from "./components/School";
import Job from './components/Job';
import Resume from './components/Resume';
import Footer from './components/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      printing: false,
      firstName: "FirstName",
      lastName: "LastName",
      title: "Job Title",
      phone: "123-456-7890",
      email: "myemail@gmail.com",
      summary: "Quis deserunt ea tempor pariatur. Exercitation adipisicing laborum eiusmod labore magna magna dolor et Lorem. Exercitation fugiat proident elit excepteur Lorem commodo. Proident ipsum esse in eu voluptate excepteur esse aute consectetur incididunt pariatur anim. Duis et ea adipisicing quis. Excepteur et adipisicing cupidatat mollit do nostrud elit incididunt dolor cillum duis. Tempor voluptate duis consequat est laborum eiusmod proident aute veniam ut. Dolore irure aliqua enim culpa adipisicing.",
      school: [
        {
          schoolName: "Some University",
          schoolDegree: "Bachelors",
          schoolYearStarted: "2021",
          schoolYearFinished: "2025",
          schoolStudy: "Software Development",
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
          jobName: "Google",
          jobDescription: "Line One \n Line Two \n Line Three",
          jobFrom: "2021",
          jobTo: "2023",
          jobTitle: "Jr. Developer"
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
    this.handlePrint = this.handlePrint.bind(this);
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

  handlePrint() {
    this.setState(function(oldObj) {
      return {
        ...oldObj,
        printing: !this.state.printing
      }
    }, () => {
      window.print();
  })
}

  render() {
    //make sure page is back to normal after printing
    if (this.state.printing) {
      this.setState((oldObj) => ({
        ...oldObj,
        printing: !this.state.printing
      }))
    }
    return(
      <div>
        <div className="main-container">
          <Header />
          {!this.state.printing && <div className="form-container">
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
          </div>}
          <div className="resume-container">
            <Resume
              handleSchoolDelete={this.handleSchoolDelete}
              handleJobDelete={this.handleJobDelete}
              className={this.state.printing ? "resume printing" : "resume"}
              {...this.state}
            />
            <button className="print-button" onClick={this.handlePrint}>PRINT</button>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}


export default App;
