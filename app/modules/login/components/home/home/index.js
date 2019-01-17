// import Libraries
import React from "react";
import './stylesheets/login.scss';
import LoginForm from '../loginForm';

export default class LoginHome extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="login_home">
                  <LoginForm userCredentials={this.props.userCredentials}
                             setUserCredentials={this.props.setUserCredentials}
                             submitLogin={this.props.submitLogin}/>
            </div>
        );
    }
}
