'use client';

import AppLogo from '@/components/app-logo'
import AppLogoIcon from '@/components/app-logo-icon'
import { Link, usePage } from '@inertiajs/react'
import { FacebookIcon, InstagramIcon, YoutubeIcon } from 'lucide-react'
import { FiFacebook, FiInstagram, FiLinkedin, FiPhone, FiTwitter, FiYoutube } from 'react-icons/fi';
import { RiMenu3Line, RiCloseLine, RiArrowDownSLine } from 'react-icons/ri';
import React, { useState, useEffect, useRef } from 'react'
import AppearanceToggleDropdown from '@/components/appearance-dropdown';
import Footer from '@/components/footer';
import MobileSidebarNav from '@/components/mobile-sidebar-nav';

const FrontendLayout = ({ children }: { children: React.ReactNode }) => {
    const { url } = usePage();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [expandedMenu, setExpandedMenu] = useState('');
    const [isScrolled, setIsScrolled] = useState(false);
    const topBarRef = useRef<HTMLDivElement>(null);

    const isActive = (path: string) => url.split('?')[0] === path;
    const handleLinkClick = () => setSidebarOpen(false);
    const toggleMenu = (menu: string) => {
        setExpandedMenu(expandedMenu === menu ? '' : menu);
    };

    // Scroll detection to change navbar design
    useEffect(() => {
        const handleScroll = () => {
            if (topBarRef.current) {
                const topBarHeight = topBarRef.current.offsetHeight;
                setIsScrolled(window.scrollY > topBarHeight);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const sidebarRef = React.createRef<HTMLDivElement>();

    return (
        <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] text-[#1b1b18] dark:text-white lg:justify-center dark:bg-[#0a0a0a]">

            {/* 1. TOP BAR (Scrolls away) */}
            {/* Stay Navbar */}
            <div ref={topBarRef} className='w-full text-sm p-4 md:hidden lg:block'>
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
            <div className='w-full text-sm p-4 hidden md:block lg:hidden '>
                <div className='flex items-center justify-center gap-4 py-2'> {/* Added py-2 for spacing */}
                    <div className='flex '>
                        <img src='/img/logo/misa_tagline.png' className='w-sm dark:hidden' alt="" />
                        <img src='/img/logo/misa_tagline_b.png' className='w-sm dark:block hidden' alt="" />
                    </div>

                </div>
            </div>
            {/* 2. MOBILE MENU BUTTON (Visible on mobile/tablet, hidden on lg+) - STICKY */}
            <div className='w-full lg:hidden sticky top-0 z-50 bg-secondary-brand-dark text-white flex items-center justify-between px-4 py-3 shadow-lg'>
                <div className='flex items-center'>
                    <img src='/img/logo/misa.webp' className='w-16 dark:hidden' alt="Logo" />
                    <img src='/img/logo/misa_b.webp' className='w-16 dark:block hidden' alt="Logo" />
                </div>
                <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className='text-2xl hover:text-brand transition-colors'
                    aria-label="Toggle menu"
                >
                    <RiMenu3Line />
                </button>
            </div>

            {/* Mobile Navbar */}
            <MobileSidebarNav isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} currentUrl={url} />

            {/* 2. STICKY NAV BAR (Stays fixed - Hidden on lg, visible on larger screens) */}
            {/* Scroll NavBar */}
            <nav className={`sticky top-0 z-50 w-full shadow-lg hidden lg:block transition-all duration-300 ${isScrolled
                ? 'bg-white text-secondary-brand-dark shadow-md'
                : 'bg-secondary-brand-dark text-white'
                }`}>
                <div className={`flex items-center transition-all duration-300 py-2 ${isScrolled ? 'px-6' : 'justify-center'}`}>
                    {/* Logo appears when scrolled */}
                    {isScrolled && (
                        <div className='mr-8 flex-shrink-0'>
                            <img src='/img/logo/misa_tagline.png' className=' w-40 xl:w-84 dark:hidden' alt="Logo" />
                            <img src='/img/logo/misa_tagline.png' className=' w-40 xl:w-84 dark:block hidden' alt="Logo" />
                        </div>
                    )}
                    <ul className={`flex items-center uppercase h-20 ${isScrolled ? 'justify-end flex-1' : 'justify-center'}`}>
                        <li className='  '>
                            <Link href='/'
                                className={`transition border-r-2 px-6 py-3 
                                        ${isActive('/')
                                        ? `text-brand border-brand ${isScrolled ? 'text-sm xl:text-base' : ''}`
                                        : `${isScrolled ? 'text-secondary-brand-dark hover:text-brand border-gray-300 text-sm xl:text-base' : 'text-white hover:text-brand border-gray-600'}`}`
                                }
                            >Home</Link>
                        </li>
                        <li className='relative group h-full flex items-center last:border-r-0'>
                            <Link href="#"
                                className={`transition border-r-2 px-6 py-3
                                    ${isActive('/our-history') ||
                                        isActive('/our-mission-and-vision') ||
                                        isActive('/our-philosophy') ||
                                        isActive('/sister-schools') ||
                                        isActive('/admin-team') ||
                                        isActive('/school-profile')
                                        ? `text-brand border-brand ${isScrolled ? 'text-sm xl:text-base' : ''}`
                                        : `${isScrolled ? 'text-secondary-brand-dark hover:text-brand border-gray-300 text-sm xl:text-base' : 'text-white hover:text-brand border-gray-600'}`}`
                                }
                            >
                                About us
                            </Link>
                            <div className={`absolute top-full left-0 w-48 shadow-lg hidden group-hover:block z-50 ${isScrolled ? 'bg-white text-secondary-brand-dark' : 'bg-secondary-brand-dark text-white'
                                }`}>
                                <ul className={`flex flex-col text-sm text-left ${isScrolled ? 'border-gray-300' : 'border-gray-700'}`}>
                                    <li className={`border-b ${isScrolled ? 'border-gray-300' : 'border-gray-700'} ${isActive('/our-history') ? 'text-brand' : `hover:text-brand ${isScrolled ? '' : ''}`}`} >
                                        <Link href='/our-history' className='block px-4 py-3'>Our History</Link>
                                    </li>

                                    <li className={`border-b ${isScrolled ? 'border-gray-300' : 'border-gray-700'} ${isActive('/our-mission-and-vision') ? 'text-brand' : 'hover:text-brand'}`}>
                                        <Link href="/our-mission-and-vision" className='block px-4 py-3'> Mission & Vision</Link>
                                    </li>
                                    <li className={`border-b ${isScrolled ? 'border-gray-300' : 'border-gray-700'} ${isActive('/our-philosophy') ? 'text-brand' : 'hover:text-brand'}`}>
                                        <Link href="/our-philosophy" className='block px-4 py-3'> Philosophy</Link>
                                    </li>
                                    <li className={`border-b ${isScrolled ? 'border-gray-300' : 'border-gray-700'} ${isActive('/our-history') ? 'text-brand' : 'hover:text-brand'}`}>
                                        <Link href="#" className='block px-4 py-3'> Teachers</Link>
                                    </li>
                                    <li className={`border-b ${isScrolled ? 'border-gray-300' : 'border-gray-700'} ${isActive('/sister-schools') ? 'text-brand' : 'hover:text-brand'}`}>
                                        <Link href="/sister-schools" className='block px-4 py-3'>Sister Scools</Link>
                                    </li>
                                    <li className={`border-b ${isScrolled ? 'border-gray-300' : 'border-gray-700'} ${isActive('/admin-team') ? 'text-brand' : 'hover:text-brand'}`}>
                                        <Link href="/admin-team" className='block px-4 py-3'>Admin Team</Link>
                                    </li>
                                    <li className={`${isActive('/school-profile') ? 'text-brand' : 'hover:text-brand'}`}>
                                        <Link href="/school-profile" className='block px-4 py-3'>School Profile</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className='relative group h-full flex items-center last:border-r-0'>
                            <Link href="#"
                                className={`transition border-r-2 px-6 py-3
                                    ${isActive('/alumni') ||
                                        isActive('/news') ||
                                        isActive('/gallery') ||
                                        isActive('/calendar') ||
                                        isActive('/facilities')
                                        ? `text-brand border-brand ${isScrolled ? 'text-sm xl:text-base' : ''}`
                                        : `${isScrolled ? 'text-secondary-brand-dark hover:text-brand border-gray-300 text-sm xl:text-base' : 'text-white hover:text-brand border-gray-600'}`}`
                                }
                            >
                                Student Life
                            </Link>
                            <div className={`absolute top-full left-0 w-48 shadow-lg hidden group-hover:block z-50 ${isScrolled ? 'bg-white text-secondary-brand-dark' : 'bg-secondary-brand-dark text-white'}`}>
                                <ul className={`flex flex-col text-sm text-left ${isScrolled ? 'border-gray-300' : 'border-gray-700'}`}>
                                    <li className={`border-b ${isScrolled ? 'border-gray-300' : 'border-gray-700'} ${isActive('/alumni') ? 'text-brand' : 'hover:text-brand'}`}>
                                        <Link href="/alumni" className='block px-6 py-2 transition-colors'>Alumni</Link>
                                    </li>
                                    <li className={`border-b ${isScrolled ? 'border-gray-300' : 'border-gray-700'} ${isActive('/news') ? 'text-brand' : 'hover:text-brand'}`}>
                                        <Link href="/news" className='block px-6 py-2 transition-colors'>News</Link>
                                    </li>
                                    <li className={`border-b ${isScrolled ? 'border-gray-300' : 'border-gray-700'} ${isActive('/gallery') ? 'text-brand' : 'hover:text-brand'}`}>
                                        <Link href="/gallery" className='block px-6 py-2 transition-colors'>Gallery</Link>
                                    </li>
                                    <li className={`border-b ${isScrolled ? 'border-gray-300' : 'border-gray-700'} ${isActive('/calendar') ? 'text-brand' : 'hover:text-brand'}`}>
                                        <Link href="/calendar" className='block px-6 py-2 transition-colors'>Calendar</Link>
                                    </li>
                                    <li className={`border-b ${isScrolled ? 'border-gray-300' : 'border-gray-700'} ${isActive('/facilities') ? 'text-brand' : 'hover:text-brand'}`}>
                                        <Link href="/facilities" className='block px-6 py-2 transition-colors'>Facilities</Link>
                                    </li>

                                </ul>
                            </div>
                        </li>
                        <li className='relative group h-full flex items-center last:border-r-0'>
                            <Link href="#"
                                className={`transition border-r-2 px-6 py-3
                                    ${isActive('/kindergarten-programs') ||
                                        isActive('/primary-school-programs') ||
                                        isActive('/secondary-school-programs') ||
                                        isActive('/igcse')
                                        ? `text-brand border-brand ${isScrolled ? 'text-sm xl:text-base' : ''}`
                                        : `${isScrolled ? 'text-secondary-brand-dark hover:text-brand border-gray-300 text-sm xl:text-base' : 'text-white hover:text-brand border-gray-600'}`}`
                                }
                            >
                                Education
                            </Link>
                            <div className={`absolute top-full left-0 w-48 shadow-lg hidden group-hover:block z-50 ${isScrolled ? 'bg-white text-secondary-brand-dark' : 'bg-secondary-brand-dark text-white'}`}>
                                <ul className={`flex flex-col text-sm text-left ${isScrolled ? 'border-gray-300' : 'border-gray-700'}`}>
                                    <li className={`border-b ${isScrolled ? 'border-gray-300' : 'border-gray-700'} ${isActive('/kindergarten-programs') ? 'text-brand' : 'hover:text-brand'}`}>
                                        <Link href="/kindergarten-programs" className='block px-6 py-2 transition-colors'>Preschool</Link>
                                    </li>
                                    <li className={`border-b ${isScrolled ? 'border-gray-300' : 'border-gray-700'} ${isActive('/primary-school-programs') ? 'text-brand' : 'hover:text-brand'}`}>
                                        <Link href="/primary-school-programs" className='block px-6 py-2 transition-colors'>Primary</Link>
                                    </li>
                                    <li className={`border-b ${isScrolled ? 'border-gray-300' : 'border-gray-700'} ${isActive('/secondary-school-programs') ? 'text-brand' : 'hover:text-brand'}`}>

                                        <Link href="/secondary-school-programs" className='block px-6 py-2 transition-colors'>Secondary</Link>
                                    </li>
                                    <li className={`border-b ${isScrolled ? 'border-gray-300' : 'border-gray-700'} ${isActive('/igcse') ? 'text-brand' : 'hover:text-brand'}`}>

                                        <Link href="/igcse" className='block px-6 py-2 transition-colors'>IGCSE</Link>
                                    </li>

                                </ul>
                            </div>
                        </li>
                        <li className='relative group h-full flex items-center last:border-r-0'>
                            <Link href="#"
                                className={`transition border-r-2 px-6 py-3
                                    ${isActive('/studentadmission') ||
                                        isActive('/admission-process') ||
                                        isActive('/withdrawal-policy')
                                        ? `text-brand border-brand ${isScrolled ? 'text-sm xl:text-base' : ''}`
                                        : `${isScrolled ? 'text-secondary-brand-dark hover:text-brand border-gray-300 text-sm xl:text-base' : 'text-white hover:text-brand border-gray-600'}`}`
                                }
                            >
                                Admission
                            </Link>
                            <div className={`absolute top-full left-0 w-48 shadow-lg hidden group-hover:block z-50 ${isScrolled ? 'bg-white text-secondary-brand-dark' : 'bg-secondary-brand-dark text-white'}`}>
                                <ul className={`flex flex-col text-sm text-left ${isScrolled ? 'border-gray-300' : 'border-gray-700'}`}>
                                    <li className={`border-b ${isScrolled ? 'border-gray-300' : 'border-gray-700'} ${isActive('/studentadmission') ? 'text-brand' : 'hover:text-brand'}`}>
                                        <Link href="/studentadmission" className='block px-6 py-2 transition-colors'>Student Admission</Link>
                                    </li>
                                    <li className={`border-b ${isScrolled ? 'border-gray-300' : 'border-gray-700'} ${isActive('/admission-process') ? 'text-brand' : 'hover:text-brand'}`}>
                                        <Link href="/admission-process" className='block px-6 py-2 transition-colors'>Admission Process</Link>
                                    </li>
                                    <li className={`border-b ${isScrolled ? 'border-gray-300' : 'border-gray-700'} ${isActive('/withdrawal-policy') ? 'text-brand' : 'hover:text-brand'}`}>

                                        <Link href="/withdrawal-policy" className='block px-6 py-2 transition-colors'>Withdrawal Policy </Link>
                                    </li>
                                    <li className='hover:text-brand'>
                                        <a href="https://www.jobnet.com.mm/companies/bfi-education-services-company-limited/e-11033" target='_blank' className='block px-6 py-2 transition-colors'>Career</a>
                                    </li>

                                </ul>
                            </div>
                        </li>
                        <li className={`border-r-2 px-6 py-3 hover:text-brand transition ${isScrolled ? 'text-secondary-brand-dark border-gray-300 text-sm xl:text-base' : 'text-white border-gray-600'}`}>
                            <Link href="/">Events & News</Link>
                        </li>
                        <li className={`border-r-2 px-6 py-3 hover:text-brand transition last:border-r-0 ${isScrolled ? 'text-secondary-brand-dark border-gray-300 text-sm xl:text-base' : 'text-white border-gray-600'}`}>
                            <Link href="/">Contact</Link>
                        </li>

                    </ul>
                    <div>
                        <AppearanceToggleDropdown />
                    </div>
                </div>
            </nav >

            {/* 3. MAIN CONTENT */}
            <div className='w-full' >
                {children}
            </div >
            <Footer />
        </div>
    )
}

export default FrontendLayout
