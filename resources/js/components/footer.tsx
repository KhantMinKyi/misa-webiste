import { Link } from '@inertiajs/react'
import React from 'react'

const Footer = () => {
    return (
        <div className='w-full bg-gray-800 text-white dark:bg-yellow-950'>
            <div className='grid  md:grid-cols-3 py-10'>
                <div className='flex items-center flex-col '>
                    <img src="/img/logo/misa.webp" className=' w-40 md:w-52 dark:hidden' alt="" />
                    <img src="/img/logo/misa_b.webp" className=' w-40 md:w-52 hidden dark:block' alt="" />
                    <p className='max-w-md mt-4 text-center'>We nurture students to become lifelong learners, responsible global citizens, and compassionate individuals through a challenging and balanced curriculum in a safe and caring environment.</p>
                </div>
                <div className='text-center'>
                    <h2 className='text-xl text-amber-400 '>More Information</h2>

                    {/* Added 'flex flex-col gap-4' to create space between items */}
                    <ul className='text-base mt-6 uppercase flex flex-col gap-4'>
                        <li>
                            <Link href="/" className="hover:text-amber-400 transition">Home</Link>
                        </li>
                        <li>
                            <Link href="/programs" className="hover:text-amber-400 transition">Programs</Link>
                        </li>
                        <li>
                            <Link href="/teachers" className="hover:text-amber-400 transition">Our Teachers</Link>
                        </li>
                        <li>
                            <Link href="/privacy" className="hover:text-amber-400 transition">Privacy Policy</Link>
                        </li>
                    </ul>
                </div>
                <div className='text-center'>
                    <h2 className='text-xl text-amber-400 '>Join us</h2>

                    {/* Added 'flex flex-col gap-4' to create space between items */}
                    <ul className='text-base mt-6 uppercase flex flex-col gap-4'>
                        <li>
                            <Link href="/admission" className="hover:text-amber-400 transition">Student Admission</Link>
                        </li>
                        <li>
                            <Link href="/" className="hover:text-amber-400 transition">Event & News</Link>
                        </li>
                        <li>
                            <Link href="/programs" className="hover:text-amber-400 transition">Careeer</Link>
                        </li>
                        <li>
                            <Link href="/teachers" className="hover:text-amber-400 transition">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className=' flex justify-center flex-col items-center gap-4 py-4'>
                <hr className='max-w-4xl border  border-gray-600' />
                <p>&copy; 2026 BFI Education Services' Developer</p>
            </div>
        </div>
    )
}

export default Footer