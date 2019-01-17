// import Libraries
import React from "react";
import {store} from 'Store';
import {connect} from 'react-redux';
var crypto = require('crypto');
import config from "../../../../../config/config.json";

import SignupHome from '../home/home';
import VerifyUserHome from '../verify_user';
import {reducerConstants, sagaConstants} from "../../constants";
export class SignupMain extends React.Component {
    constructor() {
        super();
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.setUserCredentials = this.setUserCredentials.bind(this);
        this.checkPassword = this.checkPassword.bind(this);
       
        this.userSignUp = this.userSignUp.bind(this);
       
        this.state = {
            dimensions: {
                width: window.innerWidth,
                height: window.innerHeight
            },
            userDetails : {
                name : {
                    firstName : "",
                    lastName : "",
                },
                email : {
                    value : "",
                    flag : false,
                },
               
                password : {
                    value : "",
                    flag : false,
                },
                repeatPassword : {
                    value : "",
                    flag : false,
                },
               
        };
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);

    }

    //render
    render() {
        return (
            <div className="home_page">
              <div className="signup_body">
                {(store.getState().signUp.otpData.length == 0) ?
                <SignupHome userDetails={this.state.userDetails}
                              setUserCredentials={this.setUserCredentials}
                              checkPassword={this.checkPassword}
                              userSignUp={this.userSignUp}/> 
              </div>
            </div>
        );
    }

    updateWindowDimensions() {
        this.setState({
            ...this.state,
            dimensions: {
                width: window.innerWidth,
                height: window.innerHeight
            }
        });
    }

    setUserCredentials(event) {
        let {value, name} = event.target;
        switch (name){
            case "firstName":
              this.setState({
                  ...this.state,
                  userDetails : {
                      ...this.state.userDetails,
                      name : {
                          ...this.state.userDetails.name,
                          firstName : value,
                      },
                  }
              })
            break;
            case "lastName":
                this.setState({
                    ...this.state,
                    userDetails : {
                        ...this.state.userDetails,
                        name : {
                            ...this.state.userDetails.name,
                            lastName : value,
                        },
                    }
                })
            
            break;
            case "email":
              let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
              if(re.test(value) === true) {
                  this.setState({
                      ...this.state,
                      userDetails : {
                          ...this.state.userDetails,
                          email : {
                              value : value,
                              flag : true,
                          },
                      }
                  })
              } else {
                  this.setState({
                      ...this.state,
                      userDetails : {
                          ...this.state.userDetails,
                          email : {
                              value : value,
                              flag : false,
                          },
                      }
                  })
              }
          
            break;
            default:
              break;
        }
    }

    checkPassword(event) {
        let {value, name} = event.target;
        if(name == "password") {
            let regex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
            if(value.length < 17) {
              if(regex.test(value) === true && /[A-Z]+/.test(value) && /[0-9]+/.test(value)) {
                  this.setState({
                      ...this.state,
                      userDetails : {
                          ...this.state.userDetails,
                          password : {
                              value : value,
                              flag : (value.length > 7) ? true : false,
                          },
                      },
                  })
              } else {
                this.setState({
                    ...this.state,
                    userDetails : {
                        ...this.state.userDetails,
                        password : {
                            value : value,
                            flag : false,
                        },
                    },
                })
              }
          }
        } else if(name == "repeatPassword") {
          if(value.length < 17) {
            this.setState({
                ...this.state,
                userDetails : {
                    ...this.state.userDetails,
                    repeatPassword : {
                        value : value,
                        flag : (value == this.state.userDetails.password.value) ? true : false,
                    },
                },
            })
          }
        }
    }
    userSignUp() {
            const {dispatch} = store;
            if(this.state.userDetails.name.firstName.length > 0 &&
                 this.state.userDetails.name.lastName.length > 0 &&
                  this.state.userDetails.email.flag === true &&
                  this.state.userDetails.password.flag === true &&
                  this.state.userDetails.repeatPassword.flag === true && ) {

              dispatch({type: reducerConstants.USER_SIGNUP});
              dispatch({
                  type: sagaConstants.USER_SIGNUP,
                  payload: {
                    name : {
                        firstName : this.state.userDetails.name.firstName,
                        lastName : this.state.userDetails.name.lastName,
                    },
                    email : this.state.userDetails.email.value,
                  }
              })
            } else {
                dispatch({
                    type: reducerConstants.USER_SIGNUP_ERROR,
                    error: {
                        data :{
                            message: "Please check all fields with *",
                            status : 440
                        }
                    }
                });
            }
    }


}

function mapStateToProps(state) {
    return {
        signUp : state.signUp,
    };
}

export default connect(mapStateToProps)(SignupMain);
