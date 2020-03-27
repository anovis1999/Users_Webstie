import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import '../App.css'
import axios from 'axios';
class SignUpForm extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            name: '',
            hasAgreed: false
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
        axios.post('http://127.0.0.1:5000/', this.state)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    render() {
        return (
        <div className="FormCenter">
            <h2>Sign Up</h2>
            <form onSubmit={this.handleSubmit} className="FormFields">
              <div className="FormField">
                <TextField id="outlined-basic" label="Full Name" variant="outlined" type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name" value={this.state.name} onChange={this.handleChange} />
              </div>
              <br></br>
              <div className="FormField">
                <TextField id="outlined-basic" label="Password" variant="outlined" type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>
              <br></br>
              <div className="FormField">
                <TextField id="outlined-basic" label="E-Mail Address" variant="outlined" type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>
              <br></br>
              <div className="FormField">
                <label className="FormField__CheckboxLabel">
                    <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange} /> I agree all statements in <a href="" className="FormField__TermsLink">terms of service</a>
                </label>
              </div>

              <br></br>
              <Link to="/" className="FormField__Link">I'm already member</Link>
              <br></br>
              <br></br>

              <div className="FormField">
                  <button className="FormField__Button">Sign Up</button> 
              </div>
            </form>
          </div>
        );
    }
}

export default SignUpForm;