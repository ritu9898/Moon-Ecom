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

function App() {
  return (
    <>
      <WishlistContextProvider>
        <Header />
        <Routes>
          <Route path="/auth/sign_in" element={<SignIn />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </WishlistContextProvider>
    </>
  );
}

export default App;
