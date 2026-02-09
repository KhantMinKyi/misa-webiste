
import FrontendLayout from '@/layouts/frontend-layout'
import { Head } from '@inertiajs/react'
import React from 'react'
import * as motion from 'motion/react-client';

import StudentAdmissionBanner from '@/components/frontend/admission/student_admission/student-admission-banner';
import ApplicationFormSection from '@/components/frontend/admission/student_admission/application-form-section';
import AdmissionTabs from '@/components/frontend/admission/admission_process/admission-tabs';
const AdmissionProcess = () => {
    return (
        <>
            <Head>
                <title>Admission Process | MISA – Mandalay International School of Acumen</title>
                {/* SEO Meta */}
                <meta
                    name="description"
                    content="Apply to MISA (Kindergarten to IGCSE). Download the application form, submit scholastic records, and schedule a child assessment. Learn about age placement, school fees, and enrollment requirements."
                />
                <meta
                    name="keywords"
                    content="MISA admission process, MISA application form, international school entrance exam Mandalay, MISA school fees, kindergarten to IGCSE admission, student age placement"
                />
                <meta name="robots" content="index, follow" />

                {/* Canonical */}
                <link rel="canonical" href="https://misa.edu.mm/admission-process" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Admission Process | MISA – Mandalay International School of Acumen" />
                <meta
                    property="og:description"
                    content="Step-by-step guide to joining MISA: Submit your application, attend the parent meeting and child assessment, and secure your place. View required documents and policy details here."
                />
                <meta property="og:url" content="https://misa.edu.mm/admission-process" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Admission Process | MISA – Mandalay International School of Acumen" />
                <meta
                    name="twitter:description"
                    content="Enroll at MISA today. From downloading the application to the final admissions decision, we support you through every step of the process."
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
                                <h2 className="font-merriweather mb-4 text-3xl font-bold md:text-5xl">Admission Process</h2>
                                {/* <p className="mb-6 max-w-2xl text-lg md:text-xl">Our path through innovation, challenge, and achievement.</p> */}
                            </div>
                        </motion.div>
                    </div>
                    <AdmissionTabs />

                </div>
            </FrontendLayout>
        </>
    )
}

export default AdmissionProcess