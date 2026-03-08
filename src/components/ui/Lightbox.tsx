"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxImage {
    src: string;
    alt: string;
}

interface LightboxProps {
    images: LightboxImage[];
    initialIndex?: number;
    isOpen: boolean;
    onClose: () => void;
}

export default function Lightbox({
    images,
    initialIndex = 0,
    isOpen,
    onClose,
}: LightboxProps) {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    useEffect(() => {
        if (isOpen) {
            setCurrentIndex(initialIndex);
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen, initialIndex]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isOpen) return;
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowLeft") handlePrevious(e as any);
            if (e.key === "ArrowRight") handleNext(e as any);
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen]);

    if (!isOpen || images.length === 0) return null;

    const handlePrevious = (e: React.MouseEvent | KeyboardEvent) => {
        if (e && e.stopPropagation) e.stopPropagation();
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = (e: React.MouseEvent | KeyboardEvent) => {
        if (e && e.stopPropagation) e.stopPropagation();
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm"
            onClick={onClose}
        >
            <button
                className="absolute top-6 right-6 text-white hover:text-accent transition-colors z-[110] p-2"
                onClick={onClose}
                aria-label="Close Lightbox"
            >
                <X size={32} />
            </button>

            <div
                className="relative w-full h-full max-w-7xl max-h-[90vh] mx-4 flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="relative w-full h-full">
                    <Image
                        src={images[currentIndex].src}
                        alt={images[currentIndex].alt}
                        fill
                        className="object-contain"
                        priority
                    />
                </div>

                {images.length > 1 && (
                    <>
                        <button
                            className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 text-white hover:text-accent transition-colors bg-black/50 hover:bg-black/70 rounded-full p-2 z-[110]"
                            onClick={handlePrevious}
                            aria-label="Previous image"
                        >
                            <ChevronLeft size={36} />
                        </button>

                        <button
                            className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 text-white hover:text-accent transition-colors bg-black/50 hover:bg-black/70 rounded-full p-2 z-[110]"
                            onClick={handleNext}
                            aria-label="Next image"
                        >
                            <ChevronRight size={36} />
                        </button>
                    </>
                )}
            </div>

            {images.length > 1 && (
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-lg font-medium tracking-wider bg-black/50 px-4 py-1 rounded-full z-[110]">
                    {currentIndex + 1} / {images.length}
                </div>
            )}
        </div>
    );
}
