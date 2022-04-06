import React, { createContext, useState } from "react";

export const CartContext = createContext({
  cartProducts: [],
  setCartProducts: () => {},});

export default function CartContextProvider(props) {

  const [ cartProducts, setCartProducts ] = useState([]);

  return(
    <CartContext.Provider value={{ cartProducts, setCartProducts }}>
      {props.children}
    </CartContext.Provider>
  );
}
