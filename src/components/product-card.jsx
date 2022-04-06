import React from "react";
import { useContext } from "react";
import { ProductContext } from "../context/product-context";
import { products_list } from "../utils/fetch-products";

export default function Class() {

    const contextType = useContext(ProductContext);

    const list = products_list(contextType.productsData);
    return(
     <div className="products" id="product-listing">
      {list}
     </div>
    );
}
