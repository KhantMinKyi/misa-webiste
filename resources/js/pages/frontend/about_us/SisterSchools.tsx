import SisterSchoolSection from '@/components/about_us/sister-school-section'
import FrontendLayout from '@/layouts/frontend-layout'
import { Head } from '@inertiajs/react'
import React from 'react'
import * as motion from 'motion/react-client';
const SisterSchools = () => {
    return (
        <>
            <Head>
                <title>Our Sister Schools | MISA Campus – Mandalay International School of Acumen</title>
                {/* SEO Meta */}
                <meta
                    name="description"
                    content="Discover the sister schools of MISA. We have two campuses in Yangon: SKT International School (Riverside & City Campus), and NISA in Naypyitaw. The head office of the group, BFI, is located in Yangon. Providing high-quality international education across Myanmar."
                />
                <meta
                    name="keywords"
                    content="MISA, sister schools, SKT International School, Riverside Campus, City Campus, NISA Naypyitaw, BFI head office, international schools Myanmar"
                />
                <meta name="robots" content="index, follow" />

                {/* Canonical */}
                <link rel="canonical" href="https://misa.edu.mm/our-sister-schools" />

                {/* Open Graph */}
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Our Sister Schools | MISA Campus – Mandalay International School of Acumen" />
                <meta
                    property="og:description"
                    content="Explore MISA's sister schools: SKT International School (Riverside & City Campus) in Yangon, NISA in Naypyitaw, and the BFI head office in Yangon. Delivering top-quality international education across Myanmar."
                />
                <meta property="og:url" content="https://misa.edu.mm/sister-schools" />
                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Our Sister Schools | MISA Campus – Mandalay International School of Acumen" />
                <meta
                    name="twitter:description"
                    content="Learn about MISA's sister schools: SKT International School (Riverside & City Campus) in Yangon, NISA in Naypyitaw, and BFI head office in Yangon, providing high-quality international education."
                />
            </Head>
            <FrontendLayout>
                <div className='mb-32'>
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
                                <h2 className=" mb-4 text-3xl font-bold md:text-5xl">Our Sister Schools</h2>
                                {/* <p className="mb-6 max-w-2xl text-lg md:text-xl">Our path through innovation, challenge, and achievement.</p> */}
                            </div>
                        </motion.div>
                    </div>

                </div>
                <div>
                    <SisterSchoolSection />
                </div>
            </FrontendLayout>
        </>
    )
}

export default SisterSchools