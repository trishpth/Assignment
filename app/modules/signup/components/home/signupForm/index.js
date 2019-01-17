// import Libraries
import React from "react";
import {store} from 'Store';
import './stylesheets/form.scss';


export default class SignupForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error : {
                flag : false,
                message : "",
            },
            loaderState : false,
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        let x = false;
        if(JSON.stringify(this.state.error.message) !== JSON.stringify(store.getState().signUp.message)){
            x = true;
        }
        if(JSON.stringify(this.props) !== JSON.stringify(nextProps)){
            x = true;
        }
        if(JSON.stringify(this.state.loaderState) !== JSON.stringify(store.getState().signUp.loader)){
            x = true;
        }
        return x;
    }
    componentDidUpdate(){
        if(JSON.stringify(this.state.error.message) !== JSON.stringify(store.getState().signUp.message)){
            this.setState({
                ...this.state,
                error : {
                    flag : store.getState().signUp.success,
                    message : store.getState().signUp.message,
                }
            })
        }
        if(JSON.stringify(this.state.loaderState) !== JSON.stringify(store.getState().signUp.loader)){
            this.setState({
                ...this.state,
                loaderState : store.getState().signUp.loader,
            })
        }
    }

    render() {
     
      }
        return (
            <div className="form_home">
                  <div className="form_head">
                  
                  </div>
                
                
                  <div className="form_area">
                      <div className="form_row">
                        <div className="form_column">
                          First Name<span className="star">*</span>
                          <input className="width_15" name="firstName" type="text" value={this.props.userDetails.name.firstName} onChange={this.props.setUserCredentials}/>
                        </div>
                        <div className="form_column">
                          Middle
                          <input className="width_15" name="midName" type="text" value={this.props.userDetails.name.midName} onChange={this.props.setUserCredentials}/>
                        </div>
                        <div className="form_column">
                          Last Name<span className="star">*</span>
                          <input className="width_15" name="lastName" type="text" value={this.props.userDetails.name.lastName} onChange={this.props.setUserCredentials}/>
                        </div>
                        {(this.props.userDetails.name.firstName || this.props.userDetails.name.lastName) ? (this.props.userDetails.name.firstName.length > 1 && this.props.userDetails.name.lastName.length > 1) ? <i className="fa fa-check green_success"></i> : <i className="fa fa-close star"></i> : ''}
                      </div>
                      <div className="form_row">
                        <div className="form_column">
                          <div className="width_22">Email<span className="star">*</span></div>
                          <input name="email" type="text" className="width_35" value={this.props.userDetails.email.value} onChange={this.props.setUserCredentials}/>
                          {(this.props.userDetails.email.value.length > 5) ? (this.props.userDetails.email.flag === true) ? <i className="fa fa-check green_success"></i> : <i className="fa fa-close star"></i> : ''}
                        </div>
                        <span>*Your Email id shall be verified in the next step.</span>
                      </div>
                      
                      <div className="form_row">
                        <div className="form_column">
                          <div className="width_35">Kontrol.ID<span className="sup">TM</span> Password<span className="star">*</span></div>
                          <input type="password" name="password" value={this.props.userDetails.password.value} onChange={this.props.checkPassword}/>
                          {(this.props.userDetails.password.value.length > 0) ? (this.props.userDetails.password.flag === true) ? <i className="fa fa-check green_success"></i> : <i className="fa fa-close star"></i> : ''}
                        </div>
                        <span>*Your password needs to be 8 - 16 Characters.
                          Should have atleast 1 of the below<br/>
                          Alpbhabet<br/>
                          Capital Letter<br/>
                          Number<br/>
                          Symbol
                        </span>
                      </div>
                     
                <div className="submit_section">
                  {(this.state.loaderState === false) ? <button className="cursor" onClick={this.props.userSignUp}>Submit<i className="fa fa-play"></i></button> :
                  <button><div className="loader"></div></button> }
                </div>
                <div className="desc_text">
                  On Submitting your details you shall be taken to the Email & Mobile Number Verification Page. Please Make sure you do not refresh your browser.
                </div>
            </div>
        );
    }
}
