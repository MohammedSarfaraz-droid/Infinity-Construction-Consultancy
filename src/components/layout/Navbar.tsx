import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";

const links = ["Home", "About", "Services", "Projects", "Blog", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [active, setActive] = useState("Home");

  return (
    <>
      <nav className="sticky top-0 z-40 bg-white/95 dark:bg-brand-charcoal/95 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800 transition-theme">
        <div className="section-container flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <span className="w-3 h-3 bg-brand-yellow" />
            <span className="text-2xl font-black text-brand-text dark:text-white tracking-tight">STRUX</span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                onClick={() => setActive(l)}
                className={`text-sm font-semibold uppercase tracking-wide transition-colors hover:text-brand-yellow ${
                  active === l
                    ? "text-brand-text dark:text-white border-b-2 border-brand-yellow pb-0.5"
                    : "text-brand-muted"
                }`}
              >
                {l}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button onClick={toggleTheme} className="p-2 text-brand-muted hover:text-brand-yellow transition-colors">
              {theme === "light" ? <Moon className="size-5" /> : <Sun className="size-5" />}
            </button>
            <a
              href="#contact"
              className="hidden lg:inline-block bg-brand-yellow text-brand-black font-bold text-sm px-6 py-3 rounded-none hover:bg-brand-yellow-dark transition-colors"
            >
              Get Started
            </a>
            <button onClick={() => setOpen(true)} className="lg:hidden p-2 text-brand-text dark:text-white">
              <Menu className="size-6" />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-brand-black flex flex-col items-center justify-center"
          >
            <button onClick={() => setOpen(false)} className="absolute top-5 right-6 text-white">
              <X className="size-8" />
            </button>
            <div className="flex flex-col items-center gap-6">
              {links.map((l, i) => (
                <motion.a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="text-4xl font-black uppercase text-white hover:text-brand-yellow transition-colors"
                >
                  {l}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
