import { Link } from "react-router-dom";
import { Heart, Mail, MapPin, ExternalLink } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground mt-20">
    <div className="memorial-container py-16">
      <div className="text-center mb-10">
        <Heart size={24} className="text-accent mx-auto mb-3" />
        <p className="font-serif text-2xl italic mb-2 text-primary-foreground">
          "Her legacy lives in the students she guided."
        </p>
        <p className="text-primary-foreground/50 text-sm">Pamela Tumwebaze • 1963 — 2026</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-sm opacity-80">
        <div>
          <h4 className="font-semibold mb-3 text-accent opacity-100">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Pamela" },
              { to: "/tributes", label: "Memories & Tributes" },
              { to: "/investigation", label: "Investigation Updates" },
            ].map((link) => (
              <Link key={link.to} to={link.to} className="hover:text-accent hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-accent opacity-100">More</h4>
          <div className="flex flex-col gap-2">
            {[
              { to: "/media", label: "Media & Articles" },
              { to: "/submit-tribute", label: "Submit a Tribute" },
              { to: "/prayer", label: "Prayer & Reflection" },
            ].map((link) => (
              <Link key={link.to} to={link.to} className="hover:text-accent hover:translate-x-1 transition-all duration-200">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-accent opacity-100">Contact</h4>
          <div className="flex items-center gap-2 mb-2">
            <Mail size={14} className="text-accent" />
            <span>memorial@pamelatumwebaze.org</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-accent" />
            <span>Uganda Christian University, Mukono</span>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center text-sm opacity-50">
        &copy; 2026 Pamela Tumwebaze Memorial. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
