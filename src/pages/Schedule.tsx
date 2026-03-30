import Layout from "@/components/Layout";
import { Calendar, MapPin, Trophy } from "lucide-react";

const events = [
  { date: "2025-04-15", name: "Manila Youth Taekwondo Open", location: "Manila, Philippines", type: "Regional" },
  { date: "2025-05-22", name: "Philippine National Championship", location: "Cebu City, Philippines", type: "National" },
  { date: "2025-07-10", name: "Southeast Asian Junior Championship", location: "Bangkok, Thailand", type: "International" },
  { date: "2025-09-05", name: "Mindanao Invitational", location: "Davao, Philippines", type: "Regional" },
  { date: "2025-11-18", name: "Asian Youth Taekwondo Championship", location: "Seoul, South Korea", type: "International" },
];

const Schedule = () => {
  return (
    <Layout>
      <section className="pt-28 section-padding">
        <div className="container mx-auto max-w-3xl">
          <h1 className="font-heading text-4xl md:text-5xl uppercase text-center mb-2 text-foreground">
            Schedule & <span className="text-primary">Events</span>
          </h1>
          <p className="text-muted-foreground text-center mb-10">
            Upcoming tournaments and competitions
          </p>

          <div className="flex flex-col gap-4">
            {events.map((event, i) => {
              const date = new Date(event.date);
              return (
                <div
                  key={i}
                  className="bg-card border border-border rounded-sm p-6 card-hover flex flex-col sm:flex-row gap-4 items-start"
                >
                  <div className="bg-primary text-primary-foreground rounded-sm p-4 text-center min-w-[80px] shrink-0">
                    <p className="font-heading text-2xl leading-none">
                      {date.getDate()}
                    </p>
                    <p className="font-heading text-xs uppercase tracking-wider mt-1">
                      {date.toLocaleString("en", { month: "short" })}
                    </p>
                    <p className="text-xs opacity-70">{date.getFullYear()}</p>
                  </div>
                  <div className="flex-1">
                    <span className="text-xs text-primary font-heading uppercase tracking-wider">
                      {event.type}
                    </span>
                    <h3 className="font-heading text-xl uppercase text-foreground mt-1">
                      {event.name}
                    </h3>
                    <div className="flex items-center gap-4 mt-2 text-muted-foreground text-sm">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" /> {event.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />{" "}
                        {date.toLocaleDateString("en", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                  </div>
                  <Trophy className="h-6 w-6 text-primary shrink-0 hidden sm:block" />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Schedule;
