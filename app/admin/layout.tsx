'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  ShieldAlert,
  BarChart3,
  Users,
  BadgeAlert,
  Calendar,
  Layers,
  CheckSquare,
  FileSpreadsheet,
  Building,
  UserCheck,
  FileCode,
  FolderLock,
  Search,
  Settings,
  BellRing,
  Cpu,
  Fingerprint,
  LogOut,
  ArrowUpRight,
  Menu,
  X
} from 'lucide-react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sidebarLinks = [
    { label: 'Overview', href: '/admin/dashboard', icon: <ShieldAlert className="w-4 h-4" /> },
    { label: 'Analytics', href: '/admin/analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { label: 'CRM Pipelines', href: '/admin/crm', icon: <Users className="w-4 h-4" /> },
    { label: 'Sales Leads', href: '/admin/leads', icon: <BadgeAlert className="w-4 h-4" /> },
    { label: 'Meetings', href: '/admin/meetings', icon: <Calendar className="w-4 h-4" /> },
    { label: 'Projects', href: '/admin/projects', icon: <Layers className="w-4 h-4" /> },
    { label: 'Team Tasks', href: '/admin/tasks', icon: <CheckSquare className="w-4 h-4" /> },
    { label: 'Invoices', href: '/admin/invoices', icon: <FileSpreadsheet className="w-4 h-4" /> },
    { label: 'Clients', href: '/admin/clients', icon: <Building className="w-4 h-4" /> },
    { label: 'Employees', href: '/admin/employees', icon: <UserCheck className="w-4 h-4" /> },
    { label: 'Blog CMS', href: '/admin/blog', icon: <FileCode className="w-4 h-4" /> },
    { label: 'Media Library', href: '/admin/media', icon: <FolderLock className="w-4 h-4" /> },
    { label: 'SEO Settings', href: '/admin/seo', icon: <Search className="w-4 h-4" /> },
    { label: 'Platform Config', href: '/admin/settings', icon: <Settings className="w-4 h-4" /> },
    { label: 'System Alerts', href: '/admin/notifications', icon: <BellRing className="w-4 h-4" /> },
    { label: 'Automations', href: '/admin/automation', icon: <Cpu className="w-4 h-4" /> },
    { label: 'Security Audits', href: '/admin/audit', icon: <Fingerprint className="w-4 h-4" /> }
  ];

  return (
    <div className="admin-scope min-h-screen bg-slate-950 text-slate-100 flex font-sans">
      
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-sm md:hidden"
        />
      )}

      {/* Admin Sidebar */}
      <aside className={`fixed md:sticky top-0 left-0 z-40 h-screen w-64 bg-slate-900 border-r border-slate-800/80 flex flex-col justify-between p-6 overflow-y-auto transform transition-transform duration-300 md:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="space-y-8">
          {/* Admin Header */}
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-rose-600 to-amber-600 flex items-center justify-center font-black text-white text-md tracking-wider">
                A
              </div>
              <span className="font-bold text-md tracking-tight text-white">
                ADMIN<span className="text-rose-500">.</span>
              </span>
            </Link>
            <button
              onClick={() => setSidebarOpen(false)}
              aria-label="Close sidebar"
              className="md:hidden p-1.5 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation links */}
          <nav className="flex flex-col gap-1">
            {sidebarLinks.map((link) => {
              const isActive = pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-xs font-semibold transition-all ${
                    isActive 
                      ? 'bg-rose-600 text-white shadow-md shadow-rose-600/10' 
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {link.icon}
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom options */}
        <div className="space-y-4 pt-6 mt-6 border-t border-slate-800/50">
          <Link
            href="/"
            className="flex items-center justify-between text-[10px] text-slate-500 hover:text-slate-300 transition-colors"
          >
            <span>Main Landing Page</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="/auth/login"
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-xs font-semibold text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 transition-all"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </Link>
        </div>
      </aside>

      {/* Main Administrative Screen */}
      <div className="flex-1 flex flex-col min-h-screen min-w-0">
        
        {/* Top Control Bar */}
        <header className="h-16 border-b border-slate-900 px-6 flex items-center justify-between bg-slate-950 sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              aria-label="Open sidebar"
              className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 focus:outline-none"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="hidden sm:flex items-center gap-2 text-xs font-semibold bg-rose-500/10 text-rose-400 px-2.5 py-1 rounded-full border border-rose-500/20">
              🛡️ Operator Access Node Authorized
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-rose-500 to-amber-600 flex items-center justify-center font-bold text-white text-xs">
                AS
              </div>
              <div className="hidden md:block text-left">
                <p className="text-xs font-semibold text-white">Alexander Sterling</p>
                <p className="text-[10px] text-slate-500">Chief Executive Admin</p>
              </div>
            </div>
          </div>
        </header>

        {/* Admin content */}
        <main className="flex-grow">
          {children}
        </main>
      </div>
    </div>
  );
}
