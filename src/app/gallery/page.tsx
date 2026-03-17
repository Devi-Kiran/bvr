'use client';

import { useState } from 'react';
import FadeIn from '@/components/ui/FadeIn';
import Image from 'next/image';
import Lightbox from '@/components/ui/Lightbox';
import Link from 'next/link';
import { Home } from 'lucide-react';

export default function Gallery() {
    const visuals = [
        { title: 'BVR Sai Nilayam', folder: 'bvr-sai-nilayam', type: 'image', count: 11 },
        { title: 'BVR Srinivas', folder: 'bvr-srinivas', type: 'plan', count: 4 },
        { title: 'BVR Manjunath', folder: 'bvr-manjunath', type: 'update', count: 2 }
    ];

    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImages, setCurrentImages] = useState<{ src: string, alt: string }[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openLightbox = (sectionTitle: string, sectionFolder: string, count: number, clickedIndex: number) => {
        const images = Array.from({ length: count }).map((_, i) => ({
            src: `/images/${sectionFolder}/v1 (${i + 1}).webp`,
            alt: `${sectionTitle} Image ${i + 1}`,
        }));
        setCurrentImages(images);
        setCurrentIndex(clickedIndex);
        setLightboxOpen(true);
    };

    return (
        <div className="pt-24 pb-16 bg-white min-h-screen">
            {/* 1. Page Header */}
            <section className="bg-primary pt-24 pb-20 text-center relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20 bg-[url('/images/hero.png')] bg-cover bg-center" />


                <div className="container mx-auto px-4 md:px-6 relative z-10 text-white">
                    <FadeIn direction="up">
                        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white" style={{ color: "white" }}>Project Gallery</h1>
                        <div className="flex items-center justify-center gap-2 text-base font-bold mb-6">
                            <Link href="/" className="text-accent hover:text-white transition-colors flex items-center gap-1">
                                <Home className="w-5 h-5 fill-current" /> Home
                            </Link>
                            <span className="text-gray-300 font-medium">&gt;</span>
                            <span className="text-gray-300 font-medium">Gallery</span>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* 2. Gallery Sections */}
            <section className="py-20 container mx-auto px-4 md:px-6">
                {visuals.map((section, idx) => (
                    <div key={section.title} className="mb-24 last:mb-0">
                        <FadeIn direction="up">
                            <span className="text-accent font-semibold tracking-wider font-heading uppercase flex items-center mb-6">
                                <span className="w-8 h-0.5 bg-accent mr-3"></span> {section.title}
                            </span>
                        </FadeIn>

                        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`}>
                            {Array.from({ length: section.count }).map((_, i) => (
                                <FadeIn
                                    key={i}
                                    delay={0.1 * i}
                                    className={`group relative overflow-hidden rounded-xl shadow-lg border border-gray-100 bg-gray-50 aspect-[4/3] cursor-pointer`}
                                    onClick={() => openLightbox(section.title, section.folder, section.count, i)}
                                >
                                    <Image
                                        src={`/images/${section.folder}/v1 (${i + 1}).webp`}
                                        alt={`${section.title} Image ${i + 1}`}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                                        <span className="text-white font-medium border-2 border-white px-6 py-2 rounded uppercase tracking-wider text-base hover:bg-white hover:text-primary transition-colors">
                                            View full size
                                        </span>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                ))}
            </section>

            <Lightbox
                images={currentImages}
                isOpen={lightboxOpen}
                initialIndex={currentIndex}
                onClose={() => setLightboxOpen(false)}
            />
        </div>
    );
}
