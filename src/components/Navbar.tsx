'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProjectsOpen, setIsProjectsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Contact Us', href: '/contact' },
    ];

    const projectLinks = [
        { name: 'Ongoing Projects', href: '/projects#ongoing' },
        { name: 'Completed Projects', href: '/projects#completed' },
        { name: 'Upcoming Projects', href: '/projects#upcoming' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${isScrolled ? 'shadow-md py-3' : 'py-5'
                }`}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <img src="/images/logo.png" alt="Logo" className="w-18 h-auto" />
                        {/* <span className="text-primary font-heading font-bold text-2xl tracking-tight">
                            BVR <span className="text-secondary font-medium">Developers</span>
                        </span> */}
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-text-primary hover:text-accent transition-colors font-medium">Home</Link>
                        <Link href="/about" className="text-text-primary hover:text-accent transition-colors font-medium">About Us</Link>

                        {/* Dropdown Menu */}
                        <div className="relative group">
                            <button className="flex items-center text-text-primary group-hover:text-accent transition-colors font-medium cursor-pointer py-2">
                                Projects <ChevronDown className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180" />
                            </button>

                            <div className="absolute top-full left-0 mt-0 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 overflow-hidden border border-gray-100">
                                <div className="py-2">
                                    {projectLinks.map((link) => (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            className="block px-6 py-3 text-base text-text-primary hover:bg-section hover:text-primary border-transparent border-l-2 hover:border-accent transition-all"
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <Link href="/gallery" className="text-text-primary hover:text-accent transition-colors font-medium">Gallery</Link>
                        <Link href="/contact" className="text-text-primary hover:text-accent transition-colors font-medium">Contact Us</Link>
                    </nav>

                    {/* CTA Button Desktop */}
                    <div className="hidden md:block">
                        <Link
                            href="/contact"
                            className="bg-primary hover:bg-accent text-white font-medium py-3 px-6 rounded-md transition-colors duration-300 shadow-sm"
                        >
                            Book Site Visit
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-text-primary p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div
                className={`fixed inset-y-0 right-0 w-[300px] bg-white shadow-2xl transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    } transition-transform duration-300 ease-in-out z-50 md:hidden flex flex-col h-full overflow-y-auto`}
            >
                <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                    {/* <span className="text-primary font-heading font-bold text-xl">BVR</span> */}
                    <img src="/images/logo.png" alt="Logo" className="w-12 h-auto" />
                    <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-500">
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <div className="flex-1 py-4 px-6 space-y-2">
                    <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="block py-3 text-lg font-medium text-text-primary border-b border-gray-50">Home</Link>
                    <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="block py-3 text-lg font-medium text-text-primary border-b border-gray-50">About Us</Link>

                    <div className="border-b border-gray-50">
                        <button
                            onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                            className="flex items-center justify-between w-full py-3 text-lg font-medium text-text-primary"
                        >
                            Projects <ChevronDown className={`w-5 h-5 transition-transform ${isProjectsOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <div className={`overflow-hidden transition-all duration-300 ${isProjectsOpen ? 'max-h-60' : 'max-h-0'}`}>
                            <div className="pl-6 pb-3 space-y-3">
                                {projectLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="block text-text-secondary hover:text-primary py-1"
                                    >
                                        → {link.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    <Link href="/gallery" onClick={() => setIsMobileMenuOpen(false)} className="block py-3 text-lg font-medium text-text-primary border-b border-gray-50">Gallery</Link>
                    <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block py-3 text-lg font-medium text-text-primary">Contact Us</Link>
                </div>

                <div className="p-6 mt-auto">
                    <Link
                        href="/contact"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block w-full text-center bg-primary text-white font-medium py-4 rounded-md shadow-md"
                    >
                        Book Site Visit
                    </Link>
                </div>
            </div>

            {/* Mobile Menu Backdrop */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/20 z-40 md:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}
        </header>
    );
};

export default Navbar;
