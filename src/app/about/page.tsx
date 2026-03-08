import FadeIn from '@/components/ui/FadeIn';
import Image from 'next/image';
import { Target, Lightbulb, Users, Home } from 'lucide-react';
import Link from 'next/link';

export default function About() {
    return (
        <div className="pt-24 pb-16 bg-white">
            {/* 1. Page Header */}
            <section className="bg-primary pt-24 pb-20 text-center relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20 bg-[url('/images/hero.png')] bg-cover bg-center" />


                <div className="container mx-auto px-4 md:px-6 relative z-10 text-white">
                    <FadeIn direction="up">
                        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white" style={{ color: "white" }}>About Us</h1>
                        <div className="flex items-center justify-center gap-2 text-base font-bold mb-6">
                            <Link href="/" className="text-accent hover:text-white transition-colors flex items-center gap-1">
                                <Home className="w-5 h-5 fill-current" /> Home
                            </Link>
                            <span className="text-gray-300 font-medium">&gt;</span>
                            <span className="text-gray-300 font-medium">About Us</span>
                        </div>
                    </FadeIn>
                </div>
            </section>

          
        </div>
    );
}
