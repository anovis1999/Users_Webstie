import React, { Component } from 'react'
import axios from 'axios';
import TreeViewr from '../components/TreeViewr';



export default class BuildTree extends Component {
  constructor(props){
    super(props);
      this.state={
        mail: []
      }
  };
  

componentDidMount = async ()=> {
await axios.get(`http://127.0.0.1:5000/mailtree`)
          .then(res => {
            let data = res.data
            this.setState({mail: data})
          })
      .catch(function (error) {
        console.log(error);
      });
}


    render() {
        return (
            <div>
              {this.componentDidMount}
                  <TreeViewr tree = {this.state.mail}></TreeViewr>
            </div>
        )
    }
}
