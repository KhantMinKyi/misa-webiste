
import FrontendLayout from '@/layouts/frontend-layout'
import { Head } from '@inertiajs/react'
import React from 'react'
import * as motion from 'motion/react-client';

import StudentAdmissionBanner from '@/components/frontend/admission/student_admission/student-admission-banner';
import ApplicationFormSection from '@/components/frontend/admission/student_admission/application-form-section';
const StudentAdmission = () => {
    return (
        <>
            <Head>
                <title>Student Admission | MISA – Mandalay International School of Acumen</title>
                {/* SEO Meta */}
                <meta
                    name="description"
                    content="Join the MISA community in Mandalay. Explore our student admission process, enrollment requirements, and application steps for Primary, Secondary, and IGCSE programs."
                />
                <meta
                    name="keywords"
                    content="MISA admission, school enrollment Mandalay, international school application, student registration, education Mandalay, apply to MISA"
                />
                <meta name="robots" content="index, follow" />

                {/* Canonical */}
                <link rel="canonical" href="https://misa.edu.mm/studentadmission" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Student Admission | MISA – Mandalay International School of Acumen" />
                <meta
                    property="og:description"
                    content="Start your journey with MISA. Find detailed information on how to apply, admission criteria, and important dates for the upcoming academic year."
                />
                <meta property="og:url" content="https://misa.edu.mm/studentadmission" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Student Admission | MISA – Mandalay International School of Acumen" />
                <meta
                    name="twitter:description"
                    content="Join the MISA community. Learn about our seamless admission process and secure your child's future in Mandalay's premier international school."
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
                                <h2 className="font-merriweather mb-4 text-3xl font-bold md:text-5xl">Student Admission</h2>
                                {/* <p className="mb-6 max-w-2xl text-lg md:text-xl">Our path through innovation, challenge, and achievement.</p> */}
                            </div>
                        </motion.div>
                    </div>
                    <StudentAdmissionBanner />
                    <ApplicationFormSection />
                </div>
            </FrontendLayout>
        </>
    )
}

export default StudentAdmission