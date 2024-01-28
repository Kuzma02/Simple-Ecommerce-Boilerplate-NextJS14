import React from "react";
import { ProductItem } from ".";

const ProductSection = async () => {
  const data = await fetch("http://localhost:1337/api/products?populate=*");
  const products = await data.json();

  return (
    <div className="flex flex-wrap justify-center gap-x-5 max-w-7xl mx-auto py-5">
      {products &&
        products.data.map((product) => (
          <ProductItem
            key={product.id}
            title={product.attributes.title}
            price={product.attributes.price}
            image={`http://localhost:1337`+product.attributes.Image.data.attributes.url}
            id={product.id}
          />
        ))}
    </div>
  );
};

export default ProductSection;
