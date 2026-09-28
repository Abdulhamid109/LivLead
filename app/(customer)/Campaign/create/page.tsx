"use client";

import Link from "next/link";
import React, { useState } from "react";

const Page = () => {
  const [campaignType, setCampaignType] = useState("local");

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* Header */}
      <header className="border-b border-zinc-800 bg-zinc-950/90 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-4 flex items-center justify-between">
          <Link
            href="/dashboard"
            className="flex items-center gap-2"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
              <span className="font-bold">L</span>
            </div>

            <span className="text-xl font-bold">
              LivLead
            </span>
          </Link>

          <Link
            href="/dashboard"
            className="text-sm text-zinc-400 hover:text-white transition"
          >
            Cancel
          </Link>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-12">

        {/* Page heading */}
        <div className="max-w-2xl mb-10">
          <p className="text-sm text-red-400 font-medium mb-3">
            NEW CAMPAIGN
          </p>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Create your campaign
          </h1>

          <p className="mt-3 text-zinc-400 leading-7">
            Tell LivLead who you&apos;re looking for and what kind of
            opportunities you want to discover.
          </p>
        </div>

        {/* Progress */}
        <div className="flex items-center gap-3 mb-10">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-sm font-bold">
              1
            </span>

            <span className="text-sm font-medium">
              Target
            </span>
          </div>

          <div className="h-px w-12 sm:w-20 bg-zinc-800" />

          <div className="flex items-center gap-2 text-zinc-600">
            <span className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center text-sm">
              2
            </span>

            <span className="text-sm">
              Outreach
            </span>
          </div>

          <div className="h-px w-12 sm:w-20 bg-zinc-800" />

          <div className="flex items-center gap-2 text-zinc-600">
            <span className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center text-sm">
              3
            </span>

            <span className="text-sm">
              Review
            </span>
          </div>
        </div>

        {/* Campaign form */}
        <div className="space-y-6">

          {/* Campaign information */}
          <section className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8">
            <div className="mb-7">
              <h2 className="text-xl font-semibold">
                Campaign information
              </h2>

              <p className="text-sm text-zinc-500 mt-1">
                Give your campaign a name so you can identify it later.
              </p>
            </div>

            <div>
              <label
                htmlFor="campaignName"
                className="block text-sm font-medium text-zinc-300 mb-2"
              >
                Campaign name
              </label>

              <input
                id="campaignName"
                type="text"
                placeholder="e.g. Mumbai Gym Outreach"
                className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-700 text-white placeholder:text-zinc-600 outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition"
              />
            </div>
          </section>

          {/* Target audience */}
          <section className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8">
            <div className="mb-7">
              <h2 className="text-xl font-semibold">
                Who are you looking for?
              </h2>

              <p className="text-sm text-zinc-500 mt-1">
                Define the businesses you want LivLead to discover.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5">

              {/* Business category */}
              <div>
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-zinc-300 mb-2"
                >
                  Business category
                </label>

                <input
                  id="category"
                  type="text"
                  placeholder="e.g. Gyms, salons, restaurants"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-700 text-white placeholder:text-zinc-600 outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition"
                />
              </div>

              {/* Location */}
              <div>
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-zinc-300 mb-2"
                >
                  Location
                </label>

                <input
                  id="location"
                  type="text"
                  placeholder="e.g. Mumbai, India"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-700 text-white placeholder:text-zinc-600 outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition"
                />
              </div>

            </div>
          </section>

          {/* Campaign type */}
          <section className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8">
            <div className="mb-7">
              <h2 className="text-xl font-semibold">
                How should LivLead find them?
              </h2>

              <p className="text-sm text-zinc-500 mt-1">
                Choose how you want to discover potential businesses.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">

              <button
                type="button"
                onClick={() => setCampaignType("local")}
                className={`text-left p-5 rounded-xl border transition ${
                  campaignType === "local"
                    ? "border-red-500 bg-red-500/5"
                    : "border-zinc-800 bg-zinc-950 hover:border-zinc-600"
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">
                      Local businesses
                    </h3>

                    <p className="text-sm text-zinc-500 mt-2 leading-6">
                      Discover businesses around a specific location using
                      business categories.
                    </p>
                  </div>

                  <span
                    className={`w-4 h-4 rounded-full border ${
                      campaignType === "local"
                        ? "border-red-500 bg-red-500"
                        : "border-zinc-600"
                    }`}
                  />
                </div>
              </button>

              <button
                type="button"
                onClick={() => setCampaignType("custom")}
                className={`text-left p-5 rounded-xl border transition ${
                  campaignType === "custom"
                    ? "border-red-500 bg-red-500/5"
                    : "border-zinc-800 bg-zinc-950 hover:border-zinc-600"
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">
                      Custom search
                    </h3>

                    <p className="text-sm text-zinc-500 mt-2 leading-6">
                      Define your own search criteria for a more specific
                      campaign.
                    </p>
                  </div>

                  <span
                    className={`w-4 h-4 rounded-full border ${
                      campaignType === "custom"
                        ? "border-red-500 bg-red-500"
                        : "border-zinc-600"
                    }`}
                  />
                </div>
              </button>

            </div>
          </section>

          {/* AI Analysis */}
          <section className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8">

            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-5">
              <div>
                <div className="flex items-center gap-3">
                  <h2 className="text-xl font-semibold">
                    AI opportunity analysis
                  </h2>

                  <span className="text-[10px] px-2 py-1 rounded-full bg-red-500/10 text-red-400 border border-red-500/20">
                    AI
                  </span>
                </div>

                <p className="text-sm text-zinc-500 mt-2 max-w-2xl leading-6">
                  LivLead can analyze a business&apos;s online presence and help
                  identify potential areas where your services may provide
                  value.
                </p>
              </div>

              <div className="relative inline-flex h-6 w-11 shrink-0">
                <input
                  type="checkbox"
                  defaultChecked
                  className="peer sr-only"
                  id="aiAnalysis"
                />

                <label
                  htmlFor="aiAnalysis"
                  className="w-11 h-6 rounded-full bg-zinc-700 peer-checked:bg-red-500 cursor-pointer transition"
                >
                  <span className="block w-4 h-4 mt-1 ml-1 rounded-full bg-white transition peer-checked:translate-x-5" />
                </label>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-zinc-950 border border-zinc-800">
              <p className="text-xs text-zinc-500">
                Example analysis
              </p>

              <p className="mt-2 text-sm text-zinc-300">
                &quot;No dedicated website found. Business relies mainly on
                Google and social media. Potential opportunity for a website
                and online enquiry system.&quot;
              </p>
            </div>

          </section>

          {/* Target number */}
          <section className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8">
            <div className="mb-7">
              <h2 className="text-xl font-semibold">
                Lead target
              </h2>

              <p className="text-sm text-zinc-500 mt-1">
                How many businesses would you like to discover?
              </p>
            </div>

            <div className="max-w-xs">
              <input
                type="number"
                min="1"
                placeholder="e.g. 50"
                className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-700 text-white placeholder:text-zinc-600 outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition"
              />
            </div>
          </section>

          {/* Continue */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-3">
            <Link
              href="/dashboard"
              className="text-sm text-zinc-500 hover:text-white transition"
            >
              ← Back to dashboard
            </Link>

            <Link href="/Campaign/outreach">
            <button
              type="button"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold hover:from-red-400 hover:to-orange-400 transition shadow-lg shadow-red-500/10"
            >
              Continue to Outreach →
            </button></Link>
          </div>

        </div>
      </div>
    </main>
  );
};

export default Page;