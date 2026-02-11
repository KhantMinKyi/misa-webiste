import FrontendLayout from '@/layouts/frontend-layout'
import { Head } from '@inertiajs/react'
import React from 'react'
import * as motion from 'motion/react-client';

const PrivacyPolicy = () => {
    return (
        <>
            <Head>
                <title>Privacy Policy | MISA – Mandalay International School of Acumen</title>
                <meta
                    name="description"
                    content="Read the Privacy Policy of MISA. Learn how we collect, store, and protect your personal data, ensuring transparency and security for our students and visitors."
                />
                <meta
                    name="keywords"
                    content="MISA privacy policy, data protection, student data privacy, Mandalay International School policy"
                />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://misa.edu.mm/privacy-policy" />
            </Head>

            <FrontendLayout>
                <div>
                    {/* --- Hero Banner --- */}
                    <div
                        className="relative bg-cover bg-center bg-no-repeat text-white"
                        style={{
                            backgroundImage: "url('/img/banner/banner_1.webp')", // Ensure this path is correct
                        }}
                    >
                        {/* Overlay */}
                        <div className="dark:from-dark-950/90 dark:to-dark-950/90 absolute inset-0 bg-gradient-to-r from-gray-900/60 to-gray-950/60" />

                        {/* Content */}
                        <motion.div
                            className="relative z-10 flex flex-col items-center justify-center px-4 py-20 text-center md:py-40 lg:py-52"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 1 }}
                            exit={{ opacity: 0, x: -50 }}
                            viewport={{ once: false, amount: 0.4 }}
                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                        >
                            <img src="/img/logo/misa.webp" className="max-w-40 mb-6" alt="MISA Logo" />
                            <h1 className="font-merriweather mb-4 text-3xl font-bold md:text-5xl">Privacy Policy</h1>
                            <p className="max-w-2xl text-lg md:text-xl text-gray-200">
                                Transparency and trust are at the core of our educational community.
                            </p>
                        </motion.div>
                    </div>

                    {/* --- Main Content Area --- */}
                    <section className="bg-white dark:bg-black py-16">
                        <div className="container mx-auto px-4 max-w-4xl">

                            {/* Document Container */}
                            <article className="prose prose-lg prose-gray dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">

                                {/* 1. INTRODUCTION */}
                                <div className="mb-10">
                                    <h2 className="text-2xl font-bold text-brand-core mb-4">1. Introduction</h2>
                                    <p className="mb-4">
                                        Mandalay International School of Acumen (MISA) appreciates your trust. We are a Myanmar-based educational institution committed to protecting your privacy. Please read this Privacy Policy to understand how we handle your data when you use our website and services.
                                    </p>
                                </div>

                                {/* 2. DATA COLLECTED */}
                                <div className="mb-10">
                                    <h2 className="text-2xl font-bold text-brand-core mb-4">2. Data Collected</h2>

                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-6 mb-2">Data Storage Location</h3>
                                    <p className="mb-4">
                                        We operate web servers that are securely hosted. Our hosting providers adhere to strict security standards to ensure that your data is securely stored and compliant with international data protection regulations.
                                    </p>

                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-6 mb-2">Registration & Student Data</h3>
                                    <p className="mb-4">
                                        If you register on our website or submit application forms, we store the personal information you provide (such as name, email address, and student details) in your user profile or application record. You can see, edit, or request deletion of your personal information at any time. School administrators can also see and edit this information to facilitate the admissions and educational process.
                                    </p>

                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-6 mb-2">Contact Form</h3>
                                    <p className="mb-4">
                                        Information submitted through the contact form on our site is sent to our school administration email. These submissions are kept for customer service and admissions purposes. They are never used for unrelated marketing purposes or shared with third parties without your consent.
                                    </p>

                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-6 mb-2">Google Analytics</h3>
                                    <p className="mb-4">
                                        We use Google Analytics on our site for anonymous reporting of site usage. No personalized data is stored. If you would like to opt-out of Google Analytics monitoring your behavior on our website, please use the official Google Analytics Opt-out browser add-on.
                                    </p>

                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-6 mb-2">Cases for Using Personal Data</h3>
                                    <p className="mb-2">We use your personal information in the following cases:</p>
                                    <ul className="list-disc pl-6 space-y-1 mb-4">
                                        <li>Verification/identification of the user during website usage;</li>
                                        <li>Providing educational and administrative assistance;</li>
                                        <li>Sending updates to parents and students with important school information;</li>
                                        <li>Ensuring the security of our students' personal information;</li>
                                        <li>Guaranteeing overall website performance and administrative functions run smoothly.</li>
                                    </ul>
                                </div>

                                {/* 3. EMBEDDED CONTENT */}
                                <div className="mb-10">
                                    <h2 className="text-2xl font-bold text-brand-core mb-4">3. Embedded Content</h2>
                                    <p className="mb-4">
                                        Pages on this site may include embedded content, like YouTube videos or social media feeds. Embedded content from other websites behaves in the exact same way as if you visited the other website.
                                    </p>
                                    <p className="mb-4">
                                        These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content. Below you can find a list of the services we commonly use:
                                    </p>

                                    <div className="space-y-4">
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">Facebook:</strong> The Facebook page plugin is used to display our Facebook timeline on our site. Facebook has its own cookie and privacy policies over which we have no control.
                                        </div>
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">YouTube:</strong> We use YouTube videos embedded on our site. YouTube has its own cookie and privacy policies over which we have no control.
                                        </div>
                                    </div>
                                </div>

                                {/* 4. COOKIES */}
                                <div className="mb-10">
                                    <h2 className="text-2xl font-bold text-brand-core mb-4">4. Cookies</h2>
                                    <p className="mb-4">
                                        This site uses cookies – small text files that are placed on your machine to help the site provide a better user experience. In general, cookies are used to retain user preferences and provide anonymized tracking data to third party applications like Google Analytics.
                                    </p>

                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-6 mb-2">Necessary Cookies</h3>
                                    <ul className="list-disc pl-6 space-y-2 mb-4">
                                        <li><strong>XSRF-TOKEN:</strong> Used to ensure visitor security by preventing Cross-Site Request Forgery attacks.</li>
                                        <li><strong>laravel_session:</strong> Used to identify your unique session instance on the website.</li>
                                        <li><strong>remember_web_*:</strong> If you select "remember me" during login, this cookie is used to keep you logged in.</li>
                                    </ul>
                                </div>

                                {/* 5. WHO HAS ACCESS */}
                                <div className="mb-10">
                                    <h2 className="text-2xl font-bold text-brand-core mb-4">5. Who Has Access To Your Data</h2>
                                    <p className="mb-2">If you are not a registered user, there is no personal information we can retain or view regarding yourself.</p>
                                    <p className="mb-2">If you have a registered account or have submitted an application, your personal information can be accessed by:</p>
                                    <ul className="list-disc pl-6 space-y-1 mb-4">
                                        <li>Our system administrators.</li>
                                        <li>School admissions staff and administrative personnel when they need to access the information to provide educational services or support.</li>
                                    </ul>
                                </div>

                                {/* 6. THIRD PARTY ACCESS */}
                                <div className="mb-10">
                                    <h2 className="text-2xl font-bold text-brand-core mb-4">6. Third Party Access To Your Data</h2>
                                    <p className="mb-4">
                                        We don’t share your data with third-parties in a way as to reveal any of your personal information like email, name, etc. The only exceptions to that rule are for partners we have to share limited data with in order to provide the services you expect from us (such as email hosting or educational platforms).
                                    </p>
                                </div>

                                {/* 7. RETENTION */}
                                <div className="mb-10">
                                    <h2 className="text-2xl font-bold text-brand-core mb-4">7. How Long We Retain Your Data</h2>
                                    <p className="mb-4">
                                        We retain your data for as long as is necessary to provide services to you and your children, or as required by applicable laws and regulations regarding student records.
                                    </p>
                                    <p>
                                        If you register on our website, we store the personal information you provide in your user profile. You can see, edit, or delete your personal information at any time (except changing your username). Website administrators can also see and edit that information.
                                    </p>
                                </div>

                                {/* 8. SECURITY */}
                                <div className="mb-10">
                                    <h2 className="text-2xl font-bold text-brand-core mb-4">8. Security Measures</h2>
                                    <p className="mb-4">
                                        We use the SSL/HTTPS protocol throughout our site. This encrypts our user communications with the servers so that personal identifiable information is not captured/hijacked by third parties without authorization.
                                    </p>
                                    <p>
                                        In case of a data breach, system administrators will immediately take all needed steps to ensure system integrity, will contact affected users, and will attempt to reset passwords if needed.
                                    </p>
                                </div>

                                {/* 9. YOUR RIGHTS */}
                                <div className="mb-10">
                                    <h2 className="text-2xl font-bold text-brand-core mb-4">9. Your Data Rights</h2>
                                    <p className="mb-4">
                                        If you have a registered account on this website, you can request an exported file of the personal data we retain, including any additional data you have provided to us.
                                    </p>
                                    <p className="mb-4">
                                        You can also request that we erase any of the personal data we have stored. This does not include any data we are obliged to keep for administrative, legal, or security purposes (such as official student academic records).
                                    </p>
                                </div>

                                {/* 10. THIRD PARTY WEBSITES */}
                                <div className="mb-10">
                                    <h2 className="text-2xl font-bold text-brand-core mb-4">10. Third Party Websites</h2>
                                    <p className="mb-4">
                                        MISA may post links to third party websites on this website. These third party websites are not screened for privacy or security compliance by us, and you release us from any liability for the conduct of these third party websites.
                                    </p>
                                    <p className="mb-4">
                                        Please be aware that this Privacy Policy does not create rights enforceable by third parties or require disclosure of any personal information relating to members of the Service or Site. MISA bears no responsibility for the information collected or used by any advertiser or third party website.
                                    </p>
                                </div>

                                {/* 11. LEGAL */}
                                <div className="mb-10">
                                    <h2 className="text-2xl font-bold text-brand-core mb-4">11. Release of Your Data for Legal Purposes</h2>
                                    <p className="mb-4">
                                        At times it may become necessary or desirable to MISA, for legal purposes, to release your information in response to a request from a government agency or a private litigant. You agree that we may disclose your information to a third party where we believe, in good faith, that it is desirable to do so for the purposes of a civil action, criminal investigation, or other legal matter.
                                    </p>
                                    <p className="mb-4">
                                        Any passing on of personal data for legal purposes will only be done in compliance with laws of the country you reside in.
                                    </p>
                                </div>

                                {/* 12. AMENDMENTS */}
                                <div className="mb-10">
                                    <h2 className="text-2xl font-bold text-brand-core mb-4">12. Amendments</h2>
                                    <p>
                                        We may amend this Privacy Policy from time to time. When we amend this Privacy Policy, we will update this page accordingly and require you to accept the amendments in order to be permitted to continue using our services.
                                    </p>
                                </div>

                            </article>
                        </div>
                    </section>
                </div>
            </FrontendLayout>
        </>
    )
}

export default PrivacyPolicy