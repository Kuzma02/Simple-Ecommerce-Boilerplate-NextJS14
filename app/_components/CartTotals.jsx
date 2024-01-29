"use client";

import React from "react";
import { useSelector } from "react-redux";

const CartTotals = () => {
    const { total } = useSelector((state) => state.cart);
  return (
    <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
      <div className="w-screen max-w-lg space-y-4">
        <dl className="space-y-0.5 text-sm text-gray-700">
          <div className="flex justify-between">
            <dt>Subtotal</dt>
            <dd>${ total }</dd>
          </div>

          <div className="flex justify-between">
            <dt>TAX 20%</dt>
            <dd>${ total / 5 }</dd>
          </div>

          <div className="flex justify-between !text-base font-medium">
            <dt>Total</dt>
            <dd>${ total + total / 5 }</dd>
          </div>
        </dl>

        <div className="flex justify-end">
          <a
            href="#"
            className="block rounded bg-primary px-16 py-3 text-sm text-white transition hover:bg-red-600"
          >
            Checkout
          </a>
        </div>
      </div>
    </div>
  );
};

export default CartTotals;
