import Navbar from "@/components/navbar";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main className="min-h-screen bg-zinc-950 text-white overflow-hidden">
      <Navbar />

      <section className="relative pt-28 pb-20 px-6">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative max-w-6xl mx-auto flex flex-col items-center text-center">
          <div className="mb-6 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/70 text-sm text-zinc-400">
            AI-powered lead generation & outreach
          </div>

          <h1 className="max-w-5xl text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            Find businesses.
            <br />
            <span className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Understand their needs.
            </span>
            <br />
            Start conversations.
          </h1>

          <p className="mt-7 max-w-2xl text-lg sm:text-xl leading-8 text-zinc-400">
            LivLead helps freelancers and agencies discover potential clients,
            identify business opportunities, reach prospects through multiple
            channels, and track every conversation from one place.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-4">
            <Link
              href="/auth/login"
              className="px-7 py-3.5 rounded-xl bg-white text-black font-semibold hover:bg-zinc-200 transition"
            >
              Get Started →
            </Link>

            <a
              href="#how-it-works"
              className="px-7 py-3.5 rounded-xl border border-zinc-700 bg-zinc-900/60 text-white font-semibold hover:border-zinc-500 transition"
            >
              See How It Works
            </a>
          </div>

          <p className="mt-5 text-sm text-zinc-600">
            Built for freelancers, agencies and sales teams.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <p className="text-red-400 font-medium mb-3">THE PROBLEM</p>

            <h2 className="text-3xl sm:text-4xl font-bold">
              Finding clients shouldn&apos;t mean searching endlessly.
            </h2>

            <p className="mt-5 text-zinc-400 leading-7">
              You can find thousands of businesses online, but the real
              challenge is knowing which ones actually have an opportunity for
              your service and how to approach them.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mt-12">
            {[
              {
                title: "Finding prospects",
                text: "Discover relevant businesses based on category and location.",
              },
              {
                title: "Understanding opportunities",
                text: "Analyze their online presence and identify potential areas where you can help.",
              },
              {
                title: "Managing outreach",
                text: "Keep emails, messages, calls, follow-ups and outcomes organized.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40"
              >
                <span className="text-sm text-zinc-600 font-mono">
                  0{index + 1}
                </span>

                <h3 className="mt-5 text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-zinc-400 leading-7">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="how-it-works"
        className="px-6 py-24 border-t border-zinc-900"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-red-400 font-medium mb-3">HOW LIVLEAD WORKS</p>

            <h2 className="text-3xl sm:text-4xl font-bold">
              From discovery to conversation.
            </h2>

            <p className="mt-5 text-zinc-400 leading-7">
              LivLead turns scattered prospecting and outreach into one
              structured workflow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
            {[
              {
                number: "01",
                title: "Discover",
                text: "Find businesses using location and business categories.",
              },
              {
                number: "02",
                title: "Analyze",
                text: "Understand their online presence and identify potential opportunities.",
              },
              {
                number: "03",
                title: "Reach Out",
                text: "Export, email, message or use supported voice outreach to start conversations.",
              },
              {
                number: "04",
                title: "Track",
                text: "Monitor responses, follow-ups, conversations and converted leads.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="relative p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40 hover:border-red-500/40 transition"
              >
                <span className="text-red-500 font-mono text-sm">
                  {step.number}
                </span>

                <h3 className="mt-5 text-xl font-semibold">
                  {step.title}
                </h3>

                <p className="mt-3 text-zinc-400 leading-7">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <p className="text-red-400 font-medium mb-3">ONE WORKSPACE</p>

            <h2 className="text-3xl sm:text-4xl font-bold">
              Everything you need to manage your outreach.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mt-12">
            {[
              {
                title: "Lead Discovery",
                text: "Find businesses that match your target market and service.",
              },
              {
                title: "Business Intelligence",
                text: "Keep your own observations and opportunity analysis attached to every lead.",
              },
              {
                title: "Multi-channel Outreach",
                text: "Move from a qualified lead to email, messaging, calls or other outreach workflows.",
              },
              {
                title: "AI-assisted Conversations",
                text: "Use business-specific context to make outreach more relevant and personalized.",
              },
              {
                title: "Campaign Tracking",
                text: "See how many leads were discovered, contacted, replied, qualified and converted.",
              },
              {
                title: "Lead Management",
                text: "Keep notes, statuses, follow-ups and conversation outcomes organized.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-7 rounded-2xl border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition"
              >
                <h3 className="text-xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-3 text-zinc-400 leading-7">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6 sm:p-10">
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <div>
                <p className="text-red-400 text-sm font-medium">
                  OUTREACH DASHBOARD
                </p>

                <h2 className="mt-3 text-3xl font-bold">
                  Know what&apos;s happening with every lead.
                </h2>

                <p className="mt-4 max-w-xl text-zinc-400 leading-7">
                  Track your campaigns and understand where your prospects are
                  in the outreach process.
                </p>
              </div>

              <Link
                href="/auth/login"
                className="self-start px-5 py-3 rounded-xl bg-red-500 text-white font-semibold hover:bg-red-400 transition"
              >
                Start Building Leads
              </Link>
            </div>

            {/* Fake stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
              {[
                ["486", "Total Leads"],
                ["213", "Qualified"],
                ["137", "Contacted"],
                ["24", "Replies"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="p-5 rounded-xl bg-zinc-950 border border-zinc-800"
                >
                  <p className="text-3xl font-bold">{value}</p>
                  <p className="mt-2 text-sm text-zinc-500">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-28">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-red-400 font-medium mb-4">
            READY TO FIND YOUR NEXT CLIENT?
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold">
            Stop searching.
            <br />
            Start building conversations.
          </h2>

          <p className="mt-6 text-zinc-400 text-lg leading-7 max-w-2xl mx-auto">
            Discover businesses, understand where you can help, and manage
            your outreach from one place with LivLead.
          </p>

          <Link
            href="/auth/login"
            className="inline-flex mt-9 px-8 py-4 rounded-xl bg-white text-black font-semibold hover:bg-zinc-200 transition"
          >
            Get Started with LivLead →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-900 px-6 py-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between gap-4 text-sm text-zinc-500">
          <p>© {new Date().getFullYear()} LivLead. All rights reserved.</p>

          <p>Find. Understand. Reach. Convert.</p>
        </div>
      </footer>
    </main>
  );
};

export default page;

