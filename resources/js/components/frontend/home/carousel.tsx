import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

export default function FullScreenCarousel() {
    // Autoplay enabled (delay: 4000ms)
    const [emblaRef] = useEmblaCarousel({ loop: true }, [
        Autoplay({ delay: 4000, stopOnInteraction: false })
    ]);

    // Data for your slides
    const slides = [
        {
            id: 1,
            image: '/img/banner/banner_1.webp', // Replace with your image paths
            title1: "MANDALAY INTERNATIONAL SCHOOL OF ACUMEN IS",
            title2: " PROUD TO OFFER CAMBRIDGE IGCSE",
            title3: "Join our Community",
        },
        {
            id: 2,
            image: '/img/banner/banner_2.webp',
            title1: "SECONDARY SCHOOL",
            title2: "Cambridge International Secondary 1 curriculum",
            title3: "Achieve Your Dreams",
        },
        {
            id: 3,
            image: '/img/banner/banner_1.webp',
            title1: "PRIMARY SCHOOL",
            title2: "Primary School Curriculum is engineered for the holistic development",
            title3: "of all its students",
        },
    ];

    return (
        // 1. Viewport: h-screen makes it fill the whole monitor
        <div className="relative h-screen w-full overflow-hidden bg-gray-900" ref={emblaRef}>

            {/* 2. Container: Flex for horizontal sliding */}
            <div className="flex h-full w-full">

                {slides.map((slide) => (
                    // 3. Slide Item: flex-[0_0_100%] means 1 slide per screen
                    <div key={slide.id} className="relative flex-[0_0_100%] min-w-0">

                        {/* Background Image */}
                        <img
                            src={slide.image}
                            alt={slide.title1}
                            className="h-full w-full object-cover opacity-60" // opacity makes text readable
                        />

                        {/* Text Overlay (Left Side) */}
                        <div className="absolute inset-0 flex items-center">
                            <div className="container mx-auto px-6 md:px-12">
                                <div className="max-w-4xl space-y-4 text-white">

                                    {/* Title 1 (Small & Upper) */}
                                    <h3 className="text-xl font-bold uppercase tracking-widest text-brand md:text-2xl">
                                        {slide.title1}
                                    </h3>

                                    {/* Title 2 (Big & Bold) */}
                                    <h1 className="text-5xl font-extrabold leading-tight md:text-7xl">
                                        {slide.title2}
                                    </h1>

                                    {/* Title 3 (Subtitle style) */}
                                    <p className="text-lg text-gray-200 md:text-2xl">
                                        {slide.title3}
                                    </p>

                                    {/* Optional Button */}
                                    <div className="pt-4">
                                        <button className="rounded-full cursor-pointer bg-brand-core px-8 py-3 text-sm font-bold text-white hover:text-black transition hover:bg-brand">
                                            FIND OUT MORE
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                ))}

            </div>
        </div>
    );
}