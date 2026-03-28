import { Link } from 'react-router';
import {
  ArrowRight,
  Shield,
  Truck,
  Users,
  Scissors,
  Star,
  CheckCircle,
  Send,
} from 'lucide-react';
import { motion } from 'motion/react';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { ClientCrousal } from '../../common/Dashboard/ClientCrousal';

const ease = [0.25, 0.1, 0.25, 1] as const;

const features = [
  {
    icon: Shield,
    title: 'Premium Fabrics',
    desc: 'Durable, breathable materials built for everyday wear.',
    color: 'bg-teal-50 text-teal-700',
  },
  {
    icon: Scissors,
    title: 'Custom Tailoring',
    desc: 'Fitted to your team\'s exact measurements.',
    color: 'bg-amber-50 text-amber-700',
  },
  {
    icon: Users,
    title: 'Bulk Orders',
    desc: 'Teams of 10 or 10,000 — with volume pricing.',
    color: 'bg-indigo-50 text-indigo-700',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    desc: 'Express shipping in 3–5 business days.',
    color: 'bg-rose-50 text-rose-700',
  },
];

const categories = [
  {
    label: 'Corporate',
    tagline: 'Boardroom ready',
    to: '/shop?category=Suits',
    image:
      'https://images.unsplash.com/photo-1770582071587-dbbb4b09c2a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwbWFuJTIwZm9ybWFsJTIwd2VhcnxlbnwxfHx8fDE3NzA4MDUyNzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    label: 'Professional',
    tagline: 'Built for the job',
    to: '/shop?category=Formal',
    image:
      'https://images.unsplash.com/photo-1630173250799-2813d34ed14b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwbWVuJTIwYmxhemVyJTIwb3V0Zml0fGVufDF8fHx8MTc3MDgwNTI3M3ww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    label: 'Casual',
    tagline: 'Comfortable & sharp',
    to: '/shop?category=Shirts',
    image:
      'https://images.unsplash.com/photo-1737574821698-862e77f044c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBtYW4lMjBwcm9mZXNzaW9uYWwlMjB3ZWFyfGVufDF8fHx8MTc3MDgwNTI3NXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function HomePage() {
  const featuredProducts = products.filter((p) => p.featured);

  return (
    <div className="min-h-screen bg-background">
      {/* ─── HERO — split layout ─── */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-12 sm:py-16 lg:py-10">
            {/* Left — text */}
            <div className="order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease }}
              >
                <span className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs sm:text-sm font-semibold px-3.5 py-1.5 rounded-full mb-5">
                  <Star className="w-3.5 h-3.5 fill-accent text-accent" />
                  Trusted by 50+ organizations
                </span>
              </motion.div>

              <motion.h1
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] font-bold text-foreground leading-[1.15] tracking-tight mb-5"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease }}
              >
                Uniforms that
                <span className="text-primary"> build identity</span> for
                your team
              </motion.h1>

              <motion.p
                className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8 max-w-lg"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease }}
              >
                From corporate offices to hospitality — we design, tailor,
                and deliver premium uniforms that make your team look and
                feel their best.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-3 mb-8"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3, ease }}
              >
                <Link
                  to="/shop"
                  className="group inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 sm:py-3.5 rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors"
                >
                  Explore Collection
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  to="/shop?category=Suits"
                  className="inline-flex items-center justify-center gap-2 border-2 border-border text-foreground px-6 py-3 sm:py-3.5 rounded-xl font-semibold text-sm hover:bg-secondary transition-colors"
                >
                  Get a Quote
                </Link>
              </motion.div>

              <motion.div
                className="flex flex-wrap gap-x-5 gap-y-2 text-xs sm:text-sm text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-primary" /> Free shipping on bulk
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-primary" /> Custom branding
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-primary" /> Quality guaranteed
                </span>
              </motion.div>
            </div>

            {/* Right — image */}
            <motion.div
              className="order-1 lg:order-2 relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15, ease }}
            >
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/3] lg:aspect-[4/5] max-h-[420px] lg:max-h-[480px] mx-auto lg:mx-0 w-full">
                <img
                  src="https://images.unsplash.com/photo-1761522001672-5f1d45ce1b10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtZW4lMjBmYXNoaW9uJTIwbW9kZWwlMjBzdWl0fGVufDF8fHx8MTc3MDgwNTI3M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Premium uniforms"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating trust card */}
              <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5 bg-white rounded-xl sm:rounded-2xl shadow-xl shadow-black/10 p-3 sm:p-4 flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <p className="text-lg sm:text-xl font-bold text-foreground leading-none">10K+</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Uniforms delivered</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── FEATURES — horizontal cards ─── */}
      <section className="py-12 sm:py-16 border-y border-border bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                className="bg-background rounded-2xl p-4 sm:p-5 hover:shadow-md hover:shadow-black/5 transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.08, ease }}
              >
                <div className={`inline-flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl ${f.color} mb-3`}>
                  <f.icon className="w-5 h-5 sm:w-[22px] sm:h-[22px]" strokeWidth={1.8} />
                </div>
                <h3 className="font-semibold text-sm sm:text-base text-foreground mb-1">
                  {f.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED PRODUCTS ─── */}
      <section className="py-14 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, ease }}
          >
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-2 block">
                Bestsellers
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
                Featured Collection
              </h2>
            </div>
            <Link
              to="/shop"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline underline-offset-4"
            >
              View all
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── CLIENT CAROUSEL ─── */}
      <ClientCrousal />

      {/* ─── CATEGORIES ─── */}
      <section className="py-14 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, ease }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-2 block">
              Categories
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-3">
              Uniforms for Every Industry
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-lg mx-auto">
              Whether it's the office, the floor, or the field — we've got you covered.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.1, ease }}
              >
                <Link
                  to={cat.to}
                  className="group relative block h-64 sm:h-72 lg:h-80 overflow-hidden rounded-2xl"
                >
                  <img
                    src={cat.image}
                    alt={cat.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                    <p className="text-white/60 text-xs uppercase tracking-wider mb-1">
                      {cat.tagline}
                    </p>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {cat.label}
                    </h3>
                  </div>
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── NEWSLETTER ─── */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-primary rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease }}
          >
            <div className="lg:max-w-md">
              <div className="inline-flex items-center justify-center w-10 h-10 bg-white/15 rounded-xl mb-4">
                <Send className="w-5 h-5 text-white" strokeWidth={1.5} />
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight mb-2">
                Stay in the Loop
              </h2>
              <p className="text-white/70 text-sm sm:text-base">
                Get exclusive offers, new drops, and uniform care tips straight to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 lg:min-w-[380px]">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
              />
              <button className="bg-accent text-accent-foreground px-6 py-3 rounded-xl font-semibold text-sm hover:bg-accent/90 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
