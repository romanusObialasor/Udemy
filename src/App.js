import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HeaderMain from "./Romanus/components/HeaderMain";
import HomeScreen from "./Romanus/HomeScreen";
import SignIn from "./Goodluck/SignIn";
import JudithHome from "./Judith/JudithHome";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <HeaderMain />
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          {/* <Route exact path="/sign" component={SignIn} /> */}
          <Route exact path="/teacher" component={JudithHome} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
