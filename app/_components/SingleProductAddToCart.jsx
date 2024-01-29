"use client";
import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import { useDispatch } from "react-redux";
import { addToCart } from "../_redux/features/cart-slice";

const SingleProductAddToCart = ({ id, title, image, price }) => {
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  return (
    <>
      <div className="flex gap-x-5 items-center">
        <h2 className="text-xl font-light">Quantity: </h2>
        <div className="max-w-32">
          <label htmlFor="Quantity" className="sr-only">
            {" "}
            Quantity{" "}
          </label>

          <div className="flex items-center rounded border border-gray-200">
            <button
              type="button"
              className="h-10 w-10 leading-10 text-gray-600 transition hover:opacity-75"
              onClick={() => {
                if (quantity > 1) {
                  setQuantity(quantity - 1);
                }
              }}
            >
              &minus;
            </button>

            <input
              type="number"
              id="Quantity"
              value={quantity}
              readOnly={true}
              className="h-10 w-16 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
            />

            <button
              type="button"
              className="h-10 w-10 leading-10 text-gray-600 transition hover:opacity-75"
              onClick={() => {
                setQuantity(quantity + 1);
              }}
            >
              <GoPlus />
            </button>
          </div>
        </div>
      </div>

      <button
        className="text-white bg-primary py-5 px-10 font-bold transition-colors hover:bg-red-600"
        onClick={() =>
          dispatch(
            addToCart({
              product: { id, title, image: "http://localhost:1337" + image, price, amount: quantity },
            })
          )
        }
      >
        Add to cart
      </button>
    </>
  );
};

export default SingleProductAddToCart;
