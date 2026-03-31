'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
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
        const message = `*New Contact Enquiry*\n\n` +
            `*Name:* ${formData.name}\n` +
            `*Phone:* ${formData.phone}\n` +
            `*Email:* ${formData.email}\n` +
            `*Message:* ${formData.message}`;
            
        // Encode message for URL
        const encodedMessage = encodeURIComponent(message);
        
        // Form the WhatsApp link
        const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        
        // Redirect the user
        window.open(whatsappLink, '_blank');
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                    <label htmlFor="name" className="text-base font-semibold text-text-primary">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Your Full Name"
                        className="w-full bg-section border border-gray-200 text-text-primary rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                        required
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                    <label htmlFor="phone" className="text-base font-semibold text-text-primary">Phone Number</label>
                    <input
                        type="tel"
                        name="phone"
                        id="phone"
                        placeholder="Your Mobile Number"
                        className="w-full bg-section border border-gray-200 text-text-primary rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
                <label htmlFor="email" className="text-base font-semibold text-text-primary">Email Address</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="you@example.com"
                    className="w-full bg-section border border-gray-200 text-text-primary rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    required
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>

            {/* Message */}
            <div className="space-y-2">
                <label htmlFor="message" className="text-base font-semibold text-text-primary">Your Message</label>
                <textarea
                    name="message"
                    id="message"
                    rows={5}
                    placeholder="How can we help you?"
                    className="w-full bg-section border border-gray-200 text-text-primary rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    value={formData.message}
                    onChange={handleChange}
                ></textarea>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full bg-primary hover:bg-accent text-white font-bold py-4 px-8 rounded-md transition-all shadow-md group flex items-center justify-center text-lg"
            >
                Send Message
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
        </form>
    );
}
