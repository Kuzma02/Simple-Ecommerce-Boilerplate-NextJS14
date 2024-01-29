"use client";
import React from "react";
import { addToCart } from "@/app/_redux/features/cart-slice";
import { useDispatch } from "react-redux";

const AddToCartBtn = ({productId, title, price, image}) => {

    const dispatch = useDispatch();

    const onBtnClick = (productId) => {
        dispatch(addToCart({ product: {id: productId, title, price, image}, amount: 1 }));
    }

  return (
    <button onClick={() => onBtnClick(productId)} className="mt-4 block w-full rounded bg-primary text-white p-4 text-sm font-medium transition transition-colors hover:bg-red-600 hover:scale-105">
      Add to Cart
    </button>
  );
};

export default AddToCartBtn;
