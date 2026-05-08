"use client";

import type React from "react";

import { useState, useEffect, useCallback } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  RotateCw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface LightboxProps {
  images: Array<{ src: string; alt: string; title?: string }>;
  isOpen: boolean;
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function Lightbox({
  images,
  isOpen,
  currentIndex,
  onClose,
  onNavigate,
}: LightboxProps) {
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);

  const currentImage = images[currentIndex];

  // Reset transform when image changes
  useEffect(() => {
    setZoom(1);
    setRotation(0);
    setPosition({ x: 0, y: 0 });
    setIsLoading(true);
  }, [currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          handlePrevious();
          break;
        case "ArrowRight":
          handleNext();
          break;
        case "+":
        case "=":
          handleZoomIn();
          break;
        case "-":
          handleZoomOut();
          break;
        case "r":
        case "R":
          handleRotate();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handlePrevious = useCallback(() => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    onNavigate(newIndex);
  }, [currentIndex, images.length, onNavigate]);

  const handleNext = useCallback(() => {
    const newIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    onNavigate(newIndex);
  }, [currentIndex, images.length, onNavigate]);

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev * 1.5, 5));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev / 1.5, 0.5));
  };

  const handleRotate = () => {
    setRotation((prev) => prev + 90);
  };

  const handleReset = () => {
    setZoom(1);
    setRotation(0);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoom > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 glass-card border-b border-white/10">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-4">
            <h3 className="text-white font-semibold">
              {currentImage?.title ||
                `Image ${currentIndex + 1} of ${images.length}`}
            </h3>
            <div className="text-gray-400 text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {/* Zoom Controls */}
            <Button
              onClick={handleZoomOut}
              disabled={zoom <= 0.5}
              className="glass-card text-white hover:neon-gradient hover:text-black border border-neon/30 p-2"
              size="sm"
            >
              <ZoomOut className="w-4 h-4" />
            </Button>
            <span className="text-white text-sm min-w-[60px] text-center">
              {Math.round(zoom * 100)}%
            </span>
            <Button
              onClick={handleZoomIn}
              disabled={zoom >= 5}
              className="glass-card text-white hover:neon-gradient hover:text-black border border-neon/30 p-2"
              size="sm"
            >
              <ZoomIn className="w-4 h-4" />
            </Button>

            {/* Rotate */}
            <Button
              onClick={handleRotate}
              className="glass-card text-white hover:neon-gradient hover:text-black border border-neon/30 p-2"
              size="sm"
            >
              <RotateCw className="w-4 h-4" />
            </Button>

            {/* Reset */}
            <Button
              onClick={handleReset}
              className="glass-card text-white hover:neon-gradient hover:text-black border border-neon/30 px-3 py-2"
              size="sm"
            >
              Reset
            </Button>

            {/* Close */}
            <Button
              onClick={onClose}
              className="glass-card text-white hover:neon-gradient hover:text-black border border-neon/30 p-2"
              size="sm"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex items-center justify-center h-full pt-20 pb-4">
        {/* Previous Button */}
        <Button
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 glass-card text-white hover:neon-gradient hover:text-black border border-neon/30 p-3 rounded-full neon-glow-hover"
          disabled={images.length <= 1}
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>

        {/* Image Container */}
        <div
          className="relative max-w-[90vw] max-h-[80vh] overflow-hidden cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {/* Loading Spinner */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10">
              <div className="w-8 h-8 border-2 border-neon border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}

          {/* Image */}
          <div
            className="transition-transform duration-300 ease-out"
            style={{
              transform: `translate(${position.x}px, ${position.y}px) scale(${zoom}) rotate(${rotation}deg)`,
              transformOrigin: "center center",
            }}
          >
            <Image
              src={currentImage?.src || "/placeholder.svg"}
              alt={currentImage?.alt || "Gallery image"}
              width={1200}
              height={800}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              onLoad={handleImageLoad}
              priority
            />
          </div>
        </div>

        {/* Next Button */}
        <Button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 glass-card text-white hover:neon-gradient hover:text-black border border-neon/30 p-3 rounded-full neon-glow-hover"
          disabled={images.length <= 1}
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>

      {/* Thumbnail Strip */}
      <div className="absolute bottom-0 left-0 right-0 glass-card border-t border-white/10">
        <div className="flex items-center justify-center p-4 space-x-2 overflow-x-auto">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => onNavigate(index)}
              className={`relative flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                index === currentIndex
                  ? "border-neon shadow-lg shadow-neon/30"
                  : "border-white/20 hover:border-neon/50"
              }`}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="64px"
              />
              {index === currentIndex && (
                <div className="absolute inset-0 bg-neon/20 flex items-center justify-center">
                  <div className="w-2 h-2 bg-neon rounded-full"></div>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Keyboard Shortcuts Help */}
      <div className="absolute top-20 right-4 glass-card p-3 rounded-lg border border-white/10 text-xs text-gray-300 hidden lg:block">
        <div className="space-y-1">
          <div>
            <kbd className="px-1 py-0.5 bg-white/10 rounded text-xs">←→</kbd>{" "}
            Navigate
          </div>
          <div>
            <kbd className="px-1 py-0.5 bg-white/10 rounded text-xs">+/-</kbd>{" "}
            Zoom
          </div>
          <div>
            <kbd className="px-1 py-0.5 bg-white/10 rounded text-xs">R</kbd>{" "}
            Rotate
          </div>
          <div>
            <kbd className="px-1 py-0.5 bg-white/10 rounded text-xs">Esc</kbd>{" "}
            Close
          </div>
        </div>
      </div>
    </div>
  );
}
