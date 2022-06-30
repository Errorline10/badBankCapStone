import React from 'react'
const Context = React.createContext({});

export const MyProvider = Context.Provider;
export default Context

export const blankData = {
    currentActiveFocus: 0,
    currentUser: {
      name: '',
      email: '',
      password: '',
      token: '',
      bankAccounts: []
    }
  }
  