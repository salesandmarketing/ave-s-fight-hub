import { Youtube, Instagram, Facebook, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-heading text-xl uppercase tracking-wider text-primary mb-4">
              Ave's Fight Channel
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Young Fighter. Big Dreams. Follow Ave's journey as a rising
              Filipino taekwondo star and YouTube creator.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-sm uppercase tracking-widest text-foreground mb-4">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Videos", to: "/videos" },
                { label: "About Ave", to: "/about" },
                { label: "Gallery", to: "/gallery" },
                { label: "Schedule", to: "/schedule" },
                { label: "Contact", to: "/contact" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading text-sm uppercase tracking-widest text-foreground mb-4">
              Follow Ave
            </h4>
            <div className="flex gap-4">
              <a
                href="https://youtube.com/@avetaekwondo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="mailto:contact@avesfightchannel.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
            <div className="mt-6">
              <h4 className="font-heading text-sm uppercase tracking-widest text-foreground mb-2">
                Newsletter
              </h4>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thanks for subscribing!");
                }}
                className="flex gap-2"
              >
                <input
                  type="email"
                  placeholder="Your email"
                  required
                  className="bg-background border border-border rounded-sm px-3 py-2 text-sm flex-1 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="bg-primary text-primary-foreground px-4 py-2 rounded-sm font-heading text-xs uppercase tracking-wider hover:bg-fighter-red-glow transition-colors"
                >
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center text-muted-foreground text-xs">
          © {new Date().getFullYear()} Ave's Fight Channel. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
