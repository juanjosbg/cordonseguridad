import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Shield, Car, Users, Camera, Radio, Lock, ArrowRight, CheckCircle2 } from "lucide-react";
import { PageShell, PageHero } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import controlImg from "@/assets/control-room.jpg";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios — Cordón de Seguridad Ltda" },
      { name: "description", content: "Vigilancia fija, móvil, escolta, monitoreo CCTV y medios tecnológicos. Servicios integrales de seguridad privada en Cali." },
      { property: "og:title", content: "Servicios de Seguridad Privada — Cordón de Seguridad Ltda" },
      { property: "og:description", content: "Soluciones integrales de vigilancia y seguridad privada." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/servicios" },
    ],
    links: [{ rel: "canonical", href: "/servicios" }],
  }),
  component: Page,
});

const services = [
  { icon: Shield, title: "Vigilancia Fija", desc: "Personal armado o sin armas para instalaciones residenciales, comerciales, industriales e institucionales.", features: ["Personal capacitado", "Control de acceso", "Reportes diarios"] },
  { icon: Car, title: "Vigilancia Móvil", desc: "Rondas y patrullaje en vehículos propios con supervisores certificados para atención de novedades.", features: ["Flota GPS", "Supervisión 24/7", "Respuesta inmediata"] },
  { icon: Users, title: "Escolta a Personas", desc: "Protección personal ejecutiva con escoltas certificados y vehículos blindados según requerimiento.", features: ["Escoltas certificados", "Vehículos seguros", "Planeación de rutas"] },
  { icon: Camera, title: "Monitoreo CCTV", desc: "Central de monitoreo activa 24 horas con operadores capacitados y protocolos de reacción.", features: ["Central 24/7", "Grabación en la nube", "Alertas inteligentes"] },
  { icon: Radio, title: "Medios Tecnológicos", desc: "Alarmas, cercas eléctricas, sensores, control de acceso biométrico y sistemas integrados.", features: ["Instalación", "Mantenimiento", "Soporte técnico"] },
  { icon: Lock, title: "Sin Armas de Fuego", desc: "Modalidad especializada con vehículos, medios tecnológicos y talento humano capacitado.", features: ["Bajo riesgo", "Tecnología avanzada", "Costo eficiente"] },
];

function Page() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Nuestros Servicios"
        title="Soluciones integrales de seguridad."
        subtitle="Prestamos servicios de vigilancia fija, móvil, escolta a personas, vehículos y mercancías, con o sin armas de fuego y utilización de medios tecnológicos."
        image={controlImg}
      />

      <section className="py-24">
        <div className="container-page">
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="group relative bg-white border border-gray-200 rounded-3xl p-8 md:p-10 hover:border-brand-red hover:shadow-2xl transition-all h-full overflow-hidden"
                >
                  <div className="absolute top-0 right-0 h-32 w-32 bg-brand-red/5 rounded-bl-[100%]" />
                  <div className="relative">
                    <div className="grid place-items-center h-16 w-16 rounded-2xl bg-brand-red text-white mb-6 group-hover:scale-110 transition-transform">
                      <s.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-3xl font-black text-brand-ink">{s.title}</h3>
                    <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
                    <ul className="mt-6 space-y-2">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-brand-ink">
                          <CheckCircle2 className="h-4 w-4 text-brand-red" /> {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HIRE US */}
      <section className="py-24 bg-brand-ink relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-red/20 blur-3xl rounded-full" />
        <div className="container-page relative text-center text-white">
          <Reveal>
            <p className="eyebrow">Contrata Nuestros Servicios</p>
            <h2 className="mt-4 text-5xl md:text-7xl font-black text-white leading-tight max-w-4xl mx-auto">
              Diseñemos juntos tu <span className="text-brand-red">plan de seguridad</span>.
            </h2>
            <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">
              Solicita una cotización personalizada. Un asesor te contactará en menos de 24 horas con la mejor propuesta para tus necesidades.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Link to="/contacto" className="group inline-flex items-center gap-3 bg-brand-red text-white px-10 py-5 rounded-full font-black shadow-2xl shadow-red-500/30 hover:scale-105 transition-transform pulse-red">
                Solicitar cotización
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="tel:3174280680" className="inline-flex items-center gap-3 border border-white/40 text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-ink transition-colors">
                Llamar ahora
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
