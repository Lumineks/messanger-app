import React, { useState } from 'react';

const AuthContext = React.createContext({
  token: '',
  isUserAuthorized: false,
  userName: '',
  login: (token) => {},
  logout: () => {}
});

export const AuthorizationContextProvider = (props) => {
  const [token, setToken] = useState(null);
  const [name, setName] = useState('Michail');

  // const userIsLoggedIn = !!token;
  const userIsLoggedIn = !!token;

  const loginHandler = (token, name) => {
    setToken(token);
    setName(name);
  };

  const logoutHandler = () => {
    setToken(null);
    setName('');
  };

  const contextValue = {
    token: token,
    isUserAuthorized: userIsLoggedIn,
    userName: name,
    login: loginHandler,
    logout: logoutHandler
  };

  return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>;
};

export default AuthContext;
