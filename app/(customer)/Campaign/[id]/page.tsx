import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-4 flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
              <span className="font-bold">L</span>
            </div>

            <span className="text-xl font-bold">
              LivLead
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <Link
              href="/dashboard"
              className="text-sm text-zinc-400 hover:text-white transition"
            >
              Dashboard
            </Link>

            <div className="w-9 h-9 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-sm font-medium">
              T
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-8">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-zinc-500 mb-7">
          <Link
            href="/dashboard"
            className="hover:text-white transition"
          >
            Dashboard
          </Link>

          <span>/</span>

          <span className="text-zinc-300">
            Mumbai Gym Outreach
          </span>
        </div>

        {/* Campaign Header */}
        <section className="mb-8">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">

            <div>
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                  Mumbai Gym Outreach
                </h1>

                <span className="px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium">
                  Active
                </span>
              </div>

              <p className="text-zinc-500 mt-2">
                Gyms · Mumbai, India · Created just now
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                className="px-4 py-2.5 rounded-lg border border-zinc-800 bg-zinc-900 text-sm text-zinc-300 hover:border-zinc-600 hover:text-white transition"
              >
                Pause Campaign
              </button>

              <button
                type="button"
                className="px-4 py-2.5 rounded-lg border border-red-500/20 bg-red-500/10 text-sm text-red-400 hover:bg-red-500/15 transition"
              >
                Stop
              </button>
            </div>
          </div>
        </section>

        {/* Discovery Progress */}
        <section className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8 mb-6">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-lg font-semibold">
                  Discovering businesses
                </h2>

                <span className="px-2 py-1 rounded-full bg-red-500/10 text-red-400 border border-red-500/20 text-[10px] font-medium">
                  RUNNING
                </span>
              </div>

              <p className="text-sm text-zinc-500 mt-1">
                LivLead is finding businesses that match your campaign.
              </p>
            </div>

            <span className="text-sm text-zinc-400">
              32 / 50 businesses
            </span>
          </div>

          <div className="h-2 rounded-full bg-zinc-800 overflow-hidden">
            <div className="h-full w-[64%] bg-gradient-to-r from-red-500 to-orange-500 rounded-full" />
          </div>

          <div className="flex justify-between mt-3 text-xs text-zinc-600">
            <span>
              Discovery in progress
            </span>

            <span>
              64%
            </span>
          </div>
        </section>

        {/* Stats */}
        <section className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-6">

          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
            <p className="text-xs text-zinc-500">
              Total Leads
            </p>

            <p className="text-2xl font-bold mt-2">
              32
            </p>

            <p className="text-xs text-zinc-600 mt-1">
              Target: 50
            </p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
            <p className="text-xs text-zinc-500">
              Qualified
            </p>

            <p className="text-2xl font-bold mt-2">
              21
            </p>

            <p className="text-xs text-green-400 mt-1">
              65.6%
            </p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
            <p className="text-xs text-zinc-500">
              Contacted
            </p>

            <p className="text-2xl font-bold mt-2">
              14
            </p>

            <p className="text-xs text-zinc-600 mt-1">
              Email + Calls
            </p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
            <p className="text-xs text-zinc-500">
              Interested
            </p>

            <p className="text-2xl font-bold mt-2">
              5
            </p>

            <p className="text-xs text-green-400 mt-1">
              +2 today
            </p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 col-span-2 lg:col-span-1">
            <p className="text-xs text-zinc-500">
              Meetings
            </p>

            <p className="text-2xl font-bold mt-2">
              2
            </p>

            <p className="text-xs text-zinc-600 mt-1">
              Scheduled
            </p>
          </div>

        </section>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-[1fr_340px] gap-6">

          {/* Leads */}
          <section className="rounded-2xl border border-zinc-800 bg-zinc-900/50 overflow-hidden">

            <div className="p-6 border-b border-zinc-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold">
                  Recent leads
                </h2>

                <p className="text-sm text-zinc-500 mt-1">
                  Businesses discovered by LivLead.
                </p>
              </div>

              <Link
                href="/campaign/leads"
                className="text-sm text-red-400 hover:text-red-300 transition"
              >
                View all leads →
              </Link>
            </div>

            <div className="divide-y divide-zinc-800">

              {/* Lead 1 */}
              <div className="p-5 hover:bg-zinc-900 transition">
                <div className="flex items-start justify-between gap-4">

                  <div className="flex gap-4">
                    <div className="w-11 h-11 rounded-xl bg-zinc-800 flex items-center justify-center font-semibold">
                      F
                    </div>

                    <div>
                      <h3 className="font-medium">
                        FitZone Gym
                      </h3>

                      <p className="text-xs text-zinc-500 mt-1">
                        Andheri West · Mumbai
                      </p>

                      <div className="flex items-center gap-2 mt-3">
                        <span className="px-2 py-1 rounded-md bg-green-500/10 text-green-400 text-[11px]">
                          Qualified
                        </span>

                        <span className="px-2 py-1 rounded-md bg-zinc-800 text-zinc-500 text-[11px]">
                          No Website
                        </span>
                      </div>
                    </div>
                  </div>

                  <span className="text-xs text-zinc-600">
                    2m ago
                  </span>
                </div>
              </div>

              {/* Lead 2 */}
              <div className="p-5 hover:bg-zinc-900 transition">
                <div className="flex items-start justify-between gap-4">

                  <div className="flex gap-4">
                    <div className="w-11 h-11 rounded-xl bg-zinc-800 flex items-center justify-center font-semibold">
                      P
                    </div>

                    <div>
                      <h3 className="font-medium">
                        PowerFit Studio
                      </h3>

                      <p className="text-xs text-zinc-500 mt-1">
                        Bandra · Mumbai
                      </p>

                      <div className="flex items-center gap-2 mt-3">
                        <span className="px-2 py-1 rounded-md bg-yellow-500/10 text-yellow-400 text-[11px]">
                          Analyzing
                        </span>

                        <span className="px-2 py-1 rounded-md bg-zinc-800 text-zinc-500 text-[11px]">
                          Social Only
                        </span>
                      </div>
                    </div>
                  </div>

                  <span className="text-xs text-zinc-600">
                    4m ago
                  </span>
                </div>
              </div>

              {/* Lead 3 */}
              <div className="p-5 hover:bg-zinc-900 transition">
                <div className="flex items-start justify-between gap-4">

                  <div className="flex gap-4">
                    <div className="w-11 h-11 rounded-xl bg-zinc-800 flex items-center justify-center font-semibold">
                      A
                    </div>

                    <div>
                      <h3 className="font-medium">
                        Absolute Fitness
                      </h3>

                      <p className="text-xs text-zinc-500 mt-1">
                        Powai · Mumbai
                      </p>

                      <div className="flex items-center gap-2 mt-3">
                        <span className="px-2 py-1 rounded-md bg-blue-500/10 text-blue-400 text-[11px]">
                          Contacted
                        </span>

                        <span className="px-2 py-1 rounded-md bg-zinc-800 text-zinc-500 text-[11px]">
                          Email
                        </span>
                      </div>
                    </div>
                  </div>

                  <span className="text-xs text-zinc-600">
                    8m ago
                  </span>
                </div>
              </div>

            </div>
          </section>

          {/* Right Sidebar */}
          <div className="space-y-6">

            {/* Campaign activity */}
            <section className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">

              <h2 className="font-semibold">
                Campaign activity
              </h2>

              <div className="mt-6 space-y-6">

                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 mt-2" />

                  <div>
                    <p className="text-sm text-zinc-300">
                      5 leads qualified
                    </p>

                    <p className="text-xs text-zinc-600 mt-1">
                      2 minutes ago
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />

                  <div>
                    <p className="text-sm text-zinc-300">
                      3 emails sent
                    </p>

                    <p className="text-xs text-zinc-600 mt-1">
                      5 minutes ago
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-orange-500 mt-2" />

                  <div>
                    <p className="text-sm text-zinc-300">
                      AI analyzed 10 businesses
                    </p>

                    <p className="text-xs text-zinc-600 mt-1">
                      8 minutes ago
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-zinc-600 mt-2" />

                  <div>
                    <p className="text-sm text-zinc-400">
                      Campaign started
                    </p>

                    <p className="text-xs text-zinc-600 mt-1">
                      12 minutes ago
                    </p>
                  </div>
                </div>

              </div>
            </section>

            {/* Outreach */}
            <section className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">

              <h2 className="font-semibold">
                Outreach
              </h2>

              <div className="mt-5 space-y-4">

                <div className="flex justify-between items-center">
                  <span className="text-sm text-zinc-400">
                    Emails
                  </span>

                  <span className="text-sm font-medium">
                    14
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-zinc-400">
                    AI calls
                  </span>

                  <span className="text-sm font-medium">
                    0
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-zinc-400">
                    Replies
                  </span>

                  <span className="text-sm font-medium">
                    4
                  </span>
                </div>

              </div>

              <Link
                href="/campaign/outreach"
                className="block text-center mt-6 py-2.5 rounded-lg border border-zinc-800 text-sm text-zinc-400 hover:text-white hover:border-zinc-600 transition"
              >
                Manage outreach
              </Link>
            </section>

            {/* AI insight */}
            <section className="rounded-2xl border border-red-500/20 bg-red-500/[0.03] p-6">

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 text-xs font-bold">
                  AI
                </div>

                <div>
                  <h2 className="font-semibold">
                    AI insight
                  </h2>

                  <p className="text-xs text-zinc-600">
                    Campaign analysis
                  </p>
                </div>
              </div>

              <p className="text-sm text-zinc-400 leading-6 mt-5">
                Most qualified businesses in this campaign currently
                rely on social media instead of dedicated websites.
                This appears to be the most common opportunity found
                so far.
              </p>

              <button
                type="button"
                className="mt-5 text-sm text-red-400 hover:text-red-300 transition"
              >
                View AI analysis →
              </button>
            </section>

          </div>
        </div>
      </div>
    </main>
  );
};

export default page;