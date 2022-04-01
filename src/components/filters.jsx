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



  return(
    <div className="filters" onClick={expandSpan}>
      <section className="title">
        <h2>Filters</h2>
        <a>Clear All</a>
      </section>
      <section className="price">
        <h4>Price</h4>
        <span><i className="fa-solid fa-angle-down"></i></span>
        <div className="display-none">
          <div className="check-label">
            <input type="checkbox" value="500" id="500" name="price" onClick={contextType.filterFunction} />
            <label htmlFor="500"> 500 to 2000 </label>
          </div>
          <div>
            <input type="checkbox" value="2000" name="price" onClick={contextType.filterFunction} /> 
            <label htmlFor="500"> 2000 to 4000 </label>
          </div>
          <div>
            <input type="checkbox" value="4000" /> 
            <label htmlFor="500"> 4000 to 6000 </label>
          </div>
          <div>
            <input type="checkbox" value="6000" /> 
            <label htmlFor="500"> = 6000 </label>
          </div>
        </div>
      </section>
      <section className="brand">
        <h4>Brands</h4>
        <span><i className="fa-solid fa-angle-down"></i></span>
        <div className="show-brands display-none">
          <div>
            <input type="checkbox" value="Lakme" name="brand" onClick={contextType.filterFunction} /> 
            <label htmlFor="Lakme"> Lakme </label>
          </div>
          <div>
            <input type="checkbox" value="L'Oréal" name="brand" onClick={contextType.filterFunction} /> 
            <label htmlFor="L'Oréal"> L'Oréal </label>
          </div>
          <div>
            <input type="checkbox" value="Maybelline" name="brand" onClick={contextType.filterFunction} /> 
            <label htmlFor="Maybelline "> Maybelline  </label>
          </div>
        </div>
      </section>
      <section className="rating">
        <h4>Customer Ratings</h4>
        <span><i className="fa-solid fa-angle-down"></i></span>
        <div className="show-ratings display-none">
          <div>
            <input type="checkbox" value="4" /> 
            <label htmlFor="4"> 4 <i className="fa-solid fa-star"></i> and above </label>
          </div>
          <div>
            <input type="checkbox" value="3" /> 
            <label htmlFor="3"> 3 <i className="fa-solid fa-star"></i> and above </label>
          </div>
          <div>
            <input type="checkbox" value="2" /> 
            <label htmlFor="2"> 2 <i className="fa-solid fa-star"></i> and above </label>
          </div>
          <div>
            <input type="checkbox" value="1" /> 
            <label htmlFor="1"> 1 <i className="fa-solid fa-star"></i> and above </label>
          </div>
        </div>
      </section>
      <section className="discount">
        <h4>Discounts</h4>
        <span><i className="fa-solid fa-angle-down"></i></span>
        <div className="show-discounts display-none">
          <div>
            <input type="checkbox" value="20" /> 
            <label htmlFor="20"> 20% and more </label>
          </div>
          <div>
            <input type="checkbox" value="50" /> 
            <label htmlFor="50"> 50% and more </label>
          </div>
          <div>
            <input type="checkbox" value="60" /> 
            <label htmlFor="60"> 60% and more </label>
          </div>
        </div>
      </section>
      <section className="occasion">
        <h4>Occasion</h4>
        <span><i className="fa-solid fa-angle-down"></i></span>
        <div className="show-occasions display-none">
          <div>
            <input type="checkbox" value="" /> 
            <label htmlFor=""> Party & Festive </label>
          </div>
          <div>
            <input type="checkbox" value="" /> 
            <label htmlFor=""> Wedding & Festive </label>
          </div>
          <div>
            <input type="checkbox" value="" /> 
            <label htmlFor=""> Bridal </label>
          </div>
          <div>
            <input type="checkbox" value="" /> 
            <label htmlFor=""> Day Look </label>
          </div>
          <div>
            <input type="checkbox" value="" /> 
            <label htmlFor=""> Work Look </label>
          </div>
          <div>
            <input type="checkbox" value="" /> 
            <label htmlFor=""> No Makeup Look </label>
          </div>
        </div>
      </section>
      <section className="skin-type">
        <h4>Skin Types</h4>
        <span><i className="fa-solid fa-angle-down"></i></span>
        <div className="show-skin-types display-none">
          <div>
            <input type="checkbox" value="" /> 
            <label htmlFor=""> Normal </label>
          </div>
          <div>
            <input type="checkbox" value="" /> 
            <label htmlFor=""> Sensitive </label>
          </div>
          <div>
            <input type="checkbox" value="" /> 
            <label htmlFor=""> Dry </label>
          </div>
          <div>
            <input type="checkbox" value="" /> 
            <label htmlFor=""> Oily </label>
          </div>
          <div>
            <input type="checkbox" value="" /> 
            <label htmlFor=""> Combination(Both dry and oily) </label>
          </div>
          <div>
            <input type="checkbox" value="" /> 
            <label htmlFor=""> Scaly </label>
          </div>
          <div>
            <input type="checkbox" value="" /> 
            <label htmlFor=""> Red Spots </label>
          </div>
          <div>
            <input type="checkbox" value="" /> 
            <label htmlFor=""> Skin Moles </label>
          </div>
        </div>
      </section>
    </div>
  );
}
