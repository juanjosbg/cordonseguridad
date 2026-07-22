import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "motion/react";
import { HelpCircle, MessageSquareWarning, AlertOctagon, Lightbulb, Send, ShieldAlert } from "lucide-react";
import { PageShell, PageHero } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import controlImg from "@/assets/control-room.jpg";

export const Route = createFileRoute("/pqrs")({
  head: () => ({
    meta: [
      { title: "PQRS y Denuncias — Cordón de Seguridad Ltda" },
      { name: "description", content: "Peticiones, Quejas, Reclamos y Sugerencias. Canal seguro para denuncias anónimas de acoso laboral, sexual y otras conductas." },
      { property: "og:title", content: "PQRS y Canal de Denuncias — Cordón de Seguridad Ltda" },
      { property: "og:description", content: "Envíanos tu petición, queja, reclamo o sugerencia. Canal anónimo disponible." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/pqrs" },
    ],
    links: [{ rel: "canonical", href: "/pqrs" }],
  }),
  component: Page,
});

const types = [
  { key: "peticion", icon: HelpCircle, title: "¿Sabes qué es una petición?", desc: "Es una solicitud verbal o escrita presentada ante una entidad para pedir información, orientación, copias o resolución de una situación específica." },
  { key: "queja", icon: MessageSquareWarning, title: "¿Sabes qué es una queja?", desc: "Es la manifestación de inconformidad relacionada con la actuación de un colaborador o con la prestación de un servicio." },
  { key: "reclamo", icon: AlertOctagon, title: "¿Sabes qué es un reclamo?", desc: "Es la exigencia de derechos por parte del usuario frente a la deficiente prestación o suspensión injustificada de un servicio." },
  { key: "sugerencia", icon: Lightbulb, title: "¿Sabes qué es una sugerencia?", desc: "Es una propuesta que aporta ideas para mejorar los servicios, la atención o los procesos internos de la organización." },
];

function Page() {
  const [type, setType] = useState("peticion");
  const [anonymous, setAnonymous] = useState(false);
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const subject = encodeURIComponent(`[PQRS - ${type.toUpperCase()}] ${data.get("subject") || ""}`);
    const body = encodeURIComponent(
      `Tipo: ${type}\nAnónimo: ${anonymous ? "Sí" : "No"}\n` +
      (anonymous ? "" : `Nombre: ${data.get("name")}\nEmail: ${data.get("email")}\nTeléfono: ${data.get("phone")}\n`) +
      `\nMensaje:\n${data.get("message")}`
    );
    window.location.href = `mailto:informacion@cordonseguridadltda.com.co?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <PageShell>
      <PageHero
        eyebrow="PQRS · Canal de Denuncias"
        title="Tu voz nos importa."
        subtitle="Escúchanos. Envía tu petición, queja, reclamo o sugerencia. Contamos con un canal seguro para denuncias anónimas."
        image={controlImg}
      />

      {/* Types */}
      <section className="py-24">
        <div className="container-page">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <p className="eyebrow">Conoce los tipos</p>
              <h2 className="mt-4 text-4xl md:text-5xl font-black text-brand-ink">
                Antes de escribirnos, <span className="text-brand-red">infórmate</span>.
              </h2>
            </div>
          </Reveal>

          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {types.map((t, i) => (
              <Reveal key={t.key} delay={i * 0.08}>
                <motion.div whileHover={{ y: -6 }} className="group flex gap-5 p-8 rounded-3xl bg-white border border-gray-200 hover:border-brand-red hover:shadow-2xl transition-all h-full">
                  <div className="shrink-0 grid place-items-center h-14 w-14 rounded-2xl bg-brand-red text-white group-hover:scale-110 transition-transform">
                    <t.icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-brand-ink">{t.title}</h3>
                    <p className="mt-2 text-muted-foreground leading-relaxed">{t.desc}</p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HARASSMENT */}
      <section className="py-20 bg-brand-ink text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/20 blur-3xl rounded-full" />
        <div className="container-page relative grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 bg-brand-red/20 border border-brand-red/40 text-brand-red px-4 py-2 rounded-full text-xs font-bold tracking-widest">
              <ShieldAlert className="h-4 w-4" /> CANAL DE DENUNCIA ANÓNIMA
            </div>
            <h2 className="mt-6 text-4xl md:text-5xl font-black text-white leading-tight">
              Ruta institucional para <span className="text-brand-red">acoso laboral y sexual</span>.
            </h2>
            <p className="mt-6 text-white/80 leading-relaxed">
              Reconocemos que el acoso —laboral, sexual y otras modalidades contempladas por la normatividad— vulnera derechos fundamentales. Ponemos a tu disposición un canal 100% confidencial y anónimo para denunciar cualquier situación.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="grid gap-4">
              {[
                { t: "Reconoce", d: "Aprende a identificar cuándo una conducta constituye acoso." },
                { t: "Denuncia", d: "Envía tu denuncia de forma anónima a través del formulario." },
                { t: "Atención", d: "Un equipo especializado activa la ruta institucional de atención." },
                { t: "Seguimiento", d: "Recibe información sobre el estado del caso de forma segura." },
              ].map((s, i) => (
                <div key={s.t} className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="grid place-items-center h-10 w-10 rounded-lg bg-brand-red text-white font-black">{i + 1}</div>
                  <div>
                    <h4 className="font-black text-white">{s.t}</h4>
                    <p className="text-sm text-white/70">{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FORM */}
      <section className="py-24 bg-gray-50">
        <div className="container-page max-w-3xl">
          <Reveal>
            <div className="text-center">
              <p className="eyebrow">Módulo PQRS</p>
              <h2 className="mt-4 text-4xl md:text-5xl font-black text-brand-ink">Envíanos tu <span className="text-brand-red">mensaje</span></h2>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={onSubmit} className="mt-12 bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-1 bg-gray-100 rounded-full">
                {types.map((t) => (
                  <button
                    type="button"
                    key={t.key}
                    onClick={() => setType(t.key)}
                    className={`py-2.5 rounded-full text-sm font-bold capitalize transition-colors ${
                      type === t.key ? "bg-brand-red text-white shadow" : "text-brand-ink hover:bg-white"
                    }`}
                  >
                    {t.key}
                  </button>
                ))}
              </div>

              <label className="mt-6 flex items-center gap-3 cursor-pointer select-none">
                <input type="checkbox" checked={anonymous} onChange={(e) => setAnonymous(e.target.checked)} className="h-4 w-4 accent-red-600" />
                <span className="text-sm font-semibold text-brand-ink">Enviar de forma anónima</span>
              </label>

              {!anonymous && (
                <div className="mt-6 grid md:grid-cols-2 gap-4">
                  <input name="name" required placeholder="Nombre completo" className="border border-gray-200 rounded-xl px-4 py-3 focus:border-brand-red outline-none" />
                  <input name="email" type="email" required placeholder="Correo electrónico" className="border border-gray-200 rounded-xl px-4 py-3 focus:border-brand-red outline-none" />
                  <input name="phone" placeholder="Teléfono" className="border border-gray-200 rounded-xl px-4 py-3 focus:border-brand-red outline-none md:col-span-2" />
                </div>
              )}

              <input name="subject" required placeholder="Asunto" className="mt-4 w-full border border-gray-200 rounded-xl px-4 py-3 focus:border-brand-red outline-none" />
              <textarea name="message" required rows={6} placeholder="Describe tu solicitud con el mayor detalle posible..." className="mt-4 w-full border border-gray-200 rounded-xl px-4 py-3 focus:border-brand-red outline-none resize-none" />

              <button type="submit" className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-brand-red text-white px-6 py-4 rounded-full font-black hover:scale-[1.01] transition-transform">
                <Send className="h-5 w-5" /> Enviar PQRS
              </button>

              {sent && (
                <p className="mt-4 text-center text-sm text-brand-ink">
                  ✓ Se abrió tu cliente de correo. La información llegará a informacion@cordonseguridadltda.com.co
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
