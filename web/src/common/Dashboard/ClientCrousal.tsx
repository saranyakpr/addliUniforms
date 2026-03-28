import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';
import Autoplay from 'embla-carousel-autoplay';
import { useRef, useState, useCallback } from 'react';
import { motion, useInView } from 'motion/react';
import { Handshake, Award, TrendingUp } from 'lucide-react';

const clients = [
    { id: 1, name: 'Client 1' },
    { id: 2, name: 'Client 2' },
    { id: 3, name: 'Client 3' },
    { id: 4, name: 'Client 4' },
    { id: 5, name: 'Client 5' },
    { id: 6, name: 'Client 6' },
    { id: 7, name: 'Client 7' },
    { id: 8, name: 'Client 8' },
    { id: 9, name: 'Client 9' },
    { id: 10, name: 'Client 10' },
    { id: 11, name: 'Client 11' },
    { id: 12, name: 'Client 12' },
    { id: 13, name: 'Client 13' },
];

const stats = [
    { value: '50+', label: 'Trusted Clients', icon: Handshake, color: 'bg-teal-50 text-teal-600' },
    { value: '10+', label: 'Years of Service', icon: Award, color: 'bg-amber-50 text-amber-600' },
    { value: '99%', label: 'Client Retention', icon: TrendingUp, color: 'bg-indigo-50 text-indigo-600' },
];

const ease = [0.25, 0.1, 0.25, 1] as const;

function AnimatedCounter({ value }: { value: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-40px' });
    return (
        <span ref={ref} className="tabular-nums">
            {isInView ? value : '0'}
        </span>
    );
}

const ClientCrousal = () => {
    const autoplay = useRef(Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true }));
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    const handleMouseEnter = useCallback((id: number) => setHoveredId(id), []);
    const handleMouseLeave = useCallback(() => setHoveredId(null), []);

    return (
        <section className="py-14 sm:py-20 bg-gradient-to-b from-background via-white to-background overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section heading */}
                <motion.div
                    className="text-center mb-10 sm:mb-14"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5, ease }}
                >
                    <span className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4">
                        <Handshake className="w-3.5 h-3.5" />
                        Our Partners
                    </span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-3">
                        Trusted by Industry Leaders
                    </h2>
                    <p className="text-muted-foreground text-sm sm:text-base max-w-lg mx-auto">
                        Companies across the country rely on us for quality, consistency, and on-time delivery.
                    </p>
                </motion.div>

                {/* Stats cards */}
                <div className="grid grid-cols-3 gap-3 sm:gap-5 mb-10 sm:mb-14 max-w-2xl mx-auto">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            className="bg-white rounded-2xl border border-border p-4 sm:p-5 text-center hover:shadow-md hover:shadow-black/5 transition-shadow duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.4, delay: i * 0.1, ease }}
                        >
                            <div className={`inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl ${stat.color} mb-2.5`}>
                                <stat.icon className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.8} />
                            </div>
                            <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground leading-none mb-1">
                                <AnimatedCounter value={stat.value} />
                            </p>
                            <p className="text-[11px] sm:text-xs text-muted-foreground tracking-wide">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Carousel with fade edges */}
                <motion.div
                    className="relative"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {/* Fade edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

                    <Carousel
                        withIndicators={false}
                        height={95}
                        slideSize={{ base: '42%', xs: '32%', sm: '24%', md: '19%', lg: '16%' }}
                        withControls={false}
                        slideGap={{ base: 10, sm: 14 }}
                        emblaOptions={{ loop: true, align: 'start', slidesToScroll: 1 }}
                        plugins={[autoplay.current]}
                    >
                        {clients.map((client) => (
                            <Carousel.Slide key={client.id}>
                                <div
                                    className={`
                                        group flex items-center justify-center h-full
                                        rounded-xl bg-white/80 border
                                        transition-all duration-300 cursor-pointer
                                        ${hoveredId === client.id
                                            ? 'border-primary/25 shadow-md shadow-primary/5'
                                            : 'border-border/40'
                                        }
                                        ${hoveredId !== null && hoveredId !== client.id ? 'opacity-30' : 'opacity-100'}
                                    `}
                                    onMouseEnter={() => handleMouseEnter(client.id)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <div className="transition-all duration-300 group-hover:scale-105">
                                        <Image
                                            radius="sm"
                                            h={55}
                                            w="auto"
                                            fit="contain"
                                            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png"
                                            alt={client.name}
                                        />
                                    </div>
                                </div>
                            </Carousel.Slide>
                        ))}
                    </Carousel>
                </motion.div>

                {/* Bottom tagline */}
                <motion.p
                    className="text-center text-xs sm:text-sm text-muted-foreground mt-6 sm:mt-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    Partnering with businesses in corporate, hospitality, healthcare, and more.
                </motion.p>
            </div>
        </section>
    );
};

export { ClientCrousal };
