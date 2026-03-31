import FadeIn from '@/components/ui/FadeIn';
import Image from 'next/image';
import { CheckCircle2, MapPin, Wind, Layers, Waves, Phone, Send } from 'lucide-react';
import ProjectEnquiryForm from '@/components/ProjectEnquiryForm';

export default function ProjectDetails() {
    const specs = [
        { title: 'Building', details: ['5.5 inch slab thickness', 'High-quality steel', 'Red brick walls'], icon: <Layers /> },
        { title: 'Doors & Windows', details: ['Teak Wood Main Door', 'UPVC Windows'], icon: <Wind /> },
        { title: 'Electrical', details: ['Havells switches', 'Copper wiring'], icon: <Waves /> }, // Using Waves as placeholder for plug
        { title: 'Plumbing', details: ['Jaquar / Hindware fittings'], icon: <Waves /> },
        { title: 'Flooring', details: ['Double charge vitrified tiles', 'Granite staircase'], icon: <Layers /> }
    ];

    const highlights = [
        'North East Facing Flats',
        'Stilt + 4 Floors',
        'Spacious Car Parking',
        'Lift Facility',
        'Premium Construction Materials',
        'Quality Flooring and Finishes'
    ];

    return (
        <div className="pt-24 pb-16 bg-white min-h-screen">
            {/* 1. Project Hero */}
            <section className="bg-primary pt-24 pb-20 text-center relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-30 bg-[url('/images/hero.png')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/60 z-0" />

                <div className="container mx-auto px-4 md:px-6 relative z-10 text-white pb-10">
                    <FadeIn direction="up">
                        <span className="inline-flex items-center bg-white/10 px-4 py-2 rounded-full mb-6 text-base font-medium border border-white/20 uppercase tracking-widest text-accent">
                            Featured Project
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">BVR Sai Nilyam</h1>
                        <p className="text-xl text-gray-200 flex items-center justify-center font-medium">
                            <MapPin className="mr-2" /> Green Wood Colony, Hayathnagar
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* 2. Overview & Highlights */}
            <section className="py-20 container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row gap-16">
                    <div className="lg:w-1/2">
                        <FadeIn direction="right">
                            <span className="text-accent font-semibold tracking-wider font-heading uppercase flex items-center mb-4">
                                <span className="w-8 h-0.5 bg-accent mr-3"></span> Overview
                            </span>
                            <h2 className="text-3xl font-bold text-primary mb-6">Designed for Comfortable Living</h2>
                            <div className="prose max-w-none text-text-secondary leading-relaxed text-lg mb-8">
                                <p>
                                    BVR Sai Nilyam is a residential apartment project located in Green Wood Colony, Hayathnagar. Designed to provide comfortable living spaces, the project offers spacious flats with quality construction and modern amenities.
                                </p>
                            </div>

                            <h3 className="text-2xl font-bold text-primary mb-6 mt-12 border-b border-gray-100 pb-4">Project Highlights</h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                                {highlights.map((highlight, index) => (
                                    <li key={index} className="flex items-center text-text-secondary font-medium">
                                        <CheckCircle2 className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                                        {highlight}
                                    </li>
                                ))}
                            </ul>
                        </FadeIn>
                    </div>

                    <div className="lg:w-1/2">
                        <FadeIn direction="left" className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/interior.png"
                                alt="BVR Sai Nilyam Interior"
                                fill
                                className="object-cover transition-transform duration-700 hover:scale-105"
                            />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/90 to-transparent p-8 text-white">
                                <p className="font-heading text-lg font-bold border-l-4 border-accent pl-4">Premium living spaces reflecting modern design principles.</p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* 3. Specifications Tab Section */}
            <section className="py-20 bg-section">
                <div className="container mx-auto px-4 md:px-6">
                    <FadeIn direction="up" className="text-center mb-16">
                        <span className="text-accent font-semibold tracking-wider font-heading uppercase flex items-center justify-center mb-4">
                            <span className="w-8 h-0.5 bg-accent mr-3"></span> Details <span className="w-8 h-0.5 bg-accent ml-3"></span>
                        </span>
                        <h2 className="text-4xl font-bold text-primary mb-4">Specifications</h2>
                        <p className="text-text-secondary max-w-2xl mx-auto text-lg leading-relaxed">
                            Every element inside BVR Sai Nilyam is crafted with high-quality materials from trusted brands.
                        </p>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {specs.map((spec, i) => (
                            <FadeIn key={spec.title} delay={0.1 * i} direction="up">
                                <div className="bg-white rounded-xl p-8 shadow-md border hover:border-accent transition-colors group h-full hover:shadow-xl">
                                    <div className="w-14 h-14 bg-section text-primary rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                        {spec.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-primary mb-4 pb-2 border-b border-gray-100">{spec.title}</h3>
                                    <ul className="space-y-3">
                                        {spec.details.map((detail, j) => (
                                            <li key={j} className="text-text-secondary flex items-start text-base md:text-base">
                                                <span className="w-1.5 h-1.5 rounded-full bg-accent mr-3 mt-2 flex-shrink-0" />
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Floor Plans */}
            <section className="py-20 container mx-auto px-4 md:px-6 text-center">
                <FadeIn direction="up">
                    <span className="text-accent font-semibold tracking-wider font-heading uppercase flex items-center justify-center mb-4">
                        <span className="w-8 h-0.5 bg-accent mr-3"></span> Plans <span className="w-8 h-0.5 bg-accent ml-3"></span>
                    </span>
                    <h2 className="text-4xl font-bold text-primary mb-12">Floor Plans</h2>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    {['Stilt Floor Plan', 'Typical Floor Plan'].map((plan, i) => (
                        <FadeIn key={plan} delay={0.2 * i} className="group cursor-pointer">
                            <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 relative aspect-square transition-transform hover:-translate-y-2 hover:shadow-2xl">
                                <Image
                                    src="/images/interior.png"
                                    alt={plan}
                                    fill
                                    className="object-cover p-8 opacity-80 group-hover:opacity-100 transition-opacity"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="bg-primary text-white py-2 px-6 rounded shadow uppercase font-bold text-base tracking-wider tracking-widest">
                                        Zoom Image
                                    </span>
                                </div>
                            </div>
                            <h3 className="mt-6 text-xl font-bold text-primary">{plan}</h3>
                        </FadeIn>
                    ))}
                </div>
            </section>

            {/* 5. Amenities & Location */}
            <section className="py-24 bg-primary text-white relative overflow-hidden">
                {/* Decorative pattern */}
                <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23ffffff\\' fill-opacity=\\'1\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <FadeIn direction="right">
                            <h2 className="text-3xl font-bold mb-8 flex items-center pb-4 border-b border-white/20">
                                <span className="w-8 h-0.5 bg-accent mr-4"></span> Amenities
                            </h2>
                            <ul className="space-y-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {['Lift', 'Car Parking', 'Power Backup', 'Modern Plumbing', 'Ventilated Apartments'].map((item) => (
                                    <li key={item} className="flex items-center text-lg">
                                        <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center mr-4">
                                            <CheckCircle2 className="text-accent w-5 h-5" />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </FadeIn>

                        <FadeIn direction="left">
                            <h2 className="text-3xl font-bold mb-8 flex items-center pb-4 border-b border-white/20">
                                <span className="w-8 h-0.5 bg-accent mr-4"></span> Location Advantages
                            </h2>
                            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                                Hayathnagar is a fast-growing residential area with easy connectivity to major parts of Hyderabad.
                            </p>
                            <ul className="space-y-4">
                                {['Schools', 'Hospitals', 'Markets', 'Transportation'].map((item) => (
                                    <li key={item} className="flex items-center bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors">
                                        <MapPin className="text-accent w-5 h-5 mr-4" />
                                        <span className="font-medium text-lg tracking-wide">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* 6. Form Section */}
            <section className="py-24 bg-white container mx-auto px-4 md:px-6">
                <FadeIn direction="up">
                    <div className="max-w-4xl mx-auto bg-section border-t-4 border-accent p-8 md:p-16 rounded-2xl shadow-xl">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold text-primary mb-4 font-heading">Schedule a Site Visit</h2>
                            <p className="text-text-secondary text-lg">Leave your details and our team will get back to you shortly.</p>
                        </div>

                        <ProjectEnquiryForm projectTitle="BVR Sai Nilyam" primaryPhone="9381067561" />
                    </div>
                </FadeIn>
            </section>
        </div>
    );
}
