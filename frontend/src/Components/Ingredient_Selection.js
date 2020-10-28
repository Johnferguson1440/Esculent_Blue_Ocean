import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Ingredient_results from "./Ingredient_results";
import Checkbox from "./checkbox.js"
import {intoleranceItems, nutrientItems} from "./option"





export default class Ingredient_Selection extends Component {
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
        //array to show 
        checkedItemsb: new Map(),
        checkedItemsl: new Map(),
        checkedItemsd: new Map(),
       
              
      };
      this.dateChange= this.dateChange.bind(this);
     
      this.toggleCheckboxChangeb= this.toggleCheckboxChangeb.bind(this);
      this.toggleCheckboxChangel= this.toggleCheckboxChangel.bind(this);
      this.toggleCheckboxChanged= this.toggleCheckboxChanged.bind(this);
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
    

    //adds the clicked item to the state checked boxes and adds true or false for checked or not breakfast
    toggleCheckboxChangeb(e){
      
        const item = e.target.name;
        const isChecked = e.target.checked;
        this.setState(prevState => ({ checkedItemsb: prevState.checkedItemsb.set(item, isChecked) }));
      console.log(this.state.checkedItemsb);
    }
    ////adds the clicked item to the state checked boxes and adds true or false for checked or not lunch
    toggleCheckboxChangel(e){
      
      const item = e.target.name;
      const isChecked = e.target.checked;
      this.setState(prevState => ({ checkedItemsl: prevState.checkedItemsl.set(item, isChecked) }));
    console.log(this.state.checkedItemsl);
  }
  ////adds the clicked item to the state checked boxes and adds true or false for checked or not dinner
  toggleCheckboxChanged(e){
      
    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState(prevState => ({ checkedItemsd: prevState.checkedItemsd.set(item, isChecked) }));
  console.log(this.state.checkedItemsd);
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

        <div id={"breakfast"}>
        <h1>BREAKFAST</h1>
        <div id={"selections"}>
        <div id={"intolerance"}>Intolerance
        {intoleranceItems.map(item=>(
          <label key={item.key}>
            {item.name}
            <Checkbox name={item.name} checked={this.state.checkedItemsb.get(item.name)} onChange={this.toggleCheckboxChangeb}/>
          </label>
        ))}
        </div>
        <div id={"nutrients"}>Nutrients
        {nutrientItems.map(item=>(
          <label key={item.key}>
            {item.name}
            <Checkbox name={item.name} checked={this.state.checkedItemsb.get(item.name)} onChange={this.toggleCheckboxChangeb}/>
          </label>
        ))}
        </div>

        </div>
        </div>
        <div id={"lunch"}>
        <h1>LUNCH</h1>
        <div id={"selections"}>
        <div id={"intolerance"}>Intolerance
        {intoleranceItems.map(item=>(
          <label key={item.key}>
            {item.name}
            <Checkbox name={item.name} checked={this.state.checkedItemsl.get(item.name)} onChange={this.toggleCheckboxChangel}/>
          </label>
        ))}
        </div>
        <div id={"nutrients"}>Nutrients
        {nutrientItems.map(item=>(
          <label key={item.key}>
            {item.name}
            <Checkbox name={item.name} checked={this.state.checkedItemsl.get(item.name)} onChange={this.toggleCheckboxChangel}/>
          </label>
        ))}
        </div>

        </div>
        </div>
        <div id={"dinner"}>
        <h1>DINNER</h1>
        <div id={"selections"}>
        <div id={"intolerance"}>Intolerance
        {intoleranceItems.map(item=>(
          <label key={item.key}>
            {item.name}
            <Checkbox name={item.name} checked={this.state.checkedItemsd.get(item.name)} onChange={this.toggleCheckboxChanged}/>
          </label>
        ))}
        </div>
        <div id={"nutrients"}>Nutrients   
        {nutrientItems.map(item=>(
          <label key={item.key}>
            {item.name}
            <Checkbox name={item.name} checked={this.state.checkedItemsd.get(item.name)} onChange={this.toggleCheckboxChanged}/>
          </label>
        ))}
        </div>

        </div> 
        </div>
        {/* your code here */}
          
         
          
        </div>
      );
    }
  }