import React, { Component } from 'react';




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
    //  valueChange(e) {
    //   console.log(e.target.value)
    // }
  

    render() {
      return (
          <div id={"login"}>
            <div className='title'><big><h1>Esculent</h1></big></div>
            <div className="header"><h2>Login</h2></div >
            <div className="content">
            <label htmlFor='username'>Username</label>
            <input type='text' name='username' placeholder='userame'/>
            <label htmlFor='password'>Password</label>
            <input  type='password' name='password' placeholder='password'/>
            </div>
            <div classname='btn'>
              <button type='button' className='btn'>
                Login
              </button>
              <button type='button' className='bttn'>
                Create Account
              </button>
             </div>
            </div>
      )
    }
    };