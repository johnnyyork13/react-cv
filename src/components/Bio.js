import React, { Component } from 'react';

class Bio extends Component {
    render() {
        return (
            <form>
                <label>First Name:
                    <input name="firstName" onChange={this.props.handleChange} value={this.props.firstName} />
                </label>
                <label>Last Name:
                    <input name="lastName" onChange={this.props.handleChange} value={this.props.lastName} />
                </label>
                <label>Email:
                    <input name="email" onChange={this.props.handleChange} value={this.props.email} />
                </label>
                <label>Phone:
                    <input name="phone" onChange={this.props.handleChange} value={this.props.phone} />
                </label>
            </form>
        )
    }
}

export default Bio;