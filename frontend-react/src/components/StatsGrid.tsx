const StatCard = ({ label, value, trend, color }) => (
  <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
    <p className="text-slate-400 text-sm font-medium">{label}</p>
    <div className="flex items-baseline gap-2 mt-2">
      <h3 className="text-white text-3xl font-bold">{value}</h3>
      <span className={`text-xs font-medium ${color}`}>{trend}</span>
    </div>
  </div>
);

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      <StatCard label="Total Samples" value="1,284" trend="+12 this week" color="text-emerald-400" />
      <StatCard label="Active Regressions" value="42" trend="All Systems Nominal" color="text-blue-400" />
      <StatCard label="Failed Tests" value="3" trend="-2 from yesterday" color="text-rose-400" />
    </div>
  );
}