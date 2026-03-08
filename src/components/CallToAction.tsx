import React from 'react';
import Link from 'next/link';

const CallToAction = () => {
    return (
        <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto w-full">
            <div className="relative w-full rounded-[2rem] overflow-hidden bg-[#2F3A68] text-white p-10 md:p-16 lg:p-20 flex flex-col justify-center min-h-[400px] shadow-2xl">

                {/* Concentric Circles Background */}
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-full h-full pointer-events-none">
                    <div className="absolute top-1/2 right-0 translate-x-[40%] -translate-y-1/2 w-[1000px] h-[1000px] rounded-full bg-white/5" />
                    <div className="absolute top-1/2 right-0 translate-x-[40%] -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-white/5" />
                    <div className="absolute top-1/2 right-0 translate-x-[40%] -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/10" />
                    <div className="absolute top-1/2 right-0 translate-x-[40%] -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-white/20" />
                    <div className="absolute top-1/2 right-0 translate-x-[40%] -translate-y-1/2 w-[200px] h-[200px] rounded-full bg-white/50" />
                    <div className="absolute top-1/2 right-0 translate-x-[40%] -translate-y-1/2 w-[100px] h-[100px] rounded-full bg-gradient-to-l from-white to-white/90 shadow-[0_0_60px_rgba(255,255,255,1)]" />
                </div>

                <div className="relative z-10 max-w-2xl">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight text-white font-heading" style={{ color: "white" }}>
                        Find Your Dream Home
                    </h2>

                    <p className="text-lg md:text-xl text-white/90 mb-10 max-w-lg leading-relaxed font-body">
                        Premium apartments in prime locations with quality construction and modern design.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5">
                        <Link
                            href="/projects"
                            className="group flex items-center justify-between gap-6 bg-black text-white px-6 py-4 rounded-full hover:bg-black/90 transition-all font-medium min-w-[260px]"
                        >
                            <span className="text-lg tracking-wide">View Projects</span>
                            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-gray-200 via-gray-400 to-gray-600 shadow-inner group-hover:scale-110 transition-transform"></div>
                        </Link>

                        <Link
                            href="/contact"
                            className="group flex items-center justify-between gap-6 bg-black text-white px-6 py-4 rounded-full hover:bg-black/90 transition-all font-medium min-w-[260px]"
                        >
                            <span className="text-lg tracking-wide">Contact Us</span>
                            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-gray-200 via-gray-400 to-gray-600 shadow-inner group-hover:scale-110 transition-transform"></div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
