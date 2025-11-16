import MealsGrid from '@/component/MealsGrid';
import Link from 'next/link';


export default function MealsPage() {
  return (
    <div className="text-white pt-32 px-6 max-w-5xl mx-auto">

      {/* HEADER */}
      <header className="text-center mb-16 space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold drop-shadow-[0_0_12px_rgba(255,255,255,0.45)]">
          Delicious meals, created{" "}
          <span className="text-purple-300">by you</span>
        </h1>

        <p className="text-lg opacity-90">
          Choose your favorite recipe and cook it yourself. It’s easy and fun!
        </p>

        <p className="mt-6">
          <Link
            href="/meals/share"
            className="inline-block px-6 py-3 rounded-full 
            bg-[rgba(139,92,246,0.2)] backdrop-blur-xl
            border border-[rgba(139,92,246,0.4)]
            shadow-[0_0_20px_rgba(139,92,246,0.4)]
            hover:bg-[rgba(139,92,246,0.3)]
            hover:shadow-[0_0_30px_rgba(139,92,246,0.6)]
            transition-all duration-300 text-white font-medium"
          >
            Share Your Favorite Recipe
          </Link>
        </p>
      </header>

      {/* MAIN SECTION */}
      <main className="pb-20">
        <MealsGrid meals={[]} />
      </main>
    </div>
  );
}
