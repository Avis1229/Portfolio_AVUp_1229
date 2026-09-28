import { cn } from "@/lib/utils";
import ProfileImg from "@/assets/profile.jpg";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const currentItem = navItems.find((item) => item.href === `#${id}`);
          if (currentItem) {
            setActiveSection(currentItem.name);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    setTimeout(() => {
      navItems.forEach((item) => {
        const id = item.href.substring(1);
        const element = document.getElementById(id);
        if (element) observer.observe(element);
      });
    }, 100);
    return () => observer.disconnect();
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed w-full z-40 transition-all duration-300",
          isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <a
            className="text-xl font-bold text-primary flex items-center gap-3"
            href="#hero"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="relative z-10 flex items-center">
              <img src={ProfileImg} alt="Avi" className="inline-block h-8 w-8 rounded-full mr-3 object-cover border-2 border-primary/30" />
              <span className="text-glow text-foreground">Avi Singh</span>
            </span>
          </a>

          {/* desktop nav */}
          <div className="hidden md:flex space-x-2">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className={cn(
                  "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  activeSection === item.name
                    ? "text-primary bg-primary/10"
                    : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                )}
              >
                {item.name}
                {activeSection === item.name && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3/4 h-0.5 bg-primary rounded-full"></span>
                )}
              </a>
            ))}
          </div>

          {/* mobile nav trigger */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden p-2 text-foreground z-50"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* mobile nav overlay - moved outside nav to avoid backdrop-blur bug */}
      <div
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-md z-30 flex flex-col items-center justify-center",
          "transition-all duration-300 md:hidden",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col space-y-8 text-xl text-center">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className={cn(
                "relative transition-colors duration-300",
                activeSection === item.name ? "text-primary font-bold" : "text-foreground/80 hover:text-primary"
              )}
              onClick={() => {
                setIsMenuOpen(false);
                setActiveSection(item.name);
              }}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};
