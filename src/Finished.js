import React, { Component } from 'react';

class Finished extends Component{
    render() {
        return (
            <div className="finished">
                <h1>Biography</h1>
                <label>Name: 
                    <p>{this.props.pushed && this.props.firstName} {this.props.pushed && this.props.lastName}</p>
                </label>

                <label>Email: 
                    <p>{this.props.pushed && this.props.email}</p>
                </label>
                
                <label>Phone: 
                    <p>{this.props.pushed && this.props.phone}</p>
                </label>
            </div>
        )
    } 
}

export default Finished;