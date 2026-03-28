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
    <div className="bg-card rounded-xl shadow-sm border border-border p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-muted-foreground mb-1">{title}</p>
          <h3 className="text-3xl font-semibold text-foreground mb-2">{value}</h3>
          <div className="flex items-center gap-1">
            <span className={`text-sm font-medium ${
              changeType === 'increase' ? 'text-emerald-600' : 'text-red-600'
            }`}>
              {change}
            </span>
            <span className="text-sm text-muted-foreground">vs last month</span>
          </div>
        </div>
        <div className={`${iconBgColor} ${iconColor} p-3 rounded-lg`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}
