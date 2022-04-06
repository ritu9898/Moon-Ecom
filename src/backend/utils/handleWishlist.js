export function addRemoveWishlist(product, wishlistProducts, setWishlistProducts) {

  var m = wishlistProducts.indexOf(product);
  if(m === -1) {
    setWishlistProducts(oldArray => [...oldArray, product]);
  } else {
    setWishlistProducts(oldArray => [...oldArray.filter((p) => p._id !== product._id)]);
  }
}
