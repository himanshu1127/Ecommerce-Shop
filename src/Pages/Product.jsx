import React from "react";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrums/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../Components/Relatedproducts/RelatedProducts";

const Product = ({ product }) => {
  const productId = useParams();
  console.log(product);
  console.log(productId);

  const CurrentProduct = product.filter((item) => {
    return item.id == Number(productId.productId);
  });
  return (
    <div>
      <Breadcrum product={CurrentProduct} />
      <ProductDisplay product={CurrentProduct} />
      <DescriptionBox />
      <RelatedProducts products={product} />
    </div>
  );
};

export default Product;
