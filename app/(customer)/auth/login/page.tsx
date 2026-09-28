import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main className="min-h-screen bg-zinc-950 text-white flex items-center justify-center px-5 py-10">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
              <span className="font-bold text-lg">L</span>
            </div>

            <span className="text-2xl font-bold">LivLead</span>
          </Link>
        </div>

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">
            Welcome back
          </h1>

          <p className="text-zinc-400 mt-2">
            Sign in to continue managing your leads.
          </p>
        </div>

        {/* Login Card */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 backdrop-blur-sm p-7 shadow-2xl">
          <form className="flex flex-col gap-5">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-zinc-300 mb-2"
              >
                Email address
              </label>

              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-700 text-white placeholder:text-zinc-600 outline-none transition focus:border-red-500 focus:ring-1 focus:ring-red-500"
              />
            </div>

            {/* Password */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-zinc-300"
                >
                  Password
                </label>

                <Link
                  href="/auth/forgot-password"
                  className="text-xs text-red-400 hover:text-red-300 transition"
                >
                  Forgot password?
                </Link>
              </div>

              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-700 text-white placeholder:text-zinc-600 outline-none transition focus:border-red-500 focus:ring-1 focus:ring-red-500"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold hover:from-red-400 hover:to-orange-400 transition shadow-lg shadow-red-500/10"
            >
              Sign in
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-7">
            <div className="h-px flex-1 bg-zinc-800" />
            <span className="text-xs text-zinc-600">OR</span>
            <div className="h-px flex-1 bg-zinc-800" />
          </div>

          {/* Signup */}
          <p className="text-center text-sm text-zinc-400">
            Don&apos;t have an account?{" "}
            <Link
              href="/auth/signup"
              className="text-red-400 font-medium hover:text-red-300 transition"
            >
              Create an account
            </Link>
          </p>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-zinc-600 mt-6">
          Discover. Analyze. Reach. Convert.
        </p>
      </div>
    </main>
  );
};

export default page;