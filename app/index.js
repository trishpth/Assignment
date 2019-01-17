// the main JS File
// import Libraries
import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from 'react-hot-loader'
import {Provider} from "react-redux";
import HomeStructure from "./modules/home_structure/index.js";

// Import Store
import {store} from "./store";

// Import Router
// import {router} from "./router";

import { push } from "react-router-redux";

import "./globalStyle.scss";
// Render the main application (which is in the Router) with the main store
if (module.hot) {
  ReactDOM.render(
      <Provider store={store}>
          {/*router*/}
          <HomeStructure/>
      </Provider>,
      document.getElementById('kontrolHome')
  );
}
