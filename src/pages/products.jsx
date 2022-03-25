import Card from "../components/product-card";

export default function Products() {
  return(
    <>
      <div className="main">
        <div className="alert-box">
          <div className="alert">
            <p>Wishlist added successfully!</p>
            <span>X</span>
          </div>
        </div>
        <Card />
        
        <h3>Suggested Products</h3>
        <div Name="suggested-products">
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
  
    </>
  );
}