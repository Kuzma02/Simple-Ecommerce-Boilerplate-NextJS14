import React from "react";
import { ProductItem } from ".";

const ProductSection = () => {
  return (
    <div className="flex flex-wrap justify-center gap-x-5 max-w-7xl mx-auto py-5">
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </div>
  );
};

export default ProductSection;
