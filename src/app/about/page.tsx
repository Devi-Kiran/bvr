import FadeIn from '@/components/ui/FadeIn';
import Image from 'next/image';
import { Target, Lightbulb, Users, Home } from 'lucide-react';
import Link from 'next/link';
import { ShieldCheck, Sofa, MapPin, BadgeIndianRupee, HeartHandshake, ArrowRight, PhoneCall, Mail } from 'lucide-react';

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

            {/* 2. About Company */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 w-full relative">
                            <FadeIn direction="right">
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                                    <Image
                                        src="/images/bvr-sai-nilayam/v1 (11).webp"
                                        alt="BVR Property Developers Interior"
                                        width={800}
                                        height={600}
                                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
                                </div>
                                {/* Decorative Box */}
                                <div className="absolute -bottom-8 -right-8 bg-accent text-white p-8 rounded-lg shadow-xl hidden md:block w-48 text-center z-10">
                                    <span className="block text-4xl font-bold font-heading mb-2">10+</span>
                                    <span className="text-base uppercase tracking-wider">Years of Trust</span>
                                </div>
                            </FadeIn>
                        </div>

                        <div className="lg:w-1/2 w-full">
                            <FadeIn direction="left">
                                <div className="mb-4 text-accent font-semibold tracking-wider font-heading uppercase text-base flex items-center">
                                    <span className="w-12 h-0.5 bg-accent mr-4"></span>
                                    About Us
                                </div>
                                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary leading-tight">
                                    About BVR Property Developers
                                </h2>
                                <div className="space-y-4 text-text-secondary text-lg mb-8 leading-relaxed">
                                    <p>
                                        BVR Property Developers Pvt. Ltd. is a distinguished real estate development firm based in Hyderabad, specializing in the creation of premium residential projects. Since our inception in 2022, we have been steadfast in our commitment to delivering state-of-the-art modern homes, underpinned by uncompromising construction standards, innovative architectural design, and meticulous urban planning.
                                    </p>
                                    <p>
                                        Our core philosophy revolves around prioritizing customer satisfaction, maintaining absolute transparency, and building enduring trust. We go beyond merely constructing buildings; we curate holistic living experiences that harmonize comfort, aesthetics, and sustainability. Every BVR project is strategically located in rapidly appreciating residential corridors, ensuring excellent connectivity and long-term value creation.
                                    </p>
                                    <p>
                                        Driven by a team of visionary engineers, architects, and industry experts, BVR Property Developers continues to transform the city's skyline. We carefully source the highest quality materials and employ rigorous quality control measures at every stage of construction, ensuring that your dream home stands as a lasting legacy for generations to come.
                                    </p>
                                </div>

                            </FadeIn>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Mission & Vision */}
            <section className="py-24 bg-section relative">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="mb-4 text-accent font-semibold tracking-wider font-heading uppercase text-base flex items-center">
                        <div className="flex items-center justify-center w-full">
                            <span className="w-12 h-0.5 bg-accent mr-4"></span>
                            Mission & Vision
                            <span className="w-12 h-0.5 bg-accent ml-4"></span>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row items-stretch gap-12">
                        <div className="lg:w-1/2 w-full">
                            <FadeIn direction="left" className="h-full bg-white p-12 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                                <div className="p-4 bg-primary/5 rounded-full mb-6">
                                    <img src={'https://cdn-icons-png.flaticon.com/128/3721/3721184.png'} alt="Mission" className="w-16 h-16" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary leading-tight">
                                    Our Mission
                                </h2>
                                <div className="text-text-secondary text-lg leading-relaxed">
                                    <p>
                                        To deliver high-quality, thoughtfully designed residential apartments in Hyderabad that combine modern aesthetics with structural integrity. We are committed to prioritizing customer satisfaction and building enduring trust through transparency and excellence in every project.
                                    </p>
                                </div>
                            </FadeIn>
                        </div>

                        <div className="lg:w-1/2 w-full">
                            <FadeIn direction="right" className="h-full bg-white p-12 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                                <div className="p-4 bg-primary/5 rounded-full mb-6">
                                    <img src={'https://cdn-icons-png.flaticon.com/128/3074/3074346.png'} alt="Vision" className="w-16 h-16" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary leading-tight">
                                    Our Vision
                                </h2>
                                <div className="text-text-secondary text-lg leading-relaxed">
                                    <p>
                                        To be the most trusted name in real estate development by creating premium living environments that offer lasting value, safety, and a superior lifestyle. We envision building a better future for Hyderabad, one home at a time.
                                    </p>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Why Choose Us */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <FadeIn className="text-center mb-16">
                        <span className="text-accent font-semibold tracking-wider font-heading uppercase text-base justify-center flex items-center mb-4">
                            <span className="w-8 h-0.5 bg-accent mr-3"></span>
                            Core Values
                            <span className="w-8 h-0.5 bg-accent ml-3"></span>
                        </span>
                        <h2 className="text-4xl text-primary md:text-5xl font-bold">Why Choose BVR Property Developers</h2>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <FadeIn delay={0.1} className="bg-section p-8 rounded-xl hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 border border-transparent hover:border-accent/20">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                                <ShieldCheck size={30} />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3">Quality Construction Materials</h3>
                            <p className="text-text-secondary line-clamp-3">Using the best materials in the market to ensure lifelong durability and structural safety for your dream home.</p>
                        </FadeIn>

                        <FadeIn delay={0.2} className="bg-section p-8 rounded-xl hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 border border-transparent hover:border-accent/20">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                                <Sofa size={30} />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3">Modern Apartment Design</h3>
                            <p className="text-text-secondary line-clamp-3">Contemporary architectural designs that maximize space utilization, natural light, and cross-ventilation.</p>
                        </FadeIn>

                        <FadeIn delay={0.3} className="bg-section p-8 rounded-xl hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 border border-transparent hover:border-accent/20">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                                <MapPin size={30} />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3">Prime Residential Locations</h3>
                            <p className="text-text-secondary line-clamp-3">Strategically selected locations that offer excellent connectivity, peaceful environment, and high appreciation.</p>
                        </FadeIn>

                        <FadeIn delay={0.4} className="bg-section p-8 rounded-xl hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 border border-transparent hover:border-accent/20">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                                <BadgeIndianRupee size={30} />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3">Transparent Pricing</h3>
                            <p className="text-text-secondary line-clamp-3">Clear, upfront pricing with no hidden charges, ensuring complete transparency in all our real estate dealings.</p>
                        </FadeIn>

                        <FadeIn delay={0.5} className="bg-section p-8 rounded-xl hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 border border-transparent hover:border-accent/20">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                                <HeartHandshake size={30} />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3">Customer-Focused Approach</h3>
                            <p className="text-text-secondary line-clamp-3">Dedicated support throughout your home buying journey, putting your comfort and satisfaction first.</p>
                        </FadeIn>

                        <FadeIn delay={0.6} className="bg-primary p-8 rounded-xl shadow-xl flex flex-col justify-center items-center text-center text-white">
                            <h3 className="text-2xl font-bold mb-4 font-heading" style={{ color: "white" }}>Ready to find your dream home?</h3>
                            <p className="mb-6 opacity-80">Explore our premium properties tailored for your lifestyle.</p>
                            <Link href="/projects" className="bg-white text-primary px-6 py-3 rounded uppercase font-bold text-base hover:bg-accent hover:text-white transition-colors">
                                View All Projects
                            </Link>
                        </FadeIn>
                    </div>
                </div>
            </section>


            {/* 5. Leadership Section */}
            <section className="py-24 bg-section">
                <div className="container mx-auto px-4 md:px-6">


                    <FadeIn direction="up" className="text-center">
                        <span className="text-accent font-semibold tracking-wider font-heading uppercase flex items-center justify-center mb-4">
                            <span className="w-8 h-0.5 bg-accent mr-3"></span> Our Team <span className="w-8 h-0.5 bg-accent ml-3"></span>
                        </span>
                        <h2 className="text-4xl font-bold text-primary mb-12">Meet Our Leadership</h2>
                    </FadeIn>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Member 1 */}
                        <FadeIn delay={0.1} direction="up" className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 group transition-all duration-300 hover:shadow-2xl">
                            <div className="relative aspect-[4/5] overflow-hidden">
                                <Image
                                    src="/images/team5.png"
                                    alt=""
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">Name</h3>
                                <p className="text-text-secondary text-sm font-medium mt-1">Role</p>
                            </div>
                        </FadeIn>

                        {/* Member 2 */}
                        <FadeIn delay={0.2} direction="up" className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 group transition-all duration-300 hover:shadow-2xl">
                            <div className="relative aspect-[4/5] overflow-hidden">
                                <Image
                                    src="/images/team5.png"
                                    alt=""
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">Name</h3>
                                <p className="text-text-secondary text-sm font-medium mt-1">Role</p>
                            </div>
                        </FadeIn>

                        {/* Member 3 */}
                        <FadeIn delay={0.3} direction="up" className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 group transition-all duration-300 hover:shadow-2xl">
                            <div className="relative aspect-[4/5] overflow-hidden">
                                <Image
                                    src="/images/team5.png"
                                    alt=""
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">Name</h3>
                                <p className="text-text-secondary text-sm font-medium mt-1">Role</p>
                            </div>
                        </FadeIn>

                        {/* Member 4 */}
                        <FadeIn delay={0.4} direction="up" className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 group transition-all duration-300 hover:shadow-2xl">
                            <div className="relative aspect-[4/5] overflow-hidden">
                                <Image
                                    src="/images/team5.png"
                                    alt=""
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">Name</h3>
                                <p className="text-text-secondary text-sm font-medium mt-1">Role</p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>
        </div>
    );
}
