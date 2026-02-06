import SisterSchoolSection from '@/components/about_us/sister-school-section'
import FrontendLayout from '@/layouts/frontend-layout'
import { Head } from '@inertiajs/react'
import React from 'react'
import * as motion from 'motion/react-client';
import AdminTeamSection from '@/components/about_us/admin-team-section';
import HeadOfSchoolSection from '@/components/about_us/head-of-schools-section';
const AdminTeam = () => {
    return (
        <>
            <Head>
                <title>Admin Team | MISA Campus – Mandalay International School of Acumen</title>
                {/* SEO Meta */}
                <meta
                    name="description"
                    content="Meet the Administration Team of MISA. Our dedicated professionals support school operations, admissions, finance, and daily management to ensure a high-quality learning environment."
                />
                <meta
                    name="keywords"
                    content="MISA administration team, school administration Mandalay, international school management, MISA staff"
                />
                <meta name="robots" content="index, follow" />

                {/* Canonical */}
                <link rel="canonical" href="https://misa.edu.mm/admin-team" />

                {/* Open Graph */}
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Admin Team | MISA Campus – Mandalay International School of Acumen" />
                <meta
                    property="og:description"
                    content="Learn about the Administration Team at MISA, supporting school operations, student services, and academic excellence."
                />
                <meta property="og:url" content="https://misa.edu.mm/admin-team" />
                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Admin Team | MISA Campus – Mandalay International School of Acumen" />
                <meta
                    name="twitter:description"
                    content="Discover the Administration Team at MISA, dedicated to supporting students, staff, and school operations."
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
                                <h2 className=" mb-4 text-3xl font-bold md:text-5xl">Admin Team</h2>
                                {/* <p className="mb-6 max-w-2xl text-lg md:text-xl">Our path through innovation, challenge, and achievement.</p> */}
                            </div>
                        </motion.div>
                    </div>

                    {/* Admin */}

                    <HeadOfSchoolSection />
                </div>
                <div>
                    <hr className='w-1/2 mx-auto' />
                    <h2 className='text-center my-4 text-2xl text-brand-dark dark:text-brand font-black'>Seinor Leadership Team</h2>
                    <AdminTeamSection />
                </div>
            </FrontendLayout>
        </>
    )
}

export default AdminTeam