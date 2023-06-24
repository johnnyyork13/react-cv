import React, { Component } from 'react';

class AddSchool extends Component {
    render() {
        return (
            <div className="education-finished">
                <label>School Name:
                    <p>{this.props.schoolName}</p>
                </label>
                <label>Education Level:
                    <p>{this.props.educationLevel}</p>
                </label>
            </div>
        )
    }
}

class Finished extends Component{
    render() {
        const educationMap = this.props.schools.map((obj) => 
            <AddSchool 
                schoolName={obj.schoolName}
                educationLevel={obj.educationLevel}
            />)
        return (
            <div className="finished">
                <div class="bio-finished">
                    <h2>Biography</h2>
                    <label>Name:
                        <p>{this.props.firstName} {this.props.lastName}</p>
                    </label>
                    <label>Email:
                        <p>{this.props.email}</p>
                    </label>
                    
                    <label>Phone:
                        <p>{this.props.phone}</p>
                    </label>
                </div>
                <div className="education-finished">
                    <h2>Education</h2>
                    {educationMap}
                </div>
            </div>
        )
    } 
}

export default Finished;