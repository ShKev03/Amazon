import React from "react";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline";

function Navbar() {
  const [session] = useSession();

  const router = useRouter();

  return (
    <div className="flex items-center bg-amazon_blue p-1 py-2 flex-grow z-99 ">
      <div className="flex items-center flex-grow 2xl:flex-grow-0 justify-between mt-2">
        <Image
          onClick={() => router.push("/")}
          src="https://links.papareact.com/f90"
          width={150}
          height={40}
          objectFit="contain"
          className="animate-pulse cursor-pointer"
        />
        <div className="hidden md:flex flex-shrink 2xl:flex-grow-0 bg-yellow-400 hover:bg-yellow-500 h-11 rounded-md flex-grow w-full`">
          <input
            type="text"
            className="focus:outline-none rounded-l-md p-2 w-full"
          />
          <SearchIcon className="h-11 p-4" />
        </div>
        <div className="text-white flex space-x-6 text-xs sm:text-sm ml-3">
          <div
            onClick={!session ? signIn : signOut}
            className="hover:text-yellow-200 cursor-pointer"
          >
            <p>{session ? `Hello ${session.user.name}` : "Sign In"}</p>
            <p className=" font-bold ">Account & Lists</p>
          </div>
          <div className="hover:text-yellow-200 cursor-pointer">
            <p>Return</p>
            <p className=" font-bold ">& Orders</p>
          </div>
          <div
            onClick={() => router.push("/cart")}
            className=" realtive hover:text-yellow-200 flex items-center cursor-pointer"
          >
            <span className="absolute top-2 right-1 bg-yellow-500 text-black font-bold text-center sm:right-16 sm:h-4 h-5 w-4 rounded-full">
              0
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-bold text-xl mr-2">Cart</p>
          </div>
        </div>
      </div>
      <div className="p-1 sm:p-3"></div>
    </div>
  );
}

export default Navbar;
