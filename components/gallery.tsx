"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ZoomIn, Eye } from "lucide-react";
import Image from "next/image";
import { Lightbox } from "./lightbox";

interface GalleryImage {
  src: string;
  alt: string;
  title?: string;
  category?: string;
}

interface GalleryProps {
  images: GalleryImage[];
  className?: string;
}

export function Gallery({ images, className = "" }: GalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const navigateToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <>
      <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
        {images.map((image, index) => (
          <Card
            key={index}
            className="glass-card overflow-hidden rounded-2xl group cursor-pointer hover:neon-glow transition-all duration-300 relative"
            onClick={() => openLightbox(index)}
          >
            <div className="aspect-square relative">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center space-x-2">
                  <div className="glass-card p-3 rounded-full border border-neon/30">
                    <ZoomIn className="w-6 h-6 text-neon" />
                  </div>
                  <div className="glass-card p-3 rounded-full border border-neon/30">
                    <Eye className="w-6 h-6 text-neon" />
                  </div>
                </div>
              </div>

              {/* Category Badge */}
              {image.category && (
                <div className="absolute top-3 left-3">
                  <Badge className="neon-gradient text-black font-semibold px-2 py-1 text-xs rounded-full">
                    {image.category}
                  </Badge>
                </div>
              )}

              {/* Image Counter */}
              <div className="absolute bottom-3 right-3 glass-card px-2 py-1 rounded-full text-xs text-white border border-white/20">
                {index + 1} / {images.length}
              </div>
            </div>

            {/* Image Title */}
            {image.title && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-white font-semibold text-sm">
                  {image.title}
                </h3>
              </div>
            )}
          </Card>
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        images={images}
        isOpen={lightboxOpen}
        currentIndex={currentImageIndex}
        onClose={closeLightbox}
        onNavigate={navigateToImage}
      />
    </>
  );
}
