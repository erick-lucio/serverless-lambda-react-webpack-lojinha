import React, { useState } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  MemoryRouter,
  Router,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import Main from './components/Main/index'
import Cart from './components/Cart/index.js'
import Header from './components/Header/index.js'

export default function Routes() {

  const history = createBrowserHistory();

   
  return (
    <BrowserRouter history={history}>
      
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/cart" component={Cart} />

      </Switch>
       
       
    </BrowserRouter>

  );
}
