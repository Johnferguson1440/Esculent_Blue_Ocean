
import React, { Component} from 'react';
import {ProgressBar} from 'react-bootstrap';
// import ReactBootstrapStyle from 'react-bootstrap';
// import ProgressBar from '@bit/react-bootstrap.react-bootstrap.progress-bar';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Goal extends Component {
    constructor(props) {
      super(props);
      this.state = {
        progress:50
      };
      
    }


    componentDidMount() {
     
    }

    

    render() {

      

      return (
        <div id="progressBar-container">
          <div id ='progressBar'>
            
          <ProgressBar now = {this.props.consumed} variant="success" label={`${this.props.consumed}% Success`}/>

          </div>
      </div>
      )
    }
  }
