import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React, { useState } from "react";
import Currency from "react-currency-formatter";

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, price, description, category, image }) {
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );
  return (
    <div className="relative flex m-5 z-40 p-10 rounded-md shadow-md bg-white">
      <div className="flex flex-col justify-center mr-2 ">
        <p className="absolute top-2 right-4 text-xs text-gray-400">
          *{category}
        </p>
        <Image
          className="m-auto cursor-pointer "
          objectFit="contain"
          src={image}
          width={200}
          height={200}
        ></Image>
        <button className=" transition hover:animate-bounce p-2 mt-3 text-lg w-40 bg-yellow-400 text-center focus:outline-none rounded-md focus:ring-2 focus:ring-yellow-600">
          Add to Cart
        </button>
      </div>
      <div>
        <p className="my-3 line-clamp-2">{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon className="h-5 text-yellow-500" />
            ))}
        </div>
        <Currency
          className="my-5 text-lg"
          quantity={price * 72.91}
          currency="INR"
        />
        <p className="text-xs my-2 line-clamp-2 text-gray-600 w-full">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Product;
