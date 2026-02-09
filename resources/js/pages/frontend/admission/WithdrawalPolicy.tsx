
import FrontendLayout from '@/layouts/frontend-layout'
import { Head } from '@inertiajs/react'
import React from 'react'
import * as motion from 'motion/react-client';

import TerminatingEnrolment from '@/components/frontend/admission/withdrawal_policy/terminating-enrolment';
const WithdrawalPolicy = () => {
    return (
        <>
            <Head>
                <title>Withdrawal Policy | MISA – Mandalay International School of Acumen</title>
                {/* SEO Meta */}
                <meta
                    name="description"
                    content="Read MISA's student withdrawal and termination of enrolment policy. Learn about the requirements for returning school property, clearing fees, and the process for re-enrolment."
                />
                <meta
                    name="keywords"
                    content="MISA withdrawal policy, terminating enrolment Mandalay, school transfer procedure, MISA re-enrolment, student clearance form, international school policy Myanmar"
                />
                <meta name="robots" content="index, follow" />

                {/* Canonical */}
                <link rel="canonical" href="https://misa.edu.mm/withdrawal-policy" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Withdrawal Policy | MISA – Mandalay International School of Acumen" />
                <meta
                    property="og:description"
                    content="Important information regarding student withdrawal. Ensure all textbooks, library materials, and ID cards are returned to receive school documents."
                />
                <meta property="og:url" content="https://misa.edu.mm/withdrawal-policy" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Withdrawal Policy | MISA – Mandalay International School of Acumen" />
                <meta
                    name="twitter:description"
                    content="Understand the procedures for terminating enrolment at MISA, including clearance requirements and policies for future re-admission."
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
                                <h2 className="font-merriweather mb-4 text-3xl font-bold md:text-5xl"> Withdrawal Policy</h2>
                                {/* <p className="mb-6 max-w-2xl text-lg md:text-xl">Our path through innovation, challenge, and achievement.</p> */}
                            </div>
                        </motion.div>
                    </div>
                    <TerminatingEnrolment />

                </div>
            </FrontendLayout>
        </>
    )
}

export default WithdrawalPolicy