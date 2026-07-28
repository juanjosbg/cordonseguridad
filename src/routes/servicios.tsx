import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  Building2,
  Camera,
  Car,
  CheckCircle2,
  ClipboardCheck,
  Home,
  Lightbulb,
  Lock,
  Radio,
  Shield,
  ShieldCheck,
  UserRoundCheck,
  Users,
} from "lucide-react";
import { PageShell, PageHero } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
  {
    icon: Shield,
    title: "Vigilancia Fija",
    tagline: "Presencia profesional para proteger sus instalaciones.",
    desc: "Personal armado o sin armas para instalaciones residenciales, comerciales, industriales e institucionales.",
    details: ["Personal capacitado", "Control de acceso", "Reportes diarios"],
    differential: "Un servicio preventivo, cercano y ajustado a las características de cada instalación.",
  },
  {
    icon: Car,
    title: "Vigilancia Móvil",
    tagline: "Supervisión y respuesta donde su operación lo necesita.",
    desc: "Rondas y patrullaje en vehículos propios con supervisores certificados para atención de novedades.",
    details: ["Flota GPS", "Supervisión 24/7", "Respuesta inmediata"],
    differential: "Movilidad, monitoreo y capacidad de reacción para fortalecer la prevención.",
  },
  {
    icon: Users,
    title: "Escolta a Personas",
    tagline: "Acompañamiento confiable en cada desplazamiento.",
    desc: "Protección personal ejecutiva con escoltas certificados y vehículos blindados según requerimiento.",
    details: ["Escoltas certificados", "Vehículos seguros", "Planeación de rutas"],
    differential: "Protección personalizada con preparación, prudencia y absoluto respeto por la privacidad.",
  },
  {
    icon: Camera,
    title: "Monitoreo CCTV",
    tagline: "Observación permanente y reacción oportuna.",
    desc: "Central de monitoreo activa 24 horas con operadores capacitados y protocolos de reacción.",
    details: ["Central 24/7", "Grabación en la nube", "Alertas inteligentes"],
    differential: "Tecnología y talento humano conectados para detectar novedades y actuar a tiempo.",
  },
  {
    icon: Radio,
    title: "Medios Tecnológicos",
    tagline: "Herramientas integradas para una protección más eficiente.",
    desc: "Alarmas, cercas eléctricas, sensores, control de acceso biométrico y sistemas integrados.",
    details: ["Instalación", "Mantenimiento", "Soporte técnico"],
    differential: "Soluciones tecnológicas seleccionadas de acuerdo con el riesgo y la operación.",
  },
  {
    icon: Lock,
    title: "Sin Armas de Fuego",
    tagline: "Prevención apoyada en personas, procesos y tecnología.",
    desc: "Modalidad especializada con vehículos, medios tecnológicos y talento humano capacitado.",
    details: ["Bajo riesgo", "Tecnología avanzada", "Costo eficiente"],
    differential: "Esquemas preventivos eficientes para entornos que no requieren armamento.",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad Física",
    tagline: "Protección integral con presencia humana, profesional y estratégica.",
    desc: "Soluciones preventivas para proteger personas, activos, información y la continuidad operativa de cada organización.",
    paragraphs: [
      "La tranquilidad de su organización comienza con un equipo preparado para proteger lo que más importa.",
      "En CORDÓN DE SEGURIDAD LTDA. entendemos que la seguridad física representa mucho más que la presencia de personal en un puesto de vigilancia. Constituye la primera línea de protección para las personas, los activos, la información y la continuidad operativa de cada organización.",
      "Diseñamos soluciones adaptadas a las necesidades específicas de empresas del sector público y privado. Nuestro talento humano combina disciplina, preparación técnica y un profundo sentido de servicio.",
    ],
    details: ["Vigilancia permanente", "Protección de instalaciones", "Control de rondas", "Prevención de riesgos", "Atención de emergencias", "Reportes operativos", "Supervisión permanente", "Protocolos personalizados"],
    differential: "No solo protegemos instalaciones; protegemos personas, fortalecemos la confianza y contribuimos a la continuidad de su operación.",
  },
  {
    icon: UserRoundCheck,
    title: "Protección Ejecutiva",
    tagline: "Seguridad inteligente para quienes toman decisiones.",
    desc: "Protección especializada para directivos, empresarios, funcionarios y personalidades, basada en análisis y discreción.",
    paragraphs: [
      "Las responsabilidades de alta dirección exigen un esquema que combine análisis de riesgos, discreción, capacidad de reacción y atención personalizada.",
      "Cada operación es previamente analizada para identificar riesgos, establecer rutas seguras y desarrollar estrategias preventivas que garanticen tranquilidad sin afectar la dinámica diaria del protegido.",
    ],
    details: ["Evaluación de riesgos", "Planeación operativa", "Protección personalizada", "Acompañamiento permanente", "Coordinación logística", "Reacción ante contingencias", "Protocolos de seguridad"],
    differential: "Protegemos personas con profesionalismo, discreción y un profundo respeto por su privacidad.",
  },
  {
    icon: Users,
    title: "Servicio de Escoltas",
    tagline: "Protección estratégica para personas, bienes y operaciones críticas.",
    desc: "Soluciones especializadas para proteger personas, mercancías, activos estratégicos y desplazamientos de alto riesgo.",
    paragraphs: [
      "Cada operación es planificada de acuerdo con el análisis del entorno, permitiendo implementar medidas preventivas que disminuyen vulnerabilidades y fortalecen la seguridad durante cada recorrido.",
    ],
    details: ["Protección de personas", "Custodia de mercancías", "Acompañamiento terrestre", "Planeación de rutas", "Coordinación operativa", "Protocolos de reacción"],
    differential: "Actuamos con discreción, preparación y capacidad de respuesta, protegiendo aquello que representa mayor valor para nuestros clientes.",
  },
  {
    icon: Building2,
    title: "Seguridad Empresarial",
    tagline: "Soluciones integrales para proteger el crecimiento de su organización.",
    desc: "Estrategias que combinan talento humano, procedimientos y tecnología para garantizar la continuidad de los procesos.",
    paragraphs: [
      "Cada empresa enfrenta riesgos diferentes. Por ello desarrollamos soluciones personalizadas que fortalecen la seguridad y agregan valor a su operación.",
      "Trabajamos como aliados estratégicos de nuestros clientes, comprendiendo sus necesidades y construyendo respuestas alineadas con sus objetivos.",
    ],
    details: ["Diagnóstico de riesgos", "Protección de instalaciones", "Control operativo", "Seguridad patrimonial", "Supervisión permanente", "Protocolos empresariales"],
    differential: "Convertimos la seguridad en una herramienta para el crecimiento empresarial.",
  },
  {
    icon: Home,
    title: "Seguridad Residencial",
    tagline: "Tranquilidad para usted y su familia.",
    desc: "Esquemas preventivos para conjuntos residenciales, edificios, condominios y urbanizaciones.",
    paragraphs: [
      "El hogar representa el espacio más importante para las personas. Generamos ambientes tranquilos con una atención respetuosa, cercana y profesional.",
      "Nuestro servicio fortalece la confianza entre residentes, visitantes y administración.",
    ],
    details: ["Vigilancia residencial", "Control de visitantes", "Control vehicular", "Rondas preventivas", "Atención de emergencias", "Supervisión permanente"],
    differential: "Protegemos comunidades construyendo relaciones de confianza con quienes habitan cada espacio.",
  },
  {
    icon: ClipboardCheck,
    title: "Estudios de Seguridad",
    tagline: "Conocer el riesgo es el primer paso para prevenirlo.",
    desc: "Análisis especializados para identificar vulnerabilidades, evaluar amenazas y formular recomendaciones.",
    paragraphs: [
      "Toda estrategia de seguridad debe comenzar con un diagnóstico confiable.",
      "Nuestros estudios permiten tomar decisiones basadas en información técnica y criterios preventivos para proteger personas, instalaciones y procesos.",
    ],
    details: ["Diagnóstico de riesgos", "Identificación de vulnerabilidades", "Análisis de amenazas", "Recomendaciones", "Planes de mejora", "Informes técnicos"],
    differential: "No improvisamos la seguridad; la diseñamos a partir de información, experiencia y análisis.",
  },
  {
    icon: Lightbulb,
    title: "Consultoría en Seguridad",
    tagline: "Estrategias inteligentes para anticiparse al riesgo.",
    desc: "Acompañamiento en el diseño, implementación y fortalecimiento de sistemas de seguridad.",
    paragraphs: [
      "Trabajamos de manera cercana con empresas e instituciones para desarrollar soluciones personalizadas que respondan a sus objetivos estratégicos y operativos.",
    ],
    details: ["Diagnóstico organizacional", "Gestión del riesgo", "Planes de seguridad", "Protocolos", "Auditorías", "Capacitación", "Continuidad del negocio"],
    differential: "Transformamos el conocimiento en decisiones que fortalecen la seguridad y la competitividad empresarial.",
  },
  {
    icon: Radio,
    title: "Tecnología Aplicada a la Seguridad",
    tagline: "Innovación al servicio de la protección.",
    desc: "Soluciones tecnológicas que fortalecen el monitoreo, el control y la gestión de la seguridad en tiempo real.",
    paragraphs: [
      "La tecnología amplía nuestra capacidad para prevenir riesgos y responder de manera oportuna.",
      "Integramos herramientas que complementan el trabajo de nuestro talento humano y mejoran la capacidad de respuesta de las organizaciones.",
    ],
    details: ["Sistemas de videovigilancia", "Control electrónico de accesos", "Monitoreo remoto", "Alarmas", "Integración tecnológica", "Soluciones inteligentes"],
    differential: "Creemos que la mejor tecnología es aquella que fortalece la protección de las personas.",
  },
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
                <Dialog>
                  <DialogTrigger asChild>
                    <motion.button
                      type="button"
                      whileHover={{ y: -6 }}
                      className="group relative h-full w-full overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 text-left transition-all hover:border-brand-red hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-4 md:p-10"
                      aria-label={`Ver información completa sobre ${s.title}`}
                    >
                      <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-[100%] bg-brand-red/5" />
                      <div className="relative flex h-full flex-col">
                        <div className="mb-6 grid h-16 w-16 place-items-center rounded-2xl bg-brand-red text-white transition-transform group-hover:scale-110">
                          <s.icon className="h-8 w-8" />
                        </div>
                        <h3 className="text-3xl font-black text-brand-ink">{s.title}</h3>
                        <p className="mt-3 leading-relaxed text-muted-foreground">{s.desc}</p>
                        <ul className="mt-6 space-y-2">
                          {s.details.slice(0, 3).map((detail) => (
                            <li key={detail} className="flex items-center gap-2 text-sm text-brand-ink">
                              <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-red" /> {detail}
                            </li>
                          ))}
                        </ul>
                        <span className="mt-7 inline-flex items-center gap-2 text-sm font-black text-brand-red">
                          Ver información completa
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </motion.button>
                  </DialogTrigger>

                  <DialogContent className="max-h-[92vh] overflow-y-auto rounded-3xl p-0 sm:max-w-3xl">
                    <div className="bg-brand-ink px-7 py-8 text-white md:px-10">
                      <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-brand-red">
                        <s.icon className="h-7 w-7" />
                      </div>
                      <DialogHeader>
                        <DialogTitle className="text-3xl font-black text-white md:text-4xl">
                          {s.title}
                        </DialogTitle>
                        <DialogDescription className="text-base font-semibold text-white/75">
                          {s.tagline}
                        </DialogDescription>
                      </DialogHeader>
                    </div>

                    <div className="space-y-7 p-7 md:p-10">
                      <div className="space-y-4 leading-7 text-muted-foreground">
                        {(s.paragraphs ?? [s.desc]).map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>

                      <div>
                        <h4 className="text-xl font-black text-brand-ink">Nuestro servicio incluye</h4>
                        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                          {s.details.map((detail) => (
                            <li key={detail} className="flex items-start gap-2 text-sm text-brand-ink">
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-2xl bg-red-50 p-5">
                        <p className="text-xs font-black uppercase tracking-[0.2em] text-brand-red">Nuestro diferencial</p>
                        <p className="mt-2 leading-7 text-brand-ink">{s.differential}</p>
                      </div>

                      <Link
                        to="/contacto"
                        search={{ servicio: s.title }}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-red px-7 py-4 font-black text-white transition-transform hover:scale-[1.01]"
                      >
                        Solicitar cotización
                        <ArrowRight className="h-5 w-5" />
                      </Link>
                    </div>
                  </DialogContent>
                </Dialog>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
