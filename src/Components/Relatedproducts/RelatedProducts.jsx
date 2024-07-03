import React from "react";
import "./Relatedproducts.css";
import Item from "../Item/Item";
const RelatedProducts = ({ products, addtocart }) => {
  return (
    <div className="relatedproducts">
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {products.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.title}
              image={item.image}
              new_price={item.price}
              old_price={1}
              addtocart={addtocart}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
