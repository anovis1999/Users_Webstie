import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import '../App.css';
import axios from 'axios';

class AddMailGroups extends Component {
  constructor() {
      super();

      this.state = {
        groupmail: '',
        email: ''


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
      axios.post('http://127.0.0.1:5000/mail', this.state)
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

          <h2>ADD TO MAIL GROUP</h2>

          <form onSubmit={this.handleSubmit} className="FormFields">
              <div className="n1">
              <TextField className="group" id="outlined-basic" label="group E-Mail Address" variant="outlined" type="email" id="email" className="FormField__Input" placeholder="Enter Group email" name="email" ref={input => this.groupmail = input} onChange={this.handleChange} />
              </div>
            <br></br> 
            <br></br> 
            <div className="n2">
              <TextField className="single" id="outlined-basic" label="E-Mail Address" variant="outlined" type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" ref={input => this.email = input} onChange={this.handleChange} />
              </div>
            <br></br>

            {/* <input></input> */}
            <div className="FormField">
                <button className="FormField__Button">submit</button> 
            </div>

          </form>
        </div>
      );
  }
}


export default AddMailGroups;