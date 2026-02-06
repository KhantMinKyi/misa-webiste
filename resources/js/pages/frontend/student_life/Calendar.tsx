import InfoSection from '@/components/home/info-section'
import Information from '@/components/home/information'
import FrontendLayout from '@/layouts/frontend-layout'
import { Head } from '@inertiajs/react'
import React from 'react'
import * as motion from 'motion/react-client';

import { CalendarTypePaginate } from '@/types'
import Gallery from '@/components/student_life/gallery/gallery'

interface CalendarPageProps {
    images: CalendarTypePaginate; // This must be the Paginated Object, not an array
    showLink: boolean;
}
const CalendarPage = ({ images, showLink }: CalendarPageProps) => {

    return (
        <>
            <Head>
                <title>Academic Calendar | MISA Campus – Mandalay International School of Acumen</title>
                {/* SEO Meta */}
                <meta
                    name="description"
                    content="View the official academic calendar for MISA Campus. Stay informed about term dates, school holidays, examination schedules, and key academic events throughout the year."
                />
                <meta
                    name="keywords"
                    content="MISA academic calendar, school term dates Mandalay, MISA school schedule, exam dates, school holidays Myanmar, BFI academic year, MISA events schedule"
                />
                <meta name="robots" content="index, follow" />

                {/* Canonical */}
                <link rel="canonical" href="https://misa.edu.mm/calendar" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Academic Calendar | MISA Campus – Mandalay International School of Acumen" />
                <meta
                    property="og:description"
                    content="Plan your year with the MISA Campus academic calendar. Access important dates for school terms, holidays, and upcoming academic milestones."
                />
                <meta property="og:url" content="https://misa.edu.mm/calendar" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Academic Calendar | MISA Campus – Mandalay International School of Acumen" />
                <meta
                    name="twitter:description"
                    content="View the official academic calendar for MISA Campus. Stay informed about term dates, school holidays, and examination schedules."
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
                                <h2 className="font-merriweather mb-4 text-3xl font-bold md:text-5xl">Calendar
                                </h2>
                                {/* <p className="mb-6 max-w-2xl text-lg md:text-xl">Our path through innovation, challenge, and achievement.</p> */}
                            </div>
                        </motion.div>
                    </div>
                    <div className='container mx-auto mt-20'>
                        {/* <PostGrid posts={postsData} categories={categoryTagData} /> */}
                        <div className='text-4xl text-center my-10 font-bold text-gray-800 dark:text-brand'>Academic Calendar</div>
                        <Gallery images={images} showLink={showLink} />
                    </div>
                </div>
            </FrontendLayout>
        </>
    )
}

export default CalendarPage