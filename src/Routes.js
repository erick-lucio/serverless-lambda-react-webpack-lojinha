import React, { useState, useReducer } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  MemoryRouter,
  Router,
  HashRouter,
} from "react-router-dom";
import ShopIcon from './assets/icons/icons8-shop-96.png'
import { createBrowserHistory } from "history";
import Main from "./components/Main/index";
import Cart from "./components/Cart/index.js";
import Header from "./components/Header/index.js";
import { context1 } from "./Context";
import {
  reducerCart,
  reducerProducts,
  reducerCounter,
  estadoInicialCart,
  estadoInicialCounter,
  estadoInicialProducts,
} from "./Redux";
import { useCounter } from "./useCounter";

export default function Routes() {
  document.getElementById('favicon').setAttribute('href',ShopIcon)
  const [stateCounter, dispatchCounter] = useReducer(
    reducerCounter,
    estadoInicialCounter
  );
  const [stateProducts, dispatchProducts] = useReducer(
    reducerProducts,
    estadoInicialProducts
  );
  const [stateCart, dispatchCart] = useReducer(reducerCart, estadoInicialCart);

  const history = createBrowserHistory();
  //custom hook
 

  return (
    <HashRouter history={history}>
      <context1.Provider
        value={{
          stateCounter,
          dispatchCounter,
          stateProducts,
          dispatchProducts,
          stateCart,
          dispatchCart,
        }}
      >
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </context1.Provider>
    </HashRouter>
  );
}
