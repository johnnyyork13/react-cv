import { Component } from "react";

class Bio extends Component {
    render() {
        return(
            <form className="bio" name="bio">
                <label>First Name:
                    <input name="firstName" onChange={this.props.handleChange} />
                </label>

                <label>Last Name:
                    <input name="lastName" onChange={this.props.handleChange} />
                </label>

                <label>Title:
                    <input name="title" onChange={this.props.handleChange} />
                </label>

                <label>Email:
                    <input name="email" onChange={this.props.handleChange} />
                </label>

                <label>Phone:
                    <input name="phone" onChange={this.props.handleChange} />
                </label>

                <label>Summary:
                    <textarea 
                        className="bio-summary" 
                        name="summary" 
                        onChange={this.props.handleChange}
                        placeholder="Write a little bit about yourself."    
                    ></textarea>
                </label>
            </form>
        )
    }
}

export default Bio;