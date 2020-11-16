
import React, { Component} from 'react';
import {ProgressBar} from 'react-bootstrap';
// import ReactBootstrapStyle from 'react-bootstrap';
// import ProgressBar from '@bit/react-bootstrap.react-bootstrap.progress-bar';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Goal extends Component {
    constructor(props) {
      super(props);
      this.state = {
        progress:0,
      };
      this.api = `http://localhost:3001/api/example`;
    }     

      
    
    componentDidMount() {
    }

    

    render() {

      

      return (
        <div id="progressBar-container">
          <div id ='progressBar'>
            
            <ProgressBar now = {this.props.consumed} variant="success" label={`${this.props.consumed}% Completed`}/>
                <div id = 'bText' >Breakfast: {this.props.btext}</div>
                <div id = 'lText'>Lunch: {this.props.ltext}</div>
                <div id = 'dText'>Dinner: {this.props.dtext}</div>
            </div>
      </div>
      )
    }
  }
