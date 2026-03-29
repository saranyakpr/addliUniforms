import { DollarSign, ShoppingCart, Users, Package } from 'lucide-react';
import { StatsCard } from './StatsCard';
import { ChartLoader } from './Charts';

export function Dashboard() {
  // Recent orders data
  const recentOrders = [
    { id: '#ORD-2456', customer: 'Sarah Johnson', product: 'Floral Maxi Dress', amount: '$129.99', status: 'Delivered', date: '2026-03-04' },
    { id: '#ORD-2455', customer: 'Emma Wilson', product: 'Evening Gown Black', amount: '$299.99', status: 'Processing', date: '2026-03-04' },
    { id: '#ORD-2454', customer: 'Olivia Brown', product: 'Summer Dress Blue', amount: '$89.99', status: 'Shipped', date: '2026-03-03' },
    { id: '#ORD-2453', customer: 'Sophia Davis', product: 'Party Dress Red', amount: '$159.99', status: 'Delivered', date: '2026-03-03' },
    { id: '#ORD-2452', customer: 'Ava Martinez', product: 'Casual Dress White', amount: '$79.99', status: 'Processing', date: '2026-03-02' },
    { id: '#ORD-2451', customer: 'Mia Anderson', product: 'Cocktail Dress Pink', amount: '$189.99', status: 'Shipped', date: '2026-03-02' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Processing':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'Shipped':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      default:
        return 'bg-muted text-muted-foreground border-border';
    }
  };

  return (
    <div className="space-y-6">
      <ChartLoader />
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Revenue"
          value="$684,253"
          change="+23.5%"
          changeType="increase"
          icon={DollarSign}
          iconBgColor="bg-rose-100"
          iconColor="text-rose-700"
        />
        <StatsCard
          title="Total Orders"
          value="3,247"
          change="+18.2%"
          changeType="increase"
          icon={ShoppingCart}
          iconBgColor="bg-purple-100"
          iconColor="text-purple-700"
        />
        <StatsCard
          title="Total Customers"
          value="2,845"
          change="+12.8%"
          changeType="increase"
          icon={Users}
          iconBgColor="bg-pink-100"
          iconColor="text-pink-700"
        />
        <StatsCard
          title="Total Products"
          value="856"
          change="+5.4%"
          changeType="increase"
          icon={Package}
          iconBgColor="bg-fuchsia-100"
          iconColor="text-fuchsia-700"
        />
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sales Overview */}
        <div className="lg:col-span-2 bg-card rounded-xl shadow-sm border border-border p-6">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-foreground">Sales Overview</h3>
            <p className="text-sm text-muted-foreground">Revenue trends for 2026</p>
          </div>
          <div id="sales-chart" className="h-[300px]"></div>
        </div>

        {/* Category Breakdown */}
        <div className="bg-card rounded-xl shadow-sm border border-border p-6">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-foreground">Category Sales</h3>
            <p className="text-sm text-muted-foreground">Distribution by category</p>
          </div>
          <div id="category-chart" className="h-[300px]"></div>
        </div>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Revenue */}
        <div className="bg-card rounded-xl shadow-sm border border-border p-6">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-foreground">Monthly Revenue</h3>
            <p className="text-sm text-muted-foreground">Last 6 months performance</p>
          </div>
          <div id="revenue-chart" className="h-[280px]"></div>
        </div>

        {/* Orders Growth */}
        <div className="bg-card rounded-xl shadow-sm border border-border p-6">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-foreground">Weekly Orders</h3>
            <p className="text-sm text-muted-foreground">Orders trend this month</p>
          </div>
          <div id="orders-chart" className="h-[280px]"></div>
        </div>
      </div>

      {/* Recent Orders Table */}
      <div className="bg-card rounded-xl shadow-sm border border-border overflow-hidden">
        <div className="p-6 border-b border-border">
          <h3 className="text-lg font-semibold text-foreground">Recent Orders</h3>
          <p className="text-sm text-muted-foreground">Latest customer orders</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-secondary">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="bg-card divide-y divide-border">
              {recentOrders.map((order) => (
                <tr key={order.id} className="hover:bg-secondary transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-medium text-foreground">{order.id}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-foreground/80">{order.customer}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-foreground/80">{order.product}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-medium text-foreground">{order.amount}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium border ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-muted-foreground">{order.date}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
