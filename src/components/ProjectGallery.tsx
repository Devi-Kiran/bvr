'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import FadeIn from '@/components/ui/FadeIn';

interface ProjectGalleryProps {
    images: string[];
    projectTitle: string;
}

const ProjectGallery = ({ images, projectTitle }: ProjectGalleryProps) => {
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

    const openLightbox = (index: number) => {
        setSelectedImageIndex(index);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setSelectedImageIndex(null);
        document.body.style.overflow = 'auto';
    };

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedImageIndex !== null) {
            setSelectedImageIndex((selectedImageIndex + 1) % images.length);
        }
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedImageIndex !== null) {
            setSelectedImageIndex((selectedImageIndex - 1 + images.length) % images.length);
        }
    };

    return (
        <section className="py-20 bg-section">
            <div className="container mx-auto px-4 md:px-6">
                <FadeIn direction="up" className="text-center mb-16">
                    <span className="text-accent font-semibold tracking-wider font-heading uppercase flex items-center justify-center mb-4">
                        <span className="w-8 h-0.5 bg-accent mr-3"></span> Visuals <span className="w-8 h-0.5 bg-accent ml-3"></span>
                    </span>
                    <h2 className="text-4xl font-bold text-primary mb-4">Project Gallery</h2>
                    <p className="text-text-secondary max-w-2xl mx-auto text-lg leading-relaxed">
                        Glimpses of the architectural excellence and premium finishes of {projectTitle}.
                    </p>
                </FadeIn>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((img, index) => (
                        <FadeIn key={index} delay={0.1 * (index % 3)} direction="up">
                            <div 
                                className="relative h-80 rounded-xl overflow-hidden shadow-lg group cursor-pointer"
                                onClick={() => openLightbox(index)}
                            >
                                <Image
                                    src={img}
                                    alt={`${projectTitle} Gallery ${index + 1}`}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <div className="bg-white/90 p-3 rounded-full text-primary transform translate-y-4 group-hover:translate-y-0 transition-transform">
                                        <Maximize2 className="w-6 h-6" />
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {selectedImageIndex !== null && (
                <div 
                    className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10"
                    onClick={closeLightbox}
                >
                    <button 
                        className="absolute top-6 right-6 text-white/70 hover:text-white z-[110] transition-colors"
                        onClick={closeLightbox}
                    >
                        <X className="w-10 h-10" />
                    </button>

                    <button 
                        className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-[110] transition-colors bg-white/10 hover:bg-white/20 p-3 rounded-full"
                        onClick={prevImage}
                    >
                        <ChevronLeft className="w-8 h-8" />
                    </button>

                    <div className="relative w-full max-w-5xl h-full flex items-center justify-center">
                        <div className="relative w-full h-full max-h-[80vh] aspect-video">
                            <Image
                                src={images[selectedImageIndex]}
                                alt={`${projectTitle} image ${selectedImageIndex + 1}`}
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-white/80 font-medium">
                            {selectedImageIndex + 1} / {images.length}
                        </div>
                    </div>

                    <button 
                        className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-[110] transition-colors bg-white/10 hover:bg-white/20 p-3 rounded-full"
                        onClick={nextImage}
                    >
                        <ChevronRight className="w-8 h-8" />
                    </button>
                </div>
            )}
        </section>
    );
};

export default ProjectGallery;
