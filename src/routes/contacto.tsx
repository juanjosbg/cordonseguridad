import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { PageShell, PageHero } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import heroImg from "@/assets/hero-guard.jpg";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto y Cotizaciones — Cordón de Seguridad Ltda" },
      { name: "description", content: "Solicita una cotización o contáctanos. Estamos ubicados en Cali, Valle. Atendemos 24/7." },
      { property: "og:title", content: "Contacto — Cordón de Seguridad Ltda" },
      { property: "og:description", content: "Escríbenos o solicita tu cotización personalizada." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contacto" },
    ],
    links: [{ rel: "canonical", href: "/contacto" }],
  }),
  component: Page,
});

function Page() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`[Cotización] ${data.get("service") || "Solicitud"}`);
    const body = encodeURIComponent(
      `Nombre: ${data.get("name")}\nEmpresa: ${data.get("company")}\nEmail: ${data.get("email")}\nTeléfono: ${data.get("phone")}\nServicio: ${data.get("service")}\n\nMensaje:\n${data.get("message")}`
    );
    window.location.href = `mailto:informacion@cordonseguridadltda.com.co?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <PageShell>
      <PageHero
        eyebrow="Contáctanos"
        title="Hablemos de tu seguridad."
        subtitle="Solicita tu cotización o comunícate con nuestro equipo. Respondemos en menos de 24 horas."
        image={heroImg}
      />

      <section className="py-24">
        <div className="container-page grid lg:grid-cols-5 gap-10">
          <Reveal className="lg:col-span-2">
            <div className="bg-brand-ink text-white rounded-3xl p-10 h-full relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-red/40 blur-3xl rounded-full" />
              <div className="relative">
                <h2 className="text-3xl font-black text-white">Datos de contacto</h2>
                <p className="mt-2 text-white/70">Estamos disponibles para atender tu solicitud.</p>

                <ul className="mt-8 space-y-6">
                  <li className="flex gap-4">
                    <div className="grid place-items-center h-12 w-12 rounded-xl bg-brand-red shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest text-brand-red font-bold">Teléfono</div>
                      <a href="tel:3174280680" className="text-lg font-semibold text-white">317 428 0680</a>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="grid place-items-center h-12 w-12 rounded-xl bg-brand-red shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest text-brand-red font-bold">Correo</div>
                      <a href="mailto:informacion@cordonseguridadltda.com.co" className="text-sm md:text-base font-semibold text-white break-all">informacion@cordonseguridadltda.com.co</a>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="grid place-items-center h-12 w-12 rounded-xl bg-brand-red shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest text-brand-red font-bold">Dirección</div>
                      <p className="text-white/90">Avenida 5 Norte # 22N-26, Piso 6.<br />Barrio San Vicente, Cali, Valle.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="grid place-items-center h-12 w-12 rounded-xl bg-brand-red shrink-0">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest text-brand-red font-bold">Horario</div>
                      <p className="text-white/90">Atención 24 horas · 7 días a la semana</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <form onSubmit={onSubmit} className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100">
              <p className="eyebrow">Formulario de cotización</p>
              <h2 className="mt-2 text-3xl font-black text-brand-ink">Cuéntanos qué necesitas</h2>

              <div className="mt-8 grid md:grid-cols-2 gap-4">
                <input name="name" required placeholder="Nombre completo *" className="border border-gray-200 rounded-xl px-4 py-3 focus:border-brand-red outline-none" />
                <input name="company" placeholder="Empresa" className="border border-gray-200 rounded-xl px-4 py-3 focus:border-brand-red outline-none" />
                <input name="email" type="email" required placeholder="Correo electrónico *" className="border border-gray-200 rounded-xl px-4 py-3 focus:border-brand-red outline-none" />
                <input name="phone" required placeholder="Teléfono *" className="border border-gray-200 rounded-xl px-4 py-3 focus:border-brand-red outline-none" />
              </div>

              <select name="service" required defaultValue="" className="mt-4 w-full border border-gray-200 rounded-xl px-4 py-3 focus:border-brand-red outline-none">
                <option value="" disabled>Servicio de interés *</option>
                <option>Vigilancia Fija</option>
                <option>Vigilancia Móvil</option>
                <option>Escolta a Personas</option>
                <option>Monitoreo CCTV</option>
                <option>Medios Tecnológicos</option>
                <option>Vigilancia sin Armas</option>
              </select>

              <textarea name="message" required rows={5} placeholder="Describe tu proyecto o necesidad..." className="mt-4 w-full border border-gray-200 rounded-xl px-4 py-3 focus:border-brand-red outline-none resize-none" />

              <button type="submit" className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-brand-red text-white px-6 py-4 rounded-full font-black hover:scale-[1.01] transition-transform">
                <Send className="h-5 w-5" /> Enviar solicitud
              </button>

              {sent && (
                <p className="mt-4 text-center text-sm text-brand-ink">
                  ✓ Abrimos tu cliente de correo. Tu mensaje se envía a informacion@cordonseguridadltda.com.co
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
