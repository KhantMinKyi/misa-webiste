import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa'; // Optional: for a visible close button
import { ChevronRight, } from 'lucide-react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from '@inertiajs/react';

// Define the shape of your image data
interface ImageItem {
    id: number;
    src: string;
    alt?: string;
}

interface GalleryProps {
    images: ImageItem[];
}

export default function Gallery({ images }: GalleryProps) {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (selectedId !== null) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [selectedId]);

    // Find the currently selected image object
    const selectedImage = images.find((img) => img.id === selectedId);

    return (
        <div className="container mx-auto px-4 py-10">
            <div className='text-4xl text-center my-10 '>Our Facilities</div>
            <div className='flex flex-row justify-end '>
                <div className=' flex justify-center items-center text-yellow-800 hover:text-yellow-400'>
                    <Link href='#' className='text-lg  my-10   '>Click to View Gallery</Link> <FiChevronRight className='text-lg  ' />
                </div>
            </div>
            {/* --- THE GRID --- */}
            {/* 2 columns on mobile (grid-cols-2), 4 on large screens (lg:grid-cols-4) */}
            <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
                {images.map((image) => (
                    <motion.div
                        layoutId={`card-${image.id}`} // Magic layout animation ID
                        key={image.id}
                        onClick={() => setSelectedId(image.id)}
                        className="group relative cursor-pointer overflow-hidden rounded-lg shadow-md aspect-square"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                    >
                        {/* Overlay on Hover */}
                        <div className="absolute inset-0 z-10 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-20" />

                        <img
                            src={image.src}
                            alt={image.alt || 'Gallery Image'}
                            loading="lazy" // Native Lazy Loading
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    </motion.div>
                ))}
            </div>

            {/* --- THE LIGHTBOX MODAL --- */}
            <AnimatePresence>
                {selectedId !== null && selectedImage && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
                        onClick={() => setSelectedId(null)} // Close when clicking background
                    >
                        {/* Close Button (Top Right) */}
                        <button className="absolute top-5 right-5 text-white/70 hover:text-white transition">
                            <FaTimes size={30} />
                        </button>

                        <motion.div
                            layoutId={`card-${selectedImage.id}`} // Matches the grid ID for smooth morphing
                            className="relative max-h-[90vh] max-w-5xl overflow-hidden rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        >
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                className="h-full w-full object-contain max-h-[85vh]"
                            />

                            {/* Optional Caption */}
                            {selectedImage.alt && (
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                                    <p className="text-center text-sm font-medium">{selectedImage.alt}</p>
                                </div>
                            )}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}