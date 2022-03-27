import { products } from "../backend/db/products";
import React, { createContext } from "react";

export const ProductContext = createContext();

export default class ProductContextProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      products: products,
      isChanged: false
    }
  }

  render() {

    return(
      <ProductContext.Provider value={{...this.state}}>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
