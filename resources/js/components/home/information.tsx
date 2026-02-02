import { Link } from '@inertiajs/react';
import { MapPinIcon } from 'lucide-react';
import * as motion from 'motion/react-client';
function Information() {
    return (
        <section className="relative z-20 flex flex-col justify-center overflow-hidden py-[120px] sm:py-[80px] sm:pt-[60px] md:py-[90px] md:pt-[70px] dark:bg-neutral-950">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-12 items-center gap-x-4">
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
                                <span className="font-merriweather mb-1 inline-block text-xl font-normal text-yellow-600 underline">“MISA”</span>
                                <h2 className="font-merriweather mb-5 text-3xl font-bold sm:text-4xl lg:text-6xl dark:text-yellow-400">School History </h2>
                                <p className="mb-5">
                                    Mandalay International School of Acumen is a comprehensive K to 12 private international school, in primary and high school campuses; the high school enrolling up to 400 students in grades 6–12 (Year 7-13). The school opened in 2004 and graduated its first senior class in 2009. Mandalay International Science academy is registered at the Cambridge Assessment International Education as Cambridge International school, holds membership in the College Board and is recognized by the UCAS.

                                    {' '}
                                </p>
                                <ul className="col:block mb-8 flex">
                                    <li className="relative inline-block py-1 pl-6 text-base font-semibold text-yellow-600">
                                        <i className="absolute top-2 left-0">
                                            <MapPinIcon className="h-4" />
                                        </i>
                                        <p>High School</p>
                                    </li>
                                    <li className="relative inline-block py-1 pl-6 text-base font-semibold text-yellow-600">
                                        <i className="absolute top-2 left-0">
                                            <MapPinIcon className="h-4" />
                                        </i>
                                        <p>Primary</p>
                                    </li>
                                    <li className="relative inline-block py-1 pl-6 text-base font-semibold text-yellow-600">
                                        <i className="absolute top-2 left-0">
                                            <MapPinIcon className="h-4" />
                                        </i>
                                        <p>Preschool</p>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                    <motion.div
                        className="col-span-12 p-10 md:col-span-6"
                        initial={{ opacity: 0, x: 50 }} // start 50px below
                        whileInView={{ opacity: 1, x: 1 }} // slide up and fade in
                        exit={{ opacity: 0, x: 50 }} // fade out and slide down
                        viewport={{ once: false, amount: 0.4 }} // trigger when 20% visible
                        transition={{ duration: 1, ease: 'easeInOut' }} // longer duration
                    >
                        <div className="mt-14 flex flex-col items-center justify-center gap-4 pl-0 md:pl-12">
                            <div>
                                <img src="/img/logo/misa.webp" alt="" className="h-62 dark:hidden" />
                                <img src="/img/logo/misa_b.webp" alt="" className="hidden h-62 dark:block" />
                            </div>
                            {/* <div className="flex flex-col sm:flex-row">
                                <div className="flex flex-row gap-2 md:flex-col lg:flex-row">
                                    <img src="/img/skt_riverside_campus.webp" alt="" className="h-24 dark:hidden" />
                                    <img src="/img/skt_riverside_campus_b.webp" alt="" className="hidden h-24 dark:block" />
                                    <img src="/img/skt_city_campus.webp" alt="" className="h-24 dark:hidden" />
                                    <img src="/img/skt_city_campus_b.webp" alt="" className="hidden h-24 dark:block" />
                                </div>
                                <div className="flex flex-row gap-2 md:flex-col lg:flex-row">
                                    <img src="/img/misa.webp" alt="" className="h-24 dark:hidden" />
                                    <img src="/img/misa_b.webp" alt="" className="hidden h-24 dark:block" />
                                    <img src="/img/nisa.webp" alt="" className="h-24 dark:hidden" />
                                    <img src="/img/nisa_b.webp" alt="" className="hidden h-24 dark:block" />
                                </div>
                            </div> */}
                            {/* <div className="col:w-[160px] col:h-[150px] absolute bottom-[-25px] left-[-25px] flex items-center justify-center rounded-[8px] bg-yellow-600 text-center backdrop-blur-[15px] md:bottom-0 md:left-0 lg:h-[235px] lg:w-[201px]">
                                    <div className="flex flex-col">
                                        <img src="/img/cambridge.webp" className="w-20" alt="" />
                                        <img src="/img/cambridge.webp" className="w-20" alt="" />
                                        <img src="/img/cambridge.webp" className="w-20" alt="" />
                                    </div>
                                </div> */}
                        </div>
                    </motion.div>
                    <motion.div
                        className="absolute top-1/8 left-[40px] -z-10 -translate-y-1/8"
                        initial={{ opacity: 0, x: 50 }} // start 50px below
                        whileInView={{ opacity: 1, x: 1 }} // slide up and fade in
                        exit={{ opacity: 0, x: 50 }} // fade out and slide down
                        viewport={{ once: false, amount: 0.4 }} // trigger when 20% visible
                        transition={{ duration: 1, ease: 'easeInOut' }} // longer duration
                    >
                        <img src="/img/logo/misa.webp" alt="" className="hidden w-60  opacity-10 sm:block" />
                    </motion.div>
                    <motion.div
                        className="absolute top-1/8 right-[40px] -z-10 -translate-y-1/8"
                        initial={{ opacity: 0, x: 50 }} // start 50px below
                        whileInView={{ opacity: 1, x: 1 }} // slide up and fade in
                        exit={{ opacity: 0, x: 50 }} // fade out and slide down
                        viewport={{ once: false, amount: 0.4 }} // trigger when 20% visible
                        transition={{ duration: 1, ease: 'easeInOut' }} // longer duration
                    >
                        <img src="/img/logo/misa.webp" alt="" className="hidden w-60  opacity-10 sm:block" />
                    </motion.div>
                    <motion.div
                        className="absolute top-8/8 left-[40px] -z-10 -translate-y-8/8"
                        initial={{ opacity: 0, x: -50 }} // start 50px below
                        whileInView={{ opacity: 1, x: 1 }} // slide up and fade in
                        exit={{ opacity: 0, x: -50 }} // fade out and slide down
                        viewport={{ once: false, amount: 0.4 }} // trigger when 20% visible
                        transition={{ duration: 1, ease: 'easeInOut' }} // longer duration
                    >
                        <img src="/img/logo/misa.webp" alt="" className="hidden w-60 opacity-10 sm:block" />
                    </motion.div>
                    <motion.div
                        className="absolute top-8/8 right-[40px] -z-10 -translate-y-8/8"
                        initial={{ opacity: 0, x: -50 }} // start 50px below
                        whileInView={{ opacity: 1, x: 1 }} // slide up and fade in
                        exit={{ opacity: 0, x: -50 }} // fade out and slide down
                        viewport={{ once: false, amount: 0.4 }} // trigger when 20% visible
                        transition={{ duration: 1, ease: 'easeInOut' }} // longer duration
                    >
                        <img src="/img/logo/misa.webp" alt="" className="hidden w-60  opacity-10 sm:block" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Information;
