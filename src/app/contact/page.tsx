import FadeIn from '@/components/ui/FadeIn';
import { Mail, Phone, MapPin, Send, Home } from 'lucide-react';
import Link from 'next/link';

export default function Contact() {
    return (
        <div className="pt-24 pb-16 bg-white">
            {/* 1. Page Header */}
            <section className="bg-primary pt-24 pb-20 text-center relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20 bg-[url('/images/hero.png')] bg-cover bg-center" />


                <div className="container mx-auto px-4 md:px-6 relative z-10 text-white">
                    <FadeIn direction="up">
                        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white" style={{ color: "white" }}>Contact Us</h1>
                        <div className="flex items-center justify-center gap-2 text-base font-bold mb-6">
                            <Link href="/" className="text-accent hover:text-white transition-colors flex items-center gap-1">
                                <Home className="w-5 h-5 fill-current" /> Home
                            </Link>
                            <span className="text-gray-300 font-medium">&gt;</span>
                            <span className="text-gray-300 font-medium">Contact Us</span>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* 2. Contact Main Section */}
            <section className="py-24 container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto">
                    {/* Contact Details */}
                    <div className="lg:w-1/3 space-y-10">
                        <FadeIn direction="right">
                            <h2 className="text-3xl font-bold text-primary mb-8 font-heading">Get In Touch</h2>
                            <div className="space-y-8">
                                {/* Address */}
                                <div className="flex items-start bg-section p-6 rounded-xl hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-accent mr-4 shadow-sm flex-shrink-0">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-primary mb-2 text-lg">Office Address</h3>
                                        <p className="text-text-secondary leading-relaxed">
                                            BVR Property Developers Pvt Ltd<br />
                                            P.No 418 & 419, Prashanth Nagar<br />
                                            Vanasthalipuram Main Road<br />
                                            Hyderabad – 500070
                                        </p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-start bg-section p-6 rounded-xl hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-accent mr-4 shadow-sm flex-shrink-0">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-primary mb-2 text-lg">Call Us</h3>
                                        <a href="tel:+919381067561" className="text-text-secondary hover:text-accent font-medium text-lg transition-colors">
                                            +91 93810 67561
                                        </a>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start bg-section p-6 rounded-xl hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-accent mr-4 shadow-sm flex-shrink-0">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-primary mb-2 text-lg">Email Us</h3>
                                        <a href="mailto:info@bvrd.in" className="text-text-secondary hover:text-accent font-medium text-lg transition-colors">
                                            info@bvrd.in
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:w-2/3">
                        <FadeIn direction="left" className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-accent" />

                            <h2 className="text-3xl font-bold text-primary mb-8 font-heading">Send a Message</h2>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Name */}
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-base font-semibold text-text-primary">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            placeholder="Your Full Name"
                                            className="w-full bg-section border border-gray-200 text-text-primary rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                                            required
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-base font-semibold text-text-primary">Phone Number</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            placeholder="Your Mobile Number"
                                            className="w-full bg-section border border-gray-200 text-text-primary rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-base font-semibold text-text-primary">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="you@example.com"
                                        className="w-full bg-section border border-gray-200 text-text-primary rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                                        required
                                    />
                                </div>

                                {/* Message */}
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-base font-semibold text-text-primary">Your Message</label>
                                    <textarea
                                        id="message"
                                        rows={5}
                                        placeholder="How can we help you?"
                                        className="w-full bg-section border border-gray-200 text-text-primary rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                                        required
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full bg-primary hover:bg-accent text-white font-bold py-4 px-8 rounded-md transition-all shadow-md group flex items-center justify-center text-lg"
                                >
                                    Send Message
                                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </form>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* 3. Google Map Section */}
            <section className="h-[400px]">
                <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d654.0978903541293!2d78.56649868111282!3d17.33682976222335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDIwJzE0LjAiTiA3OMKwMzQnMDEuMiJF!5e0!3m2!1sen!2sin!4v1773727301757!5m2!1sen!2sin" className="w-full h-full" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </section>
        </div>
    );
}
