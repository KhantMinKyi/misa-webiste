import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';

import axios from 'axios';
import {
    HiOutlineCalendar,
    HiOutlineUser,
    HiOutlineChatAlt,
    HiOutlineShare,
    HiOutlineClock,
    HiChevronLeft,
    HiOutlineMail,
    HiCheckCircle
} from 'react-icons/hi';
import FrontendLayout from '@/layouts/frontend-layout';

// --- Types ---

interface CategoryTag {
    id: number;
    title: string;
}

interface User {
    id: number;
    name: string;
    profile_photo_url?: string;
}

interface Post {
    id: number;
    title: string;
    content: string;
    banner_img: string;
    created_at: string;
    read_time?: string;
    author?: User;
    category_tags: { id: number; category_tag: CategoryTag }[];
}

interface Props {
    post: Post;
    related_posts?: Post[];
}

interface CommentForm {
    name: string;
    email: string;
    description: string;
    post_id: number;
}

const PostDetail: React.FC<Props> = ({ post, related_posts = [] }) => {

    // --- State for Comment Form ---
    const [formData, setFormData] = useState<CommentForm>({
        name: '',
        email: '',
        description: '',
        post_id: post.id
    });

    const [errors, setErrors] = useState<Partial<CommentForm>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    // --- Handlers ---
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user types
        if (errors[name as keyof CommentForm]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrors({});
        setSubmitStatus('idle');

        try {
            // Sending request to your specified API route
            await axios.post('/api/post-comment/store', formData);

            setSubmitStatus('success');
            setFormData({ name: '', email: '', description: '', post_id: post.id });

            // Optional: Hide success message after 5 seconds
            setTimeout(() => setSubmitStatus('idle'), 5000);

        } catch (error: any) {
            if (error.response && error.response.status === 422) {
                // Laravel Validation Errors
                setErrors(error.response.data.errors);
            } else {
                console.error("Submission error:", error);
                setSubmitStatus('error');
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    // Dummy comments for display (Remove if you fetch real comments)
    const dummyComments = [
        { id: 1, user: "Sarah Jenkins", date: "2 hours ago", content: "This is such a wonderful initiative!", avatar: "https://ui-avatars.com/api/?name=Sarah+Jenkins&background=random" },
        { id: 2, user: "Michael Tan", date: "5 hours ago", content: "Great photos! It looks like the students had a blast.", avatar: "https://ui-avatars.com/api/?name=Michael+Tan&background=random" }
    ];

    return (
        <FrontendLayout>
            <Head title={post.title} />

            <div className="bg-gray-50 dark:bg-black min-h-screen py-12">
                <div className="container mx-auto px-4 max-w-6xl">

                    {/* Back Link */}
                    <Link
                        href="/news"
                        className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-brand-core mb-8 transition-colors group"
                    >
                        <div className="w-8 h-8 rounded-full bg-white dark:bg-neutral-900 flex items-center justify-center shadow-sm mr-2 group-hover:scale-110 transition-transform">
                            <HiChevronLeft className="text-lg" />
                        </div>
                        Back to News
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

                        {/* --- Main Content (Left Column) --- */}
                        <div className="lg:col-span-8">
                            <article className="bg-white dark:bg-neutral-900 rounded-2xl shadow-sm border border-gray-100 dark:border-neutral-800 overflow-hidden mb-10">

                                {/* Hero Image */}
                                <div className="relative h-64 md:h-[450px] w-full group">
                                    <img
                                        src={post.banner_img || '/placeholder.svg'}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-8  group-hover:scale-105"></div>
                                    <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full">
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {post.category_tags.map((ct) => (
                                                <span key={ct.id} className="bg-brand-core text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                                                    {ct.category_tag.title}
                                                </span>
                                            ))}
                                        </div>
                                        <h1 className="text-2xl md:text-4xl md:leading-tight font-bold text-white mb-4 drop-shadow-md">
                                            {post.title}
                                        </h1>
                                        <div className="flex items-center gap-6 text-gray-200 text-sm font-medium">
                                            <div className="flex items-center gap-2">
                                                <HiOutlineCalendar className="text-lg text-brand-core" />
                                                {new Date(post.created_at).toLocaleDateString()}
                                            </div>
                                            {post.author && (
                                                <div className="flex items-center gap-2">
                                                    <HiOutlineUser className="text-lg text-brand-core" />
                                                    {post.author.name}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Post Body */}
                                <div
                                    className="p-6 md:p-12 prose prose-lg dark:prose-invert max-w-none 
                                    prose-a:text-brand-core hover:prose-a:text-brand-core/80
                                    prose-img:rounded-xl prose-img:shadow-lg"
                                    dangerouslySetInnerHTML={{ __html: post.content }}
                                />
                            </article>

                            {/* --- Comments Section --- */}
                            <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-sm border border-gray-100 dark:border-neutral-800 p-8 md:p-10">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3 pb-4 border-b border-gray-100 dark:border-neutral-800">
                                    <HiOutlineChatAlt className="text-brand-core" />
                                    Leave a Comment
                                </h3>

                                {/* Submission Success Message */}
                                {submitStatus === 'success' ? (
                                    <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6 text-center animate-fade-in-up">
                                        <div className="w-16 h-16 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600 dark:text-green-300">
                                            <HiCheckCircle className="text-3xl" />
                                        </div>
                                        <h4 className="text-xl font-bold text-green-800 dark:text-green-200 mb-2">Comment Submitted!</h4>
                                        <p className="text-green-700 dark:text-green-300">Thank you for sharing your thoughts. Your comment is under review.</p>
                                        <button
                                            onClick={() => setSubmitStatus('idle')}
                                            className="mt-4 text-sm font-bold text-green-700 underline hover:text-green-800"
                                        >
                                            Post another comment
                                        </button>
                                    </div>
                                ) : (
                                    /* Comment Form */
                                    <form onSubmit={handleSubmit} className="space-y-6 mb-12">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {/* Name Input */}
                                            <div className="space-y-2">
                                                <label htmlFor="name" className="block text-sm font-bold text-gray-700 dark:text-gray-300">
                                                    Full Name <span className="text-red-500">*</span>
                                                </label>
                                                <div className="relative">
                                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                                        <HiOutlineUser />
                                                    </div>
                                                    <input
                                                        type="text"
                                                        id="name"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        placeholder="John Doe"
                                                        required
                                                        className={`w-full pl-10 pr-4 py-3 rounded-lg bg-gray-50 dark:bg-neutral-800 border focus:ring-2 outline-none transition-all dark:text-white
                                                            ${errors.name ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 dark:border-neutral-700 focus:border-brand-core focus:ring-brand-core/20'}`}
                                                    />
                                                </div>
                                                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                                            </div>

                                            {/* Email Input */}
                                            <div className="space-y-2">
                                                <label htmlFor="email" className="block text-sm font-bold text-gray-700 dark:text-gray-300">
                                                    Email Address <span className="text-red-500">*</span>
                                                </label>
                                                <div className="relative">
                                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                                        <HiOutlineMail />
                                                    </div>
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        placeholder="john@example.com"
                                                        required
                                                        className={`w-full pl-10 pr-4 py-3 rounded-lg bg-gray-50 dark:bg-neutral-800 border focus:ring-2 outline-none transition-all dark:text-white
                                                            ${errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 dark:border-neutral-700 focus:border-brand-core focus:ring-brand-core/20'}`}
                                                    />
                                                </div>
                                                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                            </div>
                                        </div>

                                        {/* Description (Message) Input */}
                                        <div className="space-y-2">
                                            <label htmlFor="description" className="block text-sm font-bold text-gray-700 dark:text-gray-300">
                                                Comment <span className="text-red-500">*</span>
                                            </label>
                                            <textarea
                                                id="description"
                                                name="description"
                                                rows={5}
                                                value={formData.description}
                                                onChange={handleChange}
                                                placeholder="Write your thoughts here..."
                                                className={`w-full p-4 rounded-lg bg-gray-50 dark:bg-neutral-800 border focus:ring-2 outline-none transition-all resize-none dark:text-white
                                                    ${errors.description ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 dark:border-neutral-700 focus:border-brand-core focus:ring-brand-core/20'}`}
                                            ></textarea>
                                            {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
                                        </div>

                                        {/* Submit Button */}
                                        <div className="flex justify-end">
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className={`
                                                    px-8 py-3 rounded-lg font-bold text-white shadow-lg transition-all transform hover:-translate-y-0.5
                                                    ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-brand-core hover:bg-brand-core/90 hover:shadow-brand-core/30'}
                                                `}
                                            >
                                                {isSubmitting ? 'Submitting...' : 'Post Comment'}
                                            </button>
                                        </div>
                                        {submitStatus === 'error' && (
                                            <p className="text-red-500 text-center mt-4">Something went wrong. Please try again.</p>
                                        )}
                                    </form>
                                )}

                                {/* Existing Comments List (Static Visual) */}
                                <div className="space-y-8 mt-12 border-t border-gray-100 dark:border-neutral-800 pt-10">
                                    <h4 className="font-bold text-gray-900 dark:text-white mb-6">Recent Comments</h4>
                                    {dummyComments.map((comment) => (
                                        <div key={comment.id} className="flex gap-4">
                                            <img src={comment.avatar} alt={comment.user} className="w-12 h-12 rounded-full shrink-0 border-2 border-white dark:border-neutral-800 shadow-sm" />
                                            <div className="flex-1">
                                                <div className="bg-gray-50 dark:bg-neutral-800 p-5 rounded-2xl rounded-tl-sm">
                                                    <div className="flex justify-between items-center mb-2">
                                                        <h5 className="font-bold text-gray-900 dark:text-white">{comment.user}</h5>
                                                        <span className="text-xs text-gray-500 font-medium">{comment.date}</span>
                                                    </div>
                                                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                                        {comment.content}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* --- Sidebar (Right Column) --- */}
                        <aside className="lg:col-span-4 space-y-8">
                            <div className="bg-white dark:bg-neutral-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-neutral-800">
                                <h3 className="font-bold text-gray-900 dark:text-white mb-6 uppercase text-sm tracking-wider flex items-center gap-2">
                                    <span className="w-1 h-4 bg-brand-core rounded-full"></span>
                                    Related News
                                </h3>
                                <div className="space-y-6">
                                    {(related_posts.length > 0 ? related_posts : [1, 2, 3]).map((item, idx) => (
                                        <div key={idx} className="flex gap-4 group cursor-pointer">
                                            <div className="w-20 h-20 rounded-xl bg-gray-200 dark:bg-neutral-800 shrink-0 overflow-hidden">
                                                <img
                                                    src={(item as Post).banner_img || '/placeholder.svg'}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                                    alt="Thumbnail"
                                                />
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-bold text-gray-800 dark:text-gray-200 group-hover:text-brand-core transition-colors line-clamp-2 mb-2">
                                                    {(item as Post).title || "School Holiday Announcement"}
                                                </h4>
                                                <span className="text-xs text-gray-400 flex items-center gap-1">
                                                    <HiOutlineClock /> {(item as Post).created_at ? new Date((item as Post).created_at).toLocaleDateString() : 'Just now'}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </aside>

                    </div>
                </div>
            </div>
        </FrontendLayout>
    );
};

export default PostDetail;