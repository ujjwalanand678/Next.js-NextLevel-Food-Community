"use client";
// This tells Next.js that this component uses React hooks
// and must run in the browser (not on the server).

import React, { useEffect, useState } from "react";
import Image from "next/image";
// Images imported from your assets folder
import burgerImg from "@/assets/burger.jpg";
import curryImg from "@/assets/curry.jpg";
import dumplingsImg from "@/assets/dumplings.jpg";
import macncheeseImg from "@/assets/macncheese.jpg";
import pizzaImg from "@/assets/pizza.jpg";
import schnitzelImg from "@/assets/schnitzel.jpg";
import tomatoSaladImg from "@/assets/tomato-salad.jpg";

const ImageSlider = () => {
      // 1) Store all images in an array
  const images = [
    { image: burgerImg, alt: "A delicious, juicy burger" },
    { image: curryImg, alt: "A delicious, spicy curry" },
    { image: dumplingsImg, alt: "Steamed dumplings" },
    { image: macncheeseImg, alt: "Mac and cheese" },
    { image: pizzaImg, alt: "A delicious pizza" },
    { image: schnitzelImg, alt: "A delicious schnitzel" },
    { image: tomatoSaladImg, alt: "A delicious tomato salad" },
  ];
 // 2) Track which image is currently visible
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
// 3) useEffect runs a timer that switches images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
        // If not last image → go to next image
        // If last image → go back to 0
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

// Cleanup: stop the timer if component is removed
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-[350px] md:h-[400px] backdrop-blur-lg overflow-hidden rounded-2xl shadow-xl">
      {images.map((item, index) => (
        <Image
          key={index}
          src={item.image}
          alt={item.alt}
          fill
          className={`object-cover absolute top-0 left-0 transition-opacity duration-1500 ease-out ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
};

export default ImageSlider;
