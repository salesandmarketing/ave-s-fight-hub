import { useState } from "react";
import Layout from "@/components/Layout";
import { Send, Youtube, Instagram, Facebook } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  organization: z.string().trim().max(200).optional(),
  inquiryType: z.enum(["Sponsorship", "Collaboration", "Media", "Fan Mail"]),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    organization: "",
    inquiryType: "Fan Mail",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const update = (field: string, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: "" }));
  };

  return (
    <Layout>
      <section className="pt-28 section-padding">
        <div className="container mx-auto max-w-2xl">
          <h1 className="font-heading text-4xl md:text-5xl uppercase text-center mb-2 text-foreground">
            Contact & <span className="text-primary">Sponsorship</span>
          </h1>
          <p className="text-muted-foreground text-center mb-10">
            Get in touch for sponsorships, collaborations, or just to say hi!
          </p>

          {submitted ? (
            <div className="bg-card border border-primary rounded-sm p-10 text-center">
              <Send className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="font-heading text-2xl uppercase text-foreground mb-2">
                Message Sent!
              </h2>
              <p className="text-muted-foreground">
                Thanks for reaching out. We'll get back to you soon!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {(["name", "email", "organization"] as const).map((field) => (
                <div key={field}>
                  <label className="block font-heading text-xs uppercase tracking-wider text-foreground mb-2">
                    {field === "organization" ? "Organization (optional)" : field}
                  </label>
                  <input
                    type={field === "email" ? "email" : "text"}
                    value={form[field]}
                    onChange={(e) => update(field, e.target.value)}
                    className="w-full bg-card border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder={`Your ${field}`}
                  />
                  {errors[field] && (
                    <p className="text-destructive text-xs mt-1">{errors[field]}</p>
                  )}
                </div>
              ))}

              <div>
                <label className="block font-heading text-xs uppercase tracking-wider text-foreground mb-2">
                  Inquiry Type
                </label>
                <select
                  value={form.inquiryType}
                  onChange={(e) => update("inquiryType", e.target.value)}
                  className="w-full bg-card border border-border rounded-sm px-4 py-3 text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  {["Sponsorship", "Collaboration", "Media", "Fan Mail"].map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-heading text-xs uppercase tracking-wider text-foreground mb-2">
                  Message
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  rows={5}
                  className="w-full bg-card border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                  placeholder="Your message..."
                />
                {errors.message && (
                  <p className="text-destructive text-xs mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-4 rounded-sm font-heading uppercase tracking-wider text-sm hover:bg-fighter-red-glow transition-all flex items-center justify-center gap-2"
              >
                <Send className="h-4 w-4" /> Send Message
              </button>
            </form>
          )}

{/* Social Media Links */}
          <div className="mt-16 pt-10 border-t border-border text-center">
            <p className="text-muted-foreground text-sm mb-6">
              Or follow us on social media
            </p>
            
            <div className="flex justify-center gap-8">
              {/* YouTube - Main Channel */}
              <a 
                href="https://www.youtube.com/@AvesFightChannel"   // ← CHANGE TO YOUR REAL LINK
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-red-500 transition-colors group"
                aria-label="YouTube"
              >
                <Youtube className="h-10 w-10 group-hover:scale-110 transition-transform" />
                <p className="text-xs mt-1 text-red-500">YouTube</p>
              </a>

              {/* Instagram */}
              <a 
                href="https://www.instagram.com/avesfightchannel"   // ← CHANGE TO REAL LINK
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-pink-500 transition-colors group"
                aria-label="Instagram"
              >
                <Instagram className="h-10 w-10 group-hover:scale-110 transition-transform" />
                <p className="text-xs mt-1 text-pink-500">Instagram</p>
              </a>

              {/* Facebook */}
              <a 
                href="https://www.instagram.com/ahniaespinosa"   // ← CHANGE TO REAL LINK
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-blue-500 transition-colors group"
                aria-label="Facebook"
              >
                <Facebook className="h-10 w-10 group-hover:scale-110 transition-transform" />
                <p className="text-xs mt-1 text-blue-500">Facebook</p>
              </a>
            </div>

            <p className="text-xs text-muted-foreground mt-8">
              Subscribe for the latest fights, training videos & tournament highlights!
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
