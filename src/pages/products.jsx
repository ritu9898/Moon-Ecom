import React, { createContext, useState } from "react";
import { products } from "../backend/db/products";
import Filters from "../components/filters";
import Card from "../components/product-card";
import ProductContextProvider from "../context/product-context";


export default class Products extends React.Component {

  constructor() {
    super();
    this.state = {
      products: products
    }
  }

  render() {
    return(
      <ProductContextProvider>
        <div className="main-section">
          <Filters />
        <div className="">
          <div className="alert-box">
            <div className="alert">
              <p>Wishlist added successfully!</p>
              <span>X</span>
            </div>
          </div>
          <Card />
        </div>
        </div>
      </ProductContextProvider>
    )};
  }
