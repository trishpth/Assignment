// import Libraries
import React from "react";
import {store} from "Store";

import {router} from "../../router";
export default class HomeStructure extends React.Component {
  constructor() {
      super();

      this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
 

      this.state = {
          dimensions: {
              width: window.innerWidth,
              height: window.innerHeight
          },
      };
  }
  // render
  render() {
   
    if(store.getState().routing.locationBeforeTransitions.pathname == "/home") {
      return (
        <div>
          <div className="home_body" style={menuWidth}>
            {router}
          </div>
         
        </div>
      );
    } else {
      return (<div>
        {router}
      </div>);
    }
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

}
