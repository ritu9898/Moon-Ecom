import axios from "axios";
import { useContext } from "react";
import { users } from '../backend/db/users';
import { addRemoveWishlist } from "../backend/utils/handleWishlist";
import { WishlistContext } from "../context/wishlist-context";

export default function Wishlist() {

  const {wishlistProducts, setWishlistProducts} = useContext(WishlistContext);
  
  if(wishlistProducts.length > 0) {
    return(
      <div id="wishlist">
        <div className="main-section">
          <aside id="sidebar">
            <div className="profile">
              <img src="../assets/images/avatar.jpeg" alt="avatar" className="avatar" />
              <h3>Hello, Ritu</h3>
            </div>
            <div className="profile-details">
              <p>My Orders</p>
              <p>Account Settings</p>
              <p>Payments</p>
              <p>My Chats</p>
              <p>Coupons</p>
              <p>Reviews and Ratings</p>
              <p>All Notification</p>
            </div>
          </aside>
          <div className="wishlist-body">
            <div className="product-card">
              <h3>My Wishlist({wishlistProducts.length})</h3>
            </div>
            { 
              wishlistProducts.map((w) => {
                return(
                  <div className="product-card" key={w._id}>
                    <img  src={w.image}/>
                    <div className="desc">
                      <p>Beauty Product by Moon </p> 
                      <div className="price">
                        <h2>{w.price}</h2>
                        <p className="strike">$1200</p>
                      </div>
                    </div>
                    <div className="">
                      <a href="#" onClick={() => addRemoveWishlist(w, wishlistProducts, setWishlistProducts)}><i className="fa fa-trash" aria-hidden="true"></i></a>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    );
  }
  else 
  {
    return (
      <div id="wishlist">
      <div className="main-section">
        <aside id="sidebar">
          <div className="profile">
            <img src="../assets/images/avatar.jpeg" alt="avatar" className="avatar" />
            <h3>Hello, Ritu</h3>
          </div>
          <div className="profile-details">
            <p>My Orders</p>
            <p>Account Settings</p>
            <p>Payments</p>
            <p>My Chats</p>
            <p>Coupons</p>
            <p>Reviews and Ratings</p>
            <p>All Notification</p>
          </div>
        </aside>
        <div className="wishlist-body">
          <div className="product-card">
          </div>
          <h2>You do not have any products in wishlist</h2>
        </div>
      </div>
      </div>
    );
  }

  
}
