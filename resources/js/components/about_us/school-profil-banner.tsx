import { Link } from '@inertiajs/react';
import { MapPinIcon } from 'lucide-react';
import * as motion from 'motion/react-client';
function SchoolProfileBanner() {
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
                                <span className="font-merriweather mb-1 inline-block text-xl font-normal text-brand-core underline">“MISA”</span>
                                <h2 className="font-merriweather mb-5 text-3xl font-bold sm:text-4xl lg:text-6xl dark:text-yellow-400">Community</h2>
                                <p className="mb-5">
                                    Spanning 11,440 square meters, MISA serves the educational needs of Mandalay region. Located in one of the state's growing areas, the district enjoys a diversified economic base. Currently, the city consists of 18 International Schools, 30 private local schools and 28 government high schools. MISA’s student body is culturally diverse with a population that is about 90% Myanmar, 5% Central Asian, 2% Indian and others.{' '}
                                </p>

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
                                <span className="font-merriweather mb-1 inline-block text-xl font-normal text-brand-core underline">“OUR”</span>
                                <h2 className="font-merriweather mb-5 text-3xl font-bold sm:text-4xl lg:text-6xl dark:text-yellow-400">Curriculum </h2>
                                <p className="mb-5">
                                    The school offers the Cambridge International programmes throughout, starting from primary school to A Levels. For lower secondary level (Key Stage 2: Year 7, 8 and 9) the school offers Cambridge Lower Secondary CheckPoint Curriculum, where students sit for CheckPoint external examinations at the end of Year 9.
                                    For Upper Secondary, Key Stage 3,these International General Certificate in Secondary Education (IGCSE) courses are offered: Physics, Extended Mathematics, Additional Mathematics, Information and Communication Technology, Biology, Chemistry, English as a Second Language, English as a First Language, Chinese as a Foreign Language, Chinese as a Second Language, German as a Foreign Language, Business studies, Economics, Accounting, History, Global Perspectives.
                                    In addition, these A level courses are offered: Physics, Biology, Chemistry, Information Technology, Mathematics and English for Academic Purposes (EAP).</p>
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
                        <div className="orico-about-text">
                            <span className="font-merriweather mb-1 inline-block text-xl font-normal text-brand-core underline">“MISA”</span>
                            <h2 className="font-merriweather mb-5 text-3xl font-bold sm:text-4xl lg:text-6xl dark:text-yellow-400">School History </h2>
                            <p className="mb-5">
                                MISA Campus was purpose-built in 2010 and is located on 58th Street (Between 27th & 28th Street). This new campus provides a spacious, comfortable, and well-designed space for learning, with state-of-the-art facilities. Mandalay International School of Acumen is happy to welcome you. We are located at a strategic point connecting Chan Aye Thar Zan township and the rest of the city.
                                {' '}
                            </p>

                        </div>
                    </motion.div>
                    <motion.div
                        className="absolute top-1/8 left-[40px] -z-10 -translate-y-1/8 hidden md:block"
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

export default SchoolProfileBanner;
