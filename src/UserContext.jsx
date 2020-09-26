import React, { useState,createContext } from "react";


export const UserContext = createContext();
export const UserStorage = ({ children }) => {
const [data, setData] = React.useState(null);
const [login, setLogin] = React.useState(null);
const [load, setLoad] = React.useState(false);
const [erro, setError] = React.useState(null);
const [hasLogin, setHasLogin] = useState(false);

  async function userLogin(username, password) {
    console.log("userLogin", username, password);
    try {
      setError(null);
      setLoad(true);
      window.localStorage.setItem("hasLogin", hasLogin);
    } catch (error) {
      setError("DEU RUIM!");
      setLogin(false);
    } finally {
      setLoad(false);
    }
  }

  return (
  <UserContext.Provider value={{userLogin}}>
    {children}
  </UserContext.Provider>
  );
};


