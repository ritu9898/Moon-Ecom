import '../styles/products.css';

export const products_list = function(products) {
  const items = [];
  products.forEach(p => {
    items.push(
      <div>
        <div className="child-card">
          <img src={p.image} class="product-img"  />
          <div class="card-data">
            <div>
              <p class="brand-name">{p.brand}</p>
              <p>{p.title}</p>
              <small> {parseInt(p.quantity) > 0 ? "Available" : "Not available" }</small>
              <section>
                <p><i class="fa fa-dollar"></i>{p.price}</p>
                <p class="strike"><i class="fa fa-dollar"></i>1200</p>
              </section>
            </div>
            <div class="">
              <div class="heart">
      
              </div>
              <div class="add-to-cart">
                <i class="fa-solid fa-cart-shopping"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return items;
}
