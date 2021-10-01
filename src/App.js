import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HeaderMain from "./Romanus/components/HeaderMain";
import HomeScreen from "./Romanus/HomeScreen";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <HeaderMain />
        <Switch>
          <Route exact path="/" component={HomeScreen} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
