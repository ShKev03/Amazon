import { MenuAlt1Icon } from "@heroicons/react/outline";
import React from "react";

function NavbarDown() {
  return (
    <div className="bg-amazon_blue-light text-white p-1 flex z-99 ">
      <p className="flex cursor-pointer mr-5 hover:text-yellow-200">
        <MenuAlt1Icon className="h-6 mr-1" />
        All
      </p>
      <p className="flex cursor-pointer mr-5 hover:text-yellow-200">
        Prime Video
      </p>
      <p className="flex cursor-pointer mr-5 hover:text-yellow-200">
        Amazon Business
      </p>
      <p className="flex cursor-pointer mr-5 hover:text-yellow-200">
        Today's Deal
      </p>
      <p className="hidden lg:inline-flex flex cursor-pointer mr-5 hover:text-yellow-200">
        Electronics
      </p>
      <p className="hidden lg:inline-flex flex cursor-pointer mr-5 hover:text-yellow-200">
        fOOD & Grossary
      </p>
      <p className="hidden lg:inline-flex flex cursor-pointer mr-5 hover:text-yellow-200">
        Shopper Tool Kit
      </p>
      <p className="hidden lg:inline-flex flex cursor-pointer mr-5 hover:text-yellow-200">
        Health and Personal care
      </p>
    </div>
  );
}

export default NavbarDown;
