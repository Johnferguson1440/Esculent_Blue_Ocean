import React, { Component } from 'react';

import Login from "./Components/Login";
import IngredientSelection from "./Components/IngredientSelection";
import "./App.css"





// import './App.css';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //can be either selection/results/dayplan for render
      
      username: '',
      password: '',
      login: true,
     
      
    };
    this.loginChange=this.loginChange.bind(this);
    // this.api = `http://localhost:8000/api/example`;
  }

  changeUser(e){

    this.setState({username: e.target.value})

    
  }
  changePass(e){
    this.setState({password: e.target.value})
  }
  blankUser(){
    this.setState({username: ""});
    this.setState({password: ""});
  }
  loginChange(){
    this.setState({login: !this.state.login})
  }
com
  

  componentDidMount() {

  }
  render() {
   


    return (
      <div id={"main"}>
        

        <Login login={this.state.login} user={this.state.username} userChange={this.changeUser.bind(this)} pass={this.state.password}  userPass={this.changePass.bind(this)} loginChange={this.loginChange.bind(this)} />
        <IngredientSelection  user={this.state.username} pass={this.state.password} blank={this.blankUser.bind(this)} loginChange={this.loginChange.bind(this)} login={this.state.login} /> 
        

      </div>
    );
  }
}
