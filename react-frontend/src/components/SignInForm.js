import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import '../App.css'

class SignInForm extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log('The form was submitted with the following data:');
        console.log(this.state);
    }

    render() {
        return (
        <div className="FormCenter">
            <h2>Sign In</h2>
            <form onSubmit={this.handleSubmit} className="FormFields" onSubmit={this.handleSubmit}>
            <div className="FormField">
                <TextField id="outlined-basic" label="E-Mail Address" variant="outlined" type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>
                <br></br>
              <div className="FormField">
                <TextField id="outlined-basic" label="Password" variant="outlined" type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>
                <br></br>
                <Link to="/sign-up" className="FormField__Link">Create an account</Link>
                <br></br>
                <br></br>

              <div className="FormField">
                  <button className="FormField__Button">Sign In</button> 
              </div>
            </form>
          </div>
        );
    }
}

export default SignInForm;