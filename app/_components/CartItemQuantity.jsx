import React from 'react'
import { useDispatch } from "react-redux";
import { updateQuantity } from "../_redux/features/cart-slice";

const CartItemQuantity = ({amount, id}) => {

    const dispatch = useDispatch();

    console.log(amount);

  return (
    <form>
          <label htmlFor="Line1Qty" className="sr-only">
            {" "}
            Quantity{" "}
          </label>

          <input
            type="number"
            min="1"
            onChange={(e) => dispatch(updateQuantity({product: {id: id, quantity: e.target.value}}))}
            value={ amount }
            id="Line1Qty"
            className="h-8 w-12 rounded border-gray-300 bg-gray-200 p-0 text-center text-xs text-black [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
          />
        </form>
  )
}

export default CartItemQuantity