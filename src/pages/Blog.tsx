import Layout from "@/components/Layout";
import { Share2, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const posts = [
  {
    slug: "tournament-recap-2025",
    title: "Tournament Recap: Manila Youth Open 2025",
    excerpt: "Ave takes home gold in the Youth Division at this year's Manila Youth Open. Here's a full recap of the fights and key moments.",
    date: "2025-03-20",
    category: "Tournament",
  },
  {
    slug: "training-camp-update",
    title: "Inside the Training Camp: Preparing for Nationals",
    excerpt: "A behind-the-scenes look at Ave's intense training regimen as the team prepares for the Philippine National Championship.",
    date: "2025-03-12",
    category: "Training",
  },
  {
    slug: "new-belt-ceremony",
    title: "Belt Promotion: The Road to Black Belt",
    excerpt: "Reflecting on the journey from white belt to 1st Dan black belt — the milestones, challenges, and growth along the way.",
    date: "2025-02-28",
    category: "Milestone",
  },
  {
    slug: "youtube-milestone",
    title: "YouTube Channel Hits New Milestone!",
    excerpt: "Thank you to everyone who has subscribed and supported Ave's Fight Channel. Here's what's coming next for the channel.",
    date: "2025-02-15",
    category: "News",
  },
];

const Blog = () => {
  const share = (title: string) => {
    if (navigator.share) {
      navigator.share({ title, url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied!");
    }
  };

  return (
    <Layout>
      <section className="pt-28 section-padding">
        <div className="container mx-auto max-w-3xl">
          <h1 className="font-heading text-4xl md:text-5xl uppercase text-center mb-2 text-foreground">
            Blog & <span className="text-primary">News</span>
          </h1>
          <p className="text-muted-foreground text-center mb-10">
            Tournament updates, training tips, and the latest from Ave
          </p>

          <div className="flex flex-col gap-6">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-card border border-border rounded-sm p-6 card-hover"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-primary font-heading uppercase tracking-wider">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-3 text-muted-foreground text-xs">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" /> {post.date}
                    </span>
                    <button
                      onClick={() => share(post.title)}
                      className="hover:text-primary transition-colors"
                      aria-label="Share post"
                    >
                      <Share2 className="h-3 w-3" />
                    </button>
                  </div>
                </div>
                <h2 className="font-heading text-xl uppercase text-foreground mb-2">
                  {post.title}
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {post.excerpt}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
