import React from "react";
import { ProductContext } from "../context/product-context";
import { products_list } from "../utils/fetch-products";

export default class Card extends React.Component {
  constructor() {
    super();
  }

  static contextType = ProductContext;

  render() {
    const list = products_list(this.context.products);
    {console.log(this.context.products); console.log('IN card');}
    return(
     <div className="products" id="product-listing">
      {list}
     </div>
    );
  }
}
