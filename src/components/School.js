import { Component } from 'react';

class School extends Component {
    render() {
        return(
            <form className="school" name="school" onSubmit={this.props.handleSubmit}>
                <label>School Name:
                    <input name="schoolName" onChange={this.props.handleChange} />
                </label>

                <label>Degree:
                    <input name="schoolDegree" onChange={this.props.handleChange} />
                </label>

                <label>Year Graduated:
                    <input name="schoolYear" onChange={this.props.handleChange} />
                </label>

                <button type="submit">Add School</button>
            </form>
        )
    }
}

export default School;