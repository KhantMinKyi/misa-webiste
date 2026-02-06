import InfoSection from '@/components/home/info-section'
import Information from '@/components/home/information'
import FrontendLayout from '@/layouts/frontend-layout'
import { Head } from '@inertiajs/react'
import React from 'react'
import * as motion from 'motion/react-client';

import PostGrid from '@/components/home/post-grid'
import { CategoryTag, Post } from '@/types'
const News = ({ posts, category_tags }: { posts: Post[], category_tags: CategoryTag[] }) => {
    const postsData = posts;
    const categoryTagData = category_tags;
    return (
        <>
            <Head>
                <title> Events & News  | MISA Campus – Mandalay International School of Acumen</title>
                {/* SEO Meta */}
                <meta
                    name="description"
                    content="Stay updated with the latest news, upcoming events, and important announcements from MISA Campus. Explore student achievements, school activities, and our academic calendar."
                />
                <meta
                    name="keywords"
                    content="MISA news, MISA events, Mandalay International School of Acumen updates, school announcements, academic calendar Mandalay, student activities, BFI news"
                />
                <meta name="robots" content="index, follow" />

                {/* Canonical */}
                {/* Ensure the href matches your actual route slug, e.g., /news-events or /news */}
                <link rel="canonical" href="https://misa.edu.mm/news-and-events" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="News & Events | MISA Campus – Mandalay International School of Acumen" />
                <meta
                    property="og:description"
                    content="Keep up with the vibrant life at MISA Campus. Read about recent events, student success stories, and upcoming school activities in Mandalay."
                />
                <meta property="og:url" content="https://misa.edu.mm/news-and-events" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="News & Events | MISA Campus – Mandalay International School of Acumen" />
                <meta
                    name="twitter:description"
                    content="Stay updated with the latest news, upcoming events, and important announcements from MISA Campus."
                />
            </Head>
            <FrontendLayout>
                <div >
                    <div
                        className="relative bg-cover bg-center bg-no-repeat text-white"
                        style={{
                            backgroundImage: "url('/img/banner/banner_1.webp')", // put your image path here
                        }}
                    >
                        {/* Overlay */}
                        {/* <div className="absolute inset-0 bg-blue-950/60" /> */}
                        <div className="dark:from-dark-950/90 dark:to-dark-950/90 absolute inset-0 bg-gradient-to-r from-gray-900/60 to-gray-950/60" />
                        {/* Content */}
                        <motion.div
                            className="orico-about-text-wrap 111"
                            initial={{ opacity: 0, x: -50 }} // start 50px below
                            whileInView={{ opacity: 1, x: 1 }} // slide up and fade in
                            exit={{ opacity: 0, x: -50 }} // fade out and slide down
                            viewport={{ once: false, amount: 0.4 }} // trigger when 20% visible
                            transition={{ duration: 0.5, ease: 'easeInOut' }} // longer duration
                        >
                            <div className="relative z-10 flex flex-col items-center justify-center px-4 py-20 text-center md:py-40 lg:py-52">
                                <img src="/img/logo/misa.webp" className="max-w-40" alt="" />
                                <h2 className="font-merriweather mb-4 text-3xl font-bold md:text-5xl">Events & News
                                </h2>
                                {/* <p className="mb-6 max-w-2xl text-lg md:text-xl">Our path through innovation, challenge, and achievement.</p> */}
                            </div>
                        </motion.div>
                    </div>
                    <div className='container mx-auto mt-20'>
                        <PostGrid posts={postsData} categories={categoryTagData} />
                    </div>
                </div>
            </FrontendLayout>
        </>
    )
}

export default News