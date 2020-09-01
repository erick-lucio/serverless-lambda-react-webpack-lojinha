import React, { useState ,useReducer} from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  MemoryRouter,
  Router,
  HashRouter
} from "react-router-dom";
import { createBrowserHistory } from "history";
import Main from './components/Main/index'
import Cart from './components/Cart/index.js'
import Header from './components/Header/index.js'
import {context1} from './Context'
import {reducer,estadoInicial} from './Redux'
export default function Routes() {
  const [state, dispatch] = useReducer(reducer,estadoInicial);  
  const history = createBrowserHistory();

   
  return (
    <HashRouter history={history}>
      <context1.Provider value={{state, dispatch}}>
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/cart" component={Cart} />

      </Switch>
       
      </context1.Provider>  
    </HashRouter>

  );
}
