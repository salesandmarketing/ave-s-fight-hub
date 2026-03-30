import { useState } from "react";
import Layout from "@/components/Layout";
import { Share2 } from "lucide-react";

const categories = ["All", "Fights", "Training", "Vlogs"] as const;

const videos = [
  { id: "dQw4w9WgXcQ", title: "Tournament Highlights 2025", category: "Fights", date: "2025-03-15" },
  { id: "dQw4w9WgXcQ", title: "Morning Training Routine", category: "Training", date: "2025-03-10" },
  { id: "dQw4w9WgXcQ", title: "Day in the Life of a Young Fighter", category: "Vlogs", date: "2025-03-05" },
  { id: "dQw4w9WgXcQ", title: "Regional Championship Fight", category: "Fights", date: "2025-02-28" },
  { id: "dQw4w9WgXcQ", title: "Speed & Agility Drills", category: "Training", date: "2025-02-20" },
  { id: "dQw4w9WgXcQ", title: "Behind the Scenes at Nationals", category: "Vlogs", date: "2025-02-14" },
  { id: "dQw4w9WgXcQ", title: "Sparring Practice Session", category: "Training", date: "2025-02-01" },
  { id: "dQw4w9WgXcQ", title: "My First International Fight", category: "Fights", date: "2025-01-20" },
  { id: "dQw4w9WgXcQ", title: "Q&A with Fans", category: "Vlogs", date: "2025-01-10" },
];

const shareVideo = (title: string) => {
  if (navigator.share) {
    navigator.share({ title, url: window.location.href });
  } else {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied!");
  }
};

const Videos = () => {
  const [active, setActive] = useState<typeof categories[number]>("All");
  const filtered = active === "All" ? videos : videos.filter((v) => v.category === active);

  return (
    <Layout>
      <section className="pt-28 section-padding">
        <div className="container mx-auto">
          <h1 className="font-heading text-4xl md:text-5xl uppercase text-center mb-2 text-foreground">
            Videos & <span className="text-primary">Content</span>
          </h1>
          <p className="text-muted-foreground text-center mb-8">
            Watch Ave's latest fights, training sessions, and vlogs
          </p>

          {/* Category Tabs */}
          <div className="flex justify-center gap-2 mb-10 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`font-heading text-sm uppercase tracking-wider px-6 py-2 rounded-sm transition-all ${
                  active === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((video, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-sm overflow-hidden card-hover"
              >
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-primary font-heading uppercase tracking-wider">
                      {video.category}
                    </span>
                    <button
                      onClick={() => shareVideo(video.title)}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="Share video"
                    >
                      <Share2 className="h-4 w-4" />
                    </button>
                  </div>
                  <h3 className="font-heading text-lg uppercase text-foreground">
                    {video.title}
                  </h3>
                  <p className="text-muted-foreground text-xs mt-1">{video.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JSON-LD for Video Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: videos.map((v, i) => ({
              "@type": "VideoObject",
              position: i + 1,
              name: v.title,
              uploadDate: v.date,
              thumbnailUrl: `https://img.youtube.com/vi/${v.id}/maxresdefault.jpg`,
              contentUrl: `https://www.youtube.com/watch?v=${v.id}`,
            })),
          }),
        }}
      />
    </Layout>
  );
};

export default Videos;
