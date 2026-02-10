import React, { useState } from 'react';
import {
    HiOutlineMail,
    HiOutlinePhone,
    HiOutlineLocationMarker,
    HiArrowRight,
    HiOutlineOfficeBuilding
} from 'react-icons/hi';

// --- Types ---

interface Campus {
    id: string;
    name: string;
    address: string;
    phone: string;
    mapEmbedUrl: string; // The "src" from Google Maps Embed iframe
}

interface FormData {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

interface FormErrors {
    name?: string[];
    email?: string[];
    phone?: string[];
    subject?: string[];
    message?: string[];
}

// --- Configuration: Campus Data ---
const campuses: Campus[] = [
    {
        id: 'main',
        name: 'Highschool Campus',
        address: 'Corner of 53*30th Street,Chan Aye Thar San Tsp, Mandalay',
        phone: '(09) 777488802, (09) 777488803',
        mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3699.845129946921!2d96.11669217559255!3d21.978906179918987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30cb6dad0cf8e4af%3A0x8adc664a1a853bfc!2sMandalay%20International%20School%20of%20Acumen!5e0!3m2!1sen!2smm!4v1770646090391!5m2!1sen!2smm"
    },
    {
        id: 'primary',
        name: 'Primary Campus',
        address: 'No.118 (A,B,D), Block 514/3, 58th St (Bet 27th & 28th St), Kan Kauk Qtr, Chan Qye Thar Zan Tsp, Mandalay',
        phone: '(02) 4072753, (09) 43060423, (09) 43060027',
        mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3699.9720912829384!2d96.12522857559235!3d21.97403417992243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30cb6d8b63a3554d%3A0x465c324f987d3baa!2sMandalay%20International%20School%20of%20Acumen!5e0!3m2!1sen!2smm!4v1770646179215!5m2!1sen!2smm"
    },
    {
        id: 'preschool',
        name: 'Preschool Campus',
        address: '72nd Street, Between 27th Street and 28th Street Mandalay',
        phone: '(09) 973558362, (09) 975914489',
        mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3701.0!2d96.12!3d21.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDU4JzEyLjAiTiA5NsKwMDcnMTIuMCJF!5e0!3m2!1sen!2smm!4v1600000000000!5m2!1sen!2smm"
    }
];

const ContactSection: React.FC = () => {
    // --- State ---
    const [activeCampus, setActiveCampus] = useState<Campus>(campuses[0]);
    const [formData, setFormData] = useState<FormData>({
        name: '', email: '', phone: '', subject: 'Admission Inquiry', message: ''
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    // --- Handlers ---

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user types
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrors({});
        setSubmitStatus('idle');

        try {
            // Adjust the URL to match your Laravel API Route
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    // 'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '' // Uncomment if using Web routes instead of API routes
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (!response.ok) {
                // Handle Laravel Validation Errors (422)
                if (response.status === 422) {
                    setErrors(data.errors);
                } else {
                    throw new Error('Something went wrong');
                }
                setSubmitStatus('error');
            } else {
                // Success
                setSubmitStatus('success');
                setFormData({ name: '', email: '', phone: '', subject: 'Admission Inquiry', message: '' });
                setTimeout(() => setSubmitStatus('idle'), 5000);
            }

        } catch (error) {
            console.error(error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-20 bg-gray-50 dark:bg-black scroll-mt-20" id="contact">
            <div className="container mx-auto px-4 max-w-7xl">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-brand-core mb-6">
                        Contact Us & Locations
                    </h2>
                    <div className="w-24 h-1.5 bg-brand-core mx-auto rounded-full mb-6"></div>
                    <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-lg">
                        Visit one of our three campuses in Mandalay or send us a message directly.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

                    {/* --- LEFT COLUMN: Campus Tabs & Maps --- */}
                    <div className="space-y-6">

                        {/* Tabs */}
                        <div className="flex flex-wrap gap-2">
                            {campuses.map((campus) => (
                                <button
                                    key={campus.id}
                                    onClick={() => setActiveCampus(campus)}
                                    className={`
                                        px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 border
                                        ${activeCampus.id === campus.id
                                            ? 'bg-brand-core text-white border-brand-core shadow-md'
                                            : 'bg-white dark:bg-neutral-900 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-neutral-700 hover:border-brand-core'
                                        }
                                    `}
                                >
                                    {campus.name}
                                </button>
                            ))}
                        </div>

                        {/* Active Campus Card */}
                        <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-lg border border-gray-100 dark:border-neutral-800 overflow-hidden flex flex-col h-full min-h-[500px]">

                            {/* Map Frame */}
                            <div className="relative h-64 md:h-80 w-full bg-gray-200 dark:bg-neutral-800">
                                <iframe
                                    src={activeCampus.mapEmbedUrl}
                                    className="absolute inset-0 w-full h-full border-0"
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title={`Map of ${activeCampus.name}`}
                                ></iframe>
                            </div>

                            {/* Details */}
                            <div className="p-8 flex-1">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                                    <HiOutlineOfficeBuilding className="text-brand-core" />
                                    {activeCampus.name}
                                </h3>

                                <div className="space-y-6">
                                    {/* Address */}
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center shrink-0 text-brand-core">
                                            <HiOutlineLocationMarker className="text-xl" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Address</p>
                                            <p className="text-gray-800 dark:text-gray-200 font-medium leading-relaxed">
                                                {activeCampus.address}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center shrink-0 text-brand-core">
                                            <HiOutlinePhone className="text-xl" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Phone</p>
                                            <a href={`tel:${activeCampus.phone}`} className="text-gray-800 dark:text-gray-200 font-medium hover:text-brand-core">
                                                {activeCampus.phone}
                                            </a>
                                        </div>
                                    </div>

                                    {/* Email General */}
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center shrink-0 text-brand-core">
                                            <HiOutlineMail className="text-xl" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Email</p>
                                            <a href="mailto:contact@bfi-edu.com" className="text-gray-800 dark:text-gray-200 font-medium hover:text-brand-core">
                                                contact@bfi-edu.com
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --- RIGHT COLUMN: Contact Form --- */}
                    <div className="bg-white dark:bg-neutral-900 p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 dark:border-neutral-800 h-fit">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            Send us a Message
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400 mb-8">
                            We usually respond within 24 hours.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-5">

                            {/* Name */}
                            <div className="space-y-1">
                                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className={`w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-neutral-800 border focus:ring-2 outline-none transition-all dark:text-white ${errors.name ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 dark:border-neutral-700 focus:border-brand-core focus:ring-brand-core/20'}`}
                                />
                                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name[0]}</p>}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                {/* Email */}
                                <div className="space-y-1">
                                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className={`w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-neutral-800 border focus:ring-2 outline-none transition-all dark:text-white ${errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 dark:border-neutral-700 focus:border-brand-core focus:ring-brand-core/20'}`}
                                    />
                                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email[0]}</p>}
                                </div>
                                {/* Phone */}
                                <div className="space-y-1">
                                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Phone</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-neutral-800 border focus:ring-2 outline-none transition-all dark:text-white ${errors.phone ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 dark:border-neutral-700 focus:border-brand-core focus:ring-brand-core/20'}`}
                                    />
                                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone[0]}</p>}
                                </div>
                            </div>

                            {/* Subject */}
                            <div className="space-y-1">
                                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Subject</label>
                                <select
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 focus:border-brand-core focus:ring-2 focus:ring-brand-core/20 outline-none transition-all dark:text-white"
                                >
                                    <option value="Admission Inquiry">Admission Inquiry</option>
                                    <option value="IGCSE Program">IGCSE Program</option>
                                    <option value="Tuition Fees">Tuition Fees</option>
                                    <option value="General Inquiry">General Inquiry</option>
                                </select>
                            </div>

                            {/* Message */}
                            <div className="space-y-1">
                                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Message</label>
                                <textarea
                                    name="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className={`w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-neutral-800 border focus:ring-2 outline-none transition-all resize-none dark:text-white ${errors.message ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 dark:border-neutral-700 focus:border-brand-core focus:ring-brand-core/20'}`}
                                ></textarea>
                                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message[0]}</p>}
                            </div>

                            {/* Status Messages */}
                            {submitStatus === 'success' && (
                                <div className="p-4 bg-green-50 text-green-700 rounded-lg text-sm font-medium animate-pulse">
                                    Message sent successfully! We will contact you soon.
                                </div>
                            )}
                            {submitStatus === 'error' && (
                                <div className="p-4 bg-red-50 text-red-700 rounded-lg text-sm font-medium">
                                    There was an error sending your message. Please check the fields or try again later.
                                </div>
                            )}

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting || submitStatus === 'success'}
                                className={`
                                    w-full py-4 rounded-lg font-bold text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-lg
                                    ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-brand-core hover:bg-brand-core/90 hover:shadow-brand-core/30'}
                                `}
                            >
                                {isSubmitting ? 'Sending...' : <>Send Message <HiArrowRight /></>}
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;