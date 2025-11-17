'use client';

export default function Error() {
  return (
    <main
      className="
        flex flex-col items-center justify-center
        h-[60vh] px-6 text-center
        text-white
      "
    >
      <div
        className="
          bg-[rgba(255,255,255,0.08)]
          backdrop-blur-xl
          border border-[rgba(255,255,255,0.2)]
          rounded-2xl
          shadow-[0_10px_30px_rgba(0,0,0,0.3)]
          px-8 py-10
          max-w-lg
        "
      >
        <h1 className="text-3xl font-semibold mb-4 drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]">
          An error occurred!
        </h1>

        <p className="text-white/80 leading-relaxed">
          Failed to fetch meal data. Please try again later.
        </p>
      </div>
    </main>
  );
}
