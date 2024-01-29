import React from "react";
import Image from "next/image";
import Link from "next/link";

import { CartHeaderIcon, HeartHeaderIcon } from ".";

const Header = () => {
  return (
    <header className="bg-white">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Link href="/">
          <Image src="/static/logo.svg" width={150} height={150} alt="logo" />
        </Link>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <Link
                  className="text-gray-800 transition hover:text-gray-500/75"
                  href="/"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  className="text-gray-800 transition hover:text-gray-500/75"
                  href="/shop"
                >
                  Shop
                </Link>
              </li>

              <li>
                <Link
                  className="text-gray-800 transition hover:text-gray-500/75"
                  href="/"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="flex gap-8 flex items-center">
              <HeartHeaderIcon />
              <CartHeaderIcon />
            </div>

            <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
