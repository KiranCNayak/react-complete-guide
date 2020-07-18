import React from 'react'

const authContext = React.createContext({

  // Basically a context is like a globally available object (although it can be an array, string, number, etc), more
  // like a context variable that holds certain value to be available in various components without the need to pass it
  // down the props tree.

  authenticated: false,
  login: () => {}

});

export default authContext;