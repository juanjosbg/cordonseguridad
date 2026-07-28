import { createFileRoute } from "@tanstack/react-router";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "motion/react";
import { useRef, useState } from "react";
import { Target, Eye, Heart, Award, Users, Shield, Building2, ShieldCheck } from "lucide-react";
import { PageShell, PageHero } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { PhotoGallery } from "@/components/PhotoGallery";

const heroImg = "/photos/IMG_0160.JPG";
const teamImg = "/photos/IMG_0160.JPG";

export const Route = createFileRoute("/quienes-somos")({
  head: () => ({
    meta: [
      { title: "Quiénes Somos — Cordón de Seguridad Ltda" },
      { name: "description", content: "Conoce la misión, visión y valores de Cordón de Seguridad Ltda, empresa referente en vigilancia y seguridad privada en Cali." },
      { property: "og:title", content: "Quiénes Somos — Cordón de Seguridad Ltda" },
      { property: "og:description", content: "Misión, visión y valores institucionales." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/quienes-somos" },
    ],
    links: [{ rel: "canonical", href: "/quienes-somos" }],
  }),
  component: Page,
});

const values = [
  { icon: Heart, title: "Vocación de Servicio", desc: "Corresponder el compromiso, pasión y esmero de la entrega hacia la actividad y atribución que se debe desarrollar." },
  { icon: Users, title: "Respeto", desc: "Preocuparse por el impacto de nuestras acciones en los demás, ser inclusivos y aceptar a los demás por lo que son." },
  { icon: Award, title: "Responsabilidad", desc: "Deber de hacerse cargo de las consecuencias sobre una misma y/o sobre otros de las acciones que uno decide emprender." },
  { icon: Shield, title: "Honestidad", desc: "Actuar con rectitud y sinceridad en todas las circunstancias que se puedan presentar." },
  { icon: Heart, title: "Humanidad", desc: "Sentir compasión y solidaridad hacia las demás personas." },
];

const historySteps = [
  {
    text: "CORDÓN DE SEGURIDAD LTDA. nace con la convicción de transformar la manera en que las organizaciones y las personas entienden la seguridad privada. Desde nuestros inicios asumimos el compromiso de brindar soluciones integrales de vigilancia y protección fundamentadas en la confianza, el profesionalismo y la excelencia operativa, entendiendo que detrás de cada servicio existen personas, familias, empresas y proyectos que depositan en nosotros su tranquilidad.",
  },
  {
    text: "A lo largo de nuestra trayectoria hemos consolidado una organización que combina experiencia, innovación, talento humano y mejora continua para responder a las necesidades de los sectores público y privado. Nuestro crecimiento ha sido el resultado del trabajo disciplinado de un equipo humano altamente comprometido, preparado para afrontar los desafíos de un entorno en constante evolución.",
  },
  {
    text: "Hoy, CORDÓN DE SEGURIDAD LTDA. avanza hacia una nueva etapa de transformación institucional, fortaleciendo su identidad como una empresa que integra tecnología, calidad y una profunda vocación de servicio para generar relaciones de confianza duraderas con clientes, colaboradores, aliados estratégicos y la comunidad.",
  },
  {
    text: "Más que prestar un servicio de vigilancia, construimos entornos seguros donde las personas pueden desarrollar sus actividades con tranquilidad, respaldadas por una organización que entiende que proteger es, ante todo, un acto de responsabilidad y compromiso humano.",
    closing: true,
  },
];

function HistoryScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const nextStep = Math.min(
      historySteps.length - 1,
      Math.floor(progress * historySteps.length),
    );
    setActiveStep((currentStep) =>
      currentStep === nextStep ? currentStep : nextStep,
    );
  });

  const step = historySteps[activeStep];

  return (
    <div
      ref={containerRef}
      className="relative h-[400vh]"
      aria-label="Recorrido por nuestra historia"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden py-20">
        <div className="container-page relative z-10 grid w-full items-center gap-7 md:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <div className="group relative h-[34vh] min-h-[240px] overflow-hidden rounded-3xl md:h-[68vh] md:min-h-[480px]">
            <img
              src="/photos/DSC07772.JPG"
              alt="Equipo humano de Cordón de Seguridad"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/15 bg-black/55 p-5 backdrop-blur-md md:inset-x-7 md:bottom-7">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-red">
                  <Building2 className="h-5 w-5" />
                </div>
                <p className="text-sm font-black leading-snug text-white md:text-lg">
                  Experiencia, innovación y talento humano al servicio de la
                  tranquilidad.
                </p>
              </div>
            </div>
          </div>

          <div className="relative flex min-h-[310px] items-center md:min-h-[480px]">
            <div className="absolute bottom-0 left-[23px] top-0 w-px bg-brand-red/50" />

            <AnimatePresence mode="wait" initial={false}>
              <motion.article
                key={activeStep}
                initial={
                  reduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, y: 55, scale: 0.96 }
                }
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={
                  reduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, y: -55, scale: 0.96 }
                }
                transition={{ duration: reduceMotion ? 0.15 : 0.5, ease: [0.22, 1, 0.36, 1] }}
                className={`relative w-full pl-16 ${step.closing ? "text-white" : ""
                  }`}
              >
                <div
                  className={`absolute left-0 top-1 grid h-12 w-12 place-items-center rounded-full border text-sm font-black shadow-[0_0_0_8px_rgba(207,18,45,0.08)] ${step.closing
                      ? "border-white/40 bg-brand-red text-white"
                      : "border-brand-red/40 bg-white text-brand-red"
                    }`}
                >
                  {String(activeStep + 1).padStart(2, "0")}
                </div>

                <div
                  className={`rounded-3xl border p-6 shadow-2xl md:p-9 ${step.closing
                      ? "border-brand-red bg-brand-red shadow-red-950/30"
                      : "border-gray-200 bg-white/90 shadow-black/10 backdrop-blur-sm"
                    }`}
                >
                  {step.closing ? (
                    <ShieldCheck className="mb-5 h-8 w-8 text-white" />
                  ) : null}
                  <p
                    className={`text-sm leading-7 md:text-base md:leading-8 ${step.closing ? "text-white/90" : "text-brand-ink"
                      }`}
                  >
                    {step.text}
                  </p>
                </div>
              </motion.article>
            </AnimatePresence>

            <div className="absolute -bottom-8 left-16 flex gap-2 md:bottom-2">
              {historySteps.map((historyStep, index) => (
                <span
                  key={historyStep.text}
                  className={`h-1.5 rounded-full transition-all duration-300 ${index === activeStep
                      ? "w-8 bg-brand-red"
                      : "w-3 bg-brand-ink/25"
                    }`}
                  aria-hidden="true"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Page() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Quiénes Somos"
        title="Referentes en seguridad privada."
        subtitle="Una empresa comprometida con la vigilancia responsable, el talento humano y la innovación tecnológica."
        image={heroImg}
      />

      {/* HISTORY */}
      <section
        className="relative overflow-x-clip bg-white py-24 text-brand-ink md:py-32"
        style={{
          backgroundImage:
            'url("/waves/Fondo de pantalla CDS_Mesa de trabajo 1.jpg")',
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container-page relative">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">Nuestra trayectoria</p>
              <h2 className="mt-4 text-5xl font-black leading-tight text-brand-ink md:text-6xl">
                Nuestra <span className="text-brand-red">historia</span>.
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-brand-ink/75">
                Más que una empresa de seguridad, una organización comprometida
                con proteger lo que realmente importa.
              </p>
            </div>
          </Reveal>
          {/*  MISIÓN - VISIÓN */}
          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            <Reveal>
              <div className="relative h-full overflow-hidden rounded-3xl bg-brand-ink p-10 text-white shadow-xl">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-red/40 blur-3xl" />
                <div className="relative">
                  <div className="inline-flex items-center gap-3 rounded-full bg-brand-red px-4 py-2 text-xs font-bold tracking-widest text-white">
                    <Target className="h-4 w-4" /> MISIÓN
                  </div>
                  <h3 className="mt-6 text-4xl font-black leading-tight text-white">
                    Nuestra Misión
                  </h3>
                  <p className="mt-4 leading-relaxed text-white/80">
                    Somos una empresa prestadora de servicios de vigilancia y
                    seguridad privada, enfocada en la prestación de soluciones
                    proactivas e integrales para todas las empresas del sector
                    público y privado, brindando un servicio seguro y
                    humanizado, integrando valores éticos a las personas, la
                    comunidad y medio ambiente.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="relative h-full overflow-hidden rounded-3xl bg-brand-red p-10 text-white shadow-xl">
                <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/20 blur-3xl" />
                <div className="relative">
                  <div className="inline-flex items-center gap-3 rounded-full bg-white px-4 py-2 text-xs font-bold tracking-widest text-brand-red">
                    <Eye className="h-4 w-4" /> VISIÓN
                  </div>
                  <h3 className="mt-6 text-4xl font-black leading-tight text-white">
                    Nuestra Visión
                  </h3>
                  <p className="mt-4 leading-relaxed text-white/90">
                    Seremos referentes a nivel nacional como una empresa líder
                    en innovación y tecnología en vigilancia y seguridad
                    privada, brindando un servicio con calidad y humanización a
                    través de soluciones eficaces que respondan a la
                    responsabilidad que requiere la prestación de servicios de
                    vigilancia y seguridad privada.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
        <HistoryScroll />
      </section>

      {/* VALUES */}
      <section className="py-24 bg-gray-50">
        <div className="container-page">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <p className="eyebrow">Nuestros Valores</p>
              <h2 className="mt-4 text-5xl md:text-6xl font-black text-brand-ink">
                Lo que nos <span className="text-brand-red">representa</span>.
              </h2>
            </div>
          </Reveal>
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <motion.div whileHover={{ y: -6 }} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-shadow h-full border border-gray-100">
                  <div className="grid place-items-center h-14 w-14 rounded-xl bg-brand-red/10 text-brand-red mb-4">
                    <v.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-black text-brand-ink">{v.title}</h3>
                  <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* Slider */}
      <PhotoGallery />

      {/* WHY US */}
      <section className="py-24">
        <div className="container-page grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <img src={teamImg} alt="Equipo" className="rounded-3xl shadow-2xl" loading="lazy" />
          </Reveal>
          <Reveal delay={0.15}>
            <p className="eyebrow">¿Por qué elegir Cordón de Seguridad?</p>
            <h2 className="mt-4 text-5xl font-black text-brand-ink leading-tight">
              Nuevas <span className="text-brand-red">tecnologías</span>, servicio humanizado.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Somos una empresa nueva en el mercado, en donde estamos abarcando nuevas tecnologías, con un recurso humano idóneo enfocado a brindar un servicio con calidad y humanización para que nuestros clientes se sientan seguros, tranquilos frente a la responsabilidad que se requiere para la prestación de servicios de vigilancia y seguridad privada.
            </p>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
