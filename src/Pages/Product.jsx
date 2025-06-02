import React from "react";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrums/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../Components/Relatedproducts/RelatedProducts";

const Product = ({ product }) => {
  const { productId } = useParams();

  if (!product || product.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-red-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading product...</p>
        </div>
      </div>
    );
  }

  const CurrentProduct = product.find((item) => item.id === Number(productId));

  if (!CurrentProduct) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h2>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist.</p>
          <a 
            href="/" 
            className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300"
          >
            Back to Shop
          </a>
        </div>
      </div>
    );
  }

  // Filter related products from same category (excluding current product)
  const relatedProducts = product
    .filter(item => item.category === CurrentProduct.category && item.id !== CurrentProduct.id)
    .slice(0, 4);

  return (
    <div>
      <Breadcrum product={[CurrentProduct]} />
      <ProductDisplay product={[CurrentProduct]} />
      <DescriptionBox product={CurrentProduct} />
      <RelatedProducts products={relatedProducts} />
    </div>
  );
};

export default Product;
