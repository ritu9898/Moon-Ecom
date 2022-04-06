export function addRemoveCart(product, cartProducts, setCartProducts) {

  var m = cartProducts.indexOf(product);
  if(m === -1) {
    setCartProducts(oldArray => [...oldArray, product]);
  } else {
    setCartProducts(oldArray => [...oldArray.filter((p) => p._id !== product._id)]);
  }
}
