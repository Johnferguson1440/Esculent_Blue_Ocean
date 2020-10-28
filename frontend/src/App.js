import React, { Component } from 'react';
import "./Components/app.css";
import Login from "./Components/Login";
import Ingredient_Selection from "./Components/Ingredient_Selection";
import Goal_Meter from "./Components/Goal_Meter";




// import './App.css';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //can be either selection/results/dayplan for render
      ingredient: null,
      
    };
    // this.api = `http://localhost:8000/api/example`;
  }

  componentDidMount() {
    // fetch(this.api)
    //   .then(res => res.json())
    //   .then(seaCreatures => {
       
    //   });
  }


  render() {
   


    return (
      <div id={"main"}>
        
        {/* <Login/>
        <Ingredient_Selection/> */}
        <Goal_Meter />
      </div>
    );
  }
}
