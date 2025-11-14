import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/logo.png";

const MainHeader = () => {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-[rgba(0,0,0,0.25)] backdrop-blur-md border-b border-[rgba(255,255,255,0.1)] shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
      {/* Logo and Title */}
      <Link href="/" className="flex items-center gap-3">
        <Image
          src={logo}
          alt="Logo"
          width={52}
          height={52}
          className="drop-shadow-[0_0_12px_rgba(255,255,255,0.5)]"
        />

        <h1 className="text-2xl text-gray-200 font-semibold drop-shadow-[0_0_10px_rgba(255,255,255,0.65)]">
          NextLevel Food
        </h1>
      </Link>

      {/* Navigation */}
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link
              href="/meals"
              className="px-5 py-2 rounded-full
        bg-[rgba(139,92,246,0.15)] 
        backdrop-blur-xl
        border border-[rgba(139,92,246,0.35)]
        text-white
        shadow-[0_0_12px_rgba(139,92,246,0.35)]
        hover:bg-[rgba(139,92,246,0.25)]
        hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]
        transition-all duration-300"
            >
              Browse Meals
            </Link>
          </li>

          <li>
            <Link
              href="/community"
              className="px-5 py-2 rounded-full
        bg-[rgba(139,92,246,0.15)] 
        backdrop-blur-xl
        border border-[rgba(139,92,246,0.35)]
        text-white
        shadow-[0_0_12px_rgba(139,92,246,0.35)]
        hover:bg-[rgba(139,92,246,0.25)]
        hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]
        transition-all duration-300"
            >
              Community
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
