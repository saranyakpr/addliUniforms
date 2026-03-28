import { Link } from 'react-router';
import {
  ArrowRight,
  Shield,
  Truck,
  Users,
  Scissors,
  GraduationCap,
  Building2,
  Stethoscope,
  Hotel,
  HardHat,
  Star,
  CheckCircle,
  Quote,
} from 'lucide-react';
import { motion } from 'motion/react';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { ClientCrousal } from '../../common/Dashboard/ClientCrousal';

const ease = [0.25, 0.1, 0.25, 1] as const;

const uniformCategories = [
  { icon: GraduationCap, label: 'School', color: 'bg-blue-50 text-blue-600 border-blue-100' },
  { icon: Building2, label: 'Corporate', color: 'bg-slate-50 text-slate-600 border-slate-100' },
  { icon: Stethoscope, label: 'Healthcare', color: 'bg-emerald-50 text-emerald-600 border-emerald-100' },
  { icon: Hotel, label: 'Hospitality', color: 'bg-amber-50 text-amber-600 border-amber-100' },
  { icon: HardHat, label: 'Industrial', color: 'bg-orange-50 text-orange-600 border-orange-100' },
];

const features = [
  { icon: Shield, title: 'Premium Quality', desc: 'Durable fabrics built for everyday professional use.' },
  { icon: Scissors, title: 'Custom Tailoring', desc: 'Fitted to your team\'s exact specifications.' },
  { icon: Users, title: 'Bulk Orders', desc: 'Volume pricing for teams of any size.' },
  { icon: Truck, title: 'Fast Delivery', desc: 'Quick turnaround in 3–5 business days.' },
];

const journeyMilestones = [
  { year: '2014', title: 'The Beginning', desc: 'Founded with a mission to make professional uniforms accessible and affordable.' },
  { year: '2017', title: 'Expanding to Education', desc: 'Partnered with over 50 schools to provide quality school uniforms.' },
  { year: '2020', title: 'Serving Healthcare', desc: 'Began supplying scrubs and medical wear to hospitals nationwide.' },
  { year: '2022', title: 'Corporate & Hospitality', desc: 'Expanded into corporate suits and hotel staff uniforms.' },
  { year: '2024', title: 'Nationwide Reach', desc: 'Now serving 50+ organizations with a 99% client retention rate.' },
];

export function HomePage() {
  const featuredProducts = products.filter((p) => p.featured);

  return (
    <div className="min-h-screen bg-background">
      {/* ─── HERO ─── */}
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15)_0%,transparent_60%)]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-14 sm:py-16 lg:py-20">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease }}
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.15] tracking-tight mb-5">
                Quality Uniforms for
                <span className="text-accent"> Every Profession</span>
              </h1>
              <p className="text-blue-100/80 text-sm sm:text-base lg:text-lg leading-relaxed mb-8 max-w-lg">
                From corporate offices to classrooms and hospitals — we design,
                manufacture, and deliver premium uniforms your team will be proud to wear.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/shop"
                  className="group inline-flex items-center justify-center gap-2 bg-accent text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-accent/90 transition-colors"
                >
                  Explore Products
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  to="#"
                  className="inline-flex items-center justify-center gap-2 border border-white/25 text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-white/10 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              className="relative hidden lg:block"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15, ease }}
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] max-h-[440px]">
                <img
                  src="https://images.unsplash.com/photo-1761522001672-5f1d45ce1b10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtZW4lMjBmYXNoaW9uJTIwbW9kZWwlMjBzdWl0fGVufDF8fHx8MTc3MDgwNTI3M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Professional uniforms"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── WHO WE ARE ─── */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-4">
              Who We Are
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
              Addli Uniforms is a leading manufacturer and supplier of professional
              uniforms. We combine quality materials, expert tailoring, and reliable
              delivery to outfit teams across schools, hospitals, corporations, hotels,
              and industrial workplaces.
            </p>
            <p className="text-accent font-semibold text-sm">
              ADDLI UNIFORMS — Delivering Quality Through Uniforms
            </p>
          </motion.div>

          {/* Features */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-10 sm:mt-14">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                className="text-center p-4 sm:p-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.08, ease }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-accent/10 text-accent mb-3">
                  <f.icon className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.8} />
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

      {/* ─── UNIFORM CATEGORIES ─── */}
      <section className="py-14 sm:py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, ease }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
              Our Uniform Categories
            </h2>
            <p className="text-blue-100/60 text-sm sm:text-base max-w-lg mx-auto">
              Craft the perfect look for any profession and industry.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8">
            {uniformCategories.map((cat, i) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.08, ease }}
              >
                <Link
                  to="/shop"
                  className="group flex flex-col items-center gap-3 w-28 sm:w-32"
                >
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 ${cat.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 bg-white`}>
                    <cat.icon className="w-7 h-7 sm:w-8 sm:h-8" strokeWidth={1.5} />
                  </div>
                  <span className="text-white text-xs sm:text-sm font-medium text-center">
                    {cat.label}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED PRODUCTS ─── */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, ease }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-3">
              Featured Products
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-lg mx-auto">
              Discover our top-quality uniforms crafted for comfort and durability.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-10">
            <Link
              to="/shop"
              className="group inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-accent/90 transition-colors"
            >
              View All Products
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── OUR JOURNEY ─── */}
      <section className="py-14 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-10 sm:mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, ease }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-3">
              Our Journey
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-lg mx-auto">
              From a small workshop to serving organizations nationwide — here's how we grew.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative max-w-3xl mx-auto">
            {/* Line */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-border sm:-translate-x-px" />

            {journeyMilestones.map((m, i) => (
              <motion.div
                key={m.year}
                className={`relative flex items-start gap-4 sm:gap-0 mb-10 last:mb-0 ${
                  i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.08, ease }}
              >
                {/* Dot */}
                <div className="absolute left-4 sm:left-1/2 w-3 h-3 bg-accent rounded-full border-2 border-white shadow-sm -translate-x-1.5 sm:-translate-x-1.5 mt-1.5 z-10" />

                {/* Content */}
                <div className={`ml-10 sm:ml-0 sm:w-1/2 ${i % 2 === 0 ? 'sm:pr-10 sm:text-right' : 'sm:pl-10'}`}>
                  <span className="inline-block bg-accent/10 text-accent text-xs font-bold px-2.5 py-1 rounded-md mb-2">
                    {m.year}
                  </span>
                  <h3 className="font-bold text-foreground text-sm sm:text-base mb-1">
                    {m.title}
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CLIENTS ─── */}
      <ClientCrousal />

      {/* ─── TESTIMONIAL ─── */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease }}
          >
            <Quote className="w-10 h-10 text-accent/30 mx-auto mb-4" />
            <blockquote className="text-base sm:text-lg lg:text-xl text-foreground leading-relaxed font-medium italic mb-6">
              "The quality and service from Addli have been exceptional. Our staff
              loves the uniforms — they're comfortable and truly professional. We
              wouldn't go anywhere else."
            </blockquote>
            <div>
              <p className="font-bold text-foreground text-sm">The Greenwood Hotel</p>
              <div className="flex items-center justify-center gap-0.5 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="py-10 sm:py-14 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-between gap-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, ease }}
          >
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-1">
                Have a Question or Need a Custom Order?
              </h2>
              <p className="text-blue-100/80 text-sm">
                Our uniform consultants are ready to help you find the perfect fit.
              </p>
            </div>
            <Link
              to="#"
              className="shrink-0 bg-white text-accent px-6 py-3 rounded-lg font-semibold text-sm hover:bg-white/90 transition-colors"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
