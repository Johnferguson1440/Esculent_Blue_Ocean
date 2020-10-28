import React, { Component } from 'react';

export default class login_register extends Component {
    constructor(props) {
      super(props);
      this.state = {
        firstname: '',
        lastname: '',
        password: ''
      };
    }
    
    render() {
        return(
        <div className='wrapper'>
            <h1>Create Account</h1>
                <div className='firstName'></div>
                    <label htmlFor='firstName'>First Name</label>
                    <input 
                    type="text" 
                    placeholder="FirstName"
                    name="firstName"
                    ></input>
                    <div className='lastName'></div>
                    <label htmlFor='lastName'>Last Name</label>
                    <input 
                    type="text" 
                    placeholder="lastName"
                    name="lastName"
                    ></input>
                    <div className='password'></div>
                    <label htmlFor='password'>Password</label>
                    <input 
                    type="text" 
                    placeholder="password"
                    name="password"
                    ></input>
            </div>
        )
        }
    }