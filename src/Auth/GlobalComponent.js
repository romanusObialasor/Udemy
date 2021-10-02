import React, { createContext } from "react";
import app from "../base";

export const AuthContext = createContext();

export const GlobalComponent = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState([]);
  React.useEffect(() => {
    app.auth().onAuthStateChanged((user) => setCurrentUser(user));
    console.log("userSignedUp");
  }, []);
  return (
    <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>
  );
};
