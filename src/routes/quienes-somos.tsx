import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Target, Eye, Heart, Award, Users, Shield } from "lucide-react";
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

function Page() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Quiénes Somos"
        title="Referentes en seguridad privada."
        subtitle="Una empresa comprometida con la vigilancia responsable, el talento humano y la innovación tecnológica."
        image={heroImg}
      />

      {/* MISSION / VISION */}
      <section className="py-24">
        <div className="container-page grid lg:grid-cols-2 gap-8">
          <Reveal>
            <div className="relative bg-brand-ink text-white p-10 rounded-3xl overflow-hidden h-full">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-red/40 blur-3xl rounded-full" />
              <div className="relative">
                <div className="inline-flex items-center gap-3 bg-brand-red text-white px-4 py-2 rounded-full text-xs font-bold tracking-widest">
                  <Target className="h-4 w-4" /> MISIÓN
                </div>
                <h2 className="mt-6 text-4xl font-black text-white leading-tight">Nuestra Misión</h2>
                <p className="mt-4 text-white/80 leading-relaxed">
                  Somos una empresa prestadora de servicios de vigilancia y seguridad privada, enfocada en la prestación de soluciones proactivas e integrales para todas las empresas del sector público y privado, brindando un servicio seguro y humanizado, integrando valores éticos a las personas, la comunidad y medio ambiente.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative bg-brand-red text-white p-10 rounded-3xl overflow-hidden h-full">
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/20 blur-3xl rounded-full" />
              <div className="relative">
                <div className="inline-flex items-center gap-3 bg-white text-brand-red px-4 py-2 rounded-full text-xs font-bold tracking-widest">
                  <Eye className="h-4 w-4" /> VISIÓN
                </div>
                <h2 className="mt-6 text-4xl font-black text-white leading-tight">Nuestra Visión</h2>
                <p className="mt-4 text-white/90 leading-relaxed">
                  Seremos referentes a nivel nacional como una empresa líder en innovación y tecnología en vigilancia y seguridad privada, brindando un servicio con calidad y humanización a través de soluciones eficaces que respondan a la responsabilidad que requiere la prestación de servicios de vigilancia y seguridad privada.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
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
