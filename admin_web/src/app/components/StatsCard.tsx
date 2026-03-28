import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string | number;
  change: string;
  changeType: 'increase' | 'decrease';
  icon: LucideIcon;
  iconBgColor: string;
  iconColor: string;
}

export function StatsCard({ 
  title, 
  value, 
  change, 
  changeType, 
  icon: Icon,
  iconBgColor,
  iconColor
}: StatsCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-slate-600 mb-1">{title}</p>
          <h3 className="text-3xl font-semibold text-slate-900 mb-2">{value}</h3>
          <div className="flex items-center gap-1">
            <span className={`text-sm font-medium ${
              changeType === 'increase' ? 'text-green-600' : 'text-red-600'
            }`}>
              {change}
            </span>
            <span className="text-sm text-slate-500">vs last month</span>
          </div>
        </div>
        <div className={`${iconBgColor} ${iconColor} p-3 rounded-lg`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}
