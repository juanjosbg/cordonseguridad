import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Briefcase, GraduationCap, HeartHandshake, Send, Upload } from "lucide-react";
import { PageShell, PageHero } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import teamImg from "@/assets/team.jpg";

export const Route = createFileRoute("/trabaje-con-nosotros")({
  head: () => ({
    meta: [
      { title: "Trabaja con Nosotros — Cordón de Seguridad Ltda" },
      { name: "description", content: "Únete a nuestro equipo. Envía tu hoja de vida al banco de talentos de Cordón de Seguridad Ltda." },
      { property: "og:title", content: "Trabaja con Nosotros — Cordón de Seguridad Ltda" },
      { property: "og:description", content: "Banco de hojas de vida. Postúlate a nuestras oportunidades." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/trabaje-con-nosotros" },
    ],
    links: [{ rel: "canonical", href: "/trabaje-con-nosotros" }],
  }),
  component: Page,
});

const perks = [
  { icon: Briefcase, title: "Estabilidad laboral", desc: "Contratos formales, prestaciones sociales y bienestar integral." },
  { icon: GraduationCap, title: "Formación continua", desc: "Capacitación en tecnología, protocolos y servicio al cliente." },
  { icon: HeartHandshake, title: "Cultura humana", desc: "Un equipo que valora el respeto, la responsabilidad y la humanidad." },
];

function Page() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`[Hoja de vida] ${data.get("name") || ""} - ${data.get("position") || ""}`);
    const body = encodeURIComponent(
      `Nombre: ${data.get("name")}\nEmail: ${data.get("email")}\nTeléfono: ${data.get("phone")}\nCiudad: ${data.get("city")}\nCargo de interés: ${data.get("position")}\nExperiencia: ${data.get("experience")} años\n\nPresentación:\n${data.get("message")}\n\n(Recuerda adjuntar tu hoja de vida en el correo)`
    );
    window.location.href = `mailto:informacion@cordonseguridadltda.com.co?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <PageShell>
      <PageHero
        eyebrow="Trabaja con Nosotros"
        title="Sé parte del cordón."
        subtitle="Buscamos personas con vocación de servicio y compromiso. Envía tu hoja de vida y forma parte de nuestro equipo."
        image={teamImg}
      />

      <section className="py-24">
        <div className="container-page grid lg:grid-cols-3 gap-6 mb-16">
          {perks.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="bg-white border border-gray-200 rounded-3xl p-8 h-full hover:border-brand-red hover:shadow-2xl transition-all">
                <div className="grid place-items-center h-14 w-14 rounded-2xl bg-brand-red text-white mb-5">
                  <p.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-black text-brand-ink">{p.title}</h3>
                <p className="mt-2 text-muted-foreground">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="container-page max-w-3xl">
          <Reveal>
            <form onSubmit={onSubmit} className="bg-brand-ink text-white p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-red/40 blur-3xl rounded-full" />
              <div className="relative">
                <p className="text-brand-red font-bold tracking-[0.3em] uppercase text-xs">Banco de Hojas de Vida</p>
                <h2 className="mt-2 text-3xl md:text-4xl font-black text-white">Postúlate</h2>

                <div className="mt-8 grid md:grid-cols-2 gap-4">
                  <input name="name" required placeholder="Nombre completo *" className="bg-white/5 border border-white/20 rounded-xl px-4 py-3 focus:border-brand-red outline-none placeholder:text-white/50" />
                  <input name="email" type="email" required placeholder="Correo electrónico *" className="bg-white/5 border border-white/20 rounded-xl px-4 py-3 focus:border-brand-red outline-none placeholder:text-white/50" />
                  <input name="phone" required placeholder="Teléfono *" className="bg-white/5 border border-white/20 rounded-xl px-4 py-3 focus:border-brand-red outline-none placeholder:text-white/50" />
                  <input name="city" placeholder="Ciudad" className="bg-white/5 border border-white/20 rounded-xl px-4 py-3 focus:border-brand-red outline-none placeholder:text-white/50" />
                  <input name="position" required placeholder="Cargo de interés *" className="bg-white/5 border border-white/20 rounded-xl px-4 py-3 focus:border-brand-red outline-none placeholder:text-white/50" />
                  <input name="experience" type="number" min="0" placeholder="Años de experiencia" className="bg-white/5 border border-white/20 rounded-xl px-4 py-3 focus:border-brand-red outline-none placeholder:text-white/50" />
                </div>

                <textarea name="message" rows={5} placeholder="Cuéntanos sobre ti..." className="mt-4 w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 focus:border-brand-red outline-none placeholder:text-white/50 resize-none" />

                <div className="mt-4 flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white/80">
                  <Upload className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" />
                  <p>
                    <span className="font-bold text-white">Adjunta tu CV u hoja de vida.</span>{" "}
                    Al enviar este formulario se abrirá tu aplicación de correo.
                    Antes de enviar el mensaje, adjunta el archivo en formato PDF
                    o Word.
                  </p>
                </div>

                <button type="submit" className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-brand-red text-white px-6 py-4 rounded-full font-black hover:scale-[1.01] transition-transform">
                  <Send className="h-5 w-5" /> Enviar postulación
                </button>

                {sent && (
                  <p className="mt-4 text-center text-sm text-white/80">
                    ✓ Se abrió tu aplicación de correo. Adjunta tu CV u hoja de
                    vida antes de confirmar el envío.
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
