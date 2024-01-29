"use client";
import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartList = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <ul className="space-y-4">
      {cartItems.length === 0 ? <h2 className="text-5xl font-bold text-center my-10">Your cart is empty</h2> : cartItems?.map((item) => {

        return <CartItem
          key={item.product.id}
          id={item.product.id}
          image={item.product.image}
          title={item.product.title}
          amount={item.product.amount}
          price={item.product.price}
        />
})}
    </ul>
  );
};

export default CartList;
