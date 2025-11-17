import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getMeal } from '@/library/meals';

export default async function MealDetailsPage({ params }) {
  const { mealSlug } = await params;       

  const meal = getMeal(mealSlug);           // fetch single meal

  if (!meal || typeof meal.instructions !== "string") {
    notFound();
  }

  const instructions = meal.instructions.replace(/\n/g, "<br />");

  return (
    <>
      {/* HEADER */}
      <header
        className="
          max-w-5xl mx-auto mt-30
          flex flex-col lg:flex-row gap-10
          bg-[rgba(255,255,255,0.08)]
          border border-[rgba(255,255,255,0.15)]
          backdrop-blur-xl
          rounded-2xl
          shadow-[0_10px_35px_rgba(0,0,0,0.3)]
          p-6 lg:p-10
          text-white
        "
      >
        <div className="relative w-full lg:w-1/2 h-64 lg:h-96 rounded-xl overflow-hidden">
          <Image
            src={meal.image}
            alt={meal.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center space-y-4 lg:w-1/2">
          <h1 className="text-4xl font-bold drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]">
            {meal.title}
          </h1>

          <p className="text-purple-200 text-sm">
            by{" "}
            <a
              href={`mailto:${meal.creator_email}`}
              className="underline hover:text-purple-300 transition"
            >
              {meal.creator}
            </a>
          </p>

          <p className="text-white/90 text-lg leading-relaxed">
            {meal.summary}
          </p>
        </div>
      </header>

      {/* INSTRUCTIONS */}
      <main className="max-w-4xl mx-auto mt-12 mb-20 px-4">
        <p
          className="
            text-white/90 text-lg leading-8
            bg-[rgba(255,255,255,0.06)]
            backdrop-blur-xl
            border border-[rgba(255,255,255,0.12)]
            shadow-[0_0_25px_rgba(0,0,0,0.25)]
            rounded-2xl p-8
          "
          dangerouslySetInnerHTML={{
            __html: instructions,
          }}
        ></p>
      </main>
    </>
  );
}
