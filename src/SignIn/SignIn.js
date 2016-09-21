import React, { Component } from 'react';

import firebase from 'firebase/app';
import 'firebase/auth';

class SignIn extends Component {

  state = {isAuthenticated: getCurrentAuthStatus(), loading: true};

  componentDidMount() {
    firebase.auth().getRedirectResult().then((result) => {
      if(result.user) {
        this.setState({
          ...this.state,
          isAuthenticated: this.getCurrentAuthStatus(),
          user: result.user.displayName,
          loading: false
        })
      }
      else {
        this.setState({...this.state, loading: false});
      }
    }).catch((error) => {
      // TODO: Error handling
    });
  }

  getCurrentAuthStatus() {
    return !!firebase.auth().currentUser;
  }

  signIn() {
    if(!this.state.isAuthenticated) {
      const provider = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithRedirect(provider);
    }
  }

  render() {

    if(this.state.loading)
      return <div>Loading...</div>

    return (
      <div>
      {
        this.state.isAuthenticated ?
        <div>Logged in as {this.state.user}</div> :
        <input type="button" onClick={() => this.signIn()} value="sign in" />
      }
      </div>
    );
  }
}

export default SignIn;
