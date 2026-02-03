import { motion } from 'motion/react';

function VmvStatus() {
    return (
        <section
            className="relative z-20 flex flex-col justify-center overflow-hidden dark:bg-neutral-950 py-10"
            style={{
                backgroundImage: "url('/img/banner/footer-banner.webp')", // put your image path here
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}
        >
            {/* <div className="absolute inset-0 dark:bg-black/80"></div> */}
            <div className="flex flex-col items-center justify-center px-4 py-10 text-center md:py-10 lg:py-10">
                <img src="/img/logo/misa.webp" className="max-w-40 dark:hidden" alt="" />
                <img src="/img/logo/misa_b.webp" className="hidden max-w-40 dark:block" alt="" />
            </div>
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-12 gap-x-4">
                    <div className="col-span-12 p-10 md:col-span-6">
                        <div className="orico-about-text font-merriweather">
                            <h2 className="font-merriweather text-center text-3xl font-bold sm:text-4xl lg:text-6xl pb-10 md:pb-20">
                                {' '}Our Mission
                            </h2>
                            <motion.div
                                className="orico-about-text-wrap 111"
                                initial={{ opacity: 0, x: -50 }} // start 50px below
                                whileInView={{ opacity: 1, x: 1 }} // slide up and fade in
                                exit={{ opacity: 0, x: -50 }} // fade out and slide down
                                viewport={{ once: false, amount: 0.4 }} // trigger when 20% visible
                                transition={{ duration: 1, ease: 'easeInOut' }} // longer duration
                            >
                                <p className="mb-5 text-justify text-xl">
                                    We nurture students to become lifelong learners, responsible global citizens, and compassionate individuals through a challenging and balanced curriculum in a safe and caring environment.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                    <div className="col-span-12 p-10 md:col-span-6">
                        <div className="orico-about-text font-merriweather">
                            <h2 className="font-merriweather text-center text-3xl font-bold sm:text-4xl lg:text-6xl pb-10 md:pb-20">
                                {' '}Our Vision
                            </h2>
                            <motion.div
                                className="orico-about-text-wrap 111"
                                initial={{ opacity: 0, x: -50 }} // start 50px below
                                whileInView={{ opacity: 1, x: 1 }} // slide up and fade in
                                exit={{ opacity: 0, x: -50 }} // fade out and slide down
                                viewport={{ once: false, amount: 0.4 }} // trigger when 20% visible
                                transition={{ duration: 1, ease: 'easeInOut' }} // longer duration
                            >
                                <p className="mb-5 text-justify text-xl">
                                    We aim to empower our students to join world class universities and become lifelong learners and compassionate global citizens.
                                </p>
                            </motion.div>
                        </div>
                    </div>

                </div>
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
                className="absolute top-1/8 right-[40px] -z-10 -translate-y-1/8 hidden md:block"
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
                className="absolute top-8/8 left-[40px] -z-10 -translate-y-8/8 hidden md:block"
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
                className="absolute top-8/8 right-[40px] -z-10 -translate-y-8/8 hidden md:block"
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
    );
}

export default VmvStatus;
