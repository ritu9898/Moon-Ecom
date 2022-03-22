import React from "react";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import logo from '../assets/images/Moon-logos_black.png';
import '../styles/header.css';
import SignIn from "./sign_in.jsx";

export default function Header() {
  return(
    <div>
      <div className="logo-row">
        <div className="col">
          <a href="../index.html"><img src={logo} className="logo" /></a>
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
              <a href="../components/wishlist.html">
                <i className="fa-solid fa-heart"></i>
                <span className="badge">6</span>
              </a>
            </div>
          </div>
          <div className="col">
            <div className="cart">
              <a href="../components/cart.html">
                <i className="fa-solid fa-cart-shopping"></i>
                <span className="badge">23</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/auth/sign_in" element={<SignIn />} />
      </Routes>
    </div>
  );
}
