import React, { useContext } from "react";
import "./Item.css";
import { Link } from "react-router-dom";
import Product from "../../Pages/Product";
import { ShopContext } from "../../Context/ShopContext";

const Item = ({ id, image, name, new_price, old_price, product }) => {
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="item">
      <Link to={`/product/${id}`}>
        <div className="item-img">
          <img src={image} alt={name} />
        </div>
      </Link>
      <p>{name}</p>
      <div className="item-prices">
        <div className="item-price-new">$ {new_price}</div>
        <div className="item-price-old">$ {old_price}</div>
      </div>
      <button className="item-btn" onClick={() => addToCart(product, id)}>
        ADD TO CART
      </button>
    </div>
  );
};

export default Item;
