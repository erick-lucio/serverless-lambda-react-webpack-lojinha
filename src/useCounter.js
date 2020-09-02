
import React, { useState ,useReducer} from "react";

import {reducerCart,reducerProducts,reducerCounter,estadoInicialCart,estadoInicialCounter,estadoInicialProducts} from './Redux'
function useCounter(){
  
    const [stateCounter, dispatchCounter] = useReducer(reducerCounter,estadoInicialCounter); 
    const increment = () =>{
      dispatchCounter({type: 'increment'})
    };
    const decrement = () =>{
      dispatchCounter({type: 'decrement'})
    }

    return {increment,decrement}
  }