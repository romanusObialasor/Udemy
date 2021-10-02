import React, { useContext } from "react";
import { AuthContext } from "./GlobalComponent";
import { Route, Redirect } from "react-router-dom";

const SecureRouter = ({ component: PrivateRoute, ...rest }) => {
  const currentUser = useContext(AuthContext);
  console.log(currentUser);
  return (
    <Route
      {...rest}
      render={(myProps) => {
        return currentUser ? (
          <PrivateRoute {...myProps} />
        ) : (
          <Redirect to="/" />
        );
      }}
    />
  );
};

export default SecureRouter;
