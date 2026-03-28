import {
  LayoutDashboard,
  ShoppingBag,
  Package,
  Users,
  BarChart3,

  Tags,
  TrendingUp
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'enquiries', label: 'Enquiries', icon: TrendingUp },
    { id: 'orders', label: 'Orders', icon: ShoppingBag },
    { id: 'products', label: 'Products', icon: Package },
    { id: 'customers', label: 'Customers', icon: Users },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'categories', label: 'Categories', icon: Tags },
    // { id: 'sales', label: 'Sales', icon: TrendingUp },
    // { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="w-64 bg-primary text-primary-foreground min-h-screen fixed left-0 top-0">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-8">
          <ShoppingBag className="w-8 h-8 text-accent" />
          <div>
            <h1 className="text-xl font-semibold">Addli Uniforms</h1>
            <p className="text-xs text-primary-foreground/60">Admin Portal</p>
          </div>
        </div>

        <nav className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;

            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive
                  ? 'bg-accent text-accent-foreground'
                  : 'text-primary-foreground/70 hover:bg-primary-foreground/10'
                  }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
