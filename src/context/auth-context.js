import { createContext, useState } from "react";
import React, { Component } from 'react';

export const AuthContext = createContext();

class AUthContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = { isSignedIn: false,
    current_user: {
      email: '',
      password: ''
    } };
  }

  render() {
    return (
      <AuthContext.Provider value={{...this.state}}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AUthContextProvider;

AUthContextProvider.propTypes = {
};
