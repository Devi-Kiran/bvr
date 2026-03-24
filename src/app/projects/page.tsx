import FadeIn from '@/components/ui/FadeIn';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, ArrowRight, Home } from 'lucide-react';
import projectsData from '@/data/projects.json';

export default function Projects() {
    const ongoingProjects = projectsData.filter(p => p.status === 'Ongoing');
    const completedProjects = projectsData.filter(p => p.status === 'Completed');
    const upcomingProjects = projectsData.filter(p => p.status === 'Upcoming');

    const renderProjectCard = (project: typeof projectsData[0]) => (
        <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group flex flex-col h-full border border-gray-100 relative">
            <div className="relative h-72 overflow-hidden bg-gray-100 flex items-center justify-center">
                {!project.isUpcoming ? (
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                ) : (
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover opacity-50 grayscale transition-transform duration-700 group-hover:scale-105"
                    />
                )}
                <div className={`absolute top-4 left-4 text-white text-xs font-bold px-3 py-1 uppercase rounded-sm shadow-md z-10 tracking-widest ${project.status === 'Ongoing' ? 'bg-primary' : project.status === 'Completed' ? 'bg-green-600' : 'bg-accent'
                    }`}>
                    {project.status}
                </div>
            </div>

            <div className="p-8 flex flex-col flex-grow">
                <span className="text-accent font-medium mb-3 flex items-center text-base">
                    <MapPin className="w-4 h-4 mr-2" />
                    {project.location.area}, {project.location.city}
                </span>
                <h3 className="text-2xl font-bold text-primary mb-6 font-heading">{project.title}</h3>

                {!project.isUpcoming && (
                    <ul className="space-y-3 mb-8 text-text-secondary text-base flex-grow">
                        {project.highlights.map((feature, index) => (
                            <li key={index} className="flex items-center">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent mr-3 flex-shrink-0"></span>
                                {feature}
                            </li>
                        ))}
                    </ul>
                )}

                {project.isUpcoming && (
                    <p className="text-text-secondary mb-8 flex-grow leading-relaxed">
                        Stay tuned for our upcoming project offering modern living spaces, premium amenities, and quality construction tailored for your lifestyle.
                    </p>
                )}

                <Link
                    href={`/projects/${project.slug}`}
                    className="mt-auto bg-section text-primary group-hover:bg-primary group-hover:text-white font-medium py-3 px-6 rounded transition-colors text-center shadow-sm w-full flex items-center justify-center cursor-pointer"
                >
                    {project.isUpcoming ? 'Notify Me' : 'View Details'}
                    <ArrowRight className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
            </div>
        </div>
    );

    return (
        <div className="pt-24 pb-16 bg-white min-h-screen">
            {/* 1. Page Header */}
            <section className="bg-primary pt-24 pb-20 text-center relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20 bg-[url('/images/hero.png')] bg-cover bg-center" />


                <div className="container mx-auto px-4 md:px-6 relative z-10 text-white">
                    <FadeIn direction="up">
                        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white" style={{ color: "white" }}>Our Projects</h1>
                        <div className="flex items-center justify-center gap-2 text-base font-bold mb-6">
                            <Link href="/" className="text-accent hover:text-white transition-colors flex items-center gap-1">
                                <Home className="w-5 h-5 fill-current" /> Home
                            </Link>
                            <span className="text-gray-300 font-medium">&gt;</span>
                            <span className="text-gray-300 font-medium">Our Projects</span>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* 2. Projects Sections */}
            <div className="container mx-auto px-4 md:px-6 py-20 space-y-32">
                {/* Ongoing Projects Section */}
                <section id="ongoing" className="scroll-mt-32">
                    <FadeIn direction="up">
                        <span className="text-accent font-semibold tracking-wider font-heading uppercase flex items-center mb-6">
                            <span className="w-8 h-0.5 bg-accent mr-3"></span> Active Construction
                        </span>
                        <h2 className="text-4xl font-bold text-primary mb-4">Ongoing Projects</h2>
                        <p className="text-text-secondary max-w-2xl mb-12 text-lg">
                            Projects currently under construction and open for booking in prime locations. Watch your future home take shape with our trusted construction standards.
                        </p>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {ongoingProjects.map((project, index) => (
                            <FadeIn key={project.id} delay={index * 0.2}>
                                {renderProjectCard(project)}
                            </FadeIn>
                        ))}
                    </div>
                </section>

                {/* Completed Projects Section */}
                <section id="completed" className="scroll-mt-32">
                    <FadeIn direction="up">
                        <span className="text-accent font-semibold tracking-wider font-heading uppercase flex items-center mb-6">
                            <span className="w-8 h-0.5 bg-accent mr-3"></span> Delivered
                        </span>
                        <h2 className="text-4xl font-bold text-primary mb-4">Completed Projects</h2>
                        <p className="text-text-secondary max-w-2xl mb-12 text-lg">
                            Our completed projects reflect our commitment to delivering quality homes and building long-term trust with our customers.
                        </p>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {completedProjects.map((project, index) => (
                            <FadeIn key={project.id} delay={index * 0.2}>
                                {renderProjectCard(project)}
                            </FadeIn>
                        ))}
                    </div>
                </section>

                {/* Upcoming Projects Section */}
                {upcomingProjects.length > 0 && (
                    <section id="upcoming" className="scroll-mt-32 bg-section -mx-4 md:-mx-6 px-4 md:px-6 py-20 rounded-[2.5rem] md:rounded-[4rem] relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mx-20 -my-20 pointer-events-none"></div>

                        <FadeIn direction="up" className="relative z-10">
                            <span className="text-accent font-semibold tracking-wider font-heading uppercase flex items-center mb-6 text-center justify-center">
                                <span className="w-8 h-0.5 bg-accent mr-3"></span> Future Visions <span className="w-8 h-0.5 bg-accent ml-3"></span>
                            </span>
                            <h2 className="text-4xl font-bold text-primary mb-4 text-center">Upcoming Projects</h2>
                            <p className="text-text-secondary max-w-2xl mx-auto mb-12 text-lg text-center leading-relaxed">
                                BVR Property Developers is planning new residential developments in promising locations across Hyderabad. Stay tuned for modern living spaces offering unmatched quality construction.
                            </p>
                        </FadeIn>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto relative z-10">
                            {upcomingProjects.map((project, index) => (
                                <FadeIn key={project.id} delay={index * 0.2}>
                                    {renderProjectCard(project)}
                                </FadeIn>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
}
