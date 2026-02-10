import { Link, usePage } from '@inertiajs/react'
import React from 'react'

const Footer = () => {
    const { url } = usePage();

    const isActive = (path: string) => url.split('?')[0] === path;
    return (
        <div className='w-full bg-brand-soft text-black dark:bg-brand-dark dark:text-white'>
            <div className='grid  md:grid-cols-3 py-10'>
                <div className='flex items-center flex-col '>
                    <img src="/img/logo/misa.webp" className=' w-40 md:w-52 dark:hidden' alt="" />
                    <img src="/img/logo/misa_b.webp" className=' w-40 md:w-52 hidden dark:block' alt="" />
                    <p className='max-w-md mt-4 text-center'>We nurture students to become lifelong learners, responsible global citizens, and compassionate individuals through a challenging and balanced curriculum in a safe and caring environment.</p>
                </div>
                <div className='text-center'>
                    <h2 className='text-xl text-brand-dark dark:text-white font-bold '>More Information</h2>

                    {/* Added 'flex flex-col gap-4' to create space between items */}
                    <ul className='text-base mt-6 uppercase flex flex-col gap-4'>
                        <li>
                            <Link href='/'
                                className={`hover:text-brand transition
                                        ${isActive('/')
                                        ? 'text-brand-core '
                                        : ''}`
                                }
                            >Home</Link>
                        </li>
                        <li>
                            <Link href='/facilities'
                                className={`hover:text-brand transition
                                        ${isActive('/facilities')
                                        ? 'text-brand-core '
                                        : ''}`
                                }
                            >Facilities</Link>
                        </li>
                        <li>
                            <Link href="/teachers" className="hover:text-brand transition">Our Teachers</Link>
                        </li>
                        <li>
                            <Link href='/privacy-policy'
                                className={`hover:text-brand transition
                                        ${isActive('/privacy-policy')
                                        ? 'text-brand-core '
                                        : ''}`
                                }
                            >Privacy Policy</Link>
                        </li>
                    </ul>
                </div>
                <div className='text-center'>
                    <h2 className='text-xl text-brand-dark dark:text-white font-bold '>Join us</h2>

                    {/* Added 'flex flex-col gap-4' to create space between items */}
                    <ul className='text-base mt-6 uppercase flex flex-col gap-4'>
                        <li>
                            <Link href='/studentadmission'
                                className={`hover:text-brand transition
                                        ${isActive('/studentadmission')
                                        ? 'text-brand-core '
                                        : ''}`
                                }
                            >Student Admission</Link>
                        </li>
                        <li>
                            <Link href='/events-and-news'
                                className={`hover:text-brand transition
                                        ${isActive('/events-and-news')
                                        ? 'text-brand-core '
                                        : ''}`
                                }
                            >Event & News</Link>
                        </li>
                        <li>
                            <a href="https://www.jobnet.com.mm/companies/bfi-education-services-company-limited/e-11033" target='_blank' className="hover:text-brand transition">Careeer</a>
                        </li>
                        <li>
                            <Link href='/'
                                className={`hover:text-brand transition
                                        ${isActive('/contact-us')
                                        ? 'text-brand-core '
                                        : ''}`
                                }
                            >Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className=' flex justify-center flex-col items-center gap-4 py-4'>
                {/* <hr className='w-[20%] border  border-brand' /> */}
                <p>&copy; 2026 BFI Education Services' Developer</p>
            </div>
        </div>
    )
}

export default Footer