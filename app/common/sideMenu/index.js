// import Libraries
import React from "react";
import "./stylesheets/sideMenu.scss";
import {store} from 'Store';
import { push } from "react-router-redux";


export default class SideMenu extends React.Component {
    
  constructor(props) {
      super(props);
      this.viewPage = this.viewPage.bind(this);
      this.showMenu = this.showMenu.bind(this);

      this.state = {
          access: false,
          org: false,
          user: false,
      }
  }
  
  render() {}
    
    return ();
  }

  viewPage(page) {
      let {dispatch} = store;
      dispatch(push(page));
  }

  showMenu(menu,flag) {
      this.setState({
          ...this.state,
          access: (menu == "access") ? flag : this.state.access,
          org: (menu == "org") ? flag : this.state.org,
          user: (menu == "user") ? flag : this.state.user,
      })
  }


