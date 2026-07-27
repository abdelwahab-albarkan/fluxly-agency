import React from 'react';

export default function Page() {
  return (
    <div className="p-8 space-y-8 min-h-screen bg-slate-950 text-slate-100 font-sans">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white">Client Profile</h1>
          <p className="text-sm text-slate-400">Welcome to your client workspace overview dashboard.</p>
        </div>
        <button className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all shadow-md">
          Create New Request
        </button>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Active Projects', value: '3', change: '+1 this month', color: 'text-blue-400' },
          { label: 'Pending Invoices', value: '$4,250.00', change: 'Due in 14 days', color: 'text-amber-400' },
          { label: 'Support Tickets', value: '1 Open', change: 'Response in 2h', color: 'text-emerald-400' },
          { label: 'Completed Deliverables', value: '28', change: 'All checks passed', color: 'text-indigo-400' }
        ].map((item, idx) => (
          <div key={idx} className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{item.label}</span>
            <div className="flex justify-between items-baseline">
              <span className={`text-2xl font-bold ${item.color}`}>{item.value}</span>
              <span className="text-xs text-slate-500">{item.change}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left main content */}
        <div className="lg:col-span-2 space-y-6">
          <div className="p-6 rounded-xl bg-slate-900 border border-slate-800">
            <h2 className="text-lg font-semibold mb-4 text-white">Recent Activities</h2>
            <div className="space-y-4">
              {[
                { action: 'Milestone 2 Approved', project: 'E-commerce Platform Redesign', date: 'Yesterday at 4:32 PM' },
                { action: 'Invoice #INV-2026-08 Paid', project: 'SEO Campaign Setup', date: '3 days ago' },
                { action: 'New Asset Uploaded: branding_guidelines.pdf', project: 'Logo & Branding Suite', date: '5 days ago' }
              ].map((act, i) => (
                <div key={i} className="flex justify-between items-start border-b border-slate-800/50 pb-3 last:border-0 last:pb-0">
                  <div>
                    <p className="text-sm font-medium text-slate-200">{act.action}</p>
                    <p className="text-xs text-slate-400">{act.project}</p>
                  </div>
                  <span className="text-xs text-slate-500">{act.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right sidebar content */}
        <div className="space-y-6">
          <div className="p-6 rounded-xl bg-slate-900 border border-slate-800">
            <h2 className="text-lg font-semibold mb-4 text-white">Your Project Manager</h2>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center font-bold text-white">
                SL
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Sophia Laurent</p>
                <p className="text-xs text-slate-400">Lead Product Specialist</p>
              </div>
            </div>
            <hr className="border-slate-800 my-4" />
            <button className="w-full py-2.5 rounded-lg border border-slate-800 bg-slate-950 hover:bg-slate-800 text-slate-300 font-medium text-sm transition-all">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}