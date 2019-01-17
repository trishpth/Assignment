// import Libraries
import React from "react";
import {store} from 'Store';
import {connect} from 'react-redux';
var crypto = require('crypto');
import config from "../../../../../config/config.json";

import LoginHome from '../home/home';

import {reducerConstants, sagaConstants} from "../../constants";

export class LoginMain extends React.Component {
    constructor() {
        super();
        document.title = "KONTROL LOGIN";

        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.setUserCredentials = this.setUserCredentials.bind(this);
        this.submitLogin = this.submitLogin.bind(this);

        this.state = {
            dimensions: {
                width: window.innerWidth,
                height: window.innerHeight
            },
            userCredentials: {
                userName : "",
                password : "",
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
              <div className="login_body">
                  <LoginHome userCredentials={this.state.userCredentials}
                             setUserCredentials={this.setUserCredentials}
                             submitLogin={this.submitLogin}/>
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
        switch (name) {
            case "userName":
              if(/^[0-9a-zA-Z]*$/.test(value) === true && value.length < 11) {
                this.setState({
                    ...this.state,
                    userCredentials: {
                        ...this.state.userCredentials,
                        userName : value,
                    },
                })
              }
            break;
            case "password":
              this.setState({
                  ...this.state,
                  userCredentials: {
                      ...this.state.userCredentials,
                      password : value,
                  },
              })
            break;
            default:
            break;
        }
    }

    submitLogin() {
          const {dispatch} = store;



          if(/^[0-9a-zA-Z]*$/.test(this.state.userCredentials.userName) === true && this.state.userCredentials.userName.length < 11 && this.state.userCredentials.password.length > 7) {
            const key = crypto.pbkdf2Sync(this.state.userCredentials.password, config.salt, 10, 64, 'sha512');

            dispatch({type: reducerConstants.USER_LOGIN});
            dispatch({
                type: sagaConstants.USER_LOGIN,
                payload: {
                    userName : this.state.userCredentials.userName,
                    password : key.toString('hex'),
                    
                }
            })
          } else {
            dispatch({
                type: reducerConstants.USER_LOGIN_ERROR,
                error: {
                    data :{
                        message: "Please Fill all the fields",
                        status : 440
                    }
                }
            });
          }
    }
}

function mapStateToProps(state) {
    return {
        login : state.login,
        page: Number(state.routing.locationBeforeTransitions.query.page) || 1,
    };
}

export default connect(mapStateToProps)(LoginMain);
