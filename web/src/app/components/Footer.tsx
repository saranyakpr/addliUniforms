import { Link } from 'react-router';
import { Globe, ExternalLink, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-foreground text-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-4">
            <Link to="/" className="inline-flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-base leading-none">a</span>
              </div>
              <div className="leading-none">
                <span className="text-base font-bold text-white tracking-tight">
                  addli
                </span>
                <span className="text-base font-normal text-white/50 tracking-tight">
                  uniforms
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              Premium uniforms designed for teams that mean business. Quality craftsmanship, custom fits, and reliable delivery.
            </p>
            <div className="flex gap-2.5">
              {[Globe, ExternalLink, MessageCircle, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/15 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Shop
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'Corporate', to: '/shop?category=Suits' },
                { label: 'Professional', to: '/shop?category=Formal' },
                { label: 'Casual', to: '/shop?category=Shirts' },
                { label: 'Blazers', to: '/shop?category=Blazers' },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              {['About Us', 'Size Guide', 'Shipping & Returns', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                <a href="tel:+1234567890" className="hover:text-white transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                <a href="mailto:hello@addliuniforms.com" className="hover:text-white transition-colors">
                  hello@addliuniforms.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>123 Business Ave, Suite 100</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p>&copy; {new Date().getFullYear()} addliuniforms. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
