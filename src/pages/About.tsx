import Layout from "@/components/Layout";
import profileImg from "@/assets/ave-profile.jpg";
import { Trophy, Star, Target, Heart } from "lucide-react";

const milestones = [
  { year: "2019", title: "Started Taekwondo Training", desc: "Began the martial arts journey at a local dojang" },
  { year: "2020", title: "First Tournament Win", desc: "Won gold at the regional youth championship" },
  { year: "2021", title: "YouTube Channel Launch", desc: "Started @avetaekwondo to share the journey" },
  { year: "2022", title: "National Competition", desc: "Competed at the Philippine National Taekwondo Championship" },
  { year: "2023", title: "Black Belt Achieved", desc: "Earned 1st Dan black belt after years of dedication" },
  { year: "2024", title: "International Debut", desc: "First international competition representing the Philippines" },
  { year: "2025", title: "Growing the Brand", desc: "Building Ave's Fight Channel and inspiring young fighters" },
];

const About = () => {
  return (
    <Layout>
      <section className="pt-28 section-padding">
        <div className="container mx-auto max-w-5xl">
          <h1 className="font-heading text-4xl md:text-5xl uppercase text-center mb-12 text-foreground">
            About <span className="text-primary">Ave</span>
          </h1>

          {/* Bio Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20">
            <div className="relative">
              <div className="aspect-square rounded-sm overflow-hidden glow-red">
                <img
                  src={profileImg}
                  alt="Ave - Young Filipino Taekwondo Fighter"
                  className="w-full h-full object-cover"
                  width={800}
                  height={800}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-6 py-3 rounded-sm font-heading uppercase text-sm tracking-wider">
                1st Dan Black Belt
              </div>
            </div>
            <div>
              <h2 className="font-heading text-2xl uppercase mb-4 text-foreground">
                Young Fighter. <span className="text-primary">Big Dreams.</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Ave is a young Filipino taekwondo fighter from the Philippines with a
                passion for martial arts and a dream to compete on the world stage.
                Starting training at an early age, Ave has quickly risen through the ranks,
                earning medals at regional and national competitions.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Beyond the mat, Ave shares the journey on YouTube as @avetaekwondo,
                creating content that inspires other young athletes to pursue their
                martial arts dreams. From training vlogs to fight highlights, every
                video captures the dedication and spirit of a true fighter.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Trophy, label: "25+ Medals" },
                  { icon: Star, label: "1st Dan Black Belt" },
                  { icon: Target, label: "National Competitor" },
                  { icon: Heart, label: "100+ Videos" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 bg-card border border-border rounded-sm p-3"
                  >
                    <item.icon className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm text-foreground">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Timeline */}
          <h2 className="font-heading text-3xl uppercase text-center mb-10 text-foreground">
            The <span className="text-primary">Journey</span>
          </h2>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />
            <div className="flex flex-col gap-8">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`relative flex items-start gap-6 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } ml-10 md:ml-0`}
                >
                  <div className="hidden md:block flex-1" />
                  <div className="absolute left-[-1.75rem] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10 mt-1" />
                  <div className="flex-1 bg-card border border-border rounded-sm p-6 card-hover">
                    <span className="text-primary font-heading text-sm uppercase tracking-wider">
                      {m.year}
                    </span>
                    <h3 className="font-heading text-lg uppercase text-foreground mt-1">
                      {m.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-2">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
