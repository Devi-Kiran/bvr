import FadeIn from '@/components/ui/FadeIn';
import Image from 'next/image';
import { CheckCircle2, MapPin, Wind, Layers, Waves, Phone, Send } from 'lucide-react';

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
                        <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{color: "white"}}>BVR Sai Nilyam</h1>
                        <p className="text-xl text-gray-200 flex items-center justify-center font-medium">
                            <MapPin className="mr-2" /> Green Wood Colony, Hayathnagar
                        </p>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
