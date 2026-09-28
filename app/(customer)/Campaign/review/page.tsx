import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* Header */}
      <header className="border-b border-zinc-800 bg-zinc-950/90 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-4 flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
              <span className="font-bold">L</span>
            </div>

            <span className="text-xl font-bold">
              LivLead
            </span>
          </Link>

          <Link
            href="/campaign/outreach"
            className="text-sm text-zinc-400 hover:text-white transition"
          >
            ← Back
          </Link>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-12">
        {/* Heading */}
        <div className="max-w-2xl mb-10">
          <p className="text-sm text-red-400 font-medium mb-3">
            FINAL STEP
          </p>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Review your campaign
          </h1>

          <p className="mt-3 text-zinc-400 leading-7">
            Everything looks ready. Review your campaign settings
            before launching it.
          </p>
        </div>

        {/* Progress */}
        <div className="flex items-center gap-3 mb-10">
          <div className="flex items-center gap-2 text-zinc-500">
            <span className="w-8 h-8 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center text-sm font-bold">
              ✓
            </span>
            <span className="text-sm">Target</span>
          </div>

          <div className="h-px w-12 sm:w-20 bg-red-500/40" />

          <div className="flex items-center gap-2 text-zinc-500">
            <span className="w-8 h-8 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center text-sm font-bold">
              ✓
            </span>
            <span className="text-sm">Outreach</span>
          </div>

          <div className="h-px w-12 sm:w-20 bg-red-500/40" />

          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-sm font-bold">
              3
            </span>

            <span className="text-sm font-medium">
              Review
            </span>
          </div>
        </div>

        <div className="space-y-6">
          {/* Campaign summary */}
          <section className="rounded-2xl border border-zinc-800 bg-zinc-900/50 overflow-hidden">
            <div className="p-6 sm:p-8 border-b border-zinc-800">
              <div className="flex justify-between items-start gap-5">
                <div>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider">
                    Campaign
                  </p>

                  <h2 className="text-2xl font-semibold mt-2">
                    Mumbai Gym Outreach
                  </h2>

                  <p className="text-sm text-zinc-500 mt-2">
                    Local business discovery campaign
                  </p>
                </div>

                <Link
                  href="/campaign/create"
                  className="text-sm text-red-400 hover:text-red-300"
                >
                  Edit
                </Link>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-zinc-800">
              <div className="p-6">
                <p className="text-xs text-zinc-500">
                  Category
                </p>

                <p className="mt-2 font-medium">
                  Gyms
                </p>
              </div>

              <div className="p-6">
                <p className="text-xs text-zinc-500">
                  Location
                </p>

                <p className="mt-2 font-medium">
                  Mumbai, India
                </p>
              </div>

              <div className="p-6">
                <p className="text-xs text-zinc-500">
                  Lead target
                </p>

                <p className="mt-2 font-medium">
                  50 businesses
                </p>
              </div>
            </div>
          </section>

          {/* Discovery */}
          <section className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-semibold">
                  Lead discovery
                </h2>

                <p className="text-sm text-zinc-500 mt-1">
                  How LivLead will find opportunities.
                </p>
              </div>

              <Link
                href="/campaign/create"
                className="text-sm text-red-400 hover:text-red-300"
              >
                Edit
              </Link>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 rounded-xl bg-zinc-950 border border-zinc-800">
                <div>
                  <p className="text-sm font-medium">
                    Search method
                  </p>

                  <p className="text-xs text-zinc-600 mt-1">
                    Local businesses
                  </p>
                </div>

                <span className="text-sm text-zinc-400">
                  Google Places
                </span>
              </div>

              <div className="flex justify-between items-center p-4 rounded-xl bg-zinc-950 border border-zinc-800">
                <div>
                  <p className="text-sm font-medium">
                    AI opportunity analysis
                  </p>

                  <p className="text-xs text-zinc-600 mt-1">
                    Identify potential service opportunities
                  </p>
                </div>

                <span className="px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs">
                  Enabled
                </span>
              </div>
            </div>
          </section>

          {/* Outreach summary */}
          <section className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-semibold">
                  Outreach
                </h2>

                <p className="text-sm text-zinc-500 mt-1">
                  Channels configured for this campaign.
                </p>
              </div>

              <Link
                href="/campaign/outreach"
                className="text-sm text-red-400 hover:text-red-300"
              >
                Edit
              </Link>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-xl bg-zinc-950 border border-zinc-800">
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center">
                  ✉
                </div>

                <h3 className="font-medium mt-4">
                  Email
                </h3>

                <p className="text-xs text-green-400 mt-2">
                  Enabled
                </p>
              </div>

              <div className="p-5 rounded-xl bg-zinc-950 border border-zinc-800">
                <div className="w-9 h-9 rounded-lg bg-green-500/10 text-green-400 flex items-center justify-center">
                  ◉
                </div>

                <h3 className="font-medium mt-4">
                  WhatsApp
                </h3>

                <p className="text-xs text-zinc-500 mt-2">
                  Not selected
                </p>
              </div>

              <div className="p-5 rounded-xl bg-zinc-950 border border-zinc-800">
                <div className="w-9 h-9 rounded-lg bg-orange-500/10 text-orange-400 flex items-center justify-center">
                  ☎
                </div>

                <h3 className="font-medium mt-4">
                  AI Calling
                </h3>

                <p className="text-xs text-green-400 mt-2">
                  Enabled
                </p>
              </div>
            </div>
          </section>

          {/* AI preview */}
          <section className="rounded-2xl border border-red-500/20 bg-red-500/[0.03] p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
                AI
              </div>

              <div>
                <h2 className="font-semibold">
                  AI opportunity analysis
                </h2>

                <p className="text-xs text-zinc-500 mt-1">
                  Enabled for this campaign
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-zinc-950 border border-zinc-800">
              <p className="text-xs text-zinc-500">
                Example opportunity
              </p>

              <p className="text-sm text-zinc-300 mt-2 leading-6">
                No dedicated website found. Business relies mainly
                on Google and social media. Potential opportunity
                for a website and online enquiry system.
              </p>
            </div>
          </section>

          {/* Launch warning */}
          <div className="rounded-xl border border-amber-500/20 bg-amber-500/[0.03] p-5">
            <div className="flex gap-4">
              <div className="text-amber-400 text-lg">
                !
              </div>

              <div>
                <h3 className="text-sm font-medium text-amber-300">
                  Before you launch
                </h3>

                <p className="text-sm text-zinc-500 mt-1 leading-6">
                  LivLead will begin discovering businesses and
                  preparing outreach based on these settings.
                  Make sure your campaign details and outreach
                  configuration are correct.
                </p>
              </div>
            </div>
          </div>

          {/* Final actions */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-3">
            <Link
              href="/campaign/outreach"
              className="text-sm text-zinc-500 hover:text-white transition"
            >
              ← Back to Outreach
            </Link>

            <Link href={"/Campaign/demo"}>
            <button
              type="button"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold hover:from-red-400 hover:to-orange-400 transition shadow-lg shadow-red-500/10"
            >
              Launch Campaign 🚀
            </button></Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;