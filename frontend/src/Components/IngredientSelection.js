import React, { Component} from 'react';

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
       
              
      };
      
     
   
      // this.api = `http://localhost:8000/api/example`;
    }

    //method linked to event listener to update state.name from the username input box

    //method to handle date change
  
    

    
    componentDidMount() {
      const login= document.getElementById('loginbtn');
      const create= document.getElementById('create');
      const self= this;
      
      //*2event listner login coponent
      login.addEventListener('click', function(event){
        let currentUser= self.props.user;
        let currentPass= self.props.pass;
          // '/existinguser/:user/:pass'
        fetch("/api/login/"+currentUser+'/'+currentPass)
        .then((res)=>{
          return res.json();})
          .then((data)=>{
            if(data=== "Successfully logged in"){
                alert(data);
                self.setState({name: self.props.user});
                self.setState({pass: self.props.pass}); 
                self.props.loginChange();
               
                self.props.blank();
            }else{
              alert(data);
              self.props.blank();
            }
          })       
      })
      //event listener for create new user
      create.addEventListener('click', function (event){
        let name= self.props.user;
        let password= self.props.pass;

        //create a post request to store username and password
        const options={
          method:'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({name,password})
        };
        // '/newuser
        fetch('/signUp', options)
        .then((res)=>{ return res.json()})
        .then((data)=>{ 

          if(data==="User already exist"){
            alert(data);
            self.props.blank();
          }else{
          // self.setState({name: name});
          // self.setState({pass: password});
            alert(data);
          
          self.props.blank();
          }}) 
        
      })



      
    }
  
    render() {

      
      return (
        <div id={"ingredients"}>
        <div id={"plan"}>
        <h1>{this.state.name} DAILY NUTRITION PLAN</h1>        
                 
        </div>  
        <PickIngredients  login={this.props.login} name={this.state.name} />
        
     
       
          
         
          
        </div>
      );
    }
  }