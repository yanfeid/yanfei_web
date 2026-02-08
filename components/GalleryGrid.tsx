"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: "photography" | "hiking" | "travel";
  aspectRatio?: "square" | "portrait" | "landscape";
}

interface GalleryGridProps {
  images: GalleryImage[];
}

const categories = [
  { id: "all", label: "All" },
  { id: "photography", label: "Photography" },
  { id: "hiking", label: "Hiking" },
  { id: "travel", label: "Travel" },
];

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages =
    selectedCategory === "all"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goToPrevious = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(
        lightboxIndex === 0 ? filteredImages.length - 1 : lightboxIndex - 1
      );
    }
  };

  const goToNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(
        lightboxIndex === filteredImages.length - 1 ? 0 : lightboxIndex + 1
      );
    }
  };

  return (
    <>
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 rounded-full font-mono text-sm transition-all ${
              selectedCategory === category.id
                ? "bg-accent text-white"
                : "bg-card border border-border hover:border-accent text-muted hover:text-foreground"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <div className="masonry-grid">
        {filteredImages.map((image, index) => (
          <motion.div
            key={image.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="masonry-item cursor-pointer group"
            onClick={() => openLightbox(index)}
          >
            <div className="relative overflow-hidden rounded-xl bg-card">
              <div
                className={`relative ${
                  image.aspectRatio === "portrait"
                    ? "aspect-[3/4]"
                    : image.aspectRatio === "landscape"
                    ? "aspect-[4/3]"
                    : "aspect-square"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                    View
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {filteredImages.length === 0 && (
        <div className="text-center py-20">
          <p className="text-muted">No images in this category yet.</p>
        </div>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors z-10"
              aria-label="Close lightbox"
            >
              <X size={32} />
            </button>

            {/* Navigation */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 p-2 text-white/70 hover:text-white transition-colors z-10"
              aria-label="Previous image"
            >
              <ChevronLeft size={40} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 p-2 text-white/70 hover:text-white transition-colors z-10"
              aria-label="Next image"
            >
              <ChevronRight size={40} />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-[90vw] max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filteredImages[lightboxIndex].src}
                alt={filteredImages[lightboxIndex].alt}
                width={1200}
                height={800}
                className="object-contain max-h-[90vh] w-auto"
              />
              <p className="absolute bottom-0 left-0 right-0 text-center text-white/70 py-4 bg-gradient-to-t from-black/50 to-transparent">
                {filteredImages[lightboxIndex].alt}
              </p>
            </motion.div>

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-sm font-mono">
              {lightboxIndex + 1} / {filteredImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
