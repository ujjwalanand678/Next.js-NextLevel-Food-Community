export default function NotFound() {
  return (
    <main
      className="
        flex flex-col items-center justify-center
        h-[70vh] px-6 text-center text-white
      "
    >
      <div
        className="
          bg-[rgba(255,255,255,0.08)]
          backdrop-blur-xl
          border border-[rgba(255,255,255,0.2)]
          rounded-2xl
          shadow-[0_10px_30px_rgba(0,0,0,0.3)]
          px-10 py-12
          max-w-xl
        "
      >
        <h1 className="text-4xl font-semibold mb-4 drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]">
          Not Found
        </h1>

        <p className="text-white/80 text-lg leading-relaxed">
          Unfortunately, we could not find the page or resource you were looking for.
        </p>
      </div>
    </main>
  );
}
