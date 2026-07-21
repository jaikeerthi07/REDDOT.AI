import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Search, Globe, Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const nextIsScrolled = window.scrollY > 50;
      setIsScrolled(current =>
        current === nextIsScrolled ? current : nextIsScrolled
      );
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Services", href: "/#services" },
    { label: "Industries", href: "/industries" },
    { label: "Blog", href: "/blog" },
    { label: "Career", href: "/career" },
    { label: "Internships", href: "/internship" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex items-center justify-between h-20 gap-4 lg:gap-8">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-3 cursor-pointer py-1 mr-4 lg:mr-8 shrink-0"
          whileHover={{ scale: 1.05 }}
          onClick={() => (window.location.href = "/")}
        >
          <img
            loading="lazy"
            decoding="async"
            src="/images/reddot-logo-navbar.png"
            alt="REDDOT Logo"
            width={64}
            height={64}
            className="h-14 w-14 sm:h-16 sm:w-16 object-contain"
          />
          <span className="text-3xl sm:text-4xl font-extrabold text-gradient tracking-tight">
            REDDOT
          </span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-8 flex-1 justify-center">
          {navItems.map(item => (
            <motion.a
              key={item.label}
              href={item.href}
              className="text-slate-600 hover:text-slate-900 transition-colors relative group"
              whileHover={{ y: -2 }}
            >
              {item.label}
              <motion.span
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-primary"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <motion.button
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Search size={20} className="text-slate-600" />
          </motion.button>

          {/* Language Selector */}
          <motion.button
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Globe size={20} className="text-slate-600" />
          </motion.button>

          {/* Dark Mode Toggle */}
          <motion.button
            onClick={toggleTheme}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {theme === "dark" ? (
              <Sun size={20} className="text-slate-600" />
            ) : (
              <Moon size={20} className="text-slate-600" />
            )}
          </motion.button>

          {/* Book Consultation Button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() =>
                window.dispatchEvent(new CustomEvent("open-booking"))
              }
              className="hidden sm:inline-flex bg-gradient-primary text-white hover:shadow-lg transition-shadow"
            >
              Book Consultation
            </Button>
          </motion.div>

          {/* Mobile Menu Toggle */}
          <motion.button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? (
              <X size={24} className="text-foreground" />
            ) : (
              <Menu size={24} className="text-foreground" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden border-t border-border"
      >
        <div className="container py-4 flex flex-col gap-4">
          {navItems.map(item => (
            <motion.a
              key={item.label}
              href={item.href}
              className="text-slate-500 hover:text-slate-900 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
              whileHover={{ x: 4 }}
            >
              {item.label}
            </motion.a>
          ))}
          <Button
            onClick={() => {
              setIsMobileMenuOpen(false);
              window.dispatchEvent(new CustomEvent("open-booking"));
            }}
            className="w-full bg-gradient-primary text-white"
          >
            Book Consultation
          </Button>
        </div>
      </motion.div>
    </motion.nav>
  );
}
