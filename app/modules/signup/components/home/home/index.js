// import Libraries
import React from "react";
import './stylesheets/signup.scss';
import TncSignup from '../tncSignup';
import SignupForm from '../signupForm';

export default class SignupHome extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="signup_home">
                  <TncSignup userDetails={this.props.userDetails}
                              setUserCredentials={this.props.setUserCredentials}/>
                  <SignupForm userDetails={this.props.userDetails}
                              setUserCredentials={this.props.setUserCredentials}
                              checkPassword={this.props.checkPassword}
                              
                              userSignUp={this.props.userSignUp}/>
            </div>
        );
    }
}
