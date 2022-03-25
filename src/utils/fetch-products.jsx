import '../styles/products.css';

export const products_list = function(products) {
  const items = [];
  products.forEach(p => {
    items.push(
      <div>
        <img src={p.image} class="product-img"  />
        <div className="card">
          <div className="icons">
            <div className="heart">
            </div>
            <div className="add-to-cart">
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </div>
        </div>
        <div className="details">
          <h3>{p.title}</h3>
          <strong>{p.price}</strong>
        </div>
      </div>
    );
  });
  return items;
}
