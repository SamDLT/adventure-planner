import React, { Component } from 'react';

import firebase from 'firebase/app';
import 'firebase/auth';

import firebaseConfig from '../../firebase_config.json';

class SignIn extends Component {

  constructor() {
    super();
    firebase.initializeApp(firebaseConfig);
    this.state = {isAuthenticated: !!firebase.auth().currentUser, loading: true};
  }

  componentDidMount() {
    firebase.auth().getRedirectResult().then((result) => {
      if(result.user) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        // var token = result.credential.accessToken;
        this.setState({...this.state, isAuthenticated: !!firebase.auth().currentUser, user: result.user.displayName, loading: false})
      }
      else {
        this.setState({...this.state, loading: false});
      }
    }).catch((error) => {
      // TODO: Error handling
    });
  }

  signIn() {
    if(!this.state.isAuthenticated) {
      const provider = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithRedirect(provider);
    }
  }

  render() {
    return (
      <div>
      {
        this.state.loading ? <div>Loading...</div> :
        (
          this.state.isAuthenticated ?
          <div>Logged in as {this.state.user}</div> :
          <input type="button" onClick={() => this.signIn()} value="sign in" />
        )
      }
      </div>
    );
  }
}

export default SignIn;
