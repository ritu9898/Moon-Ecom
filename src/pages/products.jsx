import Filters from "../components/filters";
import Card from "../components/product-card";

export default function Products() {
  return(
    <>
      <div className="main-section">
        <Filters />
      <div className="">
        <div className="alert-box">
          <div className="alert">
            <p>Wishlist added successfully!</p>
            <span>X</span>
          </div>
        </div>
        <Card />
      </div>
      </div>
    </>
  );
}