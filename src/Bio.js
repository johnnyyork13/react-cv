import React, { Component } from 'react';

class Bio extends Component {
    render() {
        //dont forget to make email an email type again
        return (
            <form className="bio" onSubmit={this.props.handleSubmit}>
                <label htmlFor="firstName">First Name:
                <input name="firstName" id="firstName" type="text" onChange={this.props.handleChange} /> 
                </label>
                <label htmlFor="lastName">Last Name:
                <input name="lastName" id="lastName" type="text" onChange={this.props.handleChange} />
                </label>
                <label htmlFor="email">Email:
                <input name="email" id="email" type="text" onChange={this.props.handleChange} />
                </label>
                <label htmlFor="phone">Phone:
                <input name="phone" id="phone" type="tel" onChange={this.props.handleChange} />
                </label>

                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Bio;