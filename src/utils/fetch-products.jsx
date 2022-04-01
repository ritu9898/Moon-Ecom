import '../styles/products.css';
import { Link } from "react-router-dom";

export const products_list = function(products) {
  const items = [];
  products.forEach(p => {
    items.push(
      <div>
        <div className="child-card">
          <Link to={`/product/${p._id}`}>
            <img src={p.image} className="product-img"  />
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
                <div className="heart">
        
                </div>
                <div className="add-to-cart">
                  <i className="fa-solid fa-cart-shopping"></i>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  });
  return items;
}
