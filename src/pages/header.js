import React from "react";
import {
  Link
} from "react-router-dom";
import { useContext } from "react";
import logo from '../assets/images/Moon-logos_black.png';
import '../styles/header.css';
import { WishlistContext } from "../context/wishlist-context";
import { CartContext } from "../context/cart-context";


export default function Header() {
  const {wishlistProducts, setWishlistProducts} = useContext(WishlistContext);
  const { cartProducts, setCartProducts } = useContext(CartContext);
  
  return(
    <div id="header">
      <div className="logo-row">
        <div className="col">
          <Link to="/products" >
            <img src={logo} className="logo" />
          </Link>
        </div>
        <div className="row">
          <div className="col">
            <div className="search-bar">
              <input type="text" placeholder="Search for products (try blush or brush)" id="search" />
              <span><i className="fa-solid fa-magnifying-glass"></i></span>
            </div>
            <div id="search-bar-append">
      
            </div>
          </div>
          <div className="col">
              <Link to="/auth/sign_in" />
                <button className="login"><a href="../components/sign_up.html">Login</a></button>
          </div>
          <div className="col">
            <div className="wishlist">
              <Link to="/wishlist">
                <i className="fa-solid fa-heart"></i>
                <span className="badge">{wishlistProducts.length}</span>
              </Link>
            </div>
          </div>
          <div className="col">
            <div className="cart">
              <Link to="/cart">
                <i className="fa-solid fa-cart-shopping"></i>
                <span className="badge">{cartProducts.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
