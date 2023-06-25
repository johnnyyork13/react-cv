import React, { Component } from 'react';

class Bio extends Component {
    render() {

        return (
            <form name="bio">
                <label>First Name:
                    <input name="firstName" onChange={this.props.handleChange} />
                </label>
                <label>Last Name:
                    <input name="lastName" onChange={this.props.handleChange} />
                </label>
                <label>Email:
                    <input name="email" onChange={this.props.handleChange} />
                </label>
                <label>Phone:
                    <input name="phone" onChange={this.props.handleChange} />
                </label>
            </form>
        )
    }
}

export default Bio;