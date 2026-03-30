import { useState } from "react";
import Layout from "@/components/Layout";
import { X } from "lucide-react";

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=600", alt: "Tournament fight action", category: "Tournament" },
  { src: "https://images.unsplash.com/photo-1564415315949-7a0c4c73aab4?w=600", alt: "Training session kicks", category: "Training" },
  { src: "https://images.unsplash.com/photo-1517438476312-10d79c077509?w=600", alt: "Medal ceremony", category: "Tournament" },
  { src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600", alt: "Stretching routine", category: "Training" },
  { src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600", alt: "Competition warm-up", category: "Event" },
  { src: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=600", alt: "Team photo", category: "Event" },
  { src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600", alt: "Practice sparring", category: "Training" },
  { src: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600", alt: "Award ceremony", category: "Tournament" },
];

const Gallery = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <Layout>
      <section className="pt-28 section-padding">
        <div className="container mx-auto">
          <h1 className="font-heading text-4xl md:text-5xl uppercase text-center mb-2 text-foreground">
            Photo <span className="text-primary">Gallery</span>
          </h1>
          <p className="text-muted-foreground text-center mb-10">
            Moments from tournaments, training, and events
          </p>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryImages.map((img, i) => (
              <button
                key={i}
                onClick={() => setLightbox(i)}
                className="block w-full rounded-sm overflow-hidden card-hover break-inside-avoid"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto"
                  loading="lazy"
                />
                <div className="bg-card p-3 border border-border border-t-0">
                  <span className="text-xs text-primary font-heading uppercase tracking-wider">
                    {img.category}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-background/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors"
            aria-label="Close lightbox"
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={galleryImages[lightbox].src.replace("w=600", "w=1200")}
            alt={galleryImages[lightbox].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-sm"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightbox(lightbox > 0 ? lightbox - 1 : galleryImages.length - 1);
              }}
              className="bg-secondary text-foreground px-4 py-2 rounded-sm font-heading text-sm uppercase"
            >
              Prev
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightbox(lightbox < galleryImages.length - 1 ? lightbox + 1 : 0);
              }}
              className="bg-secondary text-foreground px-4 py-2 rounded-sm font-heading text-sm uppercase"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
