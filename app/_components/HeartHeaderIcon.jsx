"use client";
import React from "react";
import { FaRegHeart } from "react-icons/fa6";
import Link from "next/link";

const HeartHeaderIcon = () => {
  return (
    <div className="relative">
      <div className="w-5 h-5 bg-primary rounded-lg absolute top-[-12px] right-[-18px] flex justify-center items-center">
        <span className="text-[12px] text-white font-bold ">0</span>
      </div>
      <Link href="/wishlist">
        <FaRegHeart className="text-[27px] text-black cursor-pointer" />
      </Link>
    </div>
  );
};

export default HeartHeaderIcon;
