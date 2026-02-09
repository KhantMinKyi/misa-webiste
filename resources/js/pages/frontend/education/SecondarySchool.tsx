
import FrontendLayout from '@/layouts/frontend-layout'
import { Head } from '@inertiajs/react'
import React from 'react'
import * as motion from 'motion/react-client';

import SecondarySchoolBanner from '@/components/frontend/education/secondary/secondary-school-banner'
import SecondarySubjectsTable from '@/components/frontend/education/secondary/secondary-subject-table'
import SubjectDetails from '@/components/frontend/education/secondary/subject-details';
const SecondarySchool = () => {
    return (
        <>
            <Head>
                <title>Secondary School | MISA – Mandalay International School of Acumen</title>
                {/* SEO Meta */}
                <meta
                    name="description"
                    content="MISA Secondary School provides a rigorous Cambridge International curriculum (Year 7-9) in Mandalay. Our program fosters academic excellence, critical thinking, and leadership skills to prepare students for the future."
                />
                <meta
                    name="keywords"
                    content="Secondary School Mandalay, middle school education, Cambridge Secondary 1, international school Mandalay, MISA secondary, academic rigor, Year 7-9, student leadership"
                />
                <meta name="robots" content="index, follow" />

                {/* Canonical - Ensure this matches your actual route name */}
                <link rel="canonical" href="https://misa.edu.mm/secondary-school-programs" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Secondary School | MISA – Mandalay International School of Acumen" />
                <meta
                    property="og:description"
                    content="Explore MISA Secondary School in Mandalay. We offer the Cambridge International Secondary 1 curriculum, focusing on advanced subject knowledge and holistic development."
                />
                <meta property="og:url" content="https://misa.edu.mm/secondary-school-programs" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Secondary School | MISA – Mandalay International School of Acumen" />
                <meta
                    name="twitter:description"
                    content="MISA Secondary School provides a rigorous Cambridge International curriculum in Mandalay, fostering academic excellence and leadership."
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
                                <h2 className="font-merriweather mb-4 text-3xl font-bold md:text-5xl">Secondary School</h2>
                                {/* <p className="mb-6 max-w-2xl text-lg md:text-xl">Our path through innovation, challenge, and achievement.</p> */}
                            </div>
                        </motion.div>
                    </div>
                    <SecondarySchoolBanner />
                    <SecondarySubjectsTable />
                    <SubjectDetails />

                </div>
            </FrontendLayout>
        </>
    )
}

export default SecondarySchool