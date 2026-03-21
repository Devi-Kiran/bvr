import FadeIn from '@/components/ui/FadeIn';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, ArrowRight, Home } from 'lucide-react';


export default function Projects() {
    const renderProjectCard = (
        title: string,
        image: string,
        location: string,
        status: string,
        link: string,
        isUpcoming: boolean,
        features: string[] = []
    ) => (
        <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group flex flex-col h-full border border-gray-100 relative">
            <div className="relative h-72 overflow-hidden bg-gray-100 flex items-center justify-center">
                {!isUpcoming ? (
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                ) : (
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover opacity-50 grayscale transition-transform duration-700 group-hover:scale-105"
                    />
                )}
                <div className={`absolute top-4 left-4 text-white text-xs font-bold px-3 py-1 uppercase rounded-sm shadow-md z-10 tracking-widest ${status === 'Ongoing' ? 'bg-primary' : status === 'Completed' ? 'bg-green-600' : 'bg-accent'
                    }`}>
                    {status}
                </div>
            </div>

            <div className="p-8 flex flex-col flex-grow">
                <span className="text-accent font-medium mb-3 flex items-center text-base">
                    <MapPin className="w-4 h-4 mr-2" />
                    {location}
                </span>
                <h3 className="text-2xl font-bold text-primary mb-6 font-heading">{title}</h3>

                {!isUpcoming && (
                    <ul className="space-y-3 mb-8 text-text-secondary text-base flex-grow">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-center">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent mr-3 flex-shrink-0"></span>
                                {feature}
                            </li>
                        ))}
                    </ul>
                )}

                {isUpcoming && (
                    <p className="text-text-secondary mb-8 flex-grow leading-relaxed">
                        Stay tuned for our upcoming project offering modern living spaces, premium amenities, and quality construction tailored for your lifestyle.
                    </p>
                )}

                <Link
                    href={link}
                    className="mt-auto bg-section text-primary group-hover:bg-primary group-hover:text-white font-medium py-3 px-6 rounded transition-colors text-center shadow-sm w-full flex items-center justify-center cursor-pointer"
                >
                    {isUpcoming ? 'Notify Me' : 'View Details'}
                    <ArrowRight className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
            </div>
        </div>
    );

    return (
        <div className="pt-24 pb-16 bg-white min-h-screen">
            {/* 1. Page Header */}
            <section className="bg-primary pt-24 pb-20 text-center relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20 bg-[url('/images/hero.png')] bg-cover bg-center" />


                <div className="container mx-auto px-4 md:px-6 relative z-10 text-white">
                    <FadeIn direction="up">
                        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white" style={{ color: "white" }}>Our Projects</h1>
                        <div className="flex items-center justify-center gap-2 text-base font-bold mb-6">
                            <Link href="/" className="text-accent hover:text-white transition-colors flex items-center gap-1">
                                <Home className="w-5 h-5 fill-current" /> Home
                            </Link>
                            <span className="text-gray-300 font-medium">&gt;</span>
                            <span className="text-gray-300 font-medium">Our Projects</span>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* 2. Projects Sections */}
            <div className="container mx-auto px-4 md:px-6 py-20 space-y-32">
                {/* Ongoing Projects Section */}
                <section id="ongoing" className="scroll-mt-32">
                    <FadeIn direction="up">
                        <span className="text-accent font-semibold tracking-wider font-heading uppercase flex items-center mb-6">
                            <span className="w-8 h-0.5 bg-accent mr-3"></span> Active Construction
                        </span>
                        <h2 className="text-4xl font-bold text-primary mb-4">Ongoing Projects</h2>
                        <p className="text-text-secondary max-w-2xl mb-12 text-lg">
                            Projects currently under construction and open for booking in prime locations. Watch your future home take shape with our trusted construction standards.
                        </p>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        <FadeIn>
                            {renderProjectCard(
                                'BVNR Laxmi Prabha Nilayam',
                                '/images/bvr-lakshmi-prabha-nilayam/v1 (1).webp',
                                'Decence Colony, Hayathnagar',
                                'Ongoing',
                                '/projects/bvnr-laxmi-prabha-nilayam',
                                false,
                                [
                                    'East Facing Flats',
                                    'Stilt + 5 Floors',
                                    '383 Sq Yards',
                                    'Car Parking with Amenities'
                                ]
                            )}
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            {renderProjectCard(
                                'BVNR Tirumala Hills',
                                '/images/bvr-thirumala-hills/v1 (3).webp',
                                'Midhani Colony, Hayathnagar',
                                'Ongoing',
                                '/projects/bvnr-tirumala-hills',
                                false,
                                [
                                    'North-East Corner Flats',
                                    'Stilt + 4 Floors',
                                    '333 Sq Yards',
                                    'Car Parking with Amenities'
                                ]
                            )}
                        </FadeIn>
                        <FadeIn delay={0.4}>
                            {renderProjectCard(
                                'BVR Sarvagna Nilayam',
                                '/images/bvr-sarvagna-nilayam/v1 (4).webp',
                                'Surya Vamshi Colony, Peddamberpet',
                                'Ongoing',
                                '/projects/bvr-sarvagna-nilayam',
                                false,
                                [
                                    'East Facing Flats (2 per floor)',
                                    'Stilt + 5 Floors',
                                    'Spacious Apartments',
                                    'Car Parking with Amenities'
                                ]
                            )}
                        </FadeIn>

                    </div>
                </section>

                {/* Completed Projects Section */}
                <section id="completed" className="scroll-mt-32">
                    <FadeIn direction="up">
                        <span className="text-accent font-semibold tracking-wider font-heading uppercase flex items-center mb-6">
                            <span className="w-8 h-0.5 bg-accent mr-3"></span> Delivered
                        </span>
                        <h2 className="text-4xl font-bold text-primary mb-4">Completed Projects</h2>
                        <p className="text-text-secondary max-w-2xl mb-12 text-lg">
                            Our completed projects reflect our commitment to delivering quality homes and building long-term trust with our customers.
                        </p>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <FadeIn>
                            {renderProjectCard(
                                'BVR Sai Nilayam',
                                '/images/bvr-sai-nilayam/v1 (11).webp',
                                'Green Wood Colony, Hayathnagar',
                                'Completed',
                                '/projects/bvr-sai-nilayam',
                                false,
                                [
                                    'North-East Facing Flats',
                                    'Stilt + 4 Floors',
                                    '325 Sq Yards',
                                    'Car Parking & Lift Facility'
                                ]
                            )}
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            {renderProjectCard(
                                'BVR Manjunath Heights',
                                '/images/bvr-manjunath-heights/v1 (2).webp',
                                'Gajji Swami Colony, Pedda Amberpet',
                                'Completed',
                                '/projects/bvr-manjunath-heights',
                                false,
                                [
                                    'East Facing Flats',
                                    'Stilt + 5 Floors',
                                    '413 Sq Yards',
                                    'Car Parking & Amenities'
                                ]
                            )}
                        </FadeIn>

                        <FadeIn delay={0.4}>
                            {renderProjectCard(
                                'BVR Sri Niwas',
                                '/images/bvr-sri-niwas/v1 (2).webp',
                                'Green Wood Colony, Hayathnagar',
                                'Completed',
                                '/projects/bvr-sri-niwas',
                                false,
                                [
                                    'North Facing Plots',
                                    'Stilt + 4 Floors',
                                    '2150 Sft Area',
                                    'Car Parking Available'
                                ]
                            )}
                        </FadeIn>
                    </div>
                </section>

                {/* Upcoming Projects Section */}
                <section id="upcoming" className="scroll-mt-32 bg-section -mx-4 md:-mx-6 px-4 md:px-6 py-20 rounded-[2.5rem] md:rounded-[4rem] relative overflow-hidden">
                    {/* Subtle background element */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mx-20 -my-20 pointer-events-none"></div>

                    <FadeIn direction="up" className="relative z-10">
                        <span className="text-accent font-semibold tracking-wider font-heading uppercase flex items-center mb-6 text-center justify-center">
                            <span className="w-8 h-0.5 bg-accent mr-3"></span> Future Visions <span className="w-8 h-0.5 bg-accent ml-3"></span>
                        </span>
                        <h2 className="text-4xl font-bold text-primary mb-4 text-center">Upcoming Projects</h2>
                        <p className="text-text-secondary max-w-2xl mx-auto mb-12 text-lg text-center leading-relaxed">
                            BVR Property Developers is planning new residential developments in promising locations across Hyderabad. Stay tuned for modern living spaces offering unmatched quality construction.
                        </p>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto relative z-10">
                        {/* <FadeIn delay={0.1}>
                            {renderProjectCard('Future Luxury Apartments', '/images/hero.png', 'Kompally, Hyderabad', 'Upcoming', '/contact', true)}
                        </FadeIn> */}
                    </div>
                </section>
            </div>
        </div>
    );
}
