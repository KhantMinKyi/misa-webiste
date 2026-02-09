'use client';

import { Link } from '@inertiajs/react';
import { RiCloseLine, RiArrowDownSLine } from 'react-icons/ri';
import React, { useState, useRef, useEffect } from 'react';
import AppearanceToggleTab from './appearance-tabs';

interface MobileSidebarNavProps {
    isOpen: boolean;
    onClose: () => void;
    currentUrl: string;
}

const MobileSidebarNav: React.FC<MobileSidebarNavProps> = ({ isOpen, onClose, currentUrl }) => {
    const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
    const sidebarRef = useRef<HTMLDivElement>(null);
    const url = currentUrl; // Declare the url variable

    const isActive = (path: string) => url.split('?')[0] === path;

    // Determine which menu should be expanded based on current URL
    useEffect(() => {
        if (isOpen) {
            if (
                currentUrl?.includes('/our-history') ||
                currentUrl?.includes('/our-mission-and-vision') ||
                currentUrl?.includes('/our-philosophy') ||
                currentUrl?.includes('/sister-schools') ||
                currentUrl?.includes('/admin-team') ||
                currentUrl?.includes('/school-profile')
            ) {
                setExpandedMenu('about');
            } else if (
                currentUrl?.includes('/alumni') ||
                currentUrl?.includes('/news') ||
                currentUrl?.includes('/gallery') ||
                currentUrl?.includes('/calendar') ||
                currentUrl?.includes('/facilities')
            ) {
                setExpandedMenu('student-life');
            } else if (
                currentUrl?.includes('/kindergarten-programs') ||
                currentUrl?.includes('/primary-school-programs') ||
                currentUrl?.includes('/secondary-school-programs') ||
                currentUrl?.includes('/igcse')
            ) {
                setExpandedMenu('education');
            } else if (
                currentUrl?.includes('/studentadmission') ||
                currentUrl?.includes('/admission-process') ||
                currentUrl?.includes('/withdrawal-policy') ||
                currentUrl?.includes('/career')
            ) {
                setExpandedMenu('admission');
            }
        }
    }, [isOpen, currentUrl]);

    // Close sidebar when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }
    }, [isOpen, onClose]);

    const toggleMenu = (menu: string) => {
        setExpandedMenu(expandedMenu === menu ? null : menu);
    };

    const handleLinkClick = () => {
        onClose();
    };

    return (
        <>
            {/* MOBILE SIDEBAR OVERLAY */}
            {isOpen && (
                <div
                    className='fixed inset-0 bg-black/50 lg:hidden z-40'
                    onClick={onClose}
                />
            )}

            {/* MOBILE SIDEBAR NAVIGATION */}
            <div
                ref={sidebarRef}
                className={`fixed top-0 left-0 h-screen w-64 bg-secondary-brand-dark text-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 lg:hidden overflow-y-auto ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                {/* Close Button */}
                <div className='flex justify-between items-center p-4 border-b border-gray-700 sticky top-0 bg-secondary-brand-dark'>
                    <h3 className='font-semibold text-lg'>Menu</h3>
                    <button
                        onClick={onClose}
                        className='text-2xl hover:text-brand transition-colors'
                        aria-label="Close menu"
                    >
                        <RiCloseLine />
                    </button>
                </div>

                {/* Mobile Menu Items */}
                <ul className='flex flex-col'>
                    <li className='border-b border-gray-700'>
                        <Link
                            href='/'
                            className={`block px-4 py-3 hover:text-brand transition-colors ${isActive('/') ? 'text-brand font-semibold' : ''
                                }`}
                            onClick={handleLinkClick}
                        >
                            Home
                        </Link>
                    </li>

                    {/* About Us Dropdown */}
                    <li className='border-b border-gray-700'>
                        <button
                            onClick={() => toggleMenu('about')}
                            className='w-full flex items-center justify-between px-4 py-3 hover:text-brand transition-colors'
                        >
                            <span className={expandedMenu === 'about' ? 'text-brand font-semibold' : ''}>About us</span>
                            <RiArrowDownSLine
                                className={`transition-transform duration-300 ${expandedMenu === 'about' ? 'rotate-180' : ''
                                    }`}
                            />
                        </button>
                        <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedMenu === 'about' ? 'max-h-96' : 'max-h-0'
                                }`}
                        >
                            <ul className='flex flex-col bg-secondary-brand-dark/50 text-sm'>
                                <li className='border-b border-gray-700 hover:text-brand'>
                                    <Link
                                        href='/our-history'
                                        className={`block px-6 py-2 transition-colors ${isActive('/our-history') ? 'text-brand' : ''
                                            }`}
                                        onClick={handleLinkClick}
                                    >
                                        Our History
                                    </Link>
                                </li>
                                <li className='border-b border-gray-700 hover:text-brand'>
                                    <Link
                                        href='/our-mission-and-vision'
                                        className={`block px-6 py-2 transition-colors ${isActive('/our-mission-and-vision') ? 'text-brand' : ''
                                            }`}
                                        onClick={handleLinkClick}
                                    >
                                        Mission & Vision
                                    </Link>
                                </li>
                                <li className='border-b border-gray-700 hover:text-brand'>
                                    <Link
                                        href='/our-philosophy'
                                        className={`block px-6 py-2 transition-colors ${isActive('/our-philosophy') ? 'text-brand' : ''
                                            }`}
                                        onClick={handleLinkClick}
                                    >
                                        Philosophy
                                    </Link>
                                </li>
                                <li className='border-b border-gray-700 hover:text-brand'>
                                    <Link
                                        href='#'
                                        className='block px-6 py-2 transition-colors'
                                        onClick={handleLinkClick}
                                    >
                                        Teachers
                                    </Link>
                                </li>
                                <li className='border-b border-gray-700 hover:text-brand'>
                                    <Link
                                        href='/sister-schools'
                                        className={`block px-6 py-2 transition-colors ${isActive('/sister-schools') ? 'text-brand' : ''
                                            }`}
                                        onClick={handleLinkClick}
                                    >
                                        Sister Schools
                                    </Link>
                                </li>
                                <li className='border-b border-gray-700 hover:text-brand'>
                                    <Link
                                        href='/admin-team'
                                        className={`block px-6 py-2 transition-colors ${isActive('/admin-team') ? 'text-brand' : ''
                                            }`}
                                        onClick={handleLinkClick}
                                    >
                                        Admin Team
                                    </Link>
                                </li>
                                <li className='hover:text-brand'>
                                    <Link
                                        href='/school-profile'
                                        className={`block px-6 py-2 transition-colors ${isActive('/school-profile') ? 'text-brand' : ''
                                            }`}
                                        onClick={handleLinkClick}
                                    >
                                        School Profile
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>

                    {/* Student Life Dropdown */}
                    <li className='border-b border-gray-700'>
                        <button
                            onClick={() => toggleMenu('student-life')}
                            className='w-full flex items-center justify-between px-4 py-3 hover:text-brand transition-colors'
                        >
                            <span className={expandedMenu === 'student-life' ? 'text-brand font-semibold' : ''}>Student Life</span>
                            <RiArrowDownSLine
                                className={`transition-transform duration-300 ${expandedMenu === 'student-life' ? 'rotate-180' : ''
                                    }`}
                            />
                        </button>
                        <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedMenu === 'student-life' ? 'max-h-80' : 'max-h-0'
                                }`}
                        >
                            <ul className='flex flex-col bg-secondary-brand-dark/50 text-sm'>
                                <li className='border-b border-gray-700 hover:text-brand'>
                                    <Link
                                        href='/alumni'
                                        className={`block px-6 py-2 transition-colors ${isActive('/alumni') ? 'text-brand' : ''
                                            }`}
                                        onClick={handleLinkClick}
                                    >
                                        Alumni
                                    </Link>
                                </li>
                                <li className='border-b border-gray-700 hover:text-brand'>
                                    <Link href='/news' className={`block px-6 py-2 transition-colors ${isActive('/news') ? 'text-brand' : ''
                                        }`} onClick={handleLinkClick}>
                                        News
                                    </Link>
                                </li>
                                <li className='border-b border-gray-700 hover:text-brand'>
                                    <Link href='/gallery' className={`block px-6 py-2 transition-colors ${isActive('/gallery') ? 'text-brand' : ''
                                        }`} onClick={handleLinkClick}>
                                        Gallery
                                    </Link>
                                </li>
                                <li className='border-b border-gray-700 hover:text-brand'>
                                    <Link href='/calendar' className={`block px-6 py-2 transition-colors ${isActive('/calendar') ? 'text-brand' : ''
                                        }`} onClick={handleLinkClick}>
                                        Calendar
                                    </Link>
                                </li>
                                <li className='hover:text-brand'>
                                    <Link href='/facilities' className={`block px-6 py-2 transition-colors ${isActive('/facilities') ? 'text-brand' : ''
                                        }`} onClick={handleLinkClick}>
                                        Facilities
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>

                    {/* Education Dropdown */}
                    <li className='border-b border-gray-700'>
                        <button
                            onClick={() => toggleMenu('education')}
                            className='w-full flex items-center justify-between px-4 py-3 hover:text-brand transition-colors'
                        >
                            <span className={expandedMenu === 'education' ? 'text-brand font-semibold' : ''}>Education</span>
                            <RiArrowDownSLine
                                className={`transition-transform duration-300 ${expandedMenu === 'education' ? 'rotate-180' : ''
                                    }`}
                            />
                        </button>
                        <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedMenu === 'education' ? 'max-h-64' : 'max-h-0'
                                }`}
                        >
                            <ul className='flex flex-col bg-secondary-brand-dark/50 text-sm'>
                                <li className='border-b border-gray-700 hover:text-brand'>
                                    <Link href='/kindergarten-programs' className={`block px-6 py-2 transition-colors ${isActive('/kindergarten-programs') ? 'text-brand' : ''
                                        }`} onClick={handleLinkClick}>
                                        Preschool
                                    </Link>
                                </li>
                                <li className='border-b border-gray-700 hover:text-brand'>
                                    <Link href='/primary-school-programs' className={`block px-6 py-2 transition-colors ${isActive('/primary-school-programs') ? 'text-brand' : ''
                                        }`} onClick={handleLinkClick}>
                                        Primary
                                    </Link>
                                </li>
                                <li className='border-b border-gray-700 hover:text-brand'>
                                    <Link href='/secondary-school-programs' className={`block px-6 py-2 transition-colors ${isActive('/secondary-school-programs') ? 'text-brand' : ''
                                        }`} onClick={handleLinkClick}>
                                        Secondary
                                    </Link>
                                </li>
                                <li className='border-b border-gray-700 hover:text-brand'>
                                    <Link href='/igcse' className={`block px-6 py-2 transition-colors ${isActive('/igcse') ? 'text-brand' : ''
                                        }`} onClick={handleLinkClick}>
                                        IGCSE
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>

                    {/* Admission Dropdown */}
                    <li className='border-b border-gray-700'>
                        <button
                            onClick={() => toggleMenu('admission')}
                            className='w-full flex items-center justify-between px-4 py-3 hover:text-brand transition-colors'
                        >
                            <span className={expandedMenu === 'admission' ? 'text-brand font-semibold' : ''}>Admission</span>
                            <RiArrowDownSLine
                                className={`transition-transform duration-300 ${expandedMenu === 'admission' ? 'rotate-180' : ''
                                    }`}
                            />
                        </button>
                        <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedMenu === 'admission' ? 'max-h-64' : 'max-h-0'
                                }`}
                        >
                            <ul className='flex flex-col bg-secondary-brand-dark/50 text-sm'>
                                <li className='border-b border-gray-700 hover:text-brand'>
                                    <Link href='/studentadmission' className={`block px-6 py-2 transition-colors ${isActive('/studentadmission') ? 'text-brand' : ''
                                        }`} onClick={handleLinkClick}>
                                        Student Admission
                                    </Link>
                                </li>
                                <li className='border-b border-gray-700 hover:text-brand'>
                                    <Link href='/admission-process' className={`block px-6 py-2 transition-colors ${isActive('/admission-process') ? 'text-brand' : ''
                                        }`} onClick={handleLinkClick}>
                                        Admission Process
                                    </Link>
                                </li>
                                <li className='border-b border-gray-700 hover:text-brand'>
                                    <Link href='/withdrawal-policy' className={`block px-6 py-2 transition-colors ${isActive('/withdrawal-policy') ? 'text-brand' : ''
                                        }`} onClick={handleLinkClick}>
                                        Withdrawal Policy
                                    </Link>
                                </li>
                                <li className='hover:text-brand'>
                                    <Link href='#' className='block px-6 py-2 transition-colors' onClick={handleLinkClick}>
                                        Career
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li className='border-b border-gray-700 hover:text-brand'>
                        <Link href='/' className='block px-4 py-3 transition-colors' onClick={handleLinkClick}>
                            Events & News
                        </Link>
                    </li>
                    <li className='hover:text-brand'>
                        <Link href='/' className='block px-4 py-3 transition-colors' onClick={handleLinkClick}>
                            Contact
                        </Link>
                    </li>
                </ul>
                <div className='mt-4'>
                    <AppearanceToggleTab />
                </div>
            </div>
        </>
    );
};

export default MobileSidebarNav;
