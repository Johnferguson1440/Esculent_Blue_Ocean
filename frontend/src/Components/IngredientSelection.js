import React, { Component, Fragment} from 'react';

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
        favorite:"",
       
              
      };
      
     
   
      // this.api = `http://localhost:8000/api/example`;
    }

    //method that will make a get request to get all favs from the user logged in.
    //var hrefstore as string 
     //map through favorite array for each index item
     //grab name and link returnvar newfav <a href=`${item.link}`>${item.name}</a>
     //href=href+newfav
     //after map function this.setstate({favorite:href})
       
  
    

    
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
                //call method above to grab favs and input data
               
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
        <Fragment>
        <div id={"ingredients"}>
        <div id={"plan"}>
        <h1>{this.state.name} DAILY NUTRITION PLAN</h1>        
                 
        </div>  
        <PickIngredients  login={this.props.login} name={this.state.name} />
        
     
       
          
         
          
        </div>
        <div id={'favorites'} dangerouslySetInnerHTML={{__html:this.state.favorite}}></div>
        </Fragment>
      );
    }
  }