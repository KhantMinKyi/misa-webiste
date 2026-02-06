import InfoSection from '@/components/home/info-section'
import Information from '@/components/home/information'
import FrontendLayout from '@/layouts/frontend-layout'
import { Head } from '@inertiajs/react'
import React from 'react'
import * as motion from 'motion/react-client';

import { GalleryTypePaginate } from '@/types'
import Gallery from '@/components/student_life/gallery/gallery'

interface GalleryPageProps {
    images: GalleryTypePaginate; // This must be the Paginated Object, not an array
    showLink: boolean;
}
const GalleryPage = ({ images, showLink }: GalleryPageProps) => {

    return (
        <>
            <Head>
                <title>Student Life Gallery | MISA Campus – Mandalay International School of Acumen</title>
                {/* SEO Meta */}
                <meta
                    name="description"
                    content="Explore the vibrant student life at MISA Campus. View photos of academic achievements, cultural events, sports, and daily life in our diverse learning community."
                />
                <meta
                    name="keywords"
                    content="MISA gallery, student life Mandalay, MISA students, school events photos, BFI community gallery, student activities, school sports Mandalay, student arts"
                />
                <meta name="robots" content="index, follow" />

                {/* Canonical */}
                <link rel="canonical" href="https://misa.edu.mm/gallery" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Student Life Gallery | MISA Campus" />
                <meta
                    property="og:description"
                    content="A visual journey through the student experience at MISA. From classroom moments to stage performances and community events, see our students in action."
                />
                <meta property="og:url" content="https://misa.edu.mm/gallery" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Student Life Gallery | MISA Campus" />
                <meta
                    name="twitter:description"
                    content="Explore the vibrant student life at MISA Campus. View photos of academic achievements, cultural events, and daily life in our community."
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
                                <h2 className="font-merriweather mb-4 text-3xl font-bold md:text-5xl">Gallery
                                </h2>
                                {/* <p className="mb-6 max-w-2xl text-lg md:text-xl">Our path through innovation, challenge, and achievement.</p> */}
                            </div>
                        </motion.div>
                    </div>
                    <div className='container mx-auto mt-20'>
                        {/* <PostGrid posts={postsData} categories={categoryTagData} /> */}
                        <div className='text-4xl text-center my-10 font-bold text-gray-800 dark:text-brand'>Our Gallery</div>
                        <Gallery images={images} showLink={showLink} />
                    </div>
                </div>
            </FrontendLayout>
        </>
    )
}

export default GalleryPage