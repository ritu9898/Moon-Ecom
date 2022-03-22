import React, { useRef } from 'react';
import '../styles/sign_in.css';
import axios from 'axios';
import { AuthContext } from '../context/auth-context';

export default class SignIn extends React.Component {

  constructor() {
    super();
  }
  static contextType = AuthContext;

  clickHandler() {
    const u = JSON.stringify({
      "email": "ritu@gmail.com", "password": "ritu123"
    });

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'JWT fefege...'
    };
    
    axios.post('/api/auth/login', u, headers)
    
    .then(res => {
      console.log('res: '+ JSON.parse(JSON.stringify(res.data.foundUser)));
      return res.data;
    }).catch(err => {
      console.log('Error from catch' + err);
    }); 
  }

  render(){
    this.context.current_user.email = "ritu@gmail.com";
    this.context.current_user.password = "ritu123";
    this.context.isSignedIn = true;

    var email = React.createRef();
    var pwd = React.createRef();

    return(
        <div className="sign-in">
          <section className="sign-up-img">
            Welcome back!
          </section>
          <section className="sign-up-form">
            <div>
              <div className="form-input">
                <input type="text" name="email" placeholder="" id="email" ref={email} />
                <label className="">
                  Enter Email
                </label>
              </div>
              <div className="form-input">
                <input type="password" name="password" placeholder="" id="password" ref={pwd} />
                <label className="">
                  Password
                </label>
              </div>
              <span className="forgot-pwd">Forgot?</span>

              <div className="form-button">
                <button id="login" onClick={this.clickHandler}>Login</button>
              </div>
              <div className="form-input">
                <p className="footer">New to Moon? <a href="./sign_up.html"> Create an account</a></p>
              </div>
            </div>
          </section>
        </div>
    )
  }
}
