import FadeIn from '@/components/ui/FadeIn';
import Image from 'next/image';
import { Target, Lightbulb, Users, Home } from 'lucide-react';
import Link from 'next/link';

export default function About() {
    return (
        <div className="pt-24 pb-16 bg-white">
            {/* 1. Page Header */}
            <section className="bg-primary pt-24 pb-20 text-center relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20 bg-[url('/images/hero.png')] bg-cover bg-center" />


                <div className="container mx-auto px-4 md:px-6 relative z-10 text-white">
                    <FadeIn direction="up">
                        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white" style={{ color: "white" }}>About Us</h1>
                        <div className="flex items-center justify-center gap-2 text-base font-bold mb-6">
                            <Link href="/" className="text-accent hover:text-white transition-colors flex items-center gap-1">
                                <Home className="w-5 h-5 fill-current" /> Home
                            </Link>
                            <span className="text-gray-300 font-medium">&gt;</span>
                            <span className="text-gray-300 font-medium">About Us</span>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* 2. Company Introduction */}
            <section className="py-20 text-center container mx-auto px-4 md:px-6">
                <FadeIn direction="up">
                    <span className="text-accent font-semibold tracking-wider font-heading uppercase flex items-center justify-center mb-4">
                        <span className="w-8 h-0.5 bg-accent mr-3"></span> Our Story <span className="w-8 h-0.5 bg-accent ml-3"></span>
                    </span>
                    <h2 className="text-3xl font-bold text-primary mb-6">Building the Future of Hyderabad</h2>
                    <div className="max-w-3xl mx-auto space-y-6 text-text-secondary text-lg">
                        <p>
                            BVR Property Developers Pvt. Ltd. is a real estate development company based in Hyderabad, Telangana. The company focuses on creating modern residential apartments designed to provide comfortable living for families.
                        </p>
                        <p>
                            With attention to construction quality and functional design, BVR Property Developers aims to deliver homes that combine convenience, safety, and value.
                        </p>
                    </div>
                </FadeIn>
            </section>

            {/* 3. Vision & Mission Cards */}
            <section className="py-20 bg-section">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
                        {/* Vision */}
                        <FadeIn direction="up" delay={0.1}>
                            <div className="bg-white p-10 rounded-xl shadow-xl hover:shadow-2xl transition-shadow text-center h-full group">
                                <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6 text-accent group-hover:scale-110 transition-transform">
                                    <Lightbulb size={40} />
                                </div>
                                <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
                                <p className="text-text-secondary leading-relaxed">
                                    To develop quality residential projects that provide comfortable living environments while maintaining high standards of construction and customer trust.
                                </p>
                            </div>
                        </FadeIn>

                        {/* Mission */}
                        <FadeIn direction="up" delay={0.2}>
                            <div className="bg-white p-10 rounded-xl shadow-xl hover:shadow-2xl transition-shadow text-center h-full group">
                                <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6 text-accent group-hover:scale-110 transition-transform">
                                    <Target size={40} />
                                </div>
                                <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
                                <p className="text-text-secondary leading-relaxed">
                                    To deliver well-planned residential apartments using quality materials, modern design, and reliable construction practices.
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* 4. Leadership Section */}
            <section className="py-24 text-center container mx-auto px-4 md:px-6">
                <FadeIn direction="up">
                    <span className="text-accent font-semibold tracking-wider font-heading uppercase flex items-center justify-center mb-4">
                        <span className="w-8 h-0.5 bg-accent mr-3"></span> Our Team <span className="w-8 h-0.5 bg-accent ml-3"></span>
                    </span>
                    <h2 className="text-4xl font-bold text-primary mb-12">Leadership</h2>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    {/* Director 1 */}
                    <FadeIn delay={0.2} direction="up" className="bg-section rounded-2xl p-10 text-center hover:-translate-y-2 transition-transform shadow-md border hover:border-accent">
                        <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 overflow-hidden flex items-center justify-center text-gray-400">
                            <Users size={64} className="opacity-50" />
                        </div>
                        <h3 className="text-2xl font-bold text-primary mb-2">Venkateshwarlu Beri</h3>
                        <p className="text-accent font-medium uppercase tracking-wider text-base">Director</p>
                    </FadeIn>

                    {/* Director 2 */}
                    <FadeIn delay={0.4} direction="up" className="bg-section rounded-2xl p-10 text-center hover:-translate-y-2 transition-transform shadow-md border hover:border-accent">
                        <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 overflow-hidden flex items-center justify-center text-gray-400">
                            <Users size={64} className="opacity-50" />
                        </div>
                        <h3 className="text-2xl font-bold text-primary mb-2">Mahalaxmi Beri</h3>
                        <p className="text-accent font-medium uppercase tracking-wider text-base">Director</p>
                    </FadeIn>
                </div>
            </section>

            {/* 5. Office Address & Map */}
            <section className="py-0 relative h-96 bg-gray-100 flex items-center">
                {/* Replacing actual map with a styled placeholder for now since we don't have API keys */}
                <div className="absolute inset-0 bg-primary/5 flex items-center justify-center">
                    <div className="text-center p-8 bg-white/90 backdrop-blur-sm rounded-xl shadow-2xl max-w-md mx-4">
                        <h3 className="text-2xl font-bold text-primary mb-4 font-heading">Our Office</h3>
                        <p className="text-text-secondary mb-6 leading-relaxed">
                            BVR Property Developers Pvt Ltd<br />
                            P.No 418 & 419, Prashanth Nagar<br />
                            Vanasthalipuram Main Road<br />
                            Hyderabad, Telangana – 500070
                        </p>
                        <a
                            href="https://maps.google.com"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-block bg-primary text-white py-3 px-6 rounded hover:bg-accent transition-colors font-medium w-full"
                        >
                            Get Directions
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
