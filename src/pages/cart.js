import Image from "next/image";
import React from "react";
import Navbar from "../components/Navbar";
import NavbarDown from "../components/NavbarDown";

function Cart() {
  return (
    <div className="bg-gray-100">
      <head>
        <title>Your Cart</title>
      </head>
      <div className="fixed z-50 w-full top-0 left-0">
        <Navbar />
        <NavbarDown />
      </div>
      <div className=" flex flex-col max-w-screen-xl mx-auto mt-24 items-center">
        <Image
          src="https://links.papareact.com/ikj"
          width={1020}
          height={250}
          objectFit="contain"
        />
        <div className="lg:flex w-full flex-grow-0 bg-white mt-5  mx-5 p-5 rounded-t-2xl shadow-md mb-10">
          <div className="flex flex-col space-y-10 p-5">
            <h1 className="text-3xl font-light w-full text-center p-5">
              Your Shopping Cart
            </h1>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
