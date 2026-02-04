

import Carousel from '@/components/home/carousel';
import ContactBanner from '@/components/home/contact-banner';
import Gallery from '@/components/home/gallery';
import Hero from '@/components/home/hero';
import InfoSection from '@/components/home/info-section';
import Information from '@/components/home/information';
import PostGrid from '@/components/home/post-grid';
import FrontendLayout from '@/layouts/frontend-layout';

import { CategoryTag, FacilityType, GalleryType, Post, type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { useState } from 'react';


export default function Welcome({ posts, category_tags, images }: { posts: Post[], category_tags: CategoryTag[], images: FacilityType[] }) {
    const postsData = posts;
    const categoryTagData = category_tags;


    return (
        <>
            <Head>
                <title>Welcome to MISA – Mandalay International School of Acumen</title>

                {/* Fonts */}
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />

                {/* SEO Meta */}
                <meta
                    name="description"
                    content="Welcome to MISA, Mandalay International School of Acumen, providing world-class education with modern facilities and a strategic location in Mandalay. Explore our curriculum, campus, and student programs."
                />
                <meta
                    name="keywords"
                    content="MISA, Mandalay International School of Acumen, international school Mandalay, best schools in Mandalay, education Myanmar"
                />
                <meta name="robots" content="index, follow" />

                {/* Canonical */}
                <link rel="canonical" href="https://misa.edu.mm/" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Welcome to MISA – Mandalay International School of Acumen" />
                <meta
                    property="og:description"
                    content="MISA offers world-class education in Mandalay with modern facilities and a strategic location. Explore our curriculum and student programs."
                />
                <meta property="og:url" content="https://misa.edu.mm/" />
                <meta property="og:image" content="https://misa.edu.mm/images/og/landing.jpg" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Welcome to MISA – Mandalay International School of Acumen" />
                <meta
                    name="twitter:description"
                    content="Discover MISA in Mandalay, offering a modern campus and world-class education for students."
                />
            </Head>


            <FrontendLayout>

                <Carousel />
                <Hero />
                <InfoSection />
                <Gallery images={images} showLink={true} />
                <Information />
                <div className='container mx-auto mt-20'>
                    <PostGrid posts={postsData} categories={categoryTagData} />
                </div>
                {/* <div className='h-96 bg-brand-core'></div> */}
                <ContactBanner />
            </FrontendLayout>
        </>
    );
}
