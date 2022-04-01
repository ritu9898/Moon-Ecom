import { products } from "../backend/db/products";
import React, { createContext } from "react";

export const ProductContext = createContext();

export default class ProductContextProvider extends React.Component {
  constructor() {
    super();
    this.filterFunction = this.filterFunction.bind(this);
    this.state = {
      initialProducts: products,
      products: products,
      isChanged: false,
      filterFunction: this.filterFunction
    }
  }

  filterFunction(e) {
    console.log('FilterFunction');
    // this.setState({
    //   products: {...this.state.initialProducts}
    // })
    this.state.products = this.state.initialProducts;
    let value = e.target.value;
    let checked = e.target.checked;
    let name = e.target.name;
    console.log(value);
    if(checked) {
      switch(name) {
        case 'price': 
          value = parseInt(value);
          this.setState({
            products: this.state.products.filter(f => 
            parseInt(f.price) >= value && parseInt(f.price) <= value + 1000),
            isChanged: true
          })
          break;
        case 'brand':
          this.setState({
            products: this.state.products.filter(f => 
            f.brand == value),
            isChanged: true
          })
          break;
        default: 
          
      }
    }
    else {
      this.state.products = this.state.initialProducts;
      this.setState({
        products: this.state.products,
        isChanged: true
      })
    }
    this.state.isChanged = true;
  }

  render() {

    return(
      <ProductContext.Provider value={{...this.state, ...this.filterFunction}}>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
