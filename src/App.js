import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HeaderMain from "./Romanus/components/HeaderMain";
import HomeScreen from "./Romanus/HomeScreen";
import SignIn from "./Goodluck/SignIn";
import Description from "./Esther/Description";
import Landing from "./Esther/Landing";
import SecureRouter from "./Auth/SecureRouter";
import SignUp1 from "./Goodluck/SignUp1";
import Describe from "./Esther/Describe";
import HomeScreen1 from "./Judith2/Component/HomeScreen1";
import Footer from "./Footer/index";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <HeaderMain />
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/sign" component={SignIn} />
          <Route exact path="/login" component={SignUp1} />
          <Route exact path="/details/:id" component={Description} />
          <SecureRouter exact path="/v1" component={Landing} />
          <Route exact path="/teachOnUdemy" component={HomeScreen1} />
          <Route exact path="/describe" component={Describe} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
