import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Videos", to: "/videos" },
  { label: "About", to: "/about" },
  { label: "Gallery", to: "/gallery" },
  { label: "Schedule", to: "/schedule" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Ave's Fight Channel" className="h-10 w-10" />
          <span className="font-heading text-xl font-bold uppercase tracking-wider text-primary">
            Ave's Fight Channel
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-heading text-sm uppercase tracking-widest transition-colors hover:text-primary ${
                location.pathname === link.to ? "text-primary" : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://youtube.com/@avetaekwondo"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-4 py-2 rounded-sm font-heading text-sm uppercase tracking-wider flex items-center gap-2 hover:bg-fighter-red-glow transition-colors"
          >
            <Youtube className="h-4 w-4" /> Subscribe
          </a>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-foreground p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <nav className="lg:hidden bg-background/98 backdrop-blur-md border-t border-border">
          <div className="container mx-auto py-4 px-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-heading text-lg uppercase tracking-wider py-2 transition-colors hover:text-primary ${
                  location.pathname === link.to ? "text-primary" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://youtube.com/@avetaekwondo"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-4 py-3 rounded-sm font-heading text-center uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <Youtube className="h-5 w-5" /> Subscribe on YouTube
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
