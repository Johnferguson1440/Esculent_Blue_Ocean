import React, { Component, Fragment } from 'react';




export default class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {
       
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
        <Fragment>
        <div id={"title"}>
        ESCULENT
        </div>
        <div id={"login"}>
            <div id={"logincont"}>
            <h1>LOGIN</h1>

            <div className="content">
            <label htmlFor='username'>Username:</label>
            <input type='text' name='username' placeholder='username'  value={this.props.user} onChange={this.props.userChange}/>
            <label htmlFor='password'>Password  :</label>
            <input  type='password' name='password' placeholder='password' value={this.props.pass} onChange={this.props.userPass} />
            </div>
            <div className='btn'>
              <button type='button' name="login" id="loginbtn" className='bttn'>
                Login
              </button>
              <button type='button' name="create" id="create" className='bttn'>
                Create Account
              </button>
              </div>
             </div>
            </div>
            </Fragment>
      )
    }
    };