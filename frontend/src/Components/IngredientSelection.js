import React, { Component, useReducer } from 'react';
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
        pass: null,
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
      const login= document.getElementById('loginbtn');
      const create= document.getElementById('create');
      const self= this;
      
      //*2event listner login coponent
      login.addEventListener('click', function(event){
        let currentUser= self.props.user;
        let currentPass= self.props.pass;
          // '/existinguser/:user/:pass'
        fetch("/"+currentUser+'/'+currentPass)
        .then((res)=>{
          return res.json();})
          .then((data)=>{
            if(data=== "Successfully logged in"){
                alert(data);
                self.setState({name: self.props.user});
                self.setState({pass: self.props.pass}); 
                self.props.blank();
            }else{
              alert(data);
              self.props.blank();
            }
          })       
      })
      //event listener for create new user
      create.addEventListener('click', function (event){
        let currentUser= self.props.user;
        let currentPass= self.props.pass;

        //create a post request to store username and password
        const options={
          method:'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({currentUser,currentPass})
        };
        // '/newuser
        fetch('/', options)
        .then((res)=>{ return res.json()})
        .then((data)=>{ 

          if(data==="User already exist"){
            alert(data);
            self.props.blank();
          }else{
          self.setState({name: currentUser});
          self.setState({pass: currentPass});
            alert(data);
          
          self.props.blank();
          }}) 
        
      })



      
    }
  
    render() {

      //conditional based off state value to render nothing, ingredient selector divs or ingredient results
      let currentShow;
      if(this.state.ingredientRender==="pick"){
        currentShow= <PickIngredients/>
      }else if(this.state.ingredientRender==="result"){
        currentShow=<Ingredientresults/>
      }
      


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