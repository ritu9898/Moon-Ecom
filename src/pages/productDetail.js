import { Link, useParams } from "react-router-dom";
import { products } from "../backend/db/products";
import { useContext } from "react";
import "../styles/productDetail.css";
import { WishlistContext } from "../context/wishlist-context";
import { addRemoveWishlist } from "../backend/utils/handleWishlist";
import { CartContext } from "../context/cart-context";
import "../styles/productDetail.css";
import { addRemoveCart } from "../backend/utils/handleCart";

export default function ProductDetail() {
  const { productId } = useParams();

  function getProductDetails(products, productId) {
    return products.find((product) => product._id === productId);
  }

  const product = getProductDetails(products, productId);
  const { wishlistProducts, setWishlistProducts } = useContext(WishlistContext);
  const { cartProducts, setCartProducts } = useContext(CartContext);

  return(
    <>
      <Link to="/products"> See All </Link>
      <div id="product">
        <div className="main">
          <div className="alert-box">
            <div className="alert">
              <p>Wishlist added successfully!</p>
              <span>X</span>
            </div>
          </div>
          <div className="card">
            <img src={product.image} className="product-img"  />
            <div className="icons">
              <div className="heart" onClick={() => {addRemoveWishlist(product, wishlistProducts, setWishlistProducts) }}>
              </div>
              <div className="add-to-cart" onClick={() => addRemoveCart(product, cartProducts, setCartProducts)}>
                <i className="fa-solid fa-cart-shopping"></i>
              </div>
            </div>
          </div>
          <div className="details">
            <h3>{product.title}</h3>
            <h3>{product.brand}</h3>
            <strong>{product.price}</strong>
          </div>
          <h3>Suggested Products</h3>
          <div className="suggested-products">
            <div className="card">
              <img  src="../assets/images/products/pro_4.jpg"/>
            </div>
            <div className="card">
              <img  src="../assets/images/products/pro_4.jpg"/>
            </div>
            <div className="card">
              <img  src="../assets/images/products/pro_4.jpg"/>
            </div>
            <div className="card">
              <img  src="../assets/images/products/pro_4.jpg"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
