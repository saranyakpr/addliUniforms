import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import DressAdminDashboard from './components/pages/DressAdminDashboard';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <Header />

      <main className="ml-64 pt-20 p-8">
        {
          activeTab !== 'enquiries' && <>
            <div className="mb-6">
              <h1 className="text-2xl font-semibold text-slate-900">Dashboard</h1>
              <p className="text-slate-600">Welcome back! Here's what's happening with your store today.</p>
            </div>
          </>
        }

        {activeTab === 'dashboard' && <Dashboard />}

        {(activeTab !== 'dashboard' && activeTab !== 'enquiries') && (
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-12 text-center">
            <h2 className="text-xl font-semibold text-slate-900 mb-2">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Section
            </h2>
            <p className="text-slate-500">This section is under development.</p>
          </div>
        )}

        {activeTab === 'enquiries' && <>
          <DressAdminDashboard />
        </>
        }
      </main>

    </div>
  );
}
