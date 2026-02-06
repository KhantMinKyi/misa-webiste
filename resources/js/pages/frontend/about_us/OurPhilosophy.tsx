import InfoSection from '@/components/home/info-section'
import Information from '@/components/home/information'
import FrontendLayout from '@/layouts/frontend-layout'
import { Head } from '@inertiajs/react'
import React from 'react'
import * as motion from 'motion/react-client';
import HistoryBanner from '@/components/about_us/history'
const OurPhilosophy = () => {
    return (
        <>
            <Head>
                <title>Our Philosophy | MISA Campus – Mandalay International School of Acumen</title>
                {/* SEO Meta */}
                <meta
                    name="description"
                    content="Our curriculum is designed to ignite curiosity, encourage critical thinking, and instill a passion for inquiry-based learning. We empower our students to tackle real-world challenges and contribute meaningfully to a rapidly evolving global society."
                />
                <meta
                    name="keywords"
                    content="MISA Campus Philosophy, Mandalay International School of Acumen, school Mandalay, education Mandalay, MISA campus 2010"
                />
                <meta name="robots" content="index, follow" />

                {/* Canonical */}
                <link rel="canonical" href="https://misa.edu.mm/our-philosophy" />

                {/* Open Graph */}
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Our Philosophy | MISA Campus – Mandalay International School of Acumen" />
                <meta
                    property="og:description"
                    content="Our curriculum is designed to ignite curiosity, encourage critical thinking, and instill a passion for inquiry-based learning. We empower our students to tackle real-world challenges and contribute meaningfully to a rapidly evolving global society."
                />
                <meta property="og:url" content="https://misa.edu.mm/our-philosophy" />
                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Our Philosophy | MISA Campus – Mandalay International School of Acumen" />
                <meta
                    name="twitter:description"
                    content="Our curriculum is designed to ignite curiosity, encourage critical thinking, and instill a passion for inquiry-based learning. We empower our students to tackle real-world challenges and contribute meaningfully to a rapidly evolving global society."
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
                                <h2 className=" mb-4 text-3xl font-bold md:text-5xl">Our Philosophy</h2>
                                {/* <p className="mb-6 max-w-2xl text-lg md:text-xl">Our path through innovation, challenge, and achievement.</p> */}
                            </div>
                        </motion.div>
                    </div>
                    <section
                        className="relative z-20 flex flex-col justify-center overflow-hidden dark:bg-neutral-950"

                    >
                        {/* <div className="absolute inset-0 dark:bg-black/80"></div> */}
                        <div className="flex flex-col items-center justify-center px-4 py-10 text-center md:py-10 lg:py-10">
                            <img src="/img/logo/misa.webp" className="max-w-40 dark:hidden" alt="" />
                            <img src="/img/logo/misa_b.webp" className="hidden max-w-40 dark:block" alt="" />
                        </div>
                        <div className="mx-auto max-w-7xl">
                            {/* <div className="grid grid-cols-12 gap-x-4"> */}
                            <div className="p-10">
                                <div className="orico-about-text ">
                                    <div className='mb-20'>
                                        <h5 className=" text-center text-base font-bold sm:text-lg lg:text-xl text-brand">
                                            {' '}Our Philosophy
                                        </h5>
                                        <h2 className=" text-center text-3xl font-bold sm:text-4xl lg:text-6xl hover:text-brand">
                                            {' '}We Believe That
                                        </h2>
                                    </div>
                                    <div className="grid md:grid-cols-1 md:gap-10">

                                        <div className="mb-5 text-xl">
                                            <h2 className=" my-4 text-2xl font-bold text-brand">1. Our curriculum is designed to ignite curiosity,</h2>
                                            encourage critical thinking, and instill a passion for inquiry-based learning. We empower our students to tackle real-world challenges and contribute meaningfully to a rapidly evolving global society.
                                            <h2 className=" my-4 text-2xl font-bold text-brand">2. Technology Integration: Shaping Future Innovators</h2>
                                            <p>
                                                Through a dynamic and evolving technological curriculum, we prepare our students to be adaptive, creative, and ethical users of technology, positioning them as leaders in an increasingly digital world.
                                            </p>
                                            <hr className="my-4" />
                                            <h2 className=" my-4 text-2xl font-bold text-brand">3. Physical Education - Sports, Games, and Events: Fostering Wellness and Team Spirit</h2>
                                            <p>
                                                By fostering inclusivity and providing diverse opportunities for physical activity, we aim to instill a lifelong love for fitness, teamwork, and sportsmanship, nurturing well-rounded individuals who understand the importance of a healthy lifestyle.
                                            </p>
                                            <hr className="my-4" />
                                            <h2 className=" my-4 text-2xl font-bold text-brand">4. Internationalism: Cultivating Global Citizens</h2>
                                            <p>
                                                We strive to create a global learning environment by incorporating international perspectives into our curriculum, promoting cultural exchange programs, and encouraging an appreciation for diversity.
                                            </p>
                                            <hr className="my-4" />
                                            <h2 className=" my-4 text-2xl font-bold text-brand">5. Character and Value Education: Shaping Ethical Leaders</h2>
                                            <p>
                                                Our curriculum places a strong emphasis on the development of moral integrity, empathy, and resilience. We aim to cultivate ethical leaders who not only excel academically but also contribute positively to their communities, demonstrating a commitment to social responsibility.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* </div> */}
                        </div>
                        <motion.div
                            className="absolute top-1/8 left-[40px] -z-10 -translate-y-1/8 hidden md:block"
                            initial={{ opacity: 0, x: 50 }} // start 50px below
                            whileInView={{ opacity: 1, x: 1 }} // slide up and fade in
                            exit={{ opacity: 0, x: 50 }} // fade out and slide down
                            viewport={{ once: false, amount: 0.4 }} // trigger when 20% visible
                            transition={{ duration: 1, ease: 'easeInOut' }} // longer duration
                        >
                            <img src="/img/logo/misa.webp" alt="" className="w-60  opacity-20 dark:hidden" />
                            <img src="/img/logo/misa_b.webp" alt="" className="hidden w-60  opacity-40 dark:block" />
                        </motion.div>
                        <motion.div
                            className="absolute top-1/8 right-[40px] -z-10 -translate-y-1/8  hidden md:block"
                            initial={{ opacity: 0, x: 50 }} // start 50px below
                            whileInView={{ opacity: 1, x: 1 }} // slide up and fade in
                            exit={{ opacity: 0, x: 50 }} // fade out and slide down
                            viewport={{ once: false, amount: 0.4 }} // trigger when 20% visible
                            transition={{ duration: 1, ease: 'easeInOut' }} // longer duration
                        >
                            <img src="/img/logo/misa.webp" alt="" className="w-60  opacity-20 dark:hidden" />
                            <img src="/img/logo/misa_b.webp" alt="" className="hidden w-60  opacity-40 dark:block" />
                        </motion.div>
                        <motion.div
                            className="absolute top-8/8 left-[40px] -z-10 -translate-y-8/8  hidden md:block"
                            initial={{ opacity: 0, x: -50 }} // start 50px below
                            whileInView={{ opacity: 1, x: 1 }} // slide up and fade in
                            exit={{ opacity: 0, x: -50 }} // fade out and slide down
                            viewport={{ once: false, amount: 0.4 }} // trigger when 20% visible
                            transition={{ duration: 1, ease: 'easeInOut' }} // longer duration
                        >
                            <img src="/img/logo/misa.webp" alt="" className="w-60  opacity-20 dark:hidden" />
                            <img src="/img/logo/misa_b.webp" alt="" className="hidden w-60  opacity-40 dark:block" />
                        </motion.div>
                        <motion.div
                            className="absolute top-8/8 right-[40px] -z-10 -translate-y-8/8  hidden md:block"
                            initial={{ opacity: 0, x: -50 }} // start 50px below
                            whileInView={{ opacity: 1, x: 1 }} // slide up and fade in
                            exit={{ opacity: 0, x: -50 }} // fade out and slide down
                            viewport={{ once: false, amount: 0.4 }} // trigger when 20% visible
                            transition={{ duration: 1, ease: 'easeInOut' }} // longer duration
                        >
                            <img src="/img/logo/misa.webp" alt="" className="w-60  opacity-20 dark:hidden" />
                            <img src="/img/logo/misa_b.webp" alt="" className="hidden w-60  opacity-40 dark:block" />
                        </motion.div>
                    </section>
                </div>
                <InfoSection />
            </FrontendLayout>
        </>
    )
}

export default OurPhilosophy