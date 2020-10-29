import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Ingredientresults from "./Ingredientresults";
import PickIngredients from "./PickIngredients"
import "../App.css"






export default class IngredientSelection extends Component {
    constructor(props) {
      super(props);
      this.state = {
        //name from login component
        name: null,
        //date selected from calender 
        selectedDate: null,
        //decideds what is conditionally rendered between ingredient selection, ingredient results, or user selected recipes
        ingredientRender: null,
        //start date for date picker
        startDate: new Date(),
       
       
              
      };
      this.dateChange= this.dateChange.bind(this);
     
   
      // this.api = `http://localhost:8000/api/example`;
    }

    //method linked to event listener to update state.name from the username input box

    //method to handle date change
    dateChange(date){      
      console.log(date.toLocaleDateString());
      //when date is selected need to set state to current date
      this.setState({selectedDate: date.toLocaleDateString()});
      this.setState({startDate: date}, ()=>{console.log(this.state.selectedDate)});
      //make api call to db to see if user has info for that date yet
      //conditional to change state for conditional render if infoexist/info doesnt exist      

    }
    

    
    componentDidMount() {
      //*2event listner login coponent

      // fetch(this.api)
      //   .then(res => res.json())
      //   .then(seaCreatures => {
         
      //   });
    }
  
    render() {

      //conditional based off state value to render nothing, ingredient selector divs or ingredient results
      
      


      return (
        <div id={"ingredients"}>
        <div id={"plan"}>
        <h1>{this.state.name} DAILY NUTRITION PLAN</h1>
        
          <div className={"datepicker"}>
        
        <DatePicker dateFormat="MM/dd/yyyy" selected={this.state.startDate} 
        onChange={this.dateChange} 
        name="startDate"   />
        </div>        
        </div>  
        <PickIngredients/>
        <Ingredientresults/>
        
     
       
          
         
          
        </div>
      );
    }
  }