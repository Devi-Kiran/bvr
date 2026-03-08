import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'BVR Property Developers Pvt. Ltd.',
  description: 'Quality Homes. Trusted Construction. Modern Living. Building thoughtfully designed residential apartments in Hyderabad.',
  keywords: 'Flats in Hayathnagar, Apartments in Hyderabad, Residential projects Hyderabad, Hyderabad real estate developers',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "BVR Property Developers Pvt Ltd",
              "image": "https://bvrd.in/images/hero.png",
              "description": "Quality Homes. Trusted Construction. Modern Living. Building thoughtfully designed residential apartments in Hyderabad.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "P.No 418 & 419, Prashanth Nagar, Vanasthalipuram Main Road",
                "addressLocality": "Hyderabad",
                "addressRegion": "Telangana",
                "postalCode": "500070",
                "addressCountry": "IN"
              },
              "telephone": "+919876543210"
            })
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} font-body text-text-primary antialiased flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <CallToAction />
        <Footer />

        {/* Floating Action Buttons */}
        <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50 pointer-events-none">
          {/* Call Button */}
          <a
            href="tel:+919440551214"
            className="bg-primary text-white p-4 rounded-full shadow-lg hover:bg-secondary transition-colors flex items-center justify-center pointer-events-auto"
            aria-label="Call us"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/+919440551214"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors flex items-center justify-center pointer-events-auto"
            aria-label="Contact us on WhatsApp"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" /><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" /></svg>
          </a>
        </div>
      </body>
    </html>
  );
}
