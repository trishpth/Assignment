import React from "react";
import {connect} from 'react-redux'
import {browserHistory} from 'react-router';
import { push } from 'react-router-redux'

class EnsureLoggedInContainer extends React.Component {
  componentDidMount() {
    const { dispatch, currentURL, redirectUrl, isLoggedIn } = this.props

    if (!isLoggedIn) {
      // set the current url/path for future redirection (we use a Redux action)
      // then redirect (we use a React Router method)

      dispatch(push(redirectUrl));
      browserHistory.replace(redirectUrl)
    }
  }

  render() {
    const {isLoggedIn} = this.props;
    if (isLoggedIn) {
      // TODO: verify token from server, skipped in early development stage
      return this.props.children
    } else {
      return null
    }
  }
}

// Grab a reference to the current URL. If this is a web app and you are
// using React Router, you can use `ownProps` to find the URL. Other
// platforms (Native) or routing libraries have similar ways to find
// the current position in the app.
function mapStateToProps(state, ownProps) {
  return {
    isLoggedIn: state.login.isLoggedIn,
    currentURL: ownProps.location.pathname,
    redirectUrl: "/signup_A"
  }
}

export default connect(mapStateToProps)(EnsureLoggedInContainer)
