import React, { useReducer } from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import ShopIcon from "./assets/icons/icons8-shop-96.png";
import { createBrowserHistory } from "history";
import Main from "./components/Main/index";
import Cart from "./components/Cart/index.js";
import Header from "./components/Header/index.js";
import Product from "./components/Product/index.js";
import { context1 } from "./Context";
import {
  reducerCart,
  reducerProducts,
  reducerCounter,
  estadoInicialCart,
  estadoInicialCounter,
  estadoInicialProducts,
} from "./Redux";

export default function Routes() {
  document.getElementById("favicon").setAttribute("href", ShopIcon);
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
          <Route exact path="/product/:id_param?" component={Product} />
        </Switch>
      </context1.Provider>
    </HashRouter>
  );
}
