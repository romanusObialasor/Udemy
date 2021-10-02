import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HeaderMain from "./Romanus/components/HeaderMain";
import HomeScreen from "./Romanus/HomeScreen";
import SignIn from "./Goodluck/SignIn";
import Description from "./Judith2/Component/Description";
import Landing from "./Esther/Landing";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <HeaderMain />
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/sign" component={SignIn} />
          <Route exact path="/description" component={Description} />
          <Route exact path="/v1" component={Landing} />
          <Route exact path="/register" component={SignIn} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
