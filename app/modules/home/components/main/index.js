// import Libraries
import React from "react";
import {store} from 'Store';
import {connect} from 'react-redux';

import './stylesheets/main.scss';
import Home from '../home/home';


import {reducerConstants, sagaConstants} from "../../constants";

export class HomeMain extends React.Component {
    constructor() {
        super();
        document.title = "";

        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.fetchUsersData = this.fetchUsersData.bind(this);
        this.collapseChat = this.collapseChat.bind(this);
        this.collapseSideMenu = this.collapseSideMenu.bind(this);

        this.state = {
            dimensions: {
                width: window.innerWidth,
                height: window.innerHeight
            },
            collapseChatMenu : false,
            collapseSide : false,
        };
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        this.fetchUsersData();
    }

    //render
    render() {
      let menuWidth = {
          width : (this.state.collapseChatMenu === true && this.state.collapseSide === true) ? "78%" : (this.state.collapseChatMenu === true) ? "68%" : (this.state.collapseSide === true) ? "63%" : "54%",
            
        }
        console.log("hello")
        return (
           
            <div className="home">
            <h3>Welcome HOME</h3>
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

    collapseChat() {
        this.setState({
            ...this.state,
            collapseChatMenu : !this.state.collapseChatMenu,
        })
    }

    collapseSideMenu() {
        this.setState({
            ...this.state,
            collapseSide : !this.state.collapseSide,
        })
    }
}

function mapStateToProps(state) {
    return {
        home: state.home,
        login : state.login,
    };
}

export default connect(mapStateToProps)(HomeMain);
