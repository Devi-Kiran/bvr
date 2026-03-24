'use client';

import { useState, useEffect } from 'react';
import { CheckCircle2, ChevronDown, ArrowUp } from 'lucide-react';

interface SpecDetail {
    label: string;
    value: string;
}

interface SpecItem {
    title: string;
    icon: React.ReactNode;
    details: SpecDetail[];
}

interface ProjectInteractiveProps {
    specsData: SpecItem[];
}

function AccordionItem({
    title,
    icon,
    details,
    isOpen,
    onToggle,
}: {
    title: string;
    icon: React.ReactNode;
    details: SpecDetail[];
    isOpen: boolean;
    onToggle: () => void;
}) {
    return (
        <div className="border border-gray-200 rounded-xl overflow-hidden mb-3 transition-shadow hover:shadow-md">
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between px-6 py-4 bg-white text-left group"
            >
                <span className="flex items-center gap-3 font-bold text-primary text-base">
                    <span
                        className={`p-2 rounded-lg transition-colors ${isOpen
                            ? 'bg-primary text-white'
                            : 'bg-section text-primary group-hover:bg-primary group-hover:text-white'
                            }`}
                    >
                        {icon}
                    </span>
                    {title}
                </span>
                <span className={`text-accent transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-5 h-5" />
                </span>
            </button>
            <div
                className={`transition-all duration-300 ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}
            >
                <div className="px-6 pb-5 bg-section/40 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                    {details.map((d, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                            <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                            <span>
                                <span className="font-semibold text-text-primary">{d.label}: </span>
                                {d.value}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function ProjectInteractive({ specsData }: ProjectInteractiveProps) {
    const [openSpec, setOpenSpec] = useState<number | null>(0);
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const onScroll = () => setShowScrollTop(window.scrollY > 600);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <>
            {/* Accordion */}
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-8">
                <div>
                    {specsData.slice(0, 4).map((spec, i) => (
                        <AccordionItem
                            key={spec.title}
                            title={spec.title}
                            icon={spec.icon}
                            details={spec.details}
                            isOpen={openSpec === i}
                            onToggle={() => setOpenSpec(openSpec === i ? null : i)}
                        />
                    ))}
                </div>
                <div>
                    {specsData.slice(4).map((spec, i) => (
                        <AccordionItem
                            key={spec.title}
                            title={spec.title}
                            icon={spec.icon}
                            details={spec.details}
                            isOpen={openSpec === i + 4}
                            onToggle={() => setOpenSpec(openSpec === i + 4 ? null : i + 4)}
                        />
                    ))}
                </div>
            </div>

            {/* Scroll-to-top button */}
            {showScrollTop && (
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="fixed bottom-8 right-8 z-50 bg-accent text-white w-12 h-12 rounded-full shadow-xl flex items-center justify-center hover:bg-primary transition-colors animate-bounce"
                    aria-label="Scroll to top"
                >
                    <ArrowUp className="w-5 h-5" />
                </button>
            )}
        </>
    );
}
