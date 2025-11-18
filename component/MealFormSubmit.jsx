"use client";

import { useFormStatus } from "react-dom";

export default function MealsFormSubmit() {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
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
      {pending ? "Submitting..." : "Share Meal"}
    </button>
  );
}
