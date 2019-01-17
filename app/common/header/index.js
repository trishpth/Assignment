// import Libraries
import React from "react";
import "./stylesheets/header.scss";
import moment from 'moment';
import {store} from 'Store';

import { reducerConstants, sagaConstants } from "../../modules/login/constants";

export default class Header extends React.Component {
  constructor(props){
      super(props);
      this.logout = this.logout.bind(this);
      
     
    
      this.state = {
        showMenu: false,
      }
      this.showMenu = this.showMenu.bind(this);
      this.closeMenu = this.closeMenu.bind(this);
  }
  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu(event) {
    
    if (!this.dropdownMenu.contains(event.target)) {
      
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });  
      
    }
  }
  // componentWillMount() {
  //     document.addEventListener('mousedown', this.menuDisplayShow, false);
  // }
  // componentWillUnmount() {
  //     document.removeEventListener('mousedown', this.menuDisplayShow, false);
  // }
  render() {}

  logout(e) {
      e.preventDefault();
      const {dispatch} = store;
      dispatch({
        type: sagaConstants.LOGOUT
      })
  }
}
