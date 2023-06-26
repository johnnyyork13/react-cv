import { Component } from "react";

class Job extends Component {
    render() {
        return(
            <form className="job" name="job" onSubmit={this.props.handleSubmit}>
                <label>Job Name:
                    <input name="jobName" onChange={this.props.handleChange} />
                </label>
                <label>Job Description:
                    <textarea name="jobDescription" onChange={this.props.handleChange}></textarea>                </label>
                <label>From:
                    <input name="jobFrom" onChange={this.props.handleChange} />
                </label>
                <label>To:
                    <input name="jobTo" onChange={this.props.handleChange} />
                </label>

                <button type="submit">Add Job</button>
            </form>
        )

    }
}

export default Job;