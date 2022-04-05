import { products } from "../backend/db/products";
import React, { createContext, useReducer, useState } from "react";

export const ProductContext = createContext();

export default function ProductContextProvider(props) {

  const state1 = {
    initialProducts: products,
    productsData: products,
    isChanged: false,
    filterFunction: filterFunction
  }

  const [initialstate, dispatch] = useReducer(reducer, state1);

  function reducer(state, action) {
    var newState;
    switch (action.type) {
      case 'price':
        return {...state, productsData: state.productsData.filter(f => 
          parseInt(f.price) >= parseInt(action.payload) + 1000)};
            
      case 'brand':
        return {...state, productsData: state.productsData.filter(f => 
          f.brand === action.payload)};
      default:
        return {...state}
    }
  }

  function filterFunction(e) {
    console.log('FilterFunction');
    let v = e.target.value;
    let checked = e.target.checked;
    let name = e.target.name;
    dispatch({type: name, payload: v});
  }

    return(
      <ProductContext.Provider value={{...initialstate, dispatch, ...filterFunction}}>
        {props.children}
      </ProductContext.Provider>
    );
}
