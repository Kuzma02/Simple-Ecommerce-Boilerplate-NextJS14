import React from "react";
import { CartItemQuantity, RemoveCartItemBtn } from ".";

const CartItem = ({ title, image, price, amount, id }) => {
  return (
    <li className="flex items-center gap-4">
      <img
        src={image}
        alt="cart product image"
        className="h-16 w-16 rounded object-cover"
      />

      <div>
        <h3 className="text-sm text-gray-900">{title}</h3>
      </div>

      <div className="flex flex-1 items-center justify-end gap-2">
        <div>
          <p className="font-bold text-xl">${price}</p>
        </div>

        {/* Quantity */}
        <CartItemQuantity amount={amount} id={id} />

        <RemoveCartItemBtn id={id} />
      </div>
    </li>
  );
};

export default CartItem;
