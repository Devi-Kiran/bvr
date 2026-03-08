"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function HeroCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            image: "/images/hero.png",
            badge: "Premium Real Estate in Hyderabad",
            title: "Building Quality Homes for",
            titleHighlight: "Modern Living",
            description:
                "BVR Property Developers Pvt. Ltd. delivers thoughtfully designed residential apartments with quality construction and modern amenities in Hyderabad.",
            primaryBtnText: "View Projects",
            primaryBtnLink: "/projects",
            secondaryBtnText: "Contact Us",
            secondaryBtnLink: "/contact",
        },
        {
            id: 2,
            image: "/images/hero.png",
            badge: "Luxurious Interiors",
            title: "Experience the Joy of",
            titleHighlight: "Elegant Spaces",
            description:
                "Step into uniquely crafted homes that blend contemporary design aesthetics with ultimate comfort to create your perfect sanctuary.",
            primaryBtnText: "Explore Gallery",
            primaryBtnLink: "/gallery",
            secondaryBtnText: "Book Visit",
            secondaryBtnLink: "/contact",
        },
        {
            id: 3,
            image: "/images/hero.png",
            badge: "Prime Locations",
            title: "Strategic Locations for",
            titleHighlight: "Better Connectivity",
            description:
                "Discover our residential projects situated in fast-growing neighborhoods, offering easy access to work, education, and entertainment.",
            primaryBtnText: "Our Locations",
            primaryBtnLink: "/projects",
            secondaryBtnText: "Get in Touch",
            secondaryBtnLink: "/contact",
        },
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-screen min-h-[600px] flex items-center justify-center pt-20 overflow-hidden group">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
                        }`}
                >
                    <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className={`object-cover transition-transform duration-[10s] ease-out ${index === currentSlide ? "scale-105" : "scale-100"
                            }`}
                        priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40" />
                </div>
            ))}

            <div className="container mx-auto px-4 md:px-6 relative z-10 text-white">
                <div className="max-w-3xl min-h-[300px] flex flex-col justify-center">
                    {/* We use key={currentSlide} to remount the key causing FadeIn to animate again */}
                    <div key={currentSlide}>
                        <FadeIn delay={0.2} direction="up">
                            <span className="inline-block py-1 px-3 rounded-full bg-accent text-white font-medium text-base mb-6 uppercase tracking-wider shadow-md">
                                {slides[currentSlide].badge}
                            </span>
                        </FadeIn>
                        <FadeIn delay={0.4} direction="up">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight text-white drop-shadow-lg">
                                <span className="text-white">{slides[currentSlide].title}</span>

                                <span className="text-accent italic font-bold">
                                    {slides[currentSlide].titleHighlight}
                                </span>
                            </h1>
                        </FadeIn>
                        <FadeIn delay={0.6} direction="up">
                            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed drop-shadow-md">
                                {slides[currentSlide].description}
                            </p>
                        </FadeIn>
                        <FadeIn delay={0.8} direction="up" className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href={slides[currentSlide].primaryBtnLink}
                                className="bg-white text-primary hover:bg-accent hover:text-white px-8 py-4 rounded-md font-medium text-center transition-all shadow-lg flex items-center justify-center group/btn"
                            >
                                {slides[currentSlide].primaryBtnText}
                                <ArrowRight className="ml-2 w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href={slides[currentSlide].secondaryBtnLink}
                                className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-md font-medium text-center transition-all shadow-lg"
                            >
                                {slides[currentSlide].secondaryBtnText}
                            </Link>
                        </FadeIn>
                    </div>
                </div>
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={prevSlide}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-black/20 hover:bg-accent text-white p-3 md:p-4 rounded-full backdrop-blur-sm transition-all border border-white/20 hover:scale-110 opacity-0 group-hover:opacity-100 focus:opacity-100 shadow-xl"
                aria-label="Previous slide"
            >
                <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-black/20 hover:bg-accent text-white p-3 md:p-4 rounded-full backdrop-blur-sm transition-all border border-white/20 hover:scale-110 opacity-0 group-hover:opacity-100 focus:opacity-100 shadow-xl"
                aria-label="Next slide"
            >
                <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-2 rounded-full transition-all duration-300 shadow-sm ${index === currentSlide ? "bg-accent w-8" : "bg-white/50 w-2 hover:bg-white/80 hover:w-4"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
