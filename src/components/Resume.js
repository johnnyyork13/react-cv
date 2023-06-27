import { Component } from "react";

class Resume extends Component {
    changeTextToList(text) {
        const textArray = text.split(/\r?\n|\r|\n/g);
        const textMapped = textArray.map((text) => 
        <li className="sub-list-item">
            {text}
        </li>
        )


        return textMapped;
    }

    render() {
        const schoolMap = this.props.school.map((school) => 
            <li key={school.key} className="list-item">
                <div className="list-item-title">
                    <div className="list-item-title-left">
                        <p><strong>{school.schoolYearStarted} - {school.schoolYearFinished}</strong></p>
                    </div>
                    <div className="list-item-title-right">
                        <p><strong>{school.schoolName} - {school.schoolDegree}</strong></p>
                    </div>
                </div>
                <p className="list-item-study">{school.schoolStudy}</p>
                <span className="list-item-accomplishments">
                    <ul>
                        {this.changeTextToList(school.schoolAccomplishments)}
                    </ul>
                </span>

                <button type="button" className="delete-button" onClick={() => this.props.handleSchoolDelete(school.key)}>X</button>
            </li>
        )

        const jobMap = this.props.job.map((job) => 
            <li key={job.key} className="list-item">
            <div className="list-item-title">
                <div className="list-item-title-left">
                    <p><strong>{job.jobFrom} - {job.jobTo}</strong></p>
                </div>
                <div className="list-item-title-right">
                    <p><strong>{job.jobName} - {job.jobTitle}</strong></p>
                </div>
            </div>
            <span className="list-item-accomplishments">
                <ul>
                    {this.changeTextToList(job.jobDescription)}
                </ul>
            </span>

            <button type="button" className="delete-button" onClick={() => this.props.handleJobDelete(job.key)}>X</button>
            </li>
        )

        return(
            <div className={this.props.className} id="section-to-print">
                <h1 className="bio-item-name">{this.props.firstName} {this.props.lastName}</h1>
                <h2 className="bio-item-title">{this.props.title}</h2>
                <p className="bio-item-p"><strong>Email:</strong> {this.props.email}</p>
                <p className="bio-item-p"><strong>Phone:</strong> {this.props.phone}</p>
                <div className="bio-item-p">{this.props.summary}</div>
                <h2 className="list-title">Education:</h2>
                <ul>
                    {schoolMap}
                </ul>

                <h2 className="list-title">Experience:</h2>
                <ul>
                    {jobMap}
                </ul>
            </div>
        )
    }
}

export default Resume;