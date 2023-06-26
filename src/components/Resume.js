import { Component } from "react";

class Resume extends Component {
    render() {
        const schoolMap = this.props.school.map((school) => 
            <li key={school.key}>
                <h3>{school.schoolName}</h3>
                <h4>{school.schoolDegree}</h4>
                <h4>{school.schoolYear}</h4>

                <button type="button" className="delete-button" onClick={() => this.props.handleSchoolDelete(school.key)}>X</button>
            </li>
        )

        const jobMap = this.props.job.map((job) => 
            <li key={job.key}>
                <h3>{job.jobName}</h3>
                <h3>{job.jobDescription}</h3>
            
                <button type="button" className="delete-button" onClick={() => this.props.handleJobDelete(job.key)}>X</button>
            </li>
        )

        return(
            <div className="resume">
                <h1>{this.props.firstName} {this.props.lastName}</h1>
                <h2>{this.props.title}</h2>
                <h3>Email: {this.props.email}</h3>
                <h3>Phone: {this.props.phone}</h3>

                <h2>Education:</h2>
                <ul>
                    {schoolMap}
                </ul>

                <h2>Experience:</h2>
                <ul>
                    {jobMap}
                </ul>
            </div>
        )
    }
}

export default Resume;