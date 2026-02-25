import React from 'react';
import { 
  LayoutDashboard, 
  Database, 
  UploadCloud, 
  Terminal, 
  Settings, 
  LogOut,
  Activity
} from 'lucide-react';

const NavItem = ({ icon: Icon, label, active = false }) => (
  <div className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 group ${
    active 
      ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' 
      : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'
  }`}>
    <Icon size={20} className={active ? 'text-white' : 'text-slate-400 group-hover:text-blue-400'} />
    <span className="font-semibold tracking-wide">{label}</span>
  </div>
);

export default function Sidebar() {
  return (
    <aside className="w-72 h-screen bg-slate-900 border-r border-slate-800 flex flex-col sticky top-0">
      {/* Brand Logo Section */}
      <div className="p-8">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-2 rounded-lg shadow-inner">
            <Activity className="text-white" size={24} />
          </div>
          <h1 className="text-white font-black text-xl tracking-tighter uppercase">
            Sample <span className="text-blue-500">NG</span>
          </h1>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4 space-y-2">
        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] px-4 mb-4">Main Menu</p>
        <NavItem icon={LayoutDashboard} label="Dashboard" active />
        <NavItem icon={Database} label="Samples Library" />
        <NavItem icon={UploadCloud} label="Quick Upload" />
        <NavItem icon={Terminal} label="Regression Logs" />
      </nav>

      {/* Footer Section */}
      <div className="p-4 border-t border-slate-800 space-y-1">
        <NavItem icon={Settings} label="System Config" />
        <NavItem icon={LogOut} label="Sign Out" />
        
        <div className="mt-4 p-4 bg-slate-800/40 rounded-xl border border-slate-700/50">
          <p className="text-xs text-slate-500 font-medium">Environment</p>
          <p className="text-xs text-emerald-400 font-mono">production_v2.1</p>
        </div>
      </div>
    </aside>
  );
}