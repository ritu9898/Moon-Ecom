import "./App.css";
import {
  Routes,
  Route
} from "react-router-dom";
import Header from "./pages/header";
import ProductDetail from "../src/pages/productDetail";
import Products from "../src/pages/products";
import SignIn from "../src/pages/sign_in";
import Wishlist from "./pages/wishlist";
import WishlistContextProvider from "./context/wishlist-context";
import CartContextProvider from "./context/cart-context";
import Cart from "./pages/cart";

function App() {
  return (
    <>
      <WishlistContextProvider>
        <CartContextProvider>
          <Header />
          <Routes>
            <Route path="/auth/sign_in" element={<SignIn />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          </CartContextProvider>
      </WishlistContextProvider>
    </>
  );
}

export default App;
