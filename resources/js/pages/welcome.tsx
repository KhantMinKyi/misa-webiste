

import Carousel from '@/components/home/carousel';
import Gallery from '@/components/home/gallery';
import Hero from '@/components/home/hero';
import InfoSection from '@/components/home/info-section';
import Information from '@/components/home/information';
import PostGrid from '@/components/home/post-grid';
import FrontendLayout from '@/layouts/frontend-layout';

import { CategoryTag, Post, type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

const carouselData = [
    {
        banner_image: '/img/banner/banner_1.webp',
        title: 'BFI',
        bottom_sub_title: 'EDUCATION SERVIES',
        top_sub_title: '9 Group of Schools',
    },
    {
        banner_image: '/img/banner/banner_2.webp',
        title: 'Inspiring Brilance',
        bottom_sub_title: 'Building Brighter Futures.',
        top_sub_title: '90% Foreign Teachers',
    },
    {
        banner_image: '/img/banner/banner_1.webp',
        title: 'WORLD-CLASS EDUCATION IN A',
        bottom_sub_title: 'SAFE AND FRIENDLY ENVIRONMENT',
        top_sub_title: 'The IB Diploma Programme',
    },
];
const myImages = [
    { id: 1, src: "/img/banner/banner_1.webp", alt: "Students in Library" },
    { id: 2, src: "/img/banner/banner_2.webp", alt: "Sports Day" },
    { id: 3, src: "/img/banner/banner_1.webp", alt: "Science Lab" },
    { id: 4, src: "/img/banner/banner_2.webp", alt: "Graduation" },
    { id: 5, src: "/img/banner/banner_1.webp", alt: "Students in Library" },
    { id: 6, src: "/img/banner/banner_2.webp", alt: "Sports Day" },
    { id: 7, src: "/img/banner/banner_1.webp", alt: "Science Lab" },
    { id: 8, src: "/img/banner/banner_2.webp", alt: "Graduation" },
    // ... add as many as you want
];
export default function Welcome({ posts, category_tags }: { posts: Post[], category_tags: CategoryTag[] }) {
    const postsData = posts;
    const categoryTagData = category_tags;
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
                <meta name="description" content="Welcome to Misa, the best education center in Mandalay offering global standards." />
                <meta name="keywords" content="Education, School, Mandalay, MISA" />
            </Head>

            <FrontendLayout>

                <Carousel />
                <Hero />
                <InfoSection />
                <Gallery images={myImages} />
                <Information />
                <div className='container mx-auto mt-20'>
                    <PostGrid posts={postsData} categories={categoryTagData} />
                </div>
            </FrontendLayout>
        </>
    );
}
