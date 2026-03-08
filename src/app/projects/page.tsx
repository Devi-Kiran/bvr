import FadeIn from '@/components/ui/FadeIn';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, ArrowRight, Home } from 'lucide-react';

export default function Projects() {
    const renderProjectCard = (title: string, location: string, status: string, link: string, isUpcoming: boolean) => (
        <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group flex flex-col h-full border border-gray-100 relative">
            <div className="relative h-72 overflow-hidden bg-gray-100 flex items-center justify-center">
                {!isUpcoming ? (
                    <Image
                        src="/images/hero.png"
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                ) : (
                    <Image
                        src="/images/hero.png"
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
                        <li className="flex items-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent mr-3 flex-shrink-0"></span>
                            North-East Facing Flats
                        </li>
                        <li className="flex items-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent mr-3 flex-shrink-0"></span>
                            Stilt + 4 Floors
                        </li>
                        <li className="flex items-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent mr-3 flex-shrink-0"></span>
                            Spacious Apartments
                        </li>
                        <li className="flex items-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent mr-3 flex-shrink-0"></span>
                            Car Parking & Lift Facility
                        </li>
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
        </div>
    );
}
