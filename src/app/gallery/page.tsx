'use client';

import { useState } from 'react';
import FadeIn from '@/components/ui/FadeIn';
import Image from 'next/image';
import Lightbox from '@/components/ui/Lightbox';
import Link from 'next/link';
import { Home, ArrowRight } from 'lucide-react';

import projects from '@/data/projects.json';

export default function Gallery() {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImages, setCurrentImages] = useState<{ src: string, alt: string }[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openLightbox = (projectTitle: string, gallery: string[], clickedIndex: number) => {
        const images = gallery.map((src, i) => ({
            src,
            alt: `${projectTitle} Image ${i + 1}`,
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
                {projects.filter(p => p.gallery && p.gallery.length > 0).map((project, idx) => (
                    <div key={project.id} className="mb-24 last:mb-0">
                        <FadeIn direction="up">
                            <span className="text-accent font-semibold tracking-wider font-heading uppercase flex items-center mb-6">
                                <span className="w-8 h-0.5 bg-accent mr-3"></span> {project.title}
                            </span>
                        </FadeIn>

                        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10`}>
                            {project.gallery.map((imgSrc, i) => (
                                <FadeIn
                                    key={i}
                                    delay={0.1 * i}
                                    className={`group relative overflow-hidden rounded-xl shadow-lg border border-gray-100 bg-gray-50 aspect-[4/3] cursor-pointer`}
                                    onClick={() => openLightbox(project.title, project.gallery, i)}
                                >
                                    <Image
                                        src={imgSrc}
                                        alt={`${project.title} Image ${i + 1}`}
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

                        <FadeIn direction="up" delay={0.2}>
                            <div className="flex justify-center">
                                <Link
                                    href={`/projects/${project.slug}`}
                                    className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-accent transition-all duration-300 group shadow-md"
                                >
                                    View Project Details
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </FadeIn>
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
