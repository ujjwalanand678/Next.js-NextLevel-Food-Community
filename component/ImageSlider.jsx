"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import burgerImg from "@/assets/burger.jpg";
import curryImg from "@/assets/curry.jpg";
import dumplingsImg from "@/assets/dumplings.jpg";
import macncheeseImg from "@/assets/macncheese.jpg";
import pizzaImg from "@/assets/pizza.jpg";
import schnitzelImg from "@/assets/schnitzel.jpg";
import tomatoSaladImg from "@/assets/tomato-salad.jpg";

const ImageSlider = () => {
  const images = [
    { image: burgerImg, alt: "A delicious, juicy burger" },
    { image: curryImg, alt: "A delicious, spicy curry" },
    { image: dumplingsImg, alt: "Steamed dumplings" },
    { image: macncheeseImg, alt: "Mac and cheese" },
    { image: pizzaImg, alt: "A delicious pizza" },
    { image: schnitzelImg, alt: "A delicious schnitzel" },
    { image: tomatoSaladImg, alt: "A delicious tomato salad" },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

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
