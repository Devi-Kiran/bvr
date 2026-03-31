'use client';

import { useState } from 'react';
import { Send, Phone } from 'lucide-react';

interface ProjectEnquiryFormProps {
    projectTitle: string;
    primaryPhone: string;
}

export default function ProjectEnquiryForm({ projectTitle, primaryPhone }: ProjectEnquiryFormProps) {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: `I'm interested in ${projectTitle}. Please call me back.`
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        // WhatsApp number to redirect to
        const whatsappNumber = '919381067561';
        
        // Construct the message
        const message = `*New Site Visit Enquiry*\n\n` +
            `*Project:* ${projectTitle}\n` +
            `*Name:* ${formData.name}\n` +
            `*Phone:* ${formData.phone}\n` +
            `*Email:* ${formData.email || 'Not provided'}\n` +
            `*Message:* ${formData.message}`;
            
        // Encode message for URL
        const encodedMessage = encodeURIComponent(message);
        
        // Form the WhatsApp link
        const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        
        // Redirect the user
        window.open(whatsappLink, '_blank');
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                    <label className="text-sm font-semibold text-primary block mb-1.5" htmlFor="name">Full Name *</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your Full Name"
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                        required
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="text-sm font-semibold text-primary block mb-1.5" htmlFor="phone">Phone Number *</label>
                    <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Your Mobile Number"
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div>
                <label className="text-sm font-semibold text-primary block mb-1.5" htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label className="text-sm font-semibold text-primary block mb-1.5" htmlFor="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder={`I'm interested in ${projectTitle}. Please call me back.`}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent text-sm resize-none"
                    value={formData.message}
                    onChange={handleChange}
                />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                    type="submit"
                    className="flex-1 bg-primary hover:bg-accent text-white font-bold py-4 px-8 rounded-xl transition-all hover:shadow-lg hover:shadow-primary/20 flex items-center justify-center gap-2 text-base"
                >
                    <Send className="w-5 h-5" /> Schedule Site Visit
                </button>
                <a
                    href={`tel:+91${primaryPhone}`}
                    className="flex-1 bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-2 text-base"
                >
                    <Phone className="w-5 h-5" /> Call Us Now
                </a>
            </div>
        </form>
    );
}
