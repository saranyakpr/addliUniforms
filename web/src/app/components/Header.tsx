import { Link, useNavigate, useLocation } from 'react-router';
import { ShoppingCart, Search, User, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../context/CartContext';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Products', to: '/shop' },
  { label: 'About Us', to: '#' },
  { label: 'Contact', to: '#' },
  { label: 'Quotation', to: '/cart' },
];

function isActive(pathname: string, to: string) {
  if (to === '/') return pathname === '/';
  if (to === '/shop') return pathname === '/shop' || pathname.startsWith('/product/');
  return pathname.startsWith(to);
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { items } = useCart();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const cartItemsCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-accent rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-sm sm:text-base leading-none">A</span>
            </div>
            <span className="text-sm sm:text-base font-bold tracking-wide text-primary uppercase">
              Addli Uniforms
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(pathname, link.to)
                    ? 'text-accent'
                    : 'text-muted-foreground hover:text-accent'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right */}
          <div className="flex items-center gap-1">
            <div className="hidden sm:flex items-center bg-secondary rounded-lg px-3 py-1.5 mr-1">
              <Search className="w-4 h-4 text-muted-foreground mr-2" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent text-sm w-24 lg:w-32 focus:outline-none placeholder:text-muted-foreground"
              />
            </div>
            <button
              onClick={() => navigate('/cart')}
              className="relative flex items-center justify-center w-9 h-9 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            >
              <ShoppingCart className="w-[18px] h-[18px]" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-accent text-white text-[10px] min-w-[18px] h-[18px] flex items-center justify-center rounded-full font-bold">
                  {cartItemsCount}
                </span>
              )}
            </button>
            <button className="hidden sm:flex items-center justify-center w-9 h-9 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
              <User className="w-[18px] h-[18px]" />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg text-muted-foreground hover:bg-secondary transition-colors"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white border-t border-border ${
          isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0 border-t-0'
        }`}
      >
        <nav className="flex flex-col p-3 gap-0.5">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={`px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                isActive(pathname, link.to)
                  ? 'text-accent bg-accent/5'
                  : 'text-foreground hover:bg-secondary'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
