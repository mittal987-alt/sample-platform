import Sidebar from './components/Sidebar';
import RegressionTable from './components/RegressionTable';

function App() {
  return (
    <div className="flex bg-slate-950 min-h-screen font-sans selection:bg-blue-500/30">
      <Sidebar />
      <main className="flex-1 p-8 lg:p-12">
        <header className="mb-10">
          <h2 className="text-white text-3xl font-bold tracking-tight">CI Dashboard</h2>
          <p className="text-slate-400 mt-2">Welcome to the Sample Platform Next-Gen Overview.</p>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* You can add metric cards here later */}
        </div>

        <RegressionTable />
      </main>
    </div>
  );
}

export default App;