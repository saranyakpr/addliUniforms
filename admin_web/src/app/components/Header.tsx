import { Bell, Search, User } from 'lucide-react';
import { Avatar, AvatarFallback } from './ui/avatar';

export function Header() {
  return (
    <header className="bg-card border-b border-border px-8 py-4 ml-64 fixed top-0 right-0 left-0 z-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 flex-1 max-w-xl">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search products, orders, customers..."
              className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="relative p-2 hover:bg-secondary rounded-lg transition-colors">
            <Bell className="w-5 h-5 text-muted-foreground" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full"></span>
          </button>

          <div className="flex items-center gap-3 pl-4 border-l border-border">
            <div className="text-right">
              <p className="text-sm font-medium text-foreground">Admin User</p>
              <p className="text-xs text-muted-foreground">admin@dresshub.com</p>
            </div>
            <Avatar>
              <AvatarFallback className="bg-accent text-accent-foreground">
                <User className="w-5 h-5" />
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  );
}
