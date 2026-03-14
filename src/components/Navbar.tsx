import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Heart } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Pamela" },
  { to: "/tributes", label: "Tributes" },
  { to: "/investigation", label: "Updates" },
  { to: "/media", label: "Media" },
  { to: "/prayer", label: "Prayer" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background shadow-md border-b border-border"
          : "bg-background/80 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="memorial-container flex items-center justify-between h-16">
        <Link to="/" className="font-serif text-lg text-primary font-bold flex items-center gap-2">
          <Heart size={18} className="text-accent" />
          P.T. Memorial
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium px-3 py-2 rounded-lg transition-all duration-200 ${
                location.pathname === link.to
                  ? "text-accent bg-accent/10"
                  : "text-muted-foreground hover:text-primary hover:bg-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/submit-tribute"
            className="ml-2 text-sm font-semibold px-4 py-2 rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-105 transition-all duration-200"
          >
            Share Tribute
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-primary hover:bg-muted rounded-lg transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-[500px] pb-6" : "max-h-0"
        }`}
      >
        <div className="memorial-container flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm py-2 px-3 rounded-lg font-medium transition-all duration-200 ${
                location.pathname === link.to
                  ? "text-accent bg-accent/10"
                  : "text-muted-foreground hover:text-primary hover:bg-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/submit-tribute"
            className="text-sm font-semibold px-3 py-2 rounded-lg bg-accent text-accent-foreground mt-2"
          >
            Share a Tribute
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
