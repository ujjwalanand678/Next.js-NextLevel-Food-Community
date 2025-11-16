import Link from "next/link";
import Image from "next/image";

export default function MealsItem({ title, slug, image, summary, creator }) {
  return (
    <article
      className="
        flex flex-col
        rounded-2xl overflow-hidden
        bg-[rgba(255,255,255,0.08)]
        backdrop-blur-xl
        border border-[rgba(255,255,255,0.2)]
        shadow-[0_10px_35px_rgba(0,0,0,0.3)]
        hover:bg-[rgba(255,255,255,0.15)]
        hover:shadow-[0_15px_45px_rgba(0,0,0,0.45)]
        transition-all duration-500
        h-full
      "
    >
      {/* FIXED IMAGE HEIGHT */}
      <div className="relative w-full h-56">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-center"
        />
      </div>

      {/* CONTENT */}
      <div className="flex flex-col p-6 space-y-4 grow">
        <div>
          <h2 className="text-2xl font-semibold text-white drop-shadow-md">
            {title}
          </h2>
          <p className="text-sm text-purple-200 opacity-90">by {creator}</p>
        </div>

        {/* FIXED MINIMUM FOR TEXT BLOCK */}
        <p className="text-white/90 leading-relaxed min-h-[70px]">
          {summary}
        </p>

        {/* BUTTON STAYS AT THE BOTTOM */}
        <div className="mt-auto">
          <Link
            href={`/meals/${slug}`}
            className="
              inline-block px-5 py-2.5 rounded-xl
              bg-[rgba(139,92,246,0.25)]
              border border-[rgba(139,92,246,0.5)]
              backdrop-blur-md
              text-white font-medium text-sm
              shadow-[0_0_20px_rgba(139,92,246,0.5)]
              hover:bg-[rgba(139,92,246,0.35)]
              hover:shadow-[0_0_30px_rgba(139,92,246,0.7)]
              transition-all duration-300
            "
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}
