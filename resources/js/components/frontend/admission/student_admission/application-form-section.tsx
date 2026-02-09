
import React from 'react'
import * as motion from 'motion/react-client';
import { Link } from '@inertiajs/react';
const ApplicationFormSection = () => {
    return (
        <div>
            <div className=" container mx-auto max-w-4xl text-center mb-20">
                <div className='mb-20'>
                    <h5 className=" text-center text-base font-bold sm:text-lg lg:text-xl text-brand">
                        {' '}Download
                    </h5>
                    <h2 className=" text-center text-3xl font-bold sm:text-4xl lg:text-6xl hover:text-brand">
                        {' '}Application Form
                    </h2>
                </div>
                <div className=" flex flex-col gap-4">
                    <p>
                        We hope your campus visit will confirm that Mandalay International Science Academy is the best fit for your child. To submit an application, download the form, complete it, and mail it to us.
                    </p>
                    <div>
                        <a href="#" target='_blank' className="rounded-full cursor-pointer bg-brand-core px-8 py-3 text-sm font-bold text-white hover:text-black transition hover:bg-brand">
                            Download
                        </a>
                    </div>
                </div>
            </div>
            <section className="relative z-20 flex flex-col justify-center overflow-hidden py-[120px] sm:py-[80px] sm:pt-[60px] md:py-[90px] md:pt-[70px] dark:bg-neutral-950">
                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-12 items-center gap-x-4">
                        <motion.div
                            className="col-span-12 p-10 md:col-span-6"
                            initial={{ opacity: 0, x: 50 }} // start 50px below
                            whileInView={{ opacity: 1, x: 1 }} // slide up and fade in
                            exit={{ opacity: 0, x: 50 }} // fade out and slide down
                            viewport={{ once: false, amount: 0.4 }} // trigger when 20% visible
                            transition={{ duration: 1, ease: 'easeInOut' }} // longer duration
                        >
                            <div className="mt-14 flex flex-col items-center justify-center gap-4 pl-0 md:pl-12">
                                {/* <div>
                                <img src="/img/logo/misa.webp" alt="" className="h-62 dark:hidden" />
                                <img src="/img/logo/misa_b.webp" alt="" className="hidden h-62 dark:block" />
                            </div> */}
                                <div>
                                    <img src="/img/logo/misa.webp" alt="" className="h-60 dark:hidden" />
                                    <img src="/img/logo/misa_b.webp" alt="" className="hidden h-60 dark:block" />
                                </div>

                            </div>
                        </motion.div>
                        <div className="col-span-12 p-10 md:col-span-6">
                            <motion.div
                                className="orico-about-text-wrap 111"
                                initial={{ opacity: 0, x: -50 }} // start 50px below
                                whileInView={{ opacity: 1, x: 1 }} // slide up and fade in
                                exit={{ opacity: 0, x: -50 }} // fade out and slide down
                                viewport={{ once: false, amount: 0.4 }} // trigger when 20% visible
                                transition={{ duration: 1, ease: 'easeInOut' }} // longer duration
                            >
                                <div className="orico-about-text">
                                    <span className="font-merriweather mb-1 inline-block text-xl font-normal text-brand-core underline">“Education Opportunities”</span>
                                    <h2 className="font-merriweather mb-5 text-3xl font-bold sm:text-4xl lg:text-6xl dark:text-yellow-400">International
                                        Admission</h2>
                                    <p className="mb-5">
                                        Mandalay International Science Academy enrolls a limited number of international students each year. Candidates must be fluent in English and score well on the TOEFL in order to be considered for admission. International students are placed with a suitable screened host family for the duration of their academic program. Applicants applying from other countries should contact the Admissions Office directly at
                                        <span className='text-brand-core'> contact@bfi-edu.com</span>
                                    </p>
                                    <Link href={'/admission-process'} className="rounded-full cursor-pointer bg-brand-core px-8 py-3 text-sm font-bold text-white hover:text-black transition hover:bg-brand">Read Admission Process</Link>

                                </div>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default ApplicationFormSection