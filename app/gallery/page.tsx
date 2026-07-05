import { Metadata } from "next";
import GalleryGrid, { GalleryImage } from "@/components/GalleryGrid";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Gallery | Yanfei Dai",
  description: "Photography, hiking, and travel photos by Yanfei Dai.",
};

const galleryImages: GalleryImage[] = [
  // Astronomy
  { id: "1", src: "/images/gallery/astronomy/astronomy-1.jpeg", alt: "Astronomy 1", category: "astronomy", aspectRatio: "landscape" },
  { id: "2", src: "/images/gallery/astronomy/astronomy-2.jpeg", alt: "Astronomy 2", category: "astronomy", aspectRatio: "landscape" },
  { id: "3", src: "/images/gallery/astronomy/astronomy-3.png", alt: "Astronomy 3", category: "astronomy", aspectRatio: "landscape" },
  { id: "4", src: "/images/gallery/astronomy/astronomy-4.png", alt: "Astronomy 4", category: "astronomy", aspectRatio: "landscape" },
  // Landscape
  { id: "5", src: "/images/gallery/landscape-2.jpeg", alt: "Landscape 1", category: "landscape", aspectRatio: "landscape" },
  { id: "6", src: "/images/gallery/landscape-3.jpeg", alt: "Landscape 2", category: "landscape", aspectRatio: "landscape" },
  { id: "7", src: "/images/gallery/landscape-4.jpeg", alt: "Landscape 3", category: "landscape", aspectRatio: "landscape" },
  { id: "8", src: "/images/gallery/landscape-5.jpeg", alt: "Landscape 4", category: "landscape", aspectRatio: "landscape" },
  { id: "9", src: "/images/gallery/landscape-6.jpeg", alt: "Landscape 5", category: "landscape", aspectRatio: "landscape" },
  { id: "10", src: "/images/gallery/landscape-7.jpeg", alt: "Landscape 6", category: "landscape", aspectRatio: "landscape" },
  { id: "11", src: "/images/gallery/landscape-8.jpeg", alt: "Landscape 7", category: "landscape", aspectRatio: "landscape" },
  { id: "12", src: "/images/gallery/landscape-9.jpeg", alt: "Landscape 8", category: "landscape", aspectRatio: "landscape" },
  { id: "13", src: "/images/gallery/landscape-10.jpeg", alt: "Landscape 9", category: "landscape", aspectRatio: "landscape" },
  { id: "14", src: "/images/gallery/landscape-11.jpeg", alt: "Landscape 10", category: "landscape", aspectRatio: "landscape" },
  { id: "15", src: "/images/gallery/landscape-12.jpeg", alt: "Landscape 11", category: "landscape", aspectRatio: "landscape" },
  { id: "16", src: "/images/gallery/landscape-13.jpeg", alt: "Landscape 12", category: "landscape", aspectRatio: "landscape" },
];

export default function GalleryPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <PageHeader
        overline="fig. 06 — field notes, expanded"
        title={
          <>
            Light, <em className="font-serif italic">collected</em>
          </>
        }
        lede="Night skies and mountain ranges — what I bring back when I'm away from the keyboard."
      />

      <GalleryGrid images={galleryImages} />
    </div>
  );
}
