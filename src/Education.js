import React, { Component } from 'react';

class Education extends Component{
    render() {
        return (
            <div className="education">
                <label>School Name:
                    <input type="text" name="schoolName" onChange={this.props.handleChange} />
                </label>

                <label>Level of Education Obtained:
                    <select name="educationLevel" onChange={this.props.handleChange}>
                        <option value="">--Pick One--</option>
                        <option value="ged">GED</option>
                        <option value="high-school">High School</option>
                        <option value="certificate">Certificate</option>
                        <option value="associates">Associates Degree</option>
                        <option value="masters">Masters Degree</option>
                        <option value="doctorate">Doctorate</option>
                    </select>
                </label>
            </div>
        )
    }
}

export default Education