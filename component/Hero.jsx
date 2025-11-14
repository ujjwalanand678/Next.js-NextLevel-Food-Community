import Link from "next/link";
import React from "react";
import ImageSlider from "./ImageSlider";

const Hero = () => {
  return (
    <>
      <header className="w-full pt-32 pb-20 text-center text-white">
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center gap-6">
          {/* Title */}
          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl font-bold drop-shadow-[0_0_12px_rgba(255,255,255,0.45)]">
              NextLevel Food for NextLevel Foodies
            </h1>
            <p className="text-lg opacity-90">
              Taste & share food from all over the world.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <Link
              href="/community"
              className="px-6 py-3 rounded-full 
              bg-[rgba(139,92,246,0.15)] 
              backdrop-blur-xl 
              border border-[rgba(139,92,246,0.3)]
              shadow-[0_0_18px_rgba(139,92,246,0.35)]
              hover:bg-[rgba(139,92,246,0.25)]
              hover:shadow-[0_0_25px_rgba(139,92,246,0.5)]
              transition-all duration-300 text-white"
            >
              Join the Community
            </Link>

            <Link
              href="/meals"
              className="px-6 py-3 rounded-full 
              bg-[rgba(255,255,255,0.08)] 
              backdrop-blur-xl 
              border border-white/20
              shadow-[0_0_15px_rgba(255,255,255,0.2)]
              hover:bg-[rgba(255,255,255,0.14)]
              hover:shadow-[0_0_25px_rgba(255,255,255,0.35)]
              transition-all duration-300 text-white"
            >
              Explore Meals
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 text-white py-10">
        <div className="flex flex-col md:flex-row items-start gap-12">
          {/* LEFT: Image Slider */}
          <div className="w-full md:w-1/2">
            <ImageSlider />
          </div>

          {/* RIGHT: Text sections */}
          <div className="w-full md:w-1/2 space-y-12">
            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="text-3xl font-semibold drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                How it works
              </h2>
              <p className="opacity-80 leading-relaxed">
                NextLevel Food is a platform for foodies to share their favorite
                recipes with the world. It’s a place to discover new dishes and
                connect with other food lovers.
              </p>
              <p className="opacity-80 leading-relaxed">
                Join the community, post your own recipes, and explore diverse
                cuisines from around the globe.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <h2 className="text-3xl font-semibold drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                Why NextLevel Food?
              </h2>
              <p className="opacity-80 leading-relaxed">
                We celebrate creativity, culture, and cooking. Share what you
                love and learn from others while enjoying a beautiful,
                community-driven platform.
              </p>
              <p className="opacity-80 leading-relaxed">
                Whether beginner or expert, this is where food lovers level up.
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
