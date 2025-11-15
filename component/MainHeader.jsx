"use client";

import { useState } from "react";
import { usePathname } from "next/navigation"; // ⭐ Import pathname hook
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";

const MainHeader = () => {
  const [open, setOpen] = useState(false);

  const pathname = usePathname(); // ⭐ Get the current URL path

  // ⭐ Tailwind active styles (glow + brighter background)
  const activeClass =
    "bg-[rgba(139,92,246,0.35)] border-[rgba(139,92,246,0.6)] shadow-[0_0_25px_rgba(139,92,246,0.7)]";

  // ⭐ Tailwind normal styles
  const baseClass =
    "px-5 py-2 rounded-full bg-[rgba(255,255,255,0.12)] backdrop-blur-xl border border-[rgba(255,255,255,0.25)] text-white shadow-[0_0_20px_rgba(0,0,0,0.2)] hover:bg-[rgba(255,255,255,0.18)] transition";

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-[rgba(0,0,0,0.2)] backdrop-blur-xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 text-gray-50">

        {/* Logo + Title */}
        <Link href="/" className="flex items-center gap-3">
          <div className="p-1 rounded-full bg-[rgba(255,255,255,0.12)] backdrop-blur-xl border border-[rgba(255,255,255,0.25)] shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            <Image src={logo} alt="Logo" width={42} height={42} className="rounded-full" />
          </div>
          <h1 className="text-xl md:text-2xl font-semibold drop-shadow-[0_0_10px_rgba(255,255,255,0.65)]">
            NextLevel Food
          </h1>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex gap-4">

            {/* Meals Link */}
            <li>
              <Link
                href="/meals"
                className={`${baseClass} ${pathname === "/meals" ? activeClass : ""}`}
              >
                Browse Meals
              </Link>
            </li>

            {/* Community Link */}
            <li>
              <Link
                href="/community"
                className={`${baseClass} ${pathname === "/community" ? activeClass : ""}`}
              >
                Community
              </Link>
            </li>

          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <span className="text-3xl">&times;</span>
          ) : (
            <span className="text-3xl">&#9776;</span>
          )}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {open && (
        <nav className="md:hidden bg-[rgba(0,0,0,0.4)] backdrop-blur-xl px-6 py-4 text-white">
          <ul className="flex flex-col gap-4">

            {/* Meals Mobile Link */}
            <li>
              <Link
                href="/meals"
                onClick={() => setOpen(false)}
                className={`block px-4 py-2 rounded-lg bg-[rgba(255,255,255,0.12)] border border-white/20 ${pathname === "/meals" ? "bg-purple-600/40 border-purple-400" : ""}`}
              >
                Browse Meals
              </Link>
            </li>

            {/* Community Mobile Link */}
            <li>
              <Link
                href="/community"
                onClick={() => setOpen(false)}
                className={`block px-4 py-2 rounded-lg bg-[rgba(255,255,255,0.12)] border border-white/20 ${pathname === "/community" ? "bg-purple-600/40 border-purple-400" : ""}`}
              >
                Community
              </Link>
            </li>

          </ul>
        </nav>
      )}
    </header>
  );
};

export default MainHeader;
