import { useState } from "react";
import Layout from "@/components/Layout";
import { X } from "lucide-react";

const galleryImages = [
  { 
    src: "https://res.cloudinary.com/drt31kff9/image/upload/f_auto,q_auto,w_600/v1774861576/627245366_2517422395342278_8531410530018598950_n_oxqwhs.jpg", 
    alt: "Training session kicks", 
    category: "Training" 
  },
  { 
    src: "https://res.cloudinary.com/drt31kff9/image/upload/f_auto,q_auto,w_600/v1774861576/598041225_2475844699500048_1011848455986470366_n_evrqab.jpg", 
    alt: "Medal ceremony", 
    category: "Tournament" 
  },
  { 
    src: "https://res.cloudinary.com/drt31kff9/image/upload/f_auto,q_auto,w_600/v1774861576/624833514_1531325129003798_4791431334845355784_n_dfal5g.jpg", 
    alt: "Stretching routine", 
    category: "Training" 
  },
  { 
    src: "https://res.cloudinary.com/drt31kff9/image/upload/f_auto,q_auto,w_600/v1774861576/hero-bg_hcyghm.jpg", 
    alt: "Competition warm-up", 
    category: "Event" 
  },
  { 
    src: "https://res.cloudinary.com/drt31kff9/image/upload/f_auto,q_auto,w_600/v1774861575/651002689_2551857435232107_681979721076229112_n_ozxo7l.jpg", 
    alt: "Team photo", 
    category: "Event" 
  },
  { 
    src: "https://res.cloudinary.com/drt31kff9/image/upload/f_auto,q_auto,w_600/v1774861575/571163333_2433280447089807_6973816351425343919_n_zyqncn.jpg", 
    alt: "Practice sparring", 
    category: "Training" 
  },
  { 
    src: "https://res.cloudinary.com/drt31kff9/image/upload/f_auto,q_auto,w_600/v1774861418/626699294_2517422278675623_7495843932256023326_n_-_Copy_ows7bd.jpg", 
    alt: "Award ceremony", 
    category: "Tournament" 
  }
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
            src={galleryImages[lightbox].src.replace("w_600", "w_1200")}
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
