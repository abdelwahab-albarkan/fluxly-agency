'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  FolderKanban,
  FileText,
  Ticket,
  FolderOpen,
  MessageSquare,
  User,
  Settings,
  LogOut,
  Bell,
  ArrowUpRight,
  Menu,
  X
} from 'lucide-react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sidebarLinks = [
    { label: 'Overview', href: '/dashboard/overview', icon: <LayoutDashboard className="w-5 h-5" /> },
    { label: 'Projects', href: '/dashboard/projects', icon: <FolderKanban className="w-5 h-5" /> },
    { label: 'Invoices', href: '/dashboard/invoices', icon: <FileText className="w-5 h-5" /> },
    { label: 'Support Tickets', href: '/dashboard/tickets', icon: <Ticket className="w-5 h-5" /> },
    { label: 'Files Hub', href: '/dashboard/files', icon: <FolderOpen className="w-5 h-5" /> },
    { label: 'Messages', href: '/dashboard/messages', icon: <MessageSquare className="w-5 h-5" /> },
    { label: 'Profile', href: '/dashboard/profile', icon: <User className="w-5 h-5" /> },
    { label: 'Settings', href: '/dashboard/settings', icon: <Settings className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex font-sans">
      
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-sm md:hidden"
        />
      )}

      {/* Sidebar Navigation */}
      <aside className={`fixed md:sticky top-0 left-0 z-40 h-screen w-64 bg-slate-900 border-r border-slate-800/80 flex flex-col justify-between p-6 transform transition-transform duration-300 md:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="space-y-8">
          {/* Brand Logo */}
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-violet-600 flex items-center justify-center font-black text-white text-md tracking-wider">
                A
              </div>
              <span className="font-bold text-md tracking-tight text-white">
                CLIENT<span className="text-blue-500">.</span>
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

          {/* Nav Links */}
          <nav className="flex flex-col gap-1.5">
            {sidebarLinks.map((link) => {
              const isActive = pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    isActive 
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/10' 
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

        {/* Footer actions */}
        <div className="space-y-4 pt-6 border-t border-slate-800/50">
          <Link
            href="/"
            className="flex items-center justify-between text-xs text-slate-500 hover:text-slate-300 transition-colors"
          >
            <span>Back to Main Site</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="/auth/login"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 transition-all"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-h-screen">
        
        {/* Top Header */}
        <header className="h-16 border-b border-slate-900 px-6 flex items-center justify-between bg-slate-950 sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              aria-label="Open sidebar"
              className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 focus:outline-none"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="hidden sm:flex items-center gap-2 text-xs font-semibold bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded-full border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              All Services Operational
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Notification Bell */}
            <button aria-label="Notifications" className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-blue-500" />
            </button>
            <div className="h-8 w-px bg-slate-900" />
            {/* Profile trigger */}
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center font-bold text-white text-xs">
                MC
              </div>
              <div className="hidden md:block text-left">
                <p className="text-xs font-semibold text-white group-hover:text-blue-400 transition-colors">Marcus Chen</p>
                <p className="text-[10px] text-slate-500">Startup.io Partner</p>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Pages */}
        <main className="flex-grow">
          {children}
        </main>
      </div>
    </div>
  );
}
