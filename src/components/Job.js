import { Component } from "react";

class Job extends Component {
    render() {
        return(
            <form className="job" name="job" onSubmit={this.props.handleSubmit}>
                <h2 className="top-line-label">Work History</h2>
                <label>Job Name:
                    <input name="jobName" onChange={this.props.handleChange} />
                </label>

                <label>Job Title:
                    <input name="jobTitle" onChange={this.props.handleChange} />
                </label>

                <label>Job Description:
                    <textarea 
                        className="job-description"  
                        name="jobDescription" 
                        onChange={this.props.handleChange}
                        placeholder="Use enter key to insert bullet point."></textarea>                
                </label>
                
                <label>From:
                    <input name="jobFrom" onChange={this.props.handleChange} />
                </label>
                <label>To:
                    <input name="jobTo" onChange={this.props.handleChange} />
                </label>

                <button className="add-button" type="submit">Add Job</button>
            </form>
        )

    }
}

export default Job;