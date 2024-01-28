import React from "react";
import { Breadcrumb, ProductItem } from "../_components";

const Shop = () => {
  return (
    <>
    <Breadcrumb pageTitle="Shop Page" pagePath="Home | Shop" />
    <div className="flex flex-wrap justify-center gap-x-5 max-w-7xl mx-auto py-5">
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </div>
    </>
  );
};

export default Shop;
