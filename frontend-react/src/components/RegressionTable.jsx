import React from 'react';
import { CheckCircle2, XCircle, Clock, Play } from 'lucide-react';

const mockTests = [
  { id: 1, name: "Master_Branch_CI", status: "Passed", duration: "1m 4s", commit: "f601abc" },
  { id: 2, name: "Windows_Build_Check", status: "Failed", duration: "45s", commit: "a2b3c4d" },
  { id: 3, name: "Subtitle_Extraction_v2", status: "Running", duration: "12s", commit: "e5f6g7h" },
];

export default function RegressionTable() {
  return (
    <div className="mt-8 overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50">
      <table className="w-full text-left border-collapse">
        <thead className="bg-slate-800/50 text-slate-400 text-xs uppercase font-semibold">
          <tr>
            <th className="px-6 py-4">Test Name</th>
            <th className="px-6 py-4">Status</th>
            <th className="px-6 py-4">Duration</th>
            <th className="px-6 py-4 text-right">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-800">
          {mockTests.map((test) => (
            <tr key={test.id} className="hover:bg-slate-800/30 transition-colors">
              <td className="px-6 py-4 font-medium text-slate-200">
                {test.name}
                <div className="text-xs text-slate-500 font-mono">commit: {test.commit}</div>
              </td>
              <td className="px-6 py-4">
                {test.status === "Passed" && <span className="flex items-center gap-1.5 text-emerald-400 text-sm"><CheckCircle2 size={16}/> Passed</span>}
                {test.status === "Failed" && <span className="flex items-center gap-1.5 text-rose-400 text-sm"><XCircle size={16}/> Failed</span>}
                {test.status === "Running" && <span className="flex items-center gap-1.5 text-sky-400 text-sm animate-pulse"><Clock size={16}/> Running</span>}
              </td>
              <td className="px-6 py-4 text-slate-400 text-sm">{test.duration}</td>
              <td className="px-6 py-4 text-right">
                <button className="p-2 hover:bg-blue-500/10 text-blue-400 rounded-lg transition-colors">
                  <Play size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}