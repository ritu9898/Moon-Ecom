import { useContext, useState } from "react";
import { useEffect } from "react";
import { addRemoveCart } from "../backend/utils/handleCart";
import { addRemoveWishlist } from "../backend/utils/handleWishlist";
import { CartContext } from "../context/cart-context";
import { WishlistContext } from "../context/wishlist-context";

export default function Cart() {
  const { cartProducts, setCartProducts } = useContext(CartContext);
  const {wishlistProducts, setWishlistProducts} = useContext(WishlistContext);
  const [totalPrice, setTotalPrice] = useState(0);

  // useEffect(() => {
  //   cartProducts.map((c) => {
  //     setCartProducts({totalPrice: totalPrice + c.price})
  //   })
  // })

  if(cartProducts.length > 0) {
    return(
      <div className="main-section-cart">
        <aside id="cart-details">
          <div className="product-cart">
            <h3>My Cart (<span>{cartProducts.length}</span>)</h3>
          </div>
          {
            cartProducts.map((c) => {
              return(
                <div className="product-cart">
                  <div>
                    <img src={c.image} />
                    <div className="add-more">
                      <div className="minus">  <i className="fa fa-minus" aria-hidden="true"></i>  </div>
                      <div className="number">  1 </div>
                      <div className="plus">  <i className="fa fa-plus" aria-hidden="true"></i>  </div>
                    </div>
                  </div>
                  <div className="desc">
                  <p>Beauty product by Moon</p>
                  <p>Cream</p>
                  <div className="save-later">
                    <h5 onClick={() => addRemoveWishlist(c, wishlistProducts, setWishlistProducts)}>SAVE FOR LATER</h5>
                    <h5 className="remove" onClick={() => addRemoveCart(c, cartProducts, setCartProducts)}>REMOVE</h5>
                  </div>
                  </div>
                  <div className="delivery">
                    <p>Delivery by Wed Feb 23</p>   
                  </div>
                </div>
              )
            })
          }
          <div className="place-order">
            <button>Place Order</button>
          </div>
        </aside>
        <div id="bill-details">
          <div>
            <p>Price Details</p>
          </div>
          <div className="bill">
            <p>Price <span>${totalPrice}</span></p>
            <p>Discount <span>$10%</span></p>
            <p>Delivery Charges <span className="free-delivery">FREE</span></p>
            <p className="total-price">Price <span>${totalPrice - (totalPrice % 10)}</span></p>

          </div>
        </div>
      </div>
    )
  }
  else {
    return(
      <h2>Nothing's there</h2>
    )
  }
}