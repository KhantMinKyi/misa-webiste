import InfoSection from '@/components/home/info-section'
import Information from '@/components/home/information'
import FrontendLayout from '@/layouts/frontend-layout'
import { Head } from '@inertiajs/react'
import React from 'react'
import * as motion from 'motion/react-client';
import HistoryBanner from '@/components/about_us/history'
import SchoolProfileBanner from '@/components/about_us/school-profil-banner'
import Grading from '@/components/about_us/grading'
import Result from '@/components/about_us/result'
import UniversityAndColleges from '@/components/about_us/university-and-colleges'
const SchoolProfile = () => {
    return (
        <>
            <Head>
                <title>School Profile | MISA Campus – Mandalay International School of Acumen</title>
                {/* SEO Meta */}
                <meta
                    name="description"
                    content="MISA Campus was purpose-built in 2010 and is located on 58th Street, between 27th and 28th Streets, in Mandalay. The campus offers a spacious, comfortable learning environment with modern facilities and easy city access."
                />
                <meta
                    name="keywords"
                    content="MISA Campus history, Mandalay International School of Acumen, school Mandalay, education Mandalay, MISA campus 2010"
                />
                <meta name="robots" content="index, follow" />

                {/* Canonical */}
                <link rel="canonical" href="https://misa.edu.mm/our-history" />

                {/* Open Graph */}
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Our History | MISA Campus – Mandalay International School of Acumen" />
                <meta
                    property="og:description"
                    content="Learn about the history of MISA Campus in Mandalay, built in 2010 with modern facilities and a strategic city location."
                />
                <meta property="og:url" content="https://misa.edu.mm/our-history" />
                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Our History | MISA Campus – Mandalay International School of Acumen" />
                <meta
                    name="twitter:description"
                    content="Discover the history of MISA Campus in Mandalay, purpose-built in 2010 to provide a modern, spacious learning environment."
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
                                <h2 className="font-merriweather mb-4 text-3xl font-bold md:text-5xl">School Profile</h2>
                                {/* <p className="mb-6 max-w-2xl text-lg md:text-xl">Our path through innovation, challenge, and achievement.</p> */}
                            </div>
                        </motion.div>
                    </div>
                    <SchoolProfileBanner />
                    <Grading />
                    <Result />
                    <UniversityAndColleges />
                    <div className='h-40'></div>
                    <InfoSection />
                </div>
            </FrontendLayout>
        </>
    )
}

export default SchoolProfile