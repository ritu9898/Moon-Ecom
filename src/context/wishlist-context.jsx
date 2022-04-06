import React, { createContext, useState } from "react";

export const WishlistContext = createContext({
  wishlistProducts: [],
  setWishlistProducts: () => {},});

export default function WishlistContextProvider(props) {

  const [ wishlistProducts, setWishlistProducts ] = useState([]);

  return(
    <WishlistContext.Provider value={{ wishlistProducts, setWishlistProducts }}>
      {props.children}
    </WishlistContext.Provider>
  );
}
