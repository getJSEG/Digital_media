import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "./scss/public/style.scss";
import Main_Page from "./js/components/public/main-components/main_page";
class App extends Component {


  render() {
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={ () => <Main_Page  />  } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
