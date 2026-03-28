import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';
import { motion } from 'motion/react';

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

const ease = [0.25, 0.1, 0.25, 1] as const;

const ClientCrousal = () => {
    const autoplay = useRef(Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true }));

    return (
        <section className="py-14 sm:py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-8 sm:mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.4, ease }}
                >
                    <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-3">
                        Our Clients
                    </h2>
                    <p className="text-muted-foreground text-sm sm:text-base max-w-lg mx-auto">
                        We are proud to work with schools, hospitals, hotels, and companies across the country.
                    </p>
                </motion.div>

                {/* Carousel */}
                <motion.div
                    className="relative"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

                    <Carousel
                        withIndicators={false}
                        height={90}
                        slideSize={{ base: '40%', xs: '30%', sm: '22%', md: '18%', lg: '15%' }}
                        withControls={false}
                        slideGap={{ base: 12, sm: 16 }}
                        emblaOptions={{ loop: true, align: 'start', slidesToScroll: 1 }}
                        plugins={[autoplay.current]}
                    >
                        {clients.map((client) => (
                            <Carousel.Slide key={client.id}>
                                <div className="group flex items-center justify-center h-full rounded-xl border border-border bg-white hover:shadow-md hover:shadow-black/5 hover:border-accent/20 transition-all duration-300 cursor-pointer">
                                    <div className="transition-transform duration-300 group-hover:scale-105">
                                        <Image
                                            radius="sm"
                                            h={50}
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

                {/* Stats row */}
                <div className="flex flex-wrap justify-center gap-8 sm:gap-14 mt-8 sm:mt-12 pt-8 sm:pt-10 border-t border-border">
                    {[
                        { value: '50+', label: 'Partner Organizations' },
                        { value: '10K+', label: 'Uniforms Delivered' },
                        { value: '99%', label: 'Client Satisfaction' },
                        { value: '10+', label: 'Years Experience' },
                    ].map((s) => (
                        <div key={s.label} className="text-center">
                            <p className="text-xl sm:text-2xl font-bold text-accent leading-none">
                                {s.value}
                            </p>
                            <p className="text-[11px] sm:text-xs text-muted-foreground mt-1.5">
                                {s.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export { ClientCrousal };
