import { Link } from 'react-router';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {/* Brand */}
          <div className="space-y-3">
            <Link to="/" className="inline-flex items-center gap-2">
              <div className="w-7 h-7 bg-accent rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-sm leading-none">A</span>
              </div>
              <span className="text-sm font-bold text-white uppercase tracking-wide">
                Addli Uniforms
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              Quality uniforms for every profession. Manufacturing and supplying excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Home', to: '/' },
                { label: 'Products', to: '/shop' },
                { label: 'About Us', to: '#' },
                { label: 'Contact', to: '#' },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3 uppercase tracking-wider">
              Categories
            </h4>
            <ul className="space-y-2 text-sm">
              {['School', 'Corporate', 'Healthcare', 'Hospitality', 'Industrial'].map(
                (cat) => (
                  <li key={cat}>
                    <Link to="/shop" className="hover:text-white transition-colors">
                      {cat}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3 uppercase tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>123 Uniform St, Suite 100<br />Business City, 12345</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" />
                <a href="mailto:contact@addli.com" className="hover:text-white transition-colors">
                  contact@addli.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                <a href="tel:+18005550199" className="hover:text-white transition-colors">
                  +1 (800) 555-0199
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} ADDLI UNIFORMS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
