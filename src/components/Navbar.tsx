import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Shield } from "lucide-react";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/quienes-somos", label: "Quiénes Somos" },
  { to: "/servicios", label: "Servicios" },
  { to: "/pqrs", label: "PQRS" },
  { to: "/contacto", label: "Contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-24 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className={`grid place-items-center h-11 w-11 rounded-lg transition-colors ${
            scrolled ? "bg-brand-red" : "bg-brand-red"
          }`}>
            <Shield className="h-6 w-6 text-white" strokeWidth={2.5} />
          </div>
          <div className="leading-tight">
            <div className={`text-[15px] font-black tracking-tight ${scrolled ? "text-brand-ink" : "text-white"}`}>
              CORDÓN DE
            </div>
            <div className={`text-[11px] font-bold tracking-widest ${scrolled ? "text-brand-red" : "text-white/90"}`}>
              SEGURIDAD LTDA
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeProps={{ className: "text-brand-red" }}
              className={`text-sm font-semibold relative transition-colors hover:text-brand-red ${
                scrolled ? "text-brand-ink" : "text-white"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/trabaje-con-nosotros"
            className="inline-flex items-center gap-2 rounded-full bg-brand-red px-5 py-2.5 text-sm font-bold text-white transition-transform hover:scale-105 shadow-lg shadow-red-500/30"
          >
            Trabaja con Nosotros
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className={`lg:hidden p-2 rounded-md ${scrolled ? "text-brand-ink" : "text-white"}`}
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-white border-t"
          >
            <div className="container-page py-6 flex flex-col gap-4">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="text-brand-ink font-semibold py-2 border-b border-gray-100"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/trabaje-con-nosotros"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex justify-center rounded-full bg-brand-red px-5 py-3 text-sm font-bold text-white"
              >
                Trabaja con Nosotros
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
