import React from "react";
import "./stylesheets/loginForm.scss";
import {store} from 'Store';

export default class LoginForm extends React.Component {
      constructor(props) {
          super(props);

          this.state = {
              error : {
                  flag : false,
                  message : "",
              }
          }
      }
      shouldComponentUpdate(nextProps, nextState) {
          let x = false;
          if(JSON.stringify(this.state.error.message) !== JSON.stringify(store.getState().login.message)){
              x = true;
          }
          if(JSON.stringify(this.props) !== JSON.stringify(nextProps)){
              x = true;
          }
          return x;
      }
      componentDidUpdate(){
          if(JSON.stringify(this.state.error.message) !== JSON.stringify(store.getState().login.message)){
              this.setState({
                  ...this.state,
                  error : {
                      flag : store.getState().login.success,
                      message : store.getState().login.message,
                  }
              })
          }
      }
      render() {
          return (<div className="login_form_home">
           
            { <div className="login_head">
                Log In
            </div> }
            { <div className="login_form_area">
                <div>
                  <label>Username</label>
                  <input name="userName" type="text" value={this.props.userCredentials.userName} onChange={this.props.setUserCredentials}/>
                </div>
                <div>
                  <label>Password</label>
                  <input name="password" type="password" value={this.props.userCredentials.password} onChange={this.props.setUserCredentials}/>
                  <span className="cursor">Forgot Password?</span>
                </div>
                <div className="errorMessage">{(this.state.error.flag === false) ? this.state.error.message : ''}</div>
                <div className="loginBtn">
                  <button onClick={this.props.submitLogin}>Log In</button>
                </div>
                <div className="loginFoot">
                  <label>Not Registerd? <span className="cursor">Create an Account</span></label>
                </div>
            </div> }
          </div>);
      }
}
