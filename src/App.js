import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HeaderMain from "./Romanus/components/HeaderMain";
import HomeScreen from "./Romanus/HomeScreen";
import SignIn from "./Goodluck/SignIn";
import Description from "./Judith2/Component/Description";
import Landing from "./Esther/Landing";
import SecureRouter from "./Auth/SecureRouter";
import SignUp1 from "./Goodluck/SignUp1";
import HomeScreen1 from "./Judith2/Component/HomeScreen1";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <HeaderMain />
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/sign" component={SignIn} />
          <Route exact path="/login" component={SignUp1} />
          <Route exact path="/description" component={Description} />
          <SecureRouter exact path="/v1" component={Landing} />
          <Route exact path="/teachOnUdemy" component={HomeScreen1} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
