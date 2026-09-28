"use client";

import Link from "next/link";
import React, { useState } from "react";

const Page = () => {
  const [selectedChannels, setSelectedChannels] = useState(["email"]);
  const [aiCalling, setAiCalling] = useState(false);

  const toggleChannel = (channel) => {
    setSelectedChannels((prev) =>
      prev.includes(channel)
        ? prev.filter((item) => item !== channel)
        : [...prev, channel]
    );
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* Header */}
      <header className="border-b border-zinc-800 bg-zinc-950/90 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-4 flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
              <span className="font-bold">L</span>
            </div>
            <span className="text-xl font-bold">LivLead</span>
          </Link>

          <Link
            href="/campaign/create"
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
            CAMPAIGN SETUP
          </p>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Choose your outreach
          </h1>

          <p className="mt-3 text-zinc-400 leading-7">
            Decide how LivLead should reach your discovered businesses.
            You can use multiple channels in the same campaign.
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

          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-sm font-bold">
              2
            </span>
            <span className="text-sm font-medium">Outreach</span>
          </div>

          <div className="h-px w-12 sm:w-20 bg-zinc-800" />

          <div className="flex items-center gap-2 text-zinc-600">
            <span className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center text-sm">
              3
            </span>
            <span className="text-sm">Review</span>
          </div>
        </div>

        <div className="space-y-6">
          {/* Outreach Channels */}
          <section className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8">
            <div className="mb-7">
              <h2 className="text-xl font-semibold">
                Outreach channels
              </h2>

              <p className="text-sm text-zinc-500 mt-1">
                Select the channels you want to use for this campaign.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {/* Email */}
              <button
                type="button"
                onClick={() => toggleChannel("email")}
                className={`text-left p-5 rounded-xl border transition ${
                  selectedChannels.includes("email")
                    ? "border-red-500 bg-red-500/5"
                    : "border-zinc-800 bg-zinc-950 hover:border-zinc-600"
                }`}
              >
                <div className="flex justify-between">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                    ✉
                  </div>

                  <span
                    className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                      selectedChannels.includes("email")
                        ? "border-red-500 bg-red-500"
                        : "border-zinc-700"
                    }`}
                  >
                    {selectedChannels.includes("email") && (
                      <span className="text-xs">✓</span>
                    )}
                  </span>
                </div>

                <h3 className="font-semibold mt-5">Email</h3>

                <p className="text-sm text-zinc-500 mt-2 leading-6">
                  Send personalized emails based on each business&apos;s
                  opportunity analysis.
                </p>
              </button>

              {/* WhatsApp */}
              <button
                type="button"
                onClick={() => toggleChannel("whatsapp")}
                className={`text-left p-5 rounded-xl border transition ${
                  selectedChannels.includes("whatsapp")
                    ? "border-red-500 bg-red-500/5"
                    : "border-zinc-800 bg-zinc-950 hover:border-zinc-600"
                }`}
              >
                <div className="flex justify-between">
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400">
                    ◉
                  </div>

                  <span
                    className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                      selectedChannels.includes("whatsapp")
                        ? "border-red-500 bg-red-500"
                        : "border-zinc-700"
                    }`}
                  >
                    {selectedChannels.includes("whatsapp") && (
                      <span className="text-xs">✓</span>
                    )}
                  </span>
                </div>

                <h3 className="font-semibold mt-5">WhatsApp</h3>

                <p className="text-sm text-zinc-500 mt-2 leading-6">
                  Start a personalized WhatsApp conversation with
                  potential leads.
                </p>
              </button>

              {/* AI Calling */}
              <button
                type="button"
                onClick={() => setAiCalling(!aiCalling)}
                className={`text-left p-5 rounded-xl border transition ${
                  aiCalling
                    ? "border-red-500 bg-red-500/5"
                    : "border-zinc-800 bg-zinc-950 hover:border-zinc-600"
                }`}
              >
                <div className="flex justify-between">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400">
                    ☎
                  </div>

                  <span
                    className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                      aiCalling
                        ? "border-red-500 bg-red-500"
                        : "border-zinc-700"
                    }`}
                  >
                    {aiCalling && <span className="text-xs">✓</span>}
                  </span>
                </div>

                <div className="flex items-center gap-2 mt-5">
                  <h3 className="font-semibold">AI Calling</h3>

                  <span className="text-[10px] px-2 py-1 rounded-full bg-red-500/10 text-red-400 border border-red-500/20">
                    AI
                  </span>
                </div>

                <p className="text-sm text-zinc-500 mt-2 leading-6">
                  Let an AI voice agent have a natural conversation
                  with qualified businesses.
                </p>
              </button>
            </div>
          </section>

          {/* Email configuration */}
          {selectedChannels.includes("email") && (
            <section className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8">
              <div className="mb-7">
                <h2 className="text-xl font-semibold">
                  Email configuration
                </h2>

                <p className="text-sm text-zinc-500 mt-1">
                  Configure how your emails should be presented.
                </p>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">
                    Sender name
                  </label>

                  <input
                    type="text"
                    placeholder="e.g. Abdul from LivLead"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-700 text-white placeholder:text-zinc-600 outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">
                    Email subject
                  </label>

                  <input
                    type="text"
                    placeholder="e.g. A quick idea for your business"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-700 text-white placeholder:text-zinc-600 outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">
                    Message
                  </label>

                  <textarea
                    rows={6}
                    placeholder="Write your outreach message..."
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-700 text-white placeholder:text-zinc-600 outline-none resize-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition"
                  />

                  <p className="text-xs text-zinc-600 mt-2">
                    LivLead can personalize this message using each
                    business&apos;s analysis.
                  </p>
                </div>
              </div>
            </section>
          )}

          {/* AI Calling */}
          {aiCalling && (
            <section className="rounded-2xl border border-red-500/30 bg-red-500/[0.03] p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
                  AI
                </div>

                <div>
                  <div className="flex items-center gap-3">
                    <h2 className="text-xl font-semibold">
                      AI calling agent
                    </h2>

                    <span className="text-[10px] px-2 py-1 rounded-full bg-red-500/10 text-red-400 border border-red-500/20">
                      BETA
                    </span>
                  </div>

                  <p className="text-sm text-zinc-500 mt-1">
                    Configure how the AI should represent you during
                    calls.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5 mt-7">
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">
                    Agent name
                  </label>

                  <input
                    type="text"
                    placeholder="e.g. Alex"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-700 text-white placeholder:text-zinc-600 outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">
                    Voice style
                  </label>

                  <select className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-700 text-white outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition">
                    <option>Professional</option>
                    <option>Friendly</option>
                    <option>Conversational</option>
                  </select>
                </div>
              </div>

              <div className="mt-5">
                <label className="block text-sm font-medium text-zinc-300 mb-2">
                  Agent instructions
                </label>

                <textarea
                  rows={5}
                  placeholder="Explain what the AI should focus on during the conversation..."
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-700 text-white placeholder:text-zinc-600 outline-none resize-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition"
                />
              </div>

              <div className="mt-5 p-4 rounded-xl border border-zinc-800 bg-zinc-950">
                <p className="text-xs text-zinc-500">
                  Example
                </p>

                <p className="text-sm text-zinc-300 mt-2 leading-6">
                  &quot;Introduce yourself, explain why you&apos;re calling,
                  mention the opportunity identified for the business,
                  ask whether they are interested, and capture their
                  response.&quot;
                </p>
              </div>
            </section>
          )}

          {/* Follow up */}
          <section className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8">
            <div className="mb-7">
              <h2 className="text-xl font-semibold">
                Follow-up
              </h2>

              <p className="text-sm text-zinc-500 mt-1">
                Decide what LivLead should do when a lead doesn&apos;t
                respond.
              </p>
            </div>

            <label className="flex items-center gap-4 cursor-pointer">
              <input
                type="checkbox"
                defaultChecked
                className="w-5 h-5 accent-red-500"
              />

              <div>
                <p className="text-sm font-medium text-zinc-300">
                  Enable automatic follow-up
                </p>

                <p className="text-xs text-zinc-600 mt-1">
                  Follow up with leads who haven&apos;t responded.
                </p>
              </div>
            </label>
          </section>

          {/* Footer actions */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-3">
            <Link
              href="/Campaign/create"
              className="text-sm text-zinc-500 hover:text-white transition"
            >
              ← Back to Target
            </Link>

            <Link
              href="/Campaign/review"
              className="w-full sm:w-auto text-center px-7 py-3.5 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold hover:from-red-400 hover:to-orange-400 transition shadow-lg shadow-red-500/10"
            >
              Continue to Review →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;