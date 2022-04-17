import React, { createContext, useState } from "react";

export const CartContext = createContext({
  cartProducts: [],
  setCartProducts: () => {},
  totalPrice: 0,
  setTotalPrice: () => {}
});

export default function CartContextProvider(props) {

  const [ cartProducts, setCartProducts ] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  return(
    <CartContext.Provider value={{ cartProducts, setCartProducts, totalPrice, setTotalPrice }}>
      {props.children}
    </CartContext.Provider>
  );
}
