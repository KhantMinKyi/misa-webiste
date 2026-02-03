import AppLogo from '@/components/app-logo'
import AppLogoIcon from '@/components/app-logo-icon'
import { Link } from '@inertiajs/react'
import { FacebookIcon, InstagramIcon, YoutubeIcon } from 'lucide-react'
import { FiFacebook, FiInstagram, FiLinkedin, FiPhone, FiTwitter, FiYoutube } from 'react-icons/fi';
import React from 'react'
import AppearanceToggleDropdown from '@/components/appearance-dropdown';
import Footer from '@/components/footer';

const FrontendLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] text-[#1b1b18] dark:text-white lg:justify-center dark:bg-[#0a0a0a]">

            {/* 1. TOP BAR (Scrolls away) */}
            {/* I changed this from <nav> to <div> so it doesn't trap the sticky element */}
            <div className='w-full text-sm '>
                <div className='flex items-center justify-center flex-col md:flex-row gap-4 py-2'> {/* Added py-2 for spacing */}
                    <div className='flex flex-4/8'>
                        <img src='/img/logo/misa_tagline.png' className='w-sm dark:hidden' alt="" />
                        <img src='/img/logo/misa_tagline_b.png' className='w-sm dark:block hidden' alt="" />
                    </div>
                    <div className='flex flex-3/8'>
                        <FiFacebook className='mr-10 text-brand text-xl' />
                        <FiYoutube className='mr-10 text-brand text-xl' />
                        <FiInstagram className='mr-10 text-brand text-xl' />
                        <div className='flex'>
                            <span className='text-sm'>+95943060027, +959777488802</span>
                            <FiPhone className='text-brand ms-2 text-xl' />
                        </div>
                    </div>
                    <div className='flex flex-3/8 items-center'>
                        <p className='text-sm mr-6'>Corner of 53*30th Street, Chan Aye Thar San Tsp, Mandalay</p>
                        <div>
                            <AppearanceToggleDropdown />
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. STICKY NAV BAR (Stays fixed) */}
            {/* This is now OUTSIDE the top div. It will stick because its parent is the main page wrapper. */}
            <nav className='bg-secondary-brand-dark text-white sticky top-0 z-50 w-full shadow-lg  hidden md:block'>
                <div className='flex justify-center uppercase '>
                    <ul className='flex items-center justify-center h-20 '>
                        <li className='  '>
                            <Link href='/' className='hover:text-brand hover:border-brand border-r-2 border-gray-600 px-10'>Home</Link>
                        </li>
                        <li className='relative group h-full flex items-center  last:border-r-0'>
                            <Link href="/about" className="hover:text-brand  hover:border-brand transition border-r-2 border-gray-600 px-6">
                                About us
                            </Link>
                            <div className='absolute top-full left-0 w-48 bg-secondary-brand-dark text-white shadow-lg hidden group-hover:block z-50'>
                                <ul className='flex flex-col text-sm text-left'>
                                    <li className='border-b border-gray-700 hover:text-brand'>
                                        <Link href='/our-history' className='block px-4 py-3'>Our History</Link>
                                    </li>

                                    <li className='border-b border-gray-700 hover:text-brand'>
                                        <Link href="/our-mission-and-vision" className='block px-4 py-3'> Mission & Vision</Link>
                                    </li>
                                    <li className='border-b border-gray-700 hover:text-brand'>
                                        <Link href="/our-philosophy" className='block px-4 py-3'> Philosophy</Link>
                                    </li>
                                    <li className='border-b border-gray-700 hover:text-brand'>
                                        <Link href="#" className='block px-4 py-3'> Teachers</Link>
                                    </li>
                                    <li className='border-b border-gray-700 hover:text-brand'>
                                        <Link href="/sister-schools" className='block px-4 py-3'>Sister Scools</Link>
                                    </li>
                                    <li className='border-b border-gray-700 hover:text-brand'>
                                        <Link href="/admin-team" className='block px-4 py-3'>Admin Team</Link>
                                    </li>
                                    <li className='border-b border-gray-700 hover:text-brand'>
                                        <Link href="/school-profile" className='block px-4 py-3'>School Profile</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className='relative group h-full flex items-center  last:border-r-0'>
                            <Link href="/about" className="hover:text-brand  hover:border-brand transition border-r-2 border-gray-600 px-6">
                                Student Life
                            </Link>
                            <div className='absolute top-full left-0 w-48 bg-secondary-brand-dark text-white shadow-lg hidden group-hover:block z-50'>
                                <ul className='flex flex-col text-sm text-left'>
                                    <li className='border-b border-gray-700 hover:text-brand'>
                                        <Link href="/about/history" className='block px-4 py-3'>Our History</Link>
                                    </li>
                                    <li className='border-b border-gray-700 hover:text-brand'>
                                        <Link href="/about/team" className='block px-4 py-3'>Our Team</Link>
                                    </li>
                                    <li className='hover:text-brand'>
                                        <Link href="/about/vision" className='block px-4 py-3'>Vision & Mission</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className='relative group h-full flex items-center  last:border-r-0'>
                            <Link href="/about" className="hover:text-brand  hover:border-brand transition border-r-2 border-gray-600 px-6">
                                Education
                            </Link>
                            <div className='absolute top-full left-0 w-48 bg-secondary-brand-dark text-white shadow-lg hidden group-hover:block z-50'>
                                <ul className='flex flex-col text-sm text-left'>
                                    <li className='border-b border-gray-700 hover:text-brand'>
                                        <Link href="/about/history" className='block px-4 py-3'>Our History</Link>
                                    </li>
                                    <li className='border-b border-gray-700 hover:text-brand'>
                                        <Link href="/about/team" className='block px-4 py-3'>Our Team</Link>
                                    </li>
                                    <li className='hover:text-brand'>
                                        <Link href="/about/vision" className='block px-4 py-3'>Vision & Mission</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className='relative group h-full flex items-center  last:border-r-0'>
                            <Link href="/about" className="hover:text-brand  hover:border-brand transition border-r-2 border-gray-600 px-6">
                                Admission
                            </Link>
                            <div className='absolute top-full left-0 w-48 bg-secondary-brand-dark text-white shadow-lg hidden group-hover:block z-50'>
                                <ul className='flex flex-col text-sm text-left'>
                                    <li className='border-b border-gray-700 hover:text-brand'>
                                        <Link href="/about/history" className='block px-4 py-3'>Our History</Link>
                                    </li>
                                    <li className='border-b border-gray-700 hover:text-brand'>
                                        <Link href="/about/team" className='block px-4 py-3'>Our Team</Link>
                                    </li>
                                    <li className='hover:text-brand'>
                                        <Link href="/about/vision" className='block px-4 py-3'>Vision & Mission</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className='border-r-2 border-gray-600 px-10  hover:text-brand  hover:border-brand'>
                            <Link href="/">Events & News</Link>
                        </li>
                        <li className='border-r-2 border-gray-600 px-10 hover:text-brand  hover:border-brand last:border-r-0'>
                            <Link href="/">Contact</Link>
                        </li>

                    </ul>
                </div>
            </nav>

            {/* 3. MAIN CONTENT */}
            <div className='w-full'>
                {children}
            </div>

            {/* <div className="hidden h-14.5 lg:block"></div> */}
            <Footer />
        </div>
    )
}

export default FrontendLayout