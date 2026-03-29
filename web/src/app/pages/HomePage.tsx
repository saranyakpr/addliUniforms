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
  Quote,
  Sparkles,
} from 'lucide-react';
import { motion } from 'motion/react';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { ClientCrousal } from '../../common/Dashboard/ClientCrousal';

const ease = [0.25, 0.1, 0.25, 1] as const;

const uniformCategories = [
  { icon: GraduationCap, label: 'School', color: 'bg-sky-50 text-sky-600' },
  { icon: Building2, label: 'Corporate', color: 'bg-rose-50 text-rose-700' },
  { icon: Stethoscope, label: 'Healthcare', color: 'bg-pink-50 text-pink-600' },
  { icon: Hotel, label: 'Hospitality', color: 'bg-amber-50 text-amber-600' },
  { icon: HardHat, label: 'Industrial', color: 'bg-orange-50 text-orange-600' },
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
      <section className="relative overflow-hidden bg-gradient-to-br from-rose-50/40 via-white to-pink-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center py-12 sm:py-16 lg:py-20">
            {/* Text */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease }}
              >
                <span className="inline-flex items-center gap-1.5 bg-accent/10 text-accent text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Trusted by 50+ organizations
                </span>
              </motion.div>

              <motion.h1
                className="text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl font-bold text-foreground leading-[1.12] tracking-tight mb-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease }}
              >
                Quality Uniforms
                <br />
                for <span className="text-accent">Every Profession</span>
              </motion.h1>

              <motion.p
                className="text-muted-foreground text-sm sm:text-base lg:text-lg leading-relaxed mb-8 max-w-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease }}
              >
                From corporate offices to classrooms and hospitals — we design,
                manufacture, and deliver premium uniforms your team will be proud to wear.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-3 mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3, ease }}
              >
                <Link
                  to="/shop"
                  className="group inline-flex items-center justify-center gap-2 bg-accent text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-accent/90 transition-colors"
                >
                  Explore Products
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  to="#"
                  className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:bg-secondary transition-colors"
                >
                  Contact Us
                </Link>
              </motion.div>

              {/* Mini stats */}
              <motion.div
                className="flex gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {[
                  { value: '50+', label: 'Clients' },
                  { value: '10K+', label: 'Delivered' },
                  { value: '99%', label: 'Satisfaction' },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-xl sm:text-2xl font-bold text-foreground leading-none">{s.value}</p>
                    <p className="text-[11px] sm:text-xs text-muted-foreground mt-1">{s.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease }}
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] max-h-[500px] shadow-2xl shadow-black/10">
                <img
                  src="https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Man wearing a professional shirt"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -z-10 -top-6 -right-6 w-40 h-40 bg-accent/10 rounded-full blur-2xl" />
              <div className="absolute -z-10 -bottom-8 -left-8 w-56 h-56 bg-pink-100/50 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── FEATURES ─── */}
      <section className="py-14 sm:py-16 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                className="flex items-start gap-3"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.08, ease }}
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                  <f.icon className="w-5 h-5" strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-foreground mb-0.5">{f.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHO WE ARE ─── */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease }}
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-3">About Us</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-4">
              Who We Are
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-5">
              Addli Uniforms is a leading manufacturer and supplier of professional
              uniforms. We combine quality materials, expert tailoring, and reliable
              delivery to outfit teams across schools, hospitals, corporations, hotels,
              and industrial workplaces.
            </p>
            <p className="text-accent font-semibold text-sm">
              ADDLI UNIFORMS — Delivering Quality Through Uniforms
            </p>
          </motion.div>
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
            <p className="text-white/50 text-sm sm:text-base max-w-lg mx-auto">
              Craft the perfect look for any profession and industry.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-5 sm:gap-8">
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
                  className="group flex flex-col items-center gap-3 w-24 sm:w-28"
                >
                  <div className={`w-16 h-16 sm:w-18 sm:h-18 rounded-2xl ${cat.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <cat.icon className="w-7 h-7 sm:w-8 sm:h-8" strokeWidth={1.5} />
                  </div>
                  <span className="text-white/60 text-xs sm:text-sm font-medium text-center group-hover:text-white transition-colors">
                    {cat.label}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED PRODUCTS ─── */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, ease }}
          >
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-2">Bestsellers</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
                Featured Products
              </h2>
            </div>
            <Link
              to="/shop"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline underline-offset-4"
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

      {/* ─── OUR JOURNEY ─── */}
      {/* <section className="py-14 sm:py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-10 sm:mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, ease }}
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-3">Our Story</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-3">
              Our Journey
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-lg mx-auto">
              From a small workshop to serving organizations nationwide.
            </p>
          </motion.div>

          <div className="relative max-w-3xl mx-auto">
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
                <div className="absolute left-4 sm:left-1/2 w-3 h-3 bg-accent rounded-full border-2 border-white shadow-sm -translate-x-1.5 sm:-translate-x-1.5 mt-1.5 z-10" />
                <div className={`ml-10 sm:ml-0 sm:w-1/2 ${i % 2 === 0 ? 'sm:pr-10 sm:text-right' : 'sm:pl-10'}`}>
                  <span className="inline-block bg-accent/10 text-accent text-xs font-bold px-2.5 py-1 rounded-md mb-2">
                    {m.year}
                  </span>
                  <h3 className="font-bold text-foreground text-sm sm:text-base mb-1">{m.title}</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ─── CLIENTS ─── */}
      <ClientCrousal />

      {/* ─── TESTIMONIAL ─── */}
      <section className="py-14 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease }}
          >
            <Quote className="w-10 h-10 text-accent/20 mx-auto mb-4" />
            <blockquote className="text-base sm:text-lg lg:text-xl text-foreground leading-relaxed font-medium italic mb-6">
              "The quality and service from Addli have been exceptional. Our staff
              loves the uniforms — they're comfortable and truly professional. We
              wouldn't go anywhere else."
            </blockquote>
            <p className="font-bold text-foreground text-sm">The Greenwood Hotel</p>
            <div className="flex items-center justify-center gap-0.5 mt-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="pb-14 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="relative overflow-hidden bg-primary rounded-2xl px-6 sm:px-10 lg:px-14 py-10 sm:py-14 flex flex-col sm:flex-row items-center justify-between gap-6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, ease }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
            <div className="relative">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Have a Question or Need a Custom Order?
              </h2>
              <p className="text-white/50 text-sm sm:text-base">
                Our uniform consultants are ready to help you find the perfect fit.
              </p>
            </div>
            <Link
              to="#"
              className="relative shrink-0 bg-accent text-white px-7 py-3 rounded-lg font-semibold text-sm hover:bg-accent/90 transition-colors"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
