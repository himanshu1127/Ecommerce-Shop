import React from "react";
import "./Breadcrum.css";

const Breadcrum = (props) => {
  const current = props.product;
  const product = current[0];
  return (
    <div className="beradcrum">
      Home <img src="" alt="" />
      SHOP <img src="" alt="" />
      {product.category} <img src="" alt="" />
      {product.title}
    </div>
  );
};

export default Breadcrum;
