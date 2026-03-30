import { Link } from "react-router-dom";
import { Play, ChevronDown, Trophy, Users, Video } from "lucide-react";
import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { icon: Trophy, label: "Medals Won", value: "25+" },
  { icon: Video, label: "YouTube Videos", value: "100+" },
  { icon: Users, label: "Subscribers", value: "Growing" },
];

const Index = () => {
  return (
    <Layout>
    {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Ave performing a taekwondo kick"
        /* object-[80%_center] slides the photo to the left so Ave stays in frame on phones */
        className="absolute inset-0 w-full h-full object-cover object-[80%_center] sm:object-center"
        width={1920}
        height={1080}
      />
      />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="font-heading text-xs md:text-base uppercase tracking-[0.3em] text-primary mb-4 animate-fade-in-up">
            @avetaekwondo
          </p>
          
        <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl uppercase leading-[0.9] mb-4 animate-fade-in-up text-foreground"
          style={{ animationDelay: "0.1s" }}>
          Ave's Fight
          <br className="block sm:hidden" /> 
          <span className="block text-gradient-fire">Channel</span>
        </h1>

          <p
            className="text-base md:text-2xl text-muted-foreground font-light mb-8 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Young Fighter. Big Dreams.
          </p>

          {/* FIXED: flex-col ensures buttons don't overlap on small screens */}
          <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up"
        style={{ animationDelay: "0.3s" }}
          >
          <a
              href="https://youtube.com/@avetaekwondo"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-4 rounded-sm font-heading uppercase tracking-wider text-sm flex items-center justify-center gap-2 hover:bg-fighter-red-glow transition-all glow-red animate-pulse-glow"
            >
              <Play className="h-5 w-5" /> Watch Now
            </a>
            <Link
              to="/about"
              className="w-full sm:w-auto border border-foreground/30 text-foreground px-8 py-4 rounded-sm font-heading uppercase tracking-wider text-sm hover:bg-foreground/10 transition-all text-center"
            >
              Meet Ave
            </Link>
          </div>
        </div>
        <a
          href="#featured"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown className="h-8 w-8" />
        </a>
      </section>

      {/* Stats */}
      <section className="bg-secondary section-padding" id="featured">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-8 rounded-sm bg-card border border-border card-hover"
              >
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                <p className="font-heading text-3xl uppercase text-foreground">
                  {stat.value}
                </p>
                <p className="text-muted-foreground text-sm uppercase tracking-wider mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Video */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-heading text-3xl md:text-4xl uppercase text-center mb-2 text-foreground">
            Featured <span className="text-primary">Video</span>
          </h2>
          <p className="text-muted-foreground text-center mb-8">
            Check out the latest from Ave's YouTube channel
          </p>
          <div className="aspect-video rounded-sm overflow-hidden glow-red">
            <iframe
              src="https://www.youtube.com/embed/fdMVEVPwoE0"
              title="Ave Taekwondo - Latest Video"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-red text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="font-heading text-3xl md:text-4xl uppercase mb-4 text-primary-foreground">
            Join the Journey
          </h2>
          <p className="text-primary-foreground/80 mb-8">
            Follow Ave's path from young fighter to champion. Subscribe for the
            latest fights, training content, and behind-the-scenes vlogs.
          </p>
          <a
            href="https://youtube.com/@avetaekwondo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 rounded-sm font-heading uppercase tracking-wider text-sm hover:bg-foreground hover:text-background transition-all"
          >
            <Play className="h-5 w-5" /> Subscribe on YouTube
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
