"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../_redux/features/cart-slice";

const ClearCartBtn = () => {
    const dispatch = useDispatch();
  return (
    <button className="bg-primary px-16 py-3 mt-5 text-white hover:bg-red-600 transition text-sm rounded" onClick={() => dispatch(clearCart())}>
      Clear Cart
    </button>
  );
};

export default ClearCartBtn;
