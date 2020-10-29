
import React, { Component, Fragment } from 'react';
import {ProgressBar, Button} from 'react-bootstrap';
// import ReactBootstrapStyle from 'react-bootstrap';
// import ProgressBar from '@bit/react-bootstrap.react-bootstrap.progress-bar';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Goal extends Component {
    constructor(props) {
      super(props);
      this.state = {
        progress:50
      };
      this.api = `http://localhost:8000/api/example`;
    }


    componentDidMount() {
      fetch(this.api)
        .then(res => res.json())
        .then(seaCreatures => {
         
        });
    }

    

    render() {

      

      return (
        <div id="progressBar-container">
          <div id ='progressBar'>
            
          <ProgressBar now = {this.state.progress} variant="success" label={`${this.state.progress}% Success`}/>

          </div>
      </div>
      )
    }
  }
