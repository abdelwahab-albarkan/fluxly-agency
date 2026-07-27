import React from 'react';

export default function Page() {
  return (
    <div className="p-8 space-y-8 min-h-screen bg-slate-950 text-slate-100 font-sans">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <span className="text-xs font-semibold text-rose-500 uppercase tracking-widest bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20">
            ADMIN OPERATIONS
          </span>
          <h1 className="text-2xl font-bold tracking-tight text-white mt-1">Operations Analytics</h1>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 rounded-lg border border-slate-800 bg-slate-900 hover:bg-slate-800 text-slate-300 font-medium text-sm transition-all">
            Export Report
          </button>
          <button className="px-4 py-2 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-medium text-sm transition-all shadow-md">
            Perform System Audit
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Total Revenue', value: '$84,120.00', change: '+12.4% vs last mo', color: 'text-white' },
          { label: 'Active Leads', value: '142', change: '+32 this week', color: 'text-white' },
          { label: 'System Health', value: '99.98%', change: 'All services nominal', color: 'text-emerald-400' },
          { label: 'Open Tasks', value: '18', change: '4 high priority', color: 'text-amber-400' }
        ].map((item, idx) => (
          <div key={idx} className="p-6 rounded-xl bg-slate-900 border border-slate-850 space-y-2">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{item.label}</span>
            <div className="flex justify-between items-baseline">
              <span className={`text-2xl font-bold ${item.color}`}>{item.value}</span>
              <span className="text-xs text-slate-500">{item.change}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Main Administrative Control Table */}
      <div className="p-6 rounded-xl bg-slate-900 border border-slate-850">
        <h2 className="text-lg font-semibold mb-4 text-white">Console Logs & Operations</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-300">
            <thead className="bg-slate-950 text-slate-400 text-xs uppercase tracking-wider border-b border-slate-850">
              <tr>
                <th className="p-4">Process</th>
                <th className="p-4">Category</th>
                <th className="p-4">Status</th>
                <th className="p-4">Executed By</th>
                <th className="p-4">Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-850">
              {[
                { proc: 'Sync CRM Pipeline', cat: 'Salesforce Integrator', status: 'Success', user: 'system_daemon', time: 'Just now' },
                { proc: 'Generate Client Invoice #INV-2026-11', cat: 'Billing API', status: 'Success', user: 'system_daemon', time: '12m ago' },
                { proc: 'Rebuild Sitemap & Manifest', cat: 'SEO Automation', status: 'Success', user: 'admin_alex', time: '1h ago' },
                { proc: 'Update AI Lead Evaluator Weights', cat: 'Model Service', status: 'Info', user: 'system_daemon', time: '4h ago' }
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-950/40 transition-colors">
                  <td className="p-4 font-medium text-slate-100">{row.proc}</td>
                  <td className="p-4 text-slate-400">{row.cat}</td>
                  <td className="p-4">
                    <span className={`px-2 py-0.5 rounded text-xs border ${
                      row.status === 'Success'
                        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                        : 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                    }`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="p-4 text-slate-400 font-mono">{row.user}</td>
                  <td className="p-4 text-slate-500">{row.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}