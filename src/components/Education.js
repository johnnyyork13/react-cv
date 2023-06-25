import React, { Component } from 'react';

class Education extends Component {
    render() {
        return (
            <form className="education" name="education">
                <label>School Name:
                    <input name="schoolName" onChange={this.props.handleChange} />
                </label>
                <label>Education Level:
                    <input name="educationLevel" onChange={this.props.handleChange} />
                </label>
            </form>
        )
    }
}

export default Education;