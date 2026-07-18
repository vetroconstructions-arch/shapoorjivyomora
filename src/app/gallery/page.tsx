"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

// Placeholder images for luxury gallery
const galleryImages = [
  {
    src: "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/vymora-by-joyville/gallery/desktop/photo_gallery1.webp",
    category: "Architecture",
    title: "Aerial View"
  },
  {
    src: "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/vymora-by-joyville/gallery/desktop/photo_gallery2.webp",
    category: "Architecture",
    title: "Facade Design"
  },
  {
    src: "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/vymora-by-joyville/gallery/desktop/photo_gallery3.webp",
    category: "Amenities",
    title: "Clubhouse"
  },
  {
    src: "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/vymora-by-joyville/gallery/desktop/photo_gallery4.webp",
    category: "Amenities",
    title: "Lap Pool"
  },
  {
    src: "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/vymora-by-joyville/gallery/desktop/photo_gallery5.webp",
    category: "Interiors",
    title: "Living Space"
  },
  {
    src: "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/vymora-by-joyville/gallery/desktop/photo_gallery6.webp",
    category: "Interiors",
    title: "Master Bedroom"
  },
  {
    src: "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/vymora-by-joyville/gallery/desktop/photo_gallery7.webp",
    category: "Amenities",
    title: "Zen Gardens"
  },
  {
    src: "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/vymora-by-joyville/gallery/desktop/photo_gallery8.webp",
    category: "Interiors",
    title: "Dining Area"
  },
  {
    src: "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/vymora-by-joyville/gallery/desktop/photo_gallery9.webp",
    category: "Amenities",
    title: "Pickleball Courts"
  },
  {
    src: "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/vymora-by-joyville/gallery/desktop/photo_gallery10.webp",
    category: "Amenities",
    title: "Co-working Lounge"
  },
  {
    src: "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/vymora-by-joyville/gallery/desktop/photo_gallery11.webp",
    category: "Amenities",
    title: "Eco-Deck"
  }
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="pt-32 pb-24 bg-[#0F172A] min-h-screen text-white">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="mb-20 text-center">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#E5D3B3] mb-4 block">
            Visual Experience
          </span>
          <h1 className="text-4xl md:text-6xl font-serif leading-tight mb-6">
            The Art Of Living.
          </h1>
        </div>

        {/* Masonry Gallery */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index % 3 * 0.1 }}
              className="relative overflow-hidden group rounded-sm cursor-pointer break-inside-avoid mb-4 md:mb-6"
              onClick={() => setSelectedImage(image.src)}
            >
              <img 
                src={image.src} 
                alt={image.title} 
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <span className="text-[#E5D3B3] text-xs font-bold tracking-[0.2em] uppercase mb-2">
                  {image.category}
                </span>
                <span className="text-white text-lg font-serif">
                  {image.title}
                </span>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
                  <ZoomIn size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Fullscreen Viewer */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-[#0A192F]/95 flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              src={selectedImage} 
              alt="Fullscreen gallery image view of Shapoorji Vyomora"
              className="max-w-full max-h-full object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
