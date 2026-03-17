import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-section pt-16 pb-8 border-t border-gray-100">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Logo & About */}
                    <div className="space-y-3">
                        <Link href="/" className="inline-block">
                            <img src="/images/logo.png" alt="Logo" className="w-15 h-auto" />
                            {/* <span className="text-primary font-heading font-bold text-2xl tracking-tight">
                                BVR <span className="text-secondary font-medium">Developers</span>
                            </span> */}
                        </Link>
                        <p className="text-text-secondary leading-relaxed text-base">
                            Quality Homes. Trusted Construction. Modern Living. Building thoughtfully designed residential apartments in Hyderabad.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-colors">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-colors">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-colors">
                                <Linkedin size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-colors">
                                <Twitter size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-primary font-heading font-bold text-lg mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-accent">
                            Quick Links
                        </h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/" className="text-text-secondary hover:text-accent transition-colors flex items-center group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-text-secondary hover:text-accent transition-colors flex items-center group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/gallery" className="text-text-secondary hover:text-accent transition-colors flex items-center group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    Gallery
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-text-secondary hover:text-accent transition-colors flex items-center group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Projects Links */}
                    <div>
                        <h3 className="text-primary font-heading font-bold text-lg mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-accent">
                            Projects
                        </h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/projects#ongoing" className="text-text-secondary hover:text-accent transition-colors flex items-center group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    Ongoing Projects
                                </Link>
                            </li>
                            <li>
                                <Link href="/projects#completed" className="text-text-secondary hover:text-accent transition-colors flex items-center group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    Completed Projects
                                </Link>
                            </li>
                            <li>
                                <Link href="/projects#upcoming" className="text-text-secondary hover:text-accent transition-colors flex items-center group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    Upcoming Projects
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-primary font-heading font-bold text-lg mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-accent">
                            Contact Us
                        </h3>
                        <ul className="space-y-5 flex flex-col items-start text-left">
                            <li className="flex items-start">
                                <MapPin className="text-accent mt-1 mr-3 flex-shrink-0" size={20} />
                                <span className="text-text-secondary text-base">
                                    BVR Property Developers Pvt Ltd
                                    P.No 418 & 419, Prashanth Nagar
                                    Vanasthalipuram Main Road
                                    Hyderabad – 500070
                                </span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="text-accent mr-3 flex-shrink-0" size={20} />
                                <a href="tel:+919381067561" className="text-text-secondary hover:text-accent transition-colors text-base">
                                    +91 93810 67561
                                </a>
                            </li>
                            <li className="flex items-center">
                                <Mail className="text-accent mr-3 flex-shrink-0" size={20} />
                                <a href="mailto:info@bvrd.in" className="text-text-secondary hover:text-accent transition-colors text-base">
                                    info@bvrd.in
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom text */}
                <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-base text-text-secondary">
                    <p>© {new Date().getFullYear()} BVR Property Developers Pvt Ltd. All rights reserved.</p>
                    <div className="mt-4 md:mt-0 space-x-4">
                        <span className="text-xs">GSTIN: 36ABCDE1234F1Z5</span>
                        <Link href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-accent transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
