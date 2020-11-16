import React, { Component, Fragment } from 'react';




export default class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {
       
      };
     
    }


    
      

    // componentDidMount() {
    
    // }
  

    render() {
      //conditional render once login success make login only show a button to sign out
      var loginRender;
      if(this.props.login=== true){
        loginRender= <Fragment>
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

      }else{
        loginRender=<Fragment>
        <div id={"title"}>
        ESCULENT
        </div>
        <div id={"login"}>
            <div id={"logincont"}>
           
              <button type='button' name="logout" id="logout" className='bttn' onClick={()=>window.location.reload(false)} >
                Log Out!
              </button>
             
             </div>
            </div>
            </Fragment>

      }




      return (
        <Fragment>
        {loginRender}
            </Fragment>
      )
    }
    };