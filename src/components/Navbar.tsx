import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "INICIO" },
  { to: "/quienes-somos", label: "QUIÉNES SOMOS" },
  { to: "/servicios", label: "SERVICIOS" },
  { to: "/sarlaft-sicof", label: "SARLAFT-SICOF" },
  { to: "/pqrs", label: "PQRS" },
  { to: "/contacto", label: "CONTACTO" },
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
          ? "rounded-b-[3.5rem] bg-white/95 shadow-[0_12px_35px_rgba(0,0,0,0.2)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      
      <div className={`container-page flex items-center justify-between transition-[height] duration-500 ${scrolled ? "h-28" : "h-24"}`}>
        <Link to="/" className="flex items-center gap-2.5 group">
          <img
            src={
              scrolled
                ? "/logo/CordonDeSeguridad_LogoSimbolo01.png"
                : "/logo/CordonDeSeguridad_LogoSimbolo04.png"
            }
            alt="Símbolo de Cordón de Seguridad"
            className="h-12 w-auto transition-opacity duration-300"
          />
          <div className="leading-tight">
            <div className={`text-[15px] font-black tracking-tight ${scrolled ? "text-black" : "text-white/90"}`}>
              CORDÓN DE
            </div>
            <div className={`text-[11px] font-bold tracking-widest ${scrolled ? "text-brand-red" : "text-white/90"}`}>
              SEGURIDAD LTDA
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeProps={{ className: "text-brand-red" }}
              className={`text-sm font-semibold relative transition-colors hover:text-brand-red 
                ${scrolled ? "text-black" : "text-white/90"}
              `}
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
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-md p-2 text-white lg:hidden"
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
