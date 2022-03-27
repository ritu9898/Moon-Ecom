import { useContext } from "react";
import { ProductContext } from "../context/product-context";

export default function Filters() {

  const contextType = useContext(ProductContext);

  function expandSpan(e) {
    if(e.target.parentElement.nodeName == "SPAN")
    {
      var section = e.target.closest('section');
      var classList = section.lastChild.className;

      if(classList == 'display-none')
      {
        e.target.className = 'fa-solid fa-angle-up';
        section.lastChild.className = '';
      }
      else
      {
        e.target.className = 'fa-solid fa-angle-down';
        section.lastChild.className = 'display-none'
      }
    }
  }

  function _handleClick(e) {
    let value = e.target.value;
    let name = e.target.name;
    console.log(contextType.products);
    contextType.products = contextType.products.filter(f => 
      parseInt(f.price) == 1000);   
      contextType.isChanged = true;
      console.log(contextType.products); 
  }

  return(
    <div class="filters" onClick={expandSpan}>
      <section class="title">
        <h2>Filters</h2>
        <a>Clear All</a>
      </section>
      <section class="price">
        <h4>Price</h4>
        <span><i class="fa-solid fa-angle-down"></i></span>
        <div class="display-none">
          <div class="check-label">
            <input type="checkbox" value="500" id="500" name="price" onClick={_handleClick} />
            <label for="500"> 500 to 2000 </label>
          </div>
          <div>
            <input type="checkbox" value="2000" /> 
            <label for="500"> 2000 to 4000 </label>
          </div>
          <div>
            <input type="checkbox" value="4000" /> 
            <label for="500"> 4000 to 6000 </label>
          </div>
          <div>
            <input type="checkbox" value="6000" /> 
            <label for="500" >= 6000 </label>
          </div>
        </div>
      </section>
      <section class="brand">
        <h4>Brands</h4>
        <span><i class="fa-solid fa-angle-down"></i></span>
        <div class="show-brands display-none">
          <div>
            <input type="checkbox" value="2000" /> 
            <label for="500"> 2000 to 4000 </label>
          </div>
          <div>
            <input type="checkbox" value="4000" /> 
            <label for="500"> 4000 to 6000 </label>
          </div>
        </div>
      </section>
      <section class="rating">
        <h4>Customer Ratings</h4>
        <span><i class="fa-solid fa-angle-down"></i></span>
        <div class="show-ratings display-none">
          <div>
            <input type="checkbox" value="4" /> 
            <label for="4"> 4 <i class="fa-solid fa-star"></i> and above </label>
          </div>
          <div>
            <input type="checkbox" value="3" /> 
            <label for="3"> 3 <i class="fa-solid fa-star"></i> and above </label>
          </div>
          <div>
            <input type="checkbox" value="2" /> 
            <label for="2"> 2 <i class="fa-solid fa-star"></i> and above </label>
          </div>
          <div>
            <input type="checkbox" value="1" /> 
            <label for="1"> 1 <i class="fa-solid fa-star"></i> and above </label>
          </div>
        </div>
      </section>
      <section class="discount">
        <h4>Discounts</h4>
        <span><i class="fa-solid fa-angle-down"></i></span>
        <div class="show-discounts display-none">
          <div>
            <input type="checkbox" value="20" /> 
            <label for="20"> 20% and more </label>
          </div>
          <div>
            <input type="checkbox" value="50" /> 
            <label for="50"> 50% and more </label>
          </div>
          <div>
            <input type="checkbox" value="60" /> 
            <label for="60"> 60% and more </label>
          </div>
        </div>
      </section>
      <section class="occasion">
        <h4>Occasion</h4>
        <span><i class="fa-solid fa-angle-down"></i></span>
        <div class="show-occasions display-none">
          <div>
            <input type="checkbox" value="" /> 
            <label for=""> Party & Festive </label>
          </div>
          <div>
            <input type="checkbox" value="" /> 
            <label for=""> Wedding & Festive </label>
          </div>
          <div>
            <input type="checkbox" value="" /> 
            <label for=""> Bridal </label>
          </div>
          <div>
            <input type="checkbox" value="" /> 
            <label for=""> Day Look </label>
          </div>
          <div>
            <input type="checkbox" value="" /> 
            <label for=""> Work Look </label>
          </div>
          <div>
            <input type="checkbox" value="" /> 
            <label for=""> No Makeup Look </label>
          </div>
        </div>
      </section>
      <section class="skin-type">
        <h4>Skin Types</h4>
        <span><i class="fa-solid fa-angle-down"></i></span>
        <div class="show-skin-types display-none">
          <div>
            <input type="checkbox" value="" /> 
            <label for=""> Normal </label>
          </div>
          <div>
            <input type="checkbox" value="" /> 
            <label for=""> Sensitive </label>
          </div>
          <div>
            <input type="checkbox" value="" /> 
            <label for=""> Dry </label>
          </div>
          <div>
            <input type="checkbox" value="" /> 
            <label for=""> Oily </label>
          </div>
          <div>
            <input type="checkbox" value="" /> 
            <label for=""> Combination(Both dry and oily) </label>
          </div>
          <div>
            <input type="checkbox" value="" /> 
            <label for=""> Scaly </label>
          </div>
          <div>
            <input type="checkbox" value="" /> 
            <label for=""> Red Spots </label>
          </div>
          <div>
            <input type="checkbox" value="" /> 
            <label for=""> Skin Moles </label>
          </div>
        </div>
      </section>
    </div>
  );
}
