"use client";
import React from 'react'
import Link from "next/link";
import { BsCart4 } from "react-icons/bs";
import { useSelector } from 'react-redux';

const CartHeaderIcon = () => {
  const { amount } = useSelector((state) => state.cart);
  return (
    <div className="relative">
                <div className="w-5 h-5 bg-primary rounded-lg absolute top-[-8px] right-[-15px] flex justify-center items-center">
                  <span className="text-[12px] text-white font-bold ">{ amount }</span>
                </div>
                <Link href="/cart">
                  <BsCart4 className="text-3xl text-black cursor-pointer" />
                </Link>
              </div>
  )
}

export default CartHeaderIcon