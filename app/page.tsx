"use client";
import clsx from "clsx";
import { useFormState, useFormStatus } from "react-dom";
import { send } from "./lib/actions";
import * as React from "react";
import { toast } from "sonner";

export default function Page() {
  const [state, dispatch] = useFormState(send, undefined);

  React.useEffect(() => {
    if (!state) return;
    if ("data" in state) {
      toast.success(state.data);
    } else if ("error" in state) {
      toast.error(`Error when sending email: ${state.error}`);
    }
  }, [state]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-950 p-6 sm:p-10 flex justify-center items-center">
      <div className="w-full max-w-4xl mx-auto">
        <div className="relative backdrop-blur-xl bg-white/10 p-10 sm:p-14 rounded-2xl border border-white/15 shadow-2xl">
          {/* Decorative elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-2xl filter blur-3xl -z-10" />
          <div className="absolute -top-14 -right-14 w-48 h-48 bg-purple-500/25 rounded-full filter blur-3xl" />
          <div className="absolute -bottom-14 -left-14 w-48 h-48 bg-pink-500/25 rounded-full filter blur-3xl" />

          <div className="space-y-10">
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200 text-center">
                Good Things Come to Those Who Wait
              </h2>
              <p className="text-gray-300 text-center text-lg sm:text-xl max-w-2xl mx-auto">
                Join us to access exclusive updates, stay in the know, and be
                the first to experience what’s coming.
              </p>
            </div>

            <form
              className="mt-12 flex flex-col sm:flex-row gap-5 max-w-md mx-auto w-full"
              action={dispatch}
            >
              <div className="relative flex-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  autoComplete="email"
                  aria-label="Email Address"
                  className="w-full h-14 rounded-xl bg-white/10 px-5 text-white placeholder-gray-500 
                    border border-white/15 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 
                    transition-all duration-200 outline-none"
                />
              </div>
              <SubmitButton />
            </form>

            <div className="text-center text-sm text-gray-500 mt-8">
              By joining, you agree to our{" "}
              <a href="#" className="text-purple-400 underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-purple-400 underline">
                Privacy Policy
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className={clsx(
        "h-14 px-10 rounded-xl font-semibold transition-all duration-200",
        "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500",
        "text-white shadow-lg shadow-purple-500/25",
        "focus:ring-2 focus:ring-purple-500/30 outline-none",
        pending && "opacity-60 cursor-not-allowed"
      )}
    >
      {pending ? "Sending..." : "Join Waitlist"}
    </button>
  );
}
