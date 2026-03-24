import Image from 'next/image';
import {
    MapPin, Phone, Send, CheckCircle2, Layers, Wind, Zap, Droplets,
    PaintBucket, Home, Building2,
    Car, Maximize, IndianRupee, SquareStack, Compass, Star, Download
} from 'lucide-react';
import projectsData from '@/data/projects.json';
import { notFound } from 'next/navigation';
import ProjectGallery from '@/components/ProjectGallery';
import ProjectInteractive from '@/components/ProjectInteractive';

// ─── Types ────────────────────────────────────────────────────────────────────
type Project = typeof projectsData[number];

// ─── Highlight Card ────────────────────────────────────────────────────────────
interface HighlightCardProps {
    icon: React.ReactNode;
    label: string;
    value: string;
    color: string;
}

function HighlightCard({ icon, label, value, color }: HighlightCardProps) {
    return (
        <div className={`relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 flex flex-col items-center text-center group hover:-translate-y-1 transition-all duration-300 hover:shadow-xl overflow-hidden`}>
            <div className={`absolute top-0 left-0 w-full h-1 ${color}`} />
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${color} bg-opacity-10 text-white`}>
                <div className="text-white">{icon}</div>
            </div>
            <p className="text-xs font-semibold uppercase tracking-widest text-text-secondary mb-1">{label}</p>
            <p className="text-lg font-bold text-primary">{value}</p>
        </div>
    );
}

// ─── Build specs from project.specifications ────────────────────────────────────
function buildSpecsData(specs: Project['specifications']) {
    return [
        {
            title: 'Building',
            icon: <Layers className="w-4 h-4" />,
            details: [
                { label: 'Slab', value: specs.building.slab },
                { label: 'Steel', value: specs.building.steel },
                { label: 'Cement', value: specs.building.cement },
                { label: 'Brick', value: specs.building.brick },
                { label: 'Wall Thickness', value: specs.building.wallThickness },
                { label: 'Elevation', value: specs.building.elevation },
            ],
        },
        {
            title: 'Doors & Windows',
            icon: <Wind className="w-4 h-4" />,
            details: [
                { label: 'Main Door', value: specs.doorsWindows.mainDoor },
                { label: 'Bedroom Door', value: specs.doorsWindows.bedroomDoor },
                { label: 'Bathroom Door', value: specs.doorsWindows.bathroomDoor },
                { label: 'Windows', value: specs.doorsWindows.windows },
                { label: 'Utility', value: specs.doorsWindows.utility },
            ],
        },
        {
            title: 'Kitchen',
            icon: <Home className="w-4 h-4" />,
            details: [
                { label: 'Sink', value: specs.kitchen.sink },
                { label: 'Water', value: specs.kitchen.water },
                { label: 'RO Provision', value: specs.kitchen.roProvision ? 'Yes' : 'No' },
                { label: 'Tiles', value: specs.kitchen.tiles },
            ],
        },
        {
            title: 'Electrical',
            icon: <Zap className="w-4 h-4" />,
            details: [
                { label: 'Boxes', value: specs.electrical.boxes },
                { label: 'Switches', value: specs.electrical.switches },
                { label: 'Wiring', value: specs.electrical.wiring },
                { label: 'Points', value: specs.electrical.points },
            ],
        },
        {
            title: 'Tiles & Flooring',
            icon: <SquareStack className="w-4 h-4" />,
            details: [
                { label: 'Bathroom', value: specs.tiles.bathroom },
                { label: 'Flooring', value: specs.tiles.flooring },
                { label: 'Parking', value: specs.tiles.parking },
                { label: 'Staircase', value: specs.tiles.staircase },
            ],
        },
        {
            title: 'Plumbing',
            icon: <Droplets className="w-4 h-4" />,
            details: [
                { label: 'Pipes', value: specs.plumbing.pipes },
                { label: 'Commode', value: specs.plumbing.commode },
                { label: 'Brand', value: specs.plumbing.brand },
                { label: 'Washbasin', value: specs.plumbing.washbasin },
            ],
        },
        {
            title: 'Paint',
            icon: <PaintBucket className="w-4 h-4" />,
            details: [
                { label: 'Interior', value: specs.paint.interior },
                { label: 'Exterior', value: specs.paint.exterior },
            ],
        },
        {
            title: 'Elevator',
            icon: <Building2 className="w-4 h-4" />,
            details: [
                { label: 'Capacity', value: specs.elevator.capacity },
                { label: 'Type', value: specs.elevator.type },
                { label: 'Power Backup', value: specs.elevator.powerBackup ? 'Yes' : 'No' },
            ],
        },
    ];
}

// ─── Highlights Meta ────────────────────────────────────────────────────────────
function getHighlights(project: Project) {
    const pd = project.projectDetails;
    return [
        { icon: <Building2 className="w-5 h-5" />, label: 'Floors', value: pd.totalFloors, color: 'bg-blue-600' },
        { icon: <Compass className="w-5 h-5" />, label: 'Facing', value: `${pd.facing} Facing`, color: 'bg-emerald-600' },
        { icon: <Maximize className="w-5 h-5" />, label: 'Configuration', value: pd.configuration, color: 'bg-amber-600' },
        { icon: <Car className="w-5 h-5" />, label: 'Parking', value: pd.parking, color: 'bg-purple-600' },
        { icon: <IndianRupee className="w-5 h-5" />, label: 'Price', value: 'On Request', color: 'bg-rose-600' },
        { icon: <Layers className="w-5 h-5" />, label: 'Land UDS', value: `${pd.uds} Sq Yards`, color: 'bg-cyan-600' },
    ];
}

// ─── Main Page ─────────────────────────────────────────────────────────────────
export default async function ProjectDetails({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projectsData.find((p) => p.slug === slug);

    if (!project) notFound();

    const highlights = getHighlights(project);
    const specsData = buildSpecsData(project.specifications);
    const primaryPhone = project.developer.phone[0]?.replace(/\s/g, '') || '9876543210';

    return (
        <div className="bg-white min-h-screen">

            {/* ── 1. HERO ─────────────────────────────────────────────────── */}
            <section className="relative pt-32 pb-32 overflow-hidden">
                {/* BG */}
                <div className="absolute inset-0">
                    <Image
                        src={project.image || '/images/hero.png'}
                        alt={project.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-primary/70" />
                </div>

                {/* Content */}
                <div className="relative z-10 container mx-auto px-4 md:px-6 text-white text-center">
                    <span className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 text-accent px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-widest mb-6">
                        <Star className="w-4 h-4 fill-accent" /> {project.status} Project
                    </span>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight drop-shadow-lg" style={{color: '#C9A45C'}}>
                        {project.title}
                    </h1>
                    <p className="text-lg md:text-2xl text-white/80 font-medium mb-4">
                        {project.overview.title}
                    </p>
                    <p className="flex items-center justify-center gap-2 text-white/70 text-base mb-10">
                        <MapPin className="w-5 h-5 text-accent" /> {project.location.address}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-4 justify-center items-center">
                        <a
                            href={`tel:+91${primaryPhone}`}
                            className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all hover:shadow-accent/30 hover:shadow-xl hover:-translate-y-0.5 text-base"
                        >
                            <Phone className="w-5 h-5" /> Call Now
                        </a>
                        {project["project-brochure"] && (
                            <a
                                href={project["project-brochure"] as string}
                                target="_blank"
                                className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-primary font-bold px-8 py-4 rounded-xl shadow-lg transition-all hover:-translate-y-0.5 text-base"
                            >
                                <Download className="w-5 h-5" /> Brochure
                            </a>
                        )}
                        <a
                            href="#enquiry"
                            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5 text-base backdrop-blur-sm"
                        >
                            <Send className="w-5 h-5" /> Send Enquiry
                        </a>
                    </div>
                </div>

                {/* Wave divider */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" className="fill-white w-full">
                        <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
                    </svg>
                </div>
            </section>

            {/* ── 2. PROJECT HIGHLIGHTS CARDS ─────────────────────────────── */}
            <section className="py-16 container mx-auto px-4 md:px-6 -mt-6">
                <div className="text-center mb-10">
                    <span className="text-accent font-semibold tracking-wider uppercase flex items-center justify-center mb-2 text-sm">
                        <span className="w-8 h-0.5 bg-accent mr-3" />{project.title} <span className="w-8 h-0.5 bg-accent ml-3" />
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary">Project Highlights</h2>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                    {highlights.map((h, i) => (
                        <HighlightCard key={i} icon={h.icon} label={h.label} value={h.value} color={h.color} />
                    ))}
                </div>
            </section>

            {/* ── 3. ABOUT PROJECT ────────────────────────────────────────── */}
            <section className="py-20 bg-section">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col lg:flex-row gap-14 items-center">
                        {/* Image */}
                        <div className="lg:w-1/2 w-full">
                            <div className="relative h-[480px] rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src={project.image || '/images/interior.png'}
                                    alt={project.title}
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="flex flex-wrap gap-2">
                                        {['Premium Materials', 'Waterproofing', 'Granite & Teak Wood'].map((tag) => (
                                            <span key={tag} className="bg-white/10 border border-white/30 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm flex items-center gap-1">
                                                <CheckCircle2 className="w-3.5 h-3.5 text-accent" /> {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Text */}
                        <div className="lg:w-1/2">
                            <span className="text-accent font-semibold tracking-wider uppercase flex items-center mb-4 text-sm">
                                <span className="w-8 h-0.5 bg-accent mr-3" /> About the Project
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 leading-snug">
                                Designed for Comfortable <span className="text-accent">Modern Living</span>
                            </h2>
                            <p className="text-text-secondary leading-relaxed text-lg mb-8">
                                {project.overview.description}
                            </p>

                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {project.highlights.map((h, i) => (
                                    <li key={i} className="flex items-center gap-3 text-text-secondary font-medium bg-white rounded-lg px-4 py-3 shadow-sm border border-gray-100">
                                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                                        {h}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 4. SPECIFICATIONS (ACCORDION) ───────────────────────────── */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-14">
                        <span className="text-accent font-semibold tracking-wider uppercase flex items-center justify-center mb-2 text-sm">
                            <span className="w-8 h-0.5 bg-accent mr-3" /> Quality Standards <span className="w-8 h-0.5 bg-accent ml-3" />
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">Specifications</h2>
                        <p className="text-text-secondary max-w-2xl mx-auto text-base leading-relaxed">
                            Every element in {project.title} is crafted with high-quality materials from trusted brands.
                        </p>
                    </div>

                    <ProjectInteractive specsData={specsData} />
                </div>
            </section>

            {/* ── 5. FLOOR PLANS ──────────────────────────────────────────── */}
            <section className="py-20 bg-section">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-14">
                        <span className="text-accent font-semibold tracking-wider uppercase flex items-center justify-center mb-2 text-sm">
                            <span className="w-8 h-0.5 bg-accent mr-3" /> Layout <span className="w-8 h-0.5 bg-accent ml-3" />
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">Floor Plans</h2>
                        <p className="text-text-secondary max-w-xl mx-auto text-base">
                            Thoughtfully designed layouts for maximum space utilization and ventilation.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {['Stilt Floor Plan', 'Typical Floor Plan'].map((plan, i) => (
                            <div key={i} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden group hover:-translate-y-1 transition-all duration-300 hover:shadow-xl">
                                <div className="relative aspect-[4/3] bg-gray-100">
                                    <Image
                                        src={project.image || '/images/interior.png'}
                                        alt={plan}
                                        fill
                                        className="object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="bg-white/90 text-primary font-bold px-5 py-2 rounded-lg shadow text-sm uppercase tracking-wider">
                                            Coming Soon
                                        </span>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <h3 className="text-lg font-bold text-primary mb-1">{plan}</h3>
                                    <p className="text-text-secondary text-sm">Detailed layout with dimensions will be added shortly.</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 6. PRICING ──────────────────────────────────────────────── */}
            <section className="py-20 bg-primary text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="text-center mb-14">
                        <span className="text-accent font-semibold tracking-wider uppercase flex items-center justify-center mb-2 text-sm">
                            <span className="w-8 h-0.5 bg-accent mr-3" /> Investment <span className="w-8 h-0.5 bg-accent ml-3" />
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{color: "white"}}>Pricing Details</h2>
                        <p className="text-white/70 max-w-xl mx-auto text-base">Transparent pricing with no hidden charges. Contact us for exact costings.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {[
                            { icon: <IndianRupee className="w-6 h-6" />, label: 'Price per Sq Ft', value: 'On Request', note: 'Best in market' },
                            { icon: <Car className="w-6 h-6" />, label: 'Car Parking', value: '₹ Included', note: 'Stilt parking' },
                            { icon: <Layers className="w-6 h-6" />, label: 'UDS', value: 'As per Flat', note: 'As per agreement' },
                            { icon: <Building2 className="w-6 h-6" />, label: 'GST', value: '5% Applicable', note: 'Under construction' },
                        ].map((item, i) => (
                            <div key={i} className="bg-white/10 border border-white/20 rounded-2xl p-6 flex flex-col items-center text-center backdrop-blur-sm hover:bg-white/15 transition-colors">
                                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4 text-accent">
                                    {item.icon}
                                </div>
                                <p className="text-xs uppercase tracking-widest text-white/60 mb-1">{item.label}</p>
                                <p className="text-xl font-bold text-white mb-1">{item.value}</p>
                                <p className="text-xs text-white/50">{item.note}</p>
                            </div>
                        ))}
                    </div>

                    <p className="text-center text-white/50 text-sm mt-10">
                        * Prices are subject to change. GST @ 5% applicable on under-construction properties. Contact our team for final quote.
                    </p>
                </div>
            </section>

            {/* ── 7. LOCATION ─────────────────────────────────────────────── */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-14">
                        <span className="text-accent font-semibold tracking-wider uppercase flex items-center justify-center mb-2 text-sm">
                            <span className="w-8 h-0.5 bg-accent mr-3" /> Connectivity <span className="w-8 h-0.5 bg-accent ml-3" />
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">Location</h2>
                        <p className="text-text-secondary max-w-xl mx-auto text-base">{project.location.area}, {project.location.city} — well connected to key areas of Hyderabad.</p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-10">
                        {/* Map */}
                        <div className="lg:w-3/5 rounded-2xl overflow-hidden shadow-xl border border-gray-200 h-[380px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30445.35!2d78.59!3d17.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba5c9c3a1bfa5%3A0x0!2sHayathnagar%2C+Hyderabad!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Project Location Map"
                            />
                        </div>

                        {/* Nearby */}
                        <div className="lg:w-2/5">
                            <h3 className="text-xl font-bold text-primary mb-5 flex items-center gap-2">
                                <MapPin className="text-accent w-5 h-5" /> Nearby Places
                            </h3>
                            <div className="space-y-3">
                                {[
                                    { category: 'Schools', places: 'St. Xavier\'s, Brilliants High School' },
                                    { category: 'Hospitals', places: 'KIMS, Apollo, Care Hospital' },
                                    { category: 'Shopping', places: 'DMart, Reliance Fresh, Local Markets' },
                                    { category: 'Transport', places: 'TSRTC Bus Stand, Auto Stand' },
                                    { category: 'Banks', places: 'SBI, HDFC, Axis Bank ATMs' },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3 bg-section rounded-xl p-4 border border-gray-100 hover:border-accent/30 transition-colors group">
                                        <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                                        <div>
                                            <span className="text-xs font-bold uppercase tracking-wider text-primary">{item.category}</span>
                                            {/* <p className="text-sm text-text-secondary">{item.places}</p> */}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 8. PROJECT GALLERY ──────────────────────────────────────── */}
            {project.gallery && project.gallery.length > 0 && (
                <ProjectGallery images={project.gallery} projectTitle={project.title} />
            )}

            {/* ── 9. DEVELOPER INFO ───────────────────────────────────────── */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10 bg-white rounded-2xl shadow-xl border border-gray-100 p-10">
                        <div className="flex-shrink-0 w-28 h-28 rounded-full bg-primary flex items-center justify-center shadow-lg">
                            <Building2 className="w-14 h-14 text-white" />
                        </div>
                        <div>
                            <span className="text-accent font-semibold text-sm uppercase tracking-widest">Developer</span>
                            <h2 className="text-2xl md:text-3xl font-bold text-primary mt-1 mb-3">
                                {project.developer.name}
                            </h2>
                            <p className="text-text-secondary text-base leading-relaxed">
                                Office: {project.developer.office}
                            </p>
                            <div className="flex flex-wrap gap-3 mt-4">
                                {project.developer.phone.map((ph) => (
                                    <a key={ph} href={`tel:+91${ph.replace(/\s/g, '')}`} className="bg-section text-primary text-xs font-semibold px-3 py-1.5 rounded-full border border-gray-200 flex items-center gap-1 hover:border-accent/50 transition-colors">
                                        <Phone className="w-3.5 h-3.5 text-accent" /> {ph}
                                    </a>
                                ))}
                                <a href={`mailto:${project.developer.email}`} className="bg-section text-primary text-xs font-semibold px-3 py-1.5 rounded-full border border-gray-200 flex items-center gap-1 hover:border-accent/50 transition-colors">
                                    <Send className="w-3.5 h-3.5 text-accent" /> {project.developer.email}
                                </a>
                            </div>
                            <div className="flex flex-wrap gap-3 mt-3">
                                {['Timely Delivery', 'Quality Construction', 'Customer First'].map((badge) => (
                                    <span key={badge} className="bg-section text-primary text-xs font-semibold px-3 py-1.5 rounded-full border border-gray-200 flex items-center gap-1">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-accent" /> {badge}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 10. CONTACT / ENQUIRY FORM ──────────────────────────────── */}
            <section id="enquiry" className="py-24 bg-section">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-12">
                            <span className="text-accent font-semibold tracking-wider uppercase flex items-center justify-center mb-2 text-sm">
                                <span className="w-8 h-0.5 bg-accent mr-3" /> Get in Touch <span className="w-8 h-0.5 bg-accent ml-3" />
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">Schedule a Site Visit</h2>
                            <p className="text-text-secondary text-base">Leave your details and our team will contact you shortly.</p>
                        </div>

                        <div className="bg-section border-t-4 border-accent rounded-2xl shadow-xl p-8 md:p-12">
                            <form className="space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="text-sm font-semibold text-primary block mb-1.5">Full Name *</label>
                                        <input
                                            type="text"
                                            placeholder="Your Full Name"
                                            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="text-sm font-semibold text-primary block mb-1.5">Phone Number *</label>
                                        <input
                                            type="tel"
                                            placeholder="Your Mobile Number"
                                            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="text-sm font-semibold text-primary block mb-1.5">Email</label>
                                    <input
                                        type="email"
                                        placeholder="you@example.com"
                                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                                    />
                                </div>
                                <div>
                                    <label className="text-sm font-semibold text-primary block mb-1.5">Message</label>
                                    <textarea
                                        rows={4}
                                        placeholder={`I'm interested in ${project.title}. Please call me back.`}
                                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent text-sm resize-none"
                                    />
                                </div>

                                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                                    <button
                                        type="submit"
                                        className="flex-1 bg-primary hover:bg-accent text-white font-bold py-4 px-8 rounded-xl transition-all hover:shadow-lg hover:shadow-primary/20 flex items-center justify-center gap-2 text-base"
                                    >
                                        <Send className="w-5 h-5" /> Send Enquiry
                                    </button>
                                    <a
                                        href={`tel:+91${primaryPhone}`}
                                        className="flex-1 bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-2 text-base"
                                    >
                                        <Phone className="w-5 h-5" /> Call Us Now
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
