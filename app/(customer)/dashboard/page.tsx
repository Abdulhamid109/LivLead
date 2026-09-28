import Navbar from "@/components/navbar";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <main className="pt-24 px-5 sm:px-8 pb-12">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="text-sm text-zinc-500 mb-2">
                Dashboard
              </p>

              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Welcome back, Tony.
              </h1>

              <p className="mt-2 text-zinc-400">
                Find businesses, understand opportunities, and start
                conversations.
              </p>
            </div>

            <Link
              href="/Campaign/create"
              className="self-start md:self-auto px-5 py-3 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold hover:from-red-400 hover:to-orange-400 transition"
            >
              + Create Campaign
            </Link>
          </div>

          {/* Stats */}
          {/* <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {[
              {
                title: "Total Leads",
                value: "0",
              },
              {
                title: "Qualified",
                value: "0",
              },
              {
                title: "Contacted",
                value: "0",
              },
              {
                title: "Replies",
                value: "0",
              },
            ].map((stat) => (
              <div
                key={stat.title}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5"
              >
                <p className="text-sm text-zinc-500">
                  {stat.title}
                </p>

                <p className="mt-3 text-3xl font-bold">
                  {stat.value}
                </p>
              </div>
            ))}
          </section> */}

          {/* Empty state */}
          <section className="mt-8">
            <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/50">

              {/* Glow */}
              <div className="absolute -top-24 -right-24 w-72 h-72 bg-red-500/10 blur-[100px] rounded-full" />

              <div className="relative flex flex-col items-center text-center px-6 py-16 sm:py-20">

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-red-500/20 flex items-center justify-center mb-6">
                  <span className="text-2xl">＋</span>
                </div>

                <p className="text-sm font-medium text-red-400 mb-3">
                  GET STARTED
                </p>

                <h2 className="text-2xl sm:text-3xl font-bold">
                  Create your first campaign
                </h2>

                <p className="mt-4 max-w-xl text-zinc-400 leading-7">
                  Choose a target market, discover businesses, analyze their
                  opportunities, and start building your outreach list.
                </p>

                <Link
                  href="/campaign/create"
                  className="mt-8 px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-zinc-200 transition"
                >
                  Create Your First Campaign →
                </Link>
              </div>
            </div>
          </section>

          {/* What you can do */}
          <section className="mt-10">
            <div className="mb-5">
              <h2 className="text-xl font-semibold">
                What you can do with LivLead
              </h2>

              <p className="text-sm text-zinc-500 mt-1">
                Your workflow from discovery to outreach.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  number: "01",
                  title: "Discover",
                  text: "Find businesses based on location, category, and your target market.",
                },
                {
                  number: "02",
                  title: "Understand",
                  text: "Analyze businesses and identify opportunities where your service can provide value.",
                },
                {
                  number: "03",
                  title: "Reach",
                  text: "Organize and execute your outreach while tracking every interaction.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 hover:border-zinc-600 transition"
                >
                  <span className="text-sm font-mono text-red-500">
                    {item.number}
                  </span>

                  <h3 className="mt-4 text-lg font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm text-zinc-400 leading-6">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>
    </div>
  );
};

export default page;