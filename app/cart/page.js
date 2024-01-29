import React from "react";
import { Breadcrumb, CartList, CartTotals, ClearCartBtn } from "../_components";


const CartPage = () => {



  return (
    <>
    <Breadcrumb pageTitle="Cart Page" pagePath="Home | Cart" />
    <section>
      <div className="mx-auto max-w-7xl py-8 sm:py-12">
        <div className="mx-auto">
          <header className="text-center">
            <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Your Cart
            </h1>
          </header>

          <div className="mt-8">
            
            <CartList />

            <ClearCartBtn />
            <CartTotals />
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default CartPage;
