import React, { Component, Fragment } from 'react';



export default class Goal extends Component {
    constructor(props) {
      super(props);
      this.state = {
        percent: 0,         //number:0-1, inclusive.Fill %
        width: 100,         // the width of our meter
        height: 10,         //the height of our meter
        rounded: true,      // if true use rounded colors
        color: "0078bc",    // the fill color
        animate: false,     //if true, animate
        label: null,        // a label for accessibiity
        isVisible: false 
      };
      this.api = `http://localhost:8000/api/example`;
    }
    //Creates our rounded corners 
    let r = rounded ? Math.ceil(height / 2) : 0;
    //Calculates the width of our colored rectangle (giving the meter effect):
    let w = percent ? Math.max(height, width * Math.min(percent, 1)): 0;
    //Animates the meter 
    let style = animate ? { "transition": "width 500ms, fill 250ms" } : null;

    
    
    componentDidMount() {
      fetch(this.api)
        .then(res => res.json())
        .then(seaCreatures => {
         
        });
    }
  
    render() {

      //conditoinal to make the goal bar to appear after the input is 

      return (
        <div id="goal">
        
       
          <svg width={this.width} height={this.height} aria-label={this.label}>
            <rect width={this.width} height={this.height} fill="#ccc" rx={r} ry={r}/>
            <rect width={w} height={this.height} fill={this.color} rx={r} ry={r}   style={style}/>
          </svg>

        </div>
      );
    }
  }
          
         
          