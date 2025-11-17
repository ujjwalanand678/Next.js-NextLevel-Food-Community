export default function ShareMealPage() {
  return (
    <>
      {/* HEADER */}
      <header
        className="
          text-center py-16 px-4
          text-white
        "
      >
        <h1 className="text-4xl font-bold mb-4">
          Share your{" "}
          <span className="text-purple-300 drop-shadow-[0_0_10px_rgba(168,85,247,0.6)]">
            favorite meal
          </span>
        </h1>

        <p className="text-white/80 text-lg">
          Or any other meal you feel needs sharing!
        </p>
      </header>

      {/* MAIN */}
      <main className="max-w-3xl mx-auto px-4 mb-20">
        <form
          className="
            bg-[rgba(255,255,255,0.08)]
            backdrop-blur-xl
            border border-[rgba(255,255,255,0.15)]
            rounded-2xl
            shadow-[0_10px_35px_rgba(0,0,0,0.3)]
            p-8 md:p-12
            space-y-8
            text-white
          "
        >
          {/* ROW: NAME + EMAIL */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <p className="flex flex-col space-y-2">
              <label htmlFor="name" className="font-medium">
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="
                  px-4 py-2 rounded-lg bg-white/10
                  border border-white/20 text-white
                  focus:border-purple-400 focus:ring-2 focus:ring-purple-500
                  outline-none transition
                "
              />
            </p>

            <p className="flex flex-col space-y-2">
              <label htmlFor="email" className="font-medium">
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="
                  px-4 py-2 rounded-lg bg-white/10
                  border border-white/20 text-white
                  focus:border-purple-400 focus:ring-2 focus:ring-purple-500
                  outline-none transition
                "
              />
            </p>
          </div>

          {/* TITLE */}
          <p className="flex flex-col space-y-2">
            <label htmlFor="title" className="font-medium">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              required
              className="
                px-4 py-2 rounded-lg bg-white/10
                border border-white/20 text-white
                focus:border-purple-400 focus:ring-2 focus:ring-purple-500
                outline-none transition
              "
            />
          </p>

          {/* SUMMARY */}
          <p className="flex flex-col space-y-2">
            <label htmlFor="summary" className="font-medium">Short Summary</label>
            <input
              type="text"
              id="summary"
              name="summary"
              required
              className="
                px-4 py-2 rounded-lg bg-white/10
                border border-white/20 text-white
                focus:border-purple-400 focus:ring-2 focus:ring-purple-500
                outline-none transition
              "
            />
          </p>

          {/* INSTRUCTIONS */}
          <p className="flex flex-col space-y-2">
            <label htmlFor="instructions" className="font-medium">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
              className="
                px-4 py-2 rounded-lg bg-white/10
                border border-white/20 text-white
                focus:border-purple-400 focus:ring-2 focus:ring-purple-500
                outline-none transition resize-none
              "
            ></textarea>
          </p>

          {/* IMAGE PICKER PLACEHOLDER */}
          <p className="text-white/70 italic">
            IMAGE PICKER
          </p>

          {/* BUTTON */}
          <p className="text-center">
            <button
              type="submit"
              className="
                px-8 py-3 rounded-xl
                bg-[rgba(139,92,246,0.3)]
                border border-[rgba(139,92,246,0.5)]
                backdrop-blur-md
                text-white font-medium
                shadow-[0_0_20px_rgba(139,92,246,0.4)]
                hover:bg-[rgba(139,92,246,0.4)]
                hover:shadow-[0_0_30px_rgba(139,92,246,0.6)]
                transition-all duration-300
              "
            >
              Share Meal
            </button>
          </p>
        </form>
      </main>
    </>
  );
}
