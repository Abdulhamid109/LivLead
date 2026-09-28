"use client";

import Link from "next/link";
import React, { useMemo, useState } from "react";

const leads = [
  {
    id: 1,
    name: "FitZone Gym",
    category: "Gym",
    location: "Andheri West, Mumbai",
    website: "No website",
    opportunity: "Website + enquiry system",
    score: 92,
    status: "Qualified",
    contacted: "Not contacted",
    lastActivity: "2 min ago",
  },
  {
    id: 2,
    name: "PowerFit Studio",
    category: "Fitness Studio",
    location: "Bandra, Mumbai",
    website: "Instagram only",
    opportunity: "Website + online booking",
    score: 87,
    status: "Qualified",
    contacted: "Not contacted",
    lastActivity: "4 min ago",
  },
  {
    id: 3,
    name: "Absolute Fitness",
    category: "Gym",
    location: "Powai, Mumbai",
    website: "Basic website",
    opportunity: "Lead capture optimization",
    score: 81,
    status: "Contacted",
    contacted: "Email sent",
    lastActivity: "8 min ago",
  },
  {
    id: 4,
    name: "Iron House Fitness",
    category: "Gym",
    location: "Malad, Mumbai",
    website: "No website",
    opportunity: "Website + WhatsApp integration",
    score: 78,
    status: "Interested",
    contacted: "Replied",
    lastActivity: "12 min ago",
  },
  {
    id: 5,
    name: "Core Strength Club",
    category: "Fitness Club",
    location: "Worli, Mumbai",
    website: "Basic website",
    opportunity: "Website redesign",
    score: 74,
    status: "Contacted",
    contacted: "Email sent",
    lastActivity: "18 min ago",
  },
  {
    id: 6,
    name: "Urban Fitness",
    category: "Gym",
    location: "Thane, Mumbai",
    website: "Instagram only",
    opportunity: "Website + booking",
    score: 71,
    status: "New",
    contacted: "Not contacted",
    lastActivity: "21 min ago",
  },
  {
    id: 7,
    name: "Elite Training Hub",
    category: "Training Center",
    location: "Goregaon, Mumbai",
    website: "No website",
    opportunity: "Website + lead generation",
    score: 68,
    status: "New",
    contacted: "Not contacted",
    lastActivity: "25 min ago",
  },
  {
    id: 8,
    name: "Pulse Fitness",
    category: "Gym",
    location: "Dadar, Mumbai",
    website: "Basic website",
    opportunity: "Online booking system",
    score: 64,
    status: "Not interested",
    contacted: "Replied",
    lastActivity: "31 min ago",
  },
];

const statusStyles = {
  New: "bg-zinc-800 text-zinc-400",
  Qualified: "bg-green-500/10 text-green-400 border border-green-500/20",
  Contacted: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
  Interested: "bg-orange-500/10 text-orange-400 border border-orange-500/20",
  "Not interested":
    "bg-red-500/10 text-red-400 border border-red-500/20",
};

const Page = () => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [sort, setSort] = useState("score");
  const [selectedLead, setSelectedLead] = useState(null);

  const filteredLeads = useMemo(() => {
    let result = leads.filter((lead) => {
      const matchesSearch =
        lead.name.toLowerCase().includes(search.toLowerCase()) ||
        lead.location.toLowerCase().includes(search.toLowerCase()) ||
        lead.category.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        status === "All" || lead.status === status;

      return matchesSearch && matchesStatus;
    });

    if (sort === "score") {
      result.sort((a, b) => b.score - a.score);
    }

    if (sort === "name") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (sort === "recent") {
      result.sort((a, b) => a.id - b.id);
    }

    return result;
  }, [search, status, sort]);

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

          <div className="flex items-center gap-5">
            <Link
              href="/dashboard"
              className="text-sm text-zinc-400 hover:text-white transition"
            >
              Dashboard
            </Link>

            <Link
              href="/campaign"
              className="text-sm text-zinc-400 hover:text-white transition"
            >
              Campaigns
            </Link>

            <div className="w-9 h-9 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-sm">
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

          <Link
            href="/campaign/123"
            className="hover:text-white transition"
          >
            Mumbai Gym Outreach
          </Link>

          <span>/</span>

          <span className="text-zinc-300">
            Leads
          </span>
        </div>

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">

          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Leads
              </h1>

              <span className="px-2.5 py-1 rounded-full bg-zinc-800 text-zinc-400 text-xs">
                32
              </span>
            </div>

            <p className="text-zinc-500 mt-2">
              Businesses discovered for Mumbai Gym Outreach.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="px-4 py-2.5 rounded-lg border border-zinc-800 bg-zinc-900 text-sm text-zinc-300 hover:border-zinc-600 hover:text-white transition"
            >
              Export CSV
            </button>

            <Link
              href="/campaign/outreach"
              className="px-4 py-2.5 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 text-sm font-semibold hover:from-red-400 hover:to-orange-400 transition"
            >
              Start Outreach
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">

          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
            <p className="text-xs text-zinc-500">
              Total Leads
            </p>

            <p className="text-2xl font-bold mt-2">
              32
            </p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
            <p className="text-xs text-zinc-500">
              Qualified
            </p>

            <p className="text-2xl font-bold mt-2">
              21
            </p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
            <p className="text-xs text-zinc-500">
              Contacted
            </p>

            <p className="text-2xl font-bold mt-2">
              14
            </p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
            <p className="text-xs text-zinc-500">
              Interested
            </p>

            <p className="text-2xl font-bold mt-2">
              5
            </p>
          </div>

        </div>

        {/* Filters */}
        <section className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4 mb-4">

          <div className="flex flex-col lg:flex-row gap-3">

            {/* Search */}
            <div className="relative flex-1">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600">
                ⌕
              </span>

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search leads by name, location or category..."
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white placeholder:text-zinc-600 outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition"
              />
            </div>

            {/* Status */}
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-zinc-300 outline-none focus:border-red-500"
            >
              <option>All</option>
              <option>New</option>
              <option>Qualified</option>
              <option>Contacted</option>
              <option>Interested</option>
              <option>Not interested</option>
            </select>

            {/* Sort */}
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-zinc-300 outline-none focus:border-red-500"
            >
              <option value="score">
                Highest opportunity
              </option>

              <option value="name">
                Name
              </option>

              <option value="recent">
                Recently added
              </option>
            </select>

          </div>
        </section>

        {/* Leads table */}
        <section className="rounded-2xl border border-zinc-800 bg-zinc-900/50 overflow-hidden">

          {/* Desktop table */}
          <div className="hidden xl:block overflow-x-auto">

            <table className="w-full">
              <thead className="border-b border-zinc-800 bg-zinc-900/80">
                <tr className="text-left">
                  <th className="px-5 py-4 text-xs font-medium text-zinc-500">
                    Business
                  </th>

                  <th className="px-5 py-4 text-xs font-medium text-zinc-500">
                    Opportunity
                  </th>

                  <th className="px-5 py-4 text-xs font-medium text-zinc-500">
                    Score
                  </th>

                  <th className="px-5 py-4 text-xs font-medium text-zinc-500">
                    Status
                  </th>

                  <th className="px-5 py-4 text-xs font-medium text-zinc-500">
                    Outreach
                  </th>

                  <th className="px-5 py-4 text-xs font-medium text-zinc-500">
                    Activity
                  </th>

                  <th className="px-5 py-4">
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-zinc-800">

                {filteredLeads.map((lead) => (
                  <tr
                    key={lead.id}
                    className="hover:bg-zinc-900 transition"
                  >
                    {/* Business */}
                    <td className="px-5 py-5">
                      <div className="flex items-center gap-3">

                        <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center font-semibold">
                          {lead.name.charAt(0)}
                        </div>

                        <div>
                          <p className="text-sm font-medium">
                            {lead.name}
                          </p>

                          <p className="text-xs text-zinc-600 mt-1">
                            {lead.category} · {lead.location}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Opportunity */}
                    <td className="px-5 py-5">
                      <p className="text-sm text-zinc-300">
                        {lead.opportunity}
                      </p>

                      <p className="text-xs text-zinc-600 mt-1">
                        {lead.website}
                      </p>
                    </td>

                    {/* Score */}
                    <td className="px-5 py-5">
                      <div className="flex items-center gap-3">

                        <div className="w-16 h-1.5 rounded-full bg-zinc-800 overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-red-500 to-orange-500 rounded-full"
                            style={{ width: `${lead.score}%` }}
                          />
                        </div>

                        <span className="text-sm font-medium">
                          {lead.score}
                        </span>
                      </div>
                    </td>

                    {/* Status */}
                    <td className="px-5 py-5">
                      <span
                        className={`inline-flex px-2.5 py-1 rounded-md text-[11px] ${statusStyles[lead.status]}`}
                      >
                        {lead.status}
                      </span>
                    </td>

                    {/* Outreach */}
                    <td className="px-5 py-5">
                      <p className="text-sm text-zinc-400">
                        {lead.contacted}
                      </p>
                    </td>

                    {/* Activity */}
                    <td className="px-5 py-5">
                      <p className="text-xs text-zinc-600">
                        {lead.lastActivity}
                      </p>
                    </td>

                    {/* Action */}
                    <td className="px-5 py-5">
                      <button
                        type="button"
                        onClick={() => setSelectedLead(lead)}
                        className="text-zinc-500 hover:text-white transition"
                      >
                        →
                      </button>
                    </td>
                  </tr>
                ))}

              </tbody>
            </table>

          </div>

          {/* Mobile / Tablet cards */}
          <div className="xl:hidden divide-y divide-zinc-800">

            {filteredLeads.map((lead) => (
              <button
                key={lead.id}
                type="button"
                onClick={() => setSelectedLead(lead)}
                className="w-full text-left p-5 hover:bg-zinc-900 transition"
              >
                <div className="flex justify-between gap-4">

                  <div className="flex gap-3">

                    <div className="w-10 h-10 shrink-0 rounded-lg bg-zinc-800 flex items-center justify-center font-semibold">
                      {lead.name.charAt(0)}
                    </div>

                    <div>
                      <h3 className="text-sm font-medium">
                        {lead.name}
                      </h3>

                      <p className="text-xs text-zinc-600 mt-1">
                        {lead.category} · {lead.location}
                      </p>

                      <p className="text-xs text-zinc-400 mt-3">
                        {lead.opportunity}
                      </p>

                      <div className="flex flex-wrap items-center gap-2 mt-3">

                        <span
                          className={`px-2 py-1 rounded-md text-[10px] ${statusStyles[lead.status]}`}
                        >
                          {lead.status}
                        </span>

                        <span className="px-2 py-1 rounded-md bg-zinc-800 text-zinc-500 text-[10px]">
                          Score {lead.score}
                        </span>

                      </div>
                    </div>
                  </div>

                  <span className="text-zinc-600">
                    →
                  </span>

                </div>
              </button>
            ))}

          </div>

          {/* Empty */}
          {filteredLeads.length === 0 && (
            <div className="p-12 text-center">
              <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 mx-auto flex items-center justify-center text-zinc-600">
                ⌕
              </div>

              <h3 className="font-medium mt-4">
                No leads found
              </h3>

              <p className="text-sm text-zinc-600 mt-2">
                Try changing your search or filters.
              </p>
            </div>
          )}

        </section>

        {/* Bottom */}
        <div className="flex justify-between items-center mt-5">
          <p className="text-xs text-zinc-600">
            Showing {filteredLeads.length} of {leads.length} leads
          </p>

          <Link
            href="/campaign/123"
            className="text-sm text-zinc-500 hover:text-white transition"
          >
            ← Back to campaign
          </Link>
        </div>
      </div>

      {/* Lead Detail Drawer */}
      {selectedLead && (
        <div className="fixed inset-0 z-[60]">
          {/* Overlay */}
          <button
            type="button"
            aria-label="Close"
            onClick={() => setSelectedLead(null)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-default"
          />

          {/* Drawer */}
          <aside className="absolute right-0 top-0 h-full w-full sm:max-w-lg bg-zinc-950 border-l border-zinc-800 overflow-y-auto">

            <div className="p-6 border-b border-zinc-800 flex items-center justify-between">
              <div>
                <p className="text-xs text-zinc-600">
                  LEAD DETAILS
                </p>

                <h2 className="text-xl font-semibold mt-1">
                  {selectedLead.name}
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setSelectedLead(null)}
                className="w-9 h-9 rounded-lg border border-zinc-800 text-zinc-500 hover:text-white transition"
              >
                ×
              </button>
            </div>

            <div className="p-6 space-y-6">

              {/* Score */}
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">

                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xs text-zinc-500">
                      Opportunity score
                    </p>

                    <p className="text-3xl font-bold mt-2">
                      {selectedLead.score}
                    </p>
                  </div>

                  <span
                    className={`px-3 py-1.5 rounded-lg text-xs ${statusStyles[selectedLead.status]}`}
                  >
                    {selectedLead.status}
                  </span>
                </div>

                <div className="h-2 bg-zinc-800 rounded-full mt-5 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-red-500 to-orange-500"
                    style={{
                      width: `${selectedLead.score}%`,
                    }}
                  />
                </div>
              </div>

              {/* Business */}
              <div>
                <h3 className="text-sm font-semibold">
                  Business information
                </h3>

                <div className="mt-4 space-y-3">

                  <div className="flex justify-between gap-5">
                    <span className="text-sm text-zinc-600">
                      Category
                    </span>

                    <span className="text-sm text-zinc-300">
                      {selectedLead.category}
                    </span>
                  </div>

                  <div className="flex justify-between gap-5">
                    <span className="text-sm text-zinc-600">
                      Location
                    </span>

                    <span className="text-sm text-zinc-300 text-right">
                      {selectedLead.location}
                    </span>
                  </div>

                  <div className="flex justify-between gap-5">
                    <span className="text-sm text-zinc-600">
                      Online presence
                    </span>

                    <span className="text-sm text-zinc-300">
                      {selectedLead.website}
                    </span>
                  </div>

                </div>
              </div>

              {/* AI Analysis */}
              <div className="rounded-xl border border-red-500/20 bg-red-500/[0.03] p-5">

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 text-red-400 flex items-center justify-center text-xs font-bold">
                    AI
                  </div>

                  <h3 className="font-semibold">
                    AI opportunity analysis
                  </h3>
                </div>

                <p className="text-sm text-zinc-400 leading-6 mt-4">
                  {selectedLead.name} appears to have an opportunity
                  around {selectedLead.opportunity.toLowerCase()}.
                  Consider reviewing the business's current online
                  presence before contacting them.
                </p>
              </div>

              {/* Outreach */}
              <div>
                <h3 className="text-sm font-semibold">
                  Outreach
                </h3>

                <div className="mt-4 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">

                  <div className="flex justify-between">
                    <span className="text-sm text-zinc-500">
                      Current status
                    </span>

                    <span className="text-sm text-zinc-300">
                      {selectedLead.contacted}
                    </span>
                  </div>

                  <div className="flex justify-between mt-4">
                    <span className="text-sm text-zinc-500">
                      Last activity
                    </span>

                    <span className="text-sm text-zinc-300">
                      {selectedLead.lastActivity}
                    </span>
                  </div>

                </div>
              </div>

              {/* Actions */}
              <div className="space-y-3">

                <button
                  type="button"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 font-semibold hover:from-red-400 hover:to-orange-400 transition"
                >
                  Start Outreach
                </button>

                <button
                  type="button"
                  className="w-full py-3 rounded-xl border border-zinc-800 text-sm text-zinc-400 hover:text-white hover:border-zinc-600 transition"
                >
                  Mark as Qualified
                </button>

              </div>

            </div>
          </aside>
        </div>
      )}
    </main>
  );
};

export default Page;