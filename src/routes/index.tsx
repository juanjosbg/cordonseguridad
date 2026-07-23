import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import {
  Shield, Users, Car, Camera, Radio, Lock, ArrowRight,
  Phone, Mail, ChevronRight, Zap, Award, Clock, CheckCircle2,
} from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import heroImg from "@/assets/control-room.jpg";
import controlImg from "@/assets/control-room.jpg";

const techImg = "/photos-verticales/DSC07784.JPG";
const patrolImg = "/photos-verticales/DSC06918.JPG";


const teamImg = "/photos/DSC07775.JPG";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cordón de Seguridad Ltda — Vigilancia y Seguridad Privada en Cali" },
      { name: "description", content: "Empresa de vigilancia y seguridad privada en Cali. Servicios de vigilancia fija, móvil, escolta y monitoreo con tecnología de punta." },
      { property: "og:title", content: "Cordón de Seguridad Ltda — Vigilancia y Seguridad Privada en Cali" },
      { property: "og:description", content: "Empresa de vigilancia y seguridad privada en Cali. Servicios de vigilancia fija, móvil, escolta y monitoreo con tecnología de punta." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const services = [
  { icon: Shield, title: "Vigilancia Fija", desc: "Personal capacitado en instalaciones residenciales, comerciales e industriales." },
  { icon: Car, title: "Vigilancia Móvil", desc: "Rondas y patrullaje en vehículos con monitoreo continuo." },
  { icon: Users, title: "Escolta a Personas", desc: "Protección personalizada con escoltas certificados." },
  { icon: Camera, title: "Monitoreo CCTV", desc: "Central de monitoreo 24/7 con tecnología de última generación." },
  { icon: Radio, title: "Medios Tecnológicos", desc: "Integración de sistemas: alarmas, cercas, sensores y control de acceso." },
  { icon: Lock, title: "Vigilancia sin Armas", desc: "Servicios especializados con medios tecnológicos y personal entrenado." },
];

const values = [
  { title: "Vocación de Servicio", desc: "Compromiso, pasión y esmero en cada actividad." },
  { title: "Respeto", desc: "Consideración por las acciones e ideas de los demás." },
  { title: "Responsabilidad", desc: "Asumimos con firmeza las consecuencias de nuestras decisiones." },
  { title: "Honestidad", desc: "Actuamos con rectitud en toda circunstancia." },
  { title: "Humanidad", desc: "Compasión y solidaridad hacia las personas." },
];

function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <PageShell>
      {/* HERO */}
      <section ref={heroRef} className="relative h-screen min-h-[720px] overflow-hidden">
        <motion.div style={{ scale, y }} className="absolute inset-0">
          <img src={heroImg} alt="Seguridad Cordón" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        </motion.div>

        <motion.div style={{ opacity }} className="relative z-10 h-full container-page flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative top-4 flex items-center gap-3 mb-6"
          >
            <span className="h-0.5 w-14 bg-brand-red" />
            <span className="text-brand-red font-bold tracking-[0.3em] text-sm">CALI · COLOMBIA</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-white text-6xl md:text-6xl lg:text-8xl font-black leading-[0.9] tracking-tighter mt-5"
          >
            Vigilancia<br />
            <span className="text-brand-red">constante,</span><br />
            confianza<br />
            permanente.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="mt-8 max-w-xl text-lg text-white/80"
          >
            Empresa de vigilancia y seguridad privada en Cali. <br/>
            Soluciones proactivas e integrales para las empresas del sector público y privado.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-widest flex flex-col items-center gap-2"
        >
          <span>SCROLL</span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
            className="h-8 w-[px] bg-white/50"
          />
        </motion.div>
      </section>

      {/* MARQUEE */}
      <div className="bg-brand-red text-white overflow-hidden py-4">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-12 pr-12 text-md font-medium tracking-widest">
              {["VIGILANCIA 24/7", "•", "SEGURIDAD PRIVADA", "•", "MONITOREO CCTV", "•", "ESCOLTAS CERTIFICADOS", "•", "TECNOLOGÍA DE PUNTA", "•", "CALI COLOMBIA", "•"].map((t, j) => (
                <span key={j}>{t}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ABOUT INTRO */}
      <section className="relative overflow-hidden py-28">
        <div
          className="pointer-events-none absolute inset-0 bg-center bg-repeat opacity-40"
          style={{
            backgroundImage:
              'url("/waves/6963ff78080e767b361e3fe6_cuadricula.svg")',
            backgroundSize: "720px auto",
          }}
          aria-hidden="true"
        />
        <div className="container-page relative z-10 grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Quiénes Somos</p>
            <h2 className="mt-4 text-5xl md:text-6xl font-black tracking-tight text-brand-ink leading-tight">
              Somos <span className="text-brand-red">referentes</span> a nivel nacional en vigilancia.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Somos una empresa prestadora de servicios de vigilancia y seguridad privada, enfocada en la prestación de soluciones proactivas e integrales para todas las empresas del sector público y privado, brindando un servicio seguro y humanizado.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { n: "24/7", l: "Operación" },
                { n: "100%", l: "Certificados" },
                { n: "+15", l: "Años Experiencia" },
              ].map((s) => (
                <div key={s.l} className="border-l-2 border-brand-red pl-4">
                  <div className="text-3xl font-black text-brand-ink">{s.n}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{s.l}</div>
                </div>
              ))}
            </div>
            <Link to="/quienes-somos" className="mt-10 inline-flex items-center gap-2 font-bold text-brand-red group">
              Conoce más sobre nosotros
              <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-red/10 rounded-2xl -rotate-2" />
              <img src={teamImg} alt="Equipo" className="relative rounded-2xl shadow-2xl" loading="lazy" />
              <div className="absolute -bottom-6 -left-6 bg-brand-red text-white p-6 rounded-xl shadow-xl max-w-[220px]">
                <Award className="h-8 w-8 mb-2" />
                <p className="font-bold text-sm leading-tight">Talento humano capacitado y certificado</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-28 bg-brand-ink text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/20 rounded-full blur-3xl" />
        <div className="container-page relative">
          <Reveal>
            <div className="max-w-2xl">
              <p className="eyebrow">Nuestros Servicios</p>
              <h2 className="mt-4 text-5xl md:text-6xl font-black text-white leading-tight">
                Prestamos servicios en las siguientes <span className="text-brand-red">modalidades</span>.
              </h2>
            </div>
          </Reveal>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group h-full bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-brand-red hover:border-brand-red 
                  transition-colors relative overflow-hidden"
                >
                  <div className="grid place-items-center h-14 w-14 rounded-xl bg-brand-red group-hover:bg-white/20 transition-colors mb-6">
                    <s.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-2">{s.title}</h3>
                  <p className="text-white/70 group-hover:text-white/90 text-sm leading-relaxed">{s.desc}</p>
                  <ArrowRight className="mt-6 h-5 w-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-16 bg-gradient-to-r from-brand-red to-red-700 rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-3xl md:text-4xl font-black text-white">¿Listo para asegurar lo que más importa?</h3>
                <p className="text-white/80 mt-2">Contrata nuestros servicios y recibe una cotización personalizada en menos de 24 horas.</p>
              </div>
              <Link to="/contacto" className="shrink-0 inline-flex items-center gap-2 bg-white text-brand-red px-8 py-4 rounded-full font-black shadow-xl hover:scale-105 transition-transform">
                Contratar ahora <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PARALLAX TECHNOLOGY */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 parallax-bg"
          style={{ backgroundImage: `url(${controlImg})` }}
        />
        <div className="absolute inset-0 bg-brand-ink/85" />
        <div className="container-page relative z-10 grid lg:grid-cols-2 gap-12 items-center text-white">
          <Reveal>
            <p className="eyebrow">Tecnología</p>
            <h2 className="mt-4 text-5xl md:text-6xl font-black text-white leading-tight">
              Central de <span className="text-brand-red">monitoreo</span> 24/7.
            </h2>
            <p className="mt-6 text-lg text-white/80 max-w-lg">
              Recurso humano idóneo y tecnología de última generación para brindar un servicio con calidad y humanización, donde nuestros clientes se sientan seguros y tranquilos.
            </p>
            <ul className="mt-8 space-y-3">
              {["Sistemas CCTV integrados", "Alarmas y sensores", "GPS en flota vehicular", "Reportes en tiempo real"].map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-red" /> {f}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              <img src={techImg} alt="Tecnología" className="rounded-2xl shadow-2xl object-cover h-full" loading="lazy" />
              <img src={patrolImg} alt="Patrulla" className="rounded-2xl shadow-2xl mt-8 object-cover h-full" loading="lazy" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-28 bg-white">
        <div className="container-page">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <p className="eyebrow">Nuestros Valores</p>
              <h2 className="mt-4 text-5xl md:text-6xl font-black text-brand-ink leading-tight">
                Principios que nos <span className="text-brand-red">definen</span>.
              </h2>
            </div>
          </Reveal>
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="group text-center p-6 rounded-2xl border border-gray-200 hover:border-brand-red hover:shadow-xl transition-all h-full">
                  <div className="mx-auto grid place-items-center h-14 w-14 rounded-full bg-brand-red text-white mb-4 group-hover:scale-110 transition-transform">
                    <Zap className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-black text-brand-ink">{v.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 overflow-hidden bg-black">
        <div
          className="absolute inset-0 parallax-bg"
          style={{
            backgroundImage:
              'url("/waves/Fondo de pantalla CDS_Mesa de trabajo 1 copia 2.jpg")',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black" />
        <div className="container-page relative z-10 text-center text-white">
          <Reveal>
            <p className="text-sm font-bold tracking-[0.3em] uppercase">Contáctanos ya</p>
            <h2 className="mt-4 text-5xl md:text-7xl font-black text-white">
              Protejamos juntos<br />lo que más valoras.
            </h2>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <a href="tel:3174280680" className="inline-flex items-center gap-3 bg-white text-brand-red px-8 py-4 rounded-full font-black shadow-2xl hover:scale-105 transition-transform">
                <Phone className="h-5 w-5" /> 317 428 0680
              </a>
              <a href="mailto:informacion@cordonseguridadltda.com.co" className="inline-flex items-center gap-3 border border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-brand-red transition-colors">
                <Mail className="h-5 w-5" /> Escríbenos
              </a>
            </div>
            <div className="mt-8 inline-flex items-center gap-2 text-white/80 text-sm">
              <Clock className="h-4 w-4" /> Atendemos 24 horas · 7 días a la semana
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
