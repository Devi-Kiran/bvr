"use client";

import { useState } from "react";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import Lightbox from "@/components/ui/Lightbox";

export default function HomeGallery() {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    const images = [
        { src: "/images/bvr-sai-nilayam/v1 (1).webp", alt: "Gallery Preview 1" },
        { src: "/images/bvr-sai-nilayam/v1 (2).webp", alt: "Gallery Preview 2" },
        { src: "/images/bvr-sai-nilayam/v1 (3).webp", alt: "Gallery Preview 3" },
        { src: "/images/bvr-sai-nilayam/v1 (4).webp", alt: "Gallery Preview 4" },
    ];

    const openLightbox = (index: number) => {
        setPhotoIndex(index);
        setLightboxOpen(true);
    };

    return (
        <>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                {images.map((img, i) => (
                    <FadeIn
                        key={i}
                        delay={0.1 * i}
                        className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
                        onClick={() => openLightbox(i)}
                    >
                        <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="text-white font-medium border border-white px-4 py-2 rounded">
                                View
                            </span>
                        </div>
                    </FadeIn>
                ))}
            </div>

            <Lightbox
                images={images}
                isOpen={lightboxOpen}
                onClose={() => setLightboxOpen(false)}
                initialIndex={photoIndex}
            />
        </>
    );
}
