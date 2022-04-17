import '../styles/products.css';
import { Link } from "react-router-dom";
import { addRemoveCart } from '../backend/utils/handleCart';
import { useContext } from 'react';
import { CartContext } from '../context/cart-context';
import { WishlistContext } from '../context/wishlist-context';
import { addRemoveWishlist } from '../backend/utils/handleWishlist';

export const products_list = function(products) {
  const { cartProducts, setCartProducts } = useContext(CartContext);
  const { wishlistProducts, setWishlistProducts } = useContext(WishlistContext);

  const items = [];
  products.forEach(p => {
    items.push(
      <div key={p._id}>
        <div className="child-card">
          <Link to={`/product/${p._id}`}>
            <img src={p.image} className="product-img"  />
          </Link>
          <div className="card-data">
            <div>
              <p className="brand-name">{p.brand}</p>
              <p>{p.title}</p>
              <small> {parseInt(p.quantity) > 0 ? "Available" : "Not available" }</small>
              <section>
                <p><i className="fa fa-dollar"></i>{p.price}</p>
                <p className="strike"><i className="fa fa-dollar"></i>1200</p>
              </section>
            </div>
            <div className="">
            {wishlistProducts.filter((g) => g._id === p._id ).length > 0 ? (<div className="heart is-active" onClick={(e) => {addRemoveWishlist(p, wishlistProducts, setWishlistProducts);
            e.target.classList.toggle('is-active');
               }}>
              </div>) : (<div className="heart" onClick={(e) => {addRemoveWishlist(p, wishlistProducts, setWishlistProducts);
              e.target.classList.toggle('is-active');
                }}>
                </div>)
              }
              {cartProducts.filter((g) => g._id === p._id ).length > 0 ? (
                <div className="add-to-cart add-to-cart-color" onClick={(e) => {addRemoveCart(p,       cartProducts, setCartProducts);
                  e.target.parentElement.classList.toggle('add-to-cart-color');
                }}>
                  <i className="fa-solid fa-cart-shopping"></i>
                </div>
              ) : (
                <div className="add-to-cart" onClick={(e) => {addRemoveCart(p,       cartProducts, setCartProducts);
                  e.target.parentElement.classList.toggle('add-to-cart-color');
                }}>
                  <i className="fa-solid fa-cart-shopping"></i>
                </div>
              )}
              
            </div>
          </div>
        </div>
      </div>
    );
  });
  return items;
}
