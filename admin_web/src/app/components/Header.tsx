import { Bell, Search, User } from 'lucide-react';
import { Avatar, AvatarFallback } from './ui/avatar';

export function Header() {
  return (
    <header className="bg-white border-b border-slate-200 px-8 py-4 ml-64 fixed top-0 right-0 left-0 z-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 flex-1 max-w-xl">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search products, orders, customers..."
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="relative p-2 hover:bg-slate-100 rounded-lg transition-colors">
            <Bell className="w-5 h-5 text-slate-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-pink-600 rounded-full"></span>
          </button>
          
          <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
            <div className="text-right">
              <p className="text-sm font-medium text-slate-900">Admin User</p>
              <p className="text-xs text-slate-500">admin@dresshub.com</p>
            </div>
            <Avatar>
              <AvatarFallback className="bg-pink-600 text-white">
                <User className="w-5 h-5" />
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  );
}
