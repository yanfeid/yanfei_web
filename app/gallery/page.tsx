import { Metadata } from "next";
import GalleryGrid, { GalleryImage } from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery | Yanfei Dai",
  description: "Photography, hiking, and travel photos by Yanfei Dai.",
};

// Placeholder images - replace with actual photos
const galleryImages: GalleryImage[] = [
  // Landscape
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    alt: "Mountain sunrise",
    category: "landscape",
    aspectRatio: "landscape",
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
    alt: "Alpine peaks",
    category: "landscape",
    aspectRatio: "portrait",
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800",
    alt: "Lake reflection",
    category: "landscape",
    aspectRatio: "landscape",
  },
  // Astronomy
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800",
    alt: "Starry mountains",
    category: "astronomy",
    aspectRatio: "landscape",
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800",
    alt: "Milky way",
    category: "astronomy",
    aspectRatio: "landscape",
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800",
    alt: "Night sky",
    category: "astronomy",
    aspectRatio: "portrait",
  },
  // Portrait
  {
    id: "7",
    src: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800",
    alt: "Portrait 1",
    category: "portrait",
    aspectRatio: "square",
  },
  {
    id: "8",
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",
    alt: "Portrait 2",
    category: "portrait",
    aspectRatio: "landscape",
  },
  {
    id: "9",
    src: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800",
    alt: "Portrait 3",
    category: "portrait",
    aspectRatio: "square",
  },
];

export default function GalleryPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
        Gallery
      </h1>
      <p className="text-muted text-center mb-16 max-w-2xl mx-auto">
        As a Level-2 certified mountaineer, I have summited peaks over 7,000 meters. I am also a contracted photographer. Join me and explore the world through my lens.
      </p>

      <GalleryGrid images={galleryImages} />
    </div>
  );
}
