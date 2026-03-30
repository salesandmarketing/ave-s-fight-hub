import Layout from "@/components/Layout";
import profileImg from "@/assets/ave-profile.jpg";
import { Trophy, Star, Target, Heart, Users, Video, Eye } from "lucide-react";

const milestones = [
  { year: "2016", title: "YouTube Channel Created", desc: "Ave's Fight Channel was born on September 19, 2016" },
  { year: "2022", title: "Ahnia Started Taekwondo", desc: "At age 7, Ahnia began her taekwondo training in October 2022" },
  { year: "2022", title: "First Tournament Gold", desc: "After just two months of training, Ahnia won gold at her first tournament!" },
  { year: "2023", title: "Amber Joins Taekwondo", desc: "Inspired by Ahnia, 12-year-old sister Amber started training five months later" },
  { year: "2024", title: "National Competitions", desc: "Both sisters competed in various national games across the Philippines" },
  { year: "2024", title: "Amber Earns Black Belt", desc: "In under two years, Amber achieved her black belt — remarkable progress!" },
  { year: "2025", title: "Growing the Channel", desc: "119 videos, 1.56K subscribers, and 180K+ views — and still growing!" },
];

const About = () => {
  return (
    <Layout>
      <section className="pt-28 section-padding">
        <div className="container mx-auto max-w-5xl">
          <h1 className="font-heading text-4xl md:text-5xl uppercase text-center mb-12 text-foreground">
            About <span className="text-primary">Ave's Fight Channel</span>
          </h1>

          {/* Bio Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20">
            <div className="relative">
              <div className="aspect-[3/4] rounded-sm overflow-hidden glow-red">
                <img
                  src={profileImg}
                  alt="Ahnia and Amber with medals at Rizal Province Taekwondo Age Group Championship"
                  className="w-full h-full object-cover"
                  width={800}
                  height={1067}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-6 py-3 rounded-sm font-heading uppercase text-sm tracking-wider">
                Sister Fighters
              </div>
            </div>
            <div>
              <h2 className="font-heading text-2xl uppercase mb-4 text-foreground">
                Welcome to <span className="text-primary">Ave's Fight Channel!</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Ahnia began training in taekwondo in October 2022 when she was seven.
                After just two months of training, she competed in her first tournament
                and won a gold medal! This success sparked her passion for taekwondo,
                leading her to compete in various events, including national games.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Amber, Ahnia's 12-year-old sister, was inspired to start learning
                taekwondo five months after Ahnia's triumph. She has shown remarkable
                improvement in her skills, and in under two years, she achieved her black belt!
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                If you want to catch their fights, you can do so on this channel.
                Subscribing would mean a lot to us! Thank you for your support,
                and we hope you enjoy watching!
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Trophy, label: "Gold Medalists" },
                  { icon: Star, label: "Black Belt (Amber)" },
                  { icon: Users, label: "1.56K Subscribers" },
                  { icon: Video, label: "119 Videos" },
                  { icon: Eye, label: "180K+ Views" },
                  { icon: Target, label: "National Competitors" },
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
                  key={m.year + m.title}
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
