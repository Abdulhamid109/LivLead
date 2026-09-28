import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800 bg-zinc-950/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
            <span className="font-bold text-white">L</span>
          </div>

          <span className="text-xl font-bold tracking-tight text-white group-hover:text-red-400 transition">
            LivLead
          </span>
        </Link>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-8 text-sm">
          <li>
            <Link
              href="/campaign"
              className="text-zinc-400 hover:text-white transition"
            >
              Campaigns
            </Link>
          </li>

          <li>
            <Link
              href="/about"
              className="text-zinc-400 hover:text-white transition"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              href="/ai-calling"
              className="text-zinc-400 hover:text-white transition flex items-center gap-2"
            >
              AI Calling
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-red-500/10 text-red-400 border border-red-500/20">
                AI
              </span>
            </Link>
          </li>
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <Link
            href="/dashboard"
            className="hidden sm:block px-4 py-2 rounded-lg text-sm text-zinc-300 border border-zinc-800 hover:border-zinc-600 hover:text-white transition"
          >
            Dashboard
          </Link>

          <Link
            href="/auth/logout"
            className="px-4 py-2 rounded-lg text-sm font-medium bg-white text-black hover:bg-zinc-200 transition"
          >
            Logout
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;