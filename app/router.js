// import Libraries
import React from "react";
import {Router, IndexRedirect, Route, browserHistory, IndexRout} from 'react-router';
import { push } from "react-router-redux";

// import store and history
import {store, history} from "./store";

// import Modules
import Home from "./modules/home";
// import Signup from "./modules/signup";
import Login from "./modules/login";
import Logout from "./modules/logout";
import Signup from "./modules/signup";


import EnsureLoggedInContainer from './middleware/EnsureLoggedInContainer';

function checkLoggedIn(nextState, replace) {
  let previousLoginState = store.getState().login.isLoggedIn;

  if (previousLoginState) {
    replace({
      pathname: '/home'
    })
  }

  let unsubscribe = store.subscribe(handleChange);

  function handleChange() {
    let currentLoginState = store.getState().login.isLoggedIn;
    if(previousLoginState !== currentLoginState){
      previousLoginState = currentLoginState;
      if(currentLoginState === true){
          setTimeout(store.dispatch(push("/home")), 4000)
      }
    }
  }

}

// build the router
const router = (
  <Router history={history} onUpdate={() => window.scrollTo(0, 0)}>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} onEnter={checkLoggedIn}/>
        <Route path="/home" component={Home}/>
        <Route path="/logout" component={Logout}/>
        <Route component={EnsureLoggedInContainer}>

        </Route>
  </Router>
);

// export Router
export {router};


