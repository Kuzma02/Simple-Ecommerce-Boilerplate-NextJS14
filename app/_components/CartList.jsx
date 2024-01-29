"use client";
import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartList = () => {
  const { cartItems } = useSelector((state) => state.cart);
  console.log(cartItems);
  return (
    <ul className="space-y-4">
      {cartItems?.map((item) => (
        <CartItem
          key={item.product.id}
          image={item.product.image}
          title={item.product.title}
          amount={item.product.amount}
          price={item.product.price}
        />
      ))}
    </ul>
  );
};

export default CartList;
