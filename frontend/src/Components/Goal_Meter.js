
import React, { Component, Fragment } from 'react';
import {ProgressBar} from 'react-bootstrap';



export default class Goal extends Component {
    constructor(props) {
      super(props);
      this.state = {
        
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
            
          <ProgressBar now = {50} />

          </div>
      </div>
      )
    }
  }

