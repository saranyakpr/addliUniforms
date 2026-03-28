import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import DressAdminDashboard from './components/pages/DressAdminDashboard';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-background">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <Header />

      <main className="ml-64 pt-20 p-8">
        {
          activeTab !== 'enquiries' && <>
            <div className="mb-6">
              <h1 className="text-2xl font-semibold text-foreground">Dashboard</h1>
              <p className="text-muted-foreground">Welcome back! Here's what's happening with your store today.</p>
            </div>
          </>
        }

        {activeTab === 'dashboard' && <Dashboard />}

        {(activeTab !== 'dashboard' && activeTab !== 'enquiries') && (
          <div className="bg-card rounded-xl shadow-sm border border-border p-12 text-center">
            <h2 className="text-xl font-semibold text-foreground mb-2">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Section
            </h2>
            <p className="text-muted-foreground">This section is under development.</p>
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
