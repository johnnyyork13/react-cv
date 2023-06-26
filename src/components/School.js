import { Component } from 'react';

class School extends Component {
    render() {
        return(
            <form className="school" name="school" onSubmit={this.props.handleSubmit}>
                <h2 className="top-line-label">Education</h2>
                <label>School Name:
                    <input name="schoolName" onChange={this.props.handleChange} />
                </label>

                <label>Degree:
                    <input name="schoolDegree" onChange={this.props.handleChange} />
                </label>

                <label>Year Started:
                    <input name="schoolYearStarted" onChange={this.props.handleChange} />
                </label>

                <label>Year Finished:
                    <input name="schoolYearFinished" onChange={this.props.handleChange} />
                </label>

                <label>Field of Study:
                    <input name="schoolStudy" onChange={this.props.handleChange} />
                </label>

                <label>Accomplishments:
                    <textarea 
                        className="school-accomplishments"
                        name="schoolAccomplishments"
                        onChange={this.props.handleChange}
                        placeholder="Use enter key to insert bullet point."
                        >
                    </textarea>
                </label>

                <button className="add-button" type="submit">Add School</button>
            </form>
        )
    }
}

export default School;