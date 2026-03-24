import Image from 'next/image';
import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';
import HeroCarousel from '@/components/HeroCarousel';
import HomeGallery from '@/components/HomeGallery';
import { ShieldCheck, Sofa, MapPin, BadgeIndianRupee, HeartHandshake, ArrowRight, PhoneCall, Mail } from 'lucide-react';

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* 1. Hero Section */}
      <HeroCarousel />

      {/* 2. About Company */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 w-full relative">
              <FadeIn direction="right">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <Image
                    src="/images/bvr-sai-nilayam/v1 (11).webp"
                    alt="BVR Property Developers Interior"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                {/* Decorative Box */}
                <div className="absolute -bottom-8 -right-8 bg-accent text-white p-8 rounded-lg shadow-xl hidden md:block w-48 text-center z-10">
                  <span className="block text-4xl font-bold font-heading mb-2">10+</span>
                  <span className="text-base uppercase tracking-wider">Years of Trust</span>
                </div>
              </FadeIn>
            </div>

            <div className="lg:w-1/2 w-full">
              <FadeIn direction="left">
                <div className="mb-4 text-accent font-semibold tracking-wider font-heading uppercase text-base flex items-center">
                  <span className="w-12 h-0.5 bg-accent mr-4"></span>
                  About Us
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary leading-tight">
                  About BVR Property Developers
                </h2>
                <div className="space-y-4 text-text-secondary text-lg mb-8 leading-relaxed">
                  <p>
                    BVR Property Developers Pvt. Ltd. is a distinguished real estate development firm based in Hyderabad, specializing in the creation of premium residential projects. Since our inception in 2022, we have been steadfast in our commitment to delivering state-of-the-art modern homes, underpinned by uncompromising construction standards, innovative architectural design, and meticulous urban planning.
                  </p>
                  <p>
                    Our core philosophy revolves around prioritizing customer satisfaction, maintaining absolute transparency, and building enduring trust. We go beyond merely constructing buildings; we curate holistic living experiences that harmonize comfort, aesthetics, and sustainability. Every BVR project is strategically located in rapidly appreciating residential corridors, ensuring excellent connectivity and long-term value creation.
                  </p>
                  <p>
                    Driven by a team of visionary engineers, architects, and industry experts, BVR Property Developers continues to transform the city's skyline. We carefully source the highest quality materials and employ rigorous quality control measures at every stage of construction, ensuring that your dream home stands as a lasting legacy for generations to come.
                  </p>
                </div>
                <Link href="/about" className="inline-flex items-center text-primary font-bold hover:text-accent transition-colors pb-1 border-b-2 border-primary hover:border-accent">
                  Read More <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Project Section */}
      <section className="py-24 bg-section relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%232F3E73\\' fill-opacity=\\'1\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <FadeIn className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider font-heading uppercase text-base justify-center flex items-center mb-4">
              <span className="w-8 h-0.5 bg-accent mr-3"></span>
              Highlights
              <span className="w-8 h-0.5 bg-accent ml-3"></span>
            </span>
            <h2 className="text-4xl text-primary md:text-5xl font-bold">Featured Project</h2>
          </FadeIn>

          <FadeIn direction="up">
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row group transition-all duration-300 hover:shadow-3xl">
              <div className="lg:w-3/5 w-full relative h-[400px] lg:h-auto overflow-hidden">
                <Image
                  src="/images/bvr-sai-nilayam/v1 (11).webp"
                  alt="BVR Sai Nilyam Featured Project"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 uppercase rounded-sm shadow-md z-10 tracking-widest">
                  Ready to Move
                </div>
              </div>

              <div className="lg:w-2/5 w-full p-10 md:p-14 flex flex-col justify-center">
                <span className="text-accent font-medium mb-2 flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Green Wood Colony, Hayathnagar
                </span>
                <h3 className="text-3xl font-bold text-primary mb-6">BVR Sai Nilyam</h3>

                <ul className="space-y-4 mb-10 text-text-secondary">
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-accent mr-3"></span>
                    North-East Facing Flats
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-accent mr-3"></span>
                    Stilt + 4 Floors
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-accent mr-3"></span>
                    Spacious Apartments
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-accent mr-3"></span>
                    Car Parking
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-accent mr-3"></span>
                    Lift Facility
                  </li>
                </ul>

                <Link href="/projects/bvr-sai-nilayam" className="bg-primary hover:bg-accent text-white font-medium py-4 px-8 rounded-md transition-colors text-center w-full shadow-md group-hover:shadow-lg">
                  View Project Details
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 4. Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider font-heading uppercase text-base justify-center flex items-center mb-4">
              <span className="w-8 h-0.5 bg-accent mr-3"></span>
              Core Values
              <span className="w-8 h-0.5 bg-accent ml-3"></span>
            </span>
            <h2 className="text-4xl text-primary md:text-5xl font-bold">Why Choose BVR Property Developers</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeIn delay={0.1} className="bg-section p-8 rounded-xl hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 border border-transparent hover:border-accent/20">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                <ShieldCheck size={30} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Quality Construction Materials</h3>
              <p className="text-text-secondary line-clamp-3">Using the best materials in the market to ensure lifelong durability and structural safety for your dream home.</p>
            </FadeIn>

            <FadeIn delay={0.2} className="bg-section p-8 rounded-xl hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 border border-transparent hover:border-accent/20">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                <Sofa size={30} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Modern Apartment Design</h3>
              <p className="text-text-secondary line-clamp-3">Contemporary architectural designs that maximize space utilization, natural light, and cross-ventilation.</p>
            </FadeIn>

            <FadeIn delay={0.3} className="bg-section p-8 rounded-xl hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 border border-transparent hover:border-accent/20">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                <MapPin size={30} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Prime Residential Locations</h3>
              <p className="text-text-secondary line-clamp-3">Strategically selected locations that offer excellent connectivity, peaceful environment, and high appreciation.</p>
            </FadeIn>

            <FadeIn delay={0.4} className="bg-section p-8 rounded-xl hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 border border-transparent hover:border-accent/20">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                <BadgeIndianRupee size={30} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Transparent Pricing</h3>
              <p className="text-text-secondary line-clamp-3">Clear, upfront pricing with no hidden charges, ensuring complete transparency in all our real estate dealings.</p>
            </FadeIn>

            <FadeIn delay={0.5} className="bg-section p-8 rounded-xl hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 border border-transparent hover:border-accent/20">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                <HeartHandshake size={30} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Customer-Focused Approach</h3>
              <p className="text-text-secondary line-clamp-3">Dedicated support throughout your home buying journey, putting your comfort and satisfaction first.</p>
            </FadeIn>

            <FadeIn delay={0.6} className="bg-primary p-8 rounded-xl shadow-xl flex flex-col justify-center items-center text-center text-white">
              <h3 className="text-2xl font-bold mb-4 font-heading" style={{ color: "white" }}>Ready to find your dream home?</h3>
              <p className="mb-6 opacity-80">Explore our premium properties tailored for your lifestyle.</p>
              <Link href="/projects" className="bg-white text-primary px-6 py-3 rounded uppercase font-bold text-base hover:bg-accent hover:text-white transition-colors">
                View All Projects
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 5. Construction Quality Section */}
      <section className="py-20 bg-primary text-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
            <FadeIn className="md:w-1/2">
              <span className="text-accent font-semibold tracking-wider font-heading uppercase text-base mb-4 block flex items-center">
                <span className="w-8 h-0.5 bg-accent mr-3"></span> Quality First
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: "white" }}>Our Construction Standards</h2>
              <p className="text-gray-300 text-lg">
                We use high-quality materials and trusted brands to ensure durability and safety in every project. Zero compromises when it comes to the foundation of your future.
              </p>
            </FadeIn>
            <FadeIn delay={0.2} className="md:w-auto">
              {/* Trust Badge */}
              <div className="flex items-center space-x-4 bg-white/10 px-6 py-4 rounded-lg border border-white/20">
                <ShieldCheck className="text-accent w-12 h-12" />
                <div>
                  <div className="font-bold text-xl leading-none mb-1">100% Quality</div>
                  <div className="text-base opacity-80">Assurance Guarantee</div>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeIn delay={0.1} className="bg-section p-8 rounded-xl hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 border border-transparent hover:border-accent/20">
              <h3 className="text-xl font-bold text-primary mb-3">UltraTech / Bharathi Cement</h3>
              <p className="text-text-secondary line-clamp-3">
                Premium quality cement used for strong foundations and long-lasting structures, ensuring durability and reliability in every construction project.
              </p>
            </FadeIn>

            <FadeIn delay={0.2} className="bg-section p-8 rounded-xl hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 border border-transparent hover:border-accent/20">
              <h3 className="text-xl font-bold text-primary mb-3">Premium Steel TMT Bars</h3>
              <p className="text-text-secondary line-clamp-3">
                High-strength TMT steel bars that provide superior structural stability, earthquake resistance, and long-term safety for modern buildings.
              </p>
            </FadeIn>

            <FadeIn delay={0.3} className="bg-section p-8 rounded-xl hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 border border-transparent hover:border-accent/20">
              <h3 className="text-xl font-bold text-primary mb-3">Asian Paints</h3>
              <p className="text-text-secondary line-clamp-3">
                Trusted interior and exterior paints that enhance beauty while protecting walls from weather, moisture, and long-term wear.
              </p>
            </FadeIn>

            <FadeIn delay={0.4} className="bg-section p-8 rounded-xl hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 border border-transparent hover:border-accent/20">
              <h3 className="text-xl font-bold text-primary mb-3">Jaquar / Hindware</h3>
              <p className="text-text-secondary line-clamp-3">
                Premium plumbing and bath fittings designed for durability, elegant design, and smooth water flow performance in modern homes.
              </p>
            </FadeIn>

            <FadeIn delay={0.5} className="bg-section p-8 rounded-xl hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 border border-transparent hover:border-accent/20">
              <h3 className="text-xl font-bold text-primary mb-3">UPVC Windows</h3>
              <p className="text-text-secondary line-clamp-3">
                Energy-efficient UPVC windows that provide excellent noise reduction, heat insulation, and long-lasting performance.
              </p>
            </FadeIn>

            <FadeIn delay={0.6} className="bg-section p-8 rounded-xl hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 border border-transparent hover:border-accent/20">
              <h3 className="text-xl font-bold text-primary mb-3">Premium Electrical Systems</h3>
              <p className="text-text-secondary line-clamp-3">
                High-quality electrical wiring and switches from trusted brands to ensure safety, reliability, and efficient power distribution throughout your home.
              </p>
            </FadeIn>
          </div>


        </div>
      </section>

      {/* 6. Projects Overview Section */}
      <section className="py-24 bg-section">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-end mb-16">

            <FadeIn>
              <span className="text-accent font-semibold tracking-wider font-heading uppercase text-base mb-4 block flex items-center">
                <span className="w-8 h-0.5 bg-accent mr-3"></span> Portfolio
              </span>
              <h2 className="text-4xl text-primary md:text-5xl font-bold">Our Projects</h2>
            </FadeIn>
            <FadeIn direction="left" className="hidden md:block">
              <Link href="/projects" className="text-primary font-bold hover:text-accent transition-colors flex items-center group">
                View All Projects <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Ongoing Projects */}
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group h-full flex flex-col">
                <div className="relative h-64 overflow-hidden">
                  <Image src="/images/bvr-sai-nilayam/v1 (4).webp" alt="Ongoing Projects" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 uppercase rounded-sm z-10">Ongoing</div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-primary mb-3">Ongoing Projects</h3>
                  <p className="text-text-secondary mb-6 flex-grow">Projects currently under construction and open for booking in prime locations.</p>
                  <Link href="/projects#ongoing" className="text-accent font-medium hover:text-primary transition-colors inline-flex items-center">
                    Explore Details <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </FadeIn>

            {/* Completed Projects */}
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group h-full flex flex-col">
                <div className="relative h-64 overflow-hidden">
                  <Image src="/images/bvr-sai-nilayam/v1 (4).webp" alt="Completed Projects" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-3 py-1 uppercase rounded-sm z-10">Completed</div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-primary mb-3">Completed Projects</h3>
                  <p className="text-text-secondary mb-6 flex-grow">Successfully completed and delivered projects showcasing our quality standards.</p>
                  <Link href="/projects#completed" className="text-accent font-medium hover:text-primary transition-colors inline-flex items-center">
                    Explore Details <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </FadeIn>

            {/* Upcoming Projects */}
            <FadeIn delay={0.3}>
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group h-full flex flex-col">
                <div className="relative h-64 bg-gray-200 overflow-hidden flex items-center justify-center">
                  <Image src="/images/hero.png" alt="Upcoming Projects" fill className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-60" />
                  <div className="absolute top-4 left-4 bg-accent text-white text-xs font-bold px-3 py-1 uppercase rounded-sm z-10">Upcoming</div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-primary mb-3">Upcoming Projects</h3>
                  <p className="text-text-secondary mb-6 flex-grow">Future residential developments planned in rapidly growing areas of Hyderabad.</p>
                  <Link href="/projects#upcoming" className="text-accent font-medium hover:text-primary transition-colors inline-flex items-center">
                    Explore Details <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link href="/projects" className="inline-flex items-center justify-center bg-primary text-white hover:bg-accent px-8 py-4 rounded-md font-medium transition-colors w-full">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Gallery Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <FadeIn className="mb-16">
            <span className="text-accent font-semibold tracking-wider font-heading uppercase text-base justify-center flex items-center mb-4">
              <span className="w-8 h-0.5 bg-accent mr-3"></span> Visuals <span className="w-8 h-0.5 bg-accent ml-3"></span>
            </span>
            <h2 className="text-4xl text-primary md:text-5xl font-bold">Project Gallery</h2>
          </FadeIn>

          <HomeGallery />

          <FadeIn>
            <Link href="/gallery" className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-md font-medium text-center transition-all inline-block">
              View Full Gallery
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
