import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Banner() {
  return (
    <div className="relative mt-24">
      <div className="bg-gradient-to-t to-transparent from-gray-100 h-52 absolute w-full bottom-0 z-30" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators
        showThumbs={false}
        interval={6000}
      >
        <div>
          <img loading="lazy" alt="" src="https://links.papareact.com/gi1" />
        </div>
        <div>
          <img loading="lazy" alt="" src="https://links.papareact.com/6ff" />
        </div>
        <div>
          <img loading="lazy" alt="" src="https://links.papareact.com/7ma" />
        </div>
      </Carousel>
    </div>
  );
}
