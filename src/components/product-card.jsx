import React from "react";
import { products } from "../backend/db/products";
import { products_list } from "../utils/fetch-products";

export default class Card extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
  }

  render() {
    const list = products_list(products)
    return(
     <div class="products" id="product-listing">
      {list}
     </div>
    );
  }
}
