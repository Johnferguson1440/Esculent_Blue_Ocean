import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';



export default class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {
        username: '',
        password: ''

      };
      // this.api = `http://localhost:8000/api/example`;
    }
    // componentDidMount() {
    //   fetch(this.api)
    //     .then(res => res.json())
    //     .then(seaCreatures => {
         
    //     });
    // }
     valueChange(e) {
      console.log(e.target.value)
    }
  

    render() {
      return (
          <div id={"login"}>
            <div className="header">Login</div >
            <div className="content">
            <label for='username'>Username</label>
            <input type='text' name='username' placeholder='userame'/>
            <label for='password'>Password</label>
            <input  type='password' name='password' placeholder='password'/>
            </div>
            <div classname='btn'>
              <button type='button' className='btn'>
                login
              </button>
            </div>
            </div>
      )
    }
    };