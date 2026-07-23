import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AlertTriangle, Send, ShieldCheck } from "lucide-react";
import { PageHero, PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const heroImage = "/photos/DSC08865.jpg";

export const Route = createFileRoute("/sarlaft-sicof")({
  head: () => ({
    meta: [
      {
        title:
          "SARLAFT y SICOF — Reporte de situaciones irregulares | Cordón de Seguridad",
      },
      {
        name: "description",
        content:
          "Canal institucional para reportar situaciones inusuales o irregulares relacionadas con SARLAFT, SICOF, corrupción, soborno y conflictos de interés.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/sarlaft-sicof" },
    ],
    links: [{ rel: "canonical", href: "/sarlaft-sicof" }],
  }),
  component: SarlaftSicofPage,
});

function SarlaftSicofPage() {
  const [anonymous, setAnonymous] = useState(true);
  const [sent, setSent] = useState(false);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const reportType = String(data.get("reportType") || "Situación irregular");
    const subject = encodeURIComponent(`[SARLAFT-SICOF] ${reportType}`);
    const body = encodeURIComponent(
      [
        `Reporte anónimo: ${anonymous ? "Sí" : "No"}`,
        anonymous ? "" : `Nombre: ${data.get("name") || ""}`,
        anonymous ? "" : `Correo: ${data.get("email") || ""}`,
        anonymous ? "" : `Teléfono: ${data.get("phone") || ""}`,
        `Relación con la empresa: ${data.get("relationship") || ""}`,
        `Tipo de situación: ${reportType}`,
        `Fecha aproximada: ${data.get("date") || ""}`,
        `Lugar o área: ${data.get("location") || ""}`,
        `Personas involucradas: ${data.get("people") || ""}`,
        "",
        "Descripción:",
        String(data.get("description") || ""),
      ]
        .filter(Boolean)
        .join("\n"),
    );

    window.location.href =
      `mailto:informacion@cordonseguridadltda.com.co?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <PageShell>
      <PageHero
        eyebrow="SARLAFT · SICOF"
        title="Reporte de situaciones irregulares"
        subtitle="Un canal institucional para comunicar hechos inusuales o contrarios a nuestros principios, a la ley y a las políticas de la organización."
        image={heroImage}
      />

      <section className="bg-gray-50 py-20 md:py-28">
        <div className="container-page">
          <Reveal>
            <div className="mx-auto max-w-5xl rounded-[2rem] border border-gray-200 bg-white p-7 shadow-xl shadow-black/5 md:p-12">
              <div className="flex flex-col gap-8 md:flex-row md:items-start">
                <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-brand-red text-white">
                  <ShieldCheck className="h-8 w-8" />
                </div>

                <div>
                  <h2 className="text-3xl font-black tracking-tight text-brand-ink md:text-4xl">
                    Reporte de situaciones irregulares
                  </h2>

                  <div className="mt-6 space-y-5 text-[15px] leading-7 text-muted-foreground">
                    <p>
                      En Cordón de Seguridad entendemos que la seguridad no solo
                      se ejerce en la operación, sino también en la forma en que
                      actuamos. El Sistema de Administración del Riesgo de Lavado
                      de Activos y Financiación del Terrorismo (SARLAFT), el
                      Sistema Integral para la Prevención y Control del Fraude
                      (SICOF) y el Programa de Transparencia y Ética Empresarial
                      fortalecen nuestro compromiso con la legalidad, la
                      transparencia y la integridad institucional.
                    </p>
                    <p>
                      Este espacio permite que colaboradores, clientes,
                      proveedores y terceros reporten de buena fe situaciones
                      inusuales o irregulares, especialmente aquellas
                      relacionadas con lavado de activos, financiación del
                      terrorismo, fraude, corrupción, soborno o conflictos de
                      interés.
                    </p>
                    <p>
                      La información será revisada por el equipo responsable bajo
                      criterios de reserva y protección al denunciante. Este
                      canal no sustituye el módulo PQRS ni está destinado a
                      peticiones, quejas o reclamos relacionados con la
                      prestación del servicio.
                    </p>
                  </div>

                  <div className="mt-8 flex flex-col gap-4 rounded-2xl bg-red-50 p-5 text-sm text-red-950 sm:flex-row sm:items-center">
                    <AlertTriangle className="h-5 w-5 shrink-0 text-brand-red" />
                    <p>
                      Si existe peligro inmediato para una persona, comunícate
                      primero con las autoridades competentes.
                    </p>
                  </div>

                  <Dialog>
                    <DialogTrigger asChild>
                      <button
                        type="button"
                        className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-brand-red px-7 py-4 text-sm font-black uppercase tracking-wide text-white shadow-lg shadow-red-600/20 transition-transform hover:scale-[1.02]"
                      >
                        Realizar denuncia
                        <Send className="h-4 w-4" />
                      </button>
                    </DialogTrigger>

                    <DialogContent className="max-h-[92vh] overflow-y-auto rounded-3xl border-0 p-0 sm:max-w-3xl">
                      <div className="bg-brand-ink px-6 py-7 text-white md:px-9">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-black text-white">
                            Reportar una situación irregular
                          </DialogTitle>
                          <DialogDescription className="text-white/70">
                            Completa únicamente la información que conozcas. Los
                            campos marcados son obligatorios.
                          </DialogDescription>
                        </DialogHeader>
                      </div>

                      <form onSubmit={onSubmit} className="space-y-5 p-6 md:p-9">
                        <label className="flex cursor-pointer items-center gap-3 rounded-xl bg-gray-100 p-4">
                          <input
                            type="checkbox"
                            checked={anonymous}
                            onChange={(event) =>
                              setAnonymous(event.target.checked)
                            }
                            className="h-4 w-4 accent-red-600"
                          />
                          <span className="text-sm font-bold text-brand-ink">
                            Presentar el reporte de forma anónima
                          </span>
                        </label>

                        {!anonymous && (
                          <div className="grid gap-4 md:grid-cols-2">
                            <input
                              name="name"
                              required
                              autoComplete="name"
                              placeholder="Nombre completo *"
                              className="rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-brand-red"
                            />
                            <input
                              name="email"
                              type="email"
                              required
                              autoComplete="email"
                              placeholder="Correo electrónico *"
                              className="rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-brand-red"
                            />
                            <input
                              name="phone"
                              autoComplete="tel"
                              placeholder="Teléfono"
                              className="rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-brand-red md:col-span-2"
                            />
                          </div>
                        )}

                        <div className="grid gap-4 md:grid-cols-2">
                          <select
                            name="relationship"
                            required
                            defaultValue=""
                            className="rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none focus:border-brand-red"
                          >
                            <option value="" disabled>
                              Relación con la empresa *
                            </option>
                            <option>Colaborador</option>
                            <option>Cliente</option>
                            <option>Proveedor</option>
                            <option>Contratista</option>
                            <option>Tercero</option>
                            <option>Prefiero no indicarlo</option>
                          </select>

                          <select
                            name="reportType"
                            required
                            defaultValue=""
                            className="rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none focus:border-brand-red"
                          >
                            <option value="" disabled>
                              Tipo de situación *
                            </option>
                            <option>Lavado de activos</option>
                            <option>Financiación del terrorismo</option>
                            <option>Fraude</option>
                            <option>Corrupción o soborno</option>
                            <option>Conflicto de interés</option>
                            <option>Incumplimiento ético</option>
                            <option>Otra situación irregular</option>
                          </select>

                          <input
                            name="date"
                            type="date"
                            aria-label="Fecha aproximada de los hechos"
                            className="rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-brand-red"
                          />
                          <input
                            name="location"
                            placeholder="Lugar o área de los hechos"
                            className="rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-brand-red"
                          />
                        </div>

                        <input
                          name="people"
                          placeholder="Personas involucradas, si las conoces"
                          className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-brand-red"
                        />
                        <textarea
                          name="description"
                          required
                          rows={7}
                          placeholder="Describe los hechos con el mayor detalle posible: qué ocurrió, cómo lo conociste y cualquier dato útil para su revisión. *"
                          className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-brand-red"
                        />

                        <p className="text-xs leading-5 text-muted-foreground">
                          Al continuar se abrirá tu aplicación de correo. Un
                          correo electrónico puede revelar la dirección del
                          remitente; para preservar el anonimato no incluyas
                          datos que permitan identificarte.
                        </p>

                        <button
                          type="submit"
                          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-red px-6 py-4 font-black text-white transition-transform hover:scale-[1.01]"
                        >
                          <Send className="h-5 w-5" />
                          Preparar reporte
                        </button>

                        {sent && (
                          <p className="text-center text-sm font-semibold text-brand-ink">
                            Se abrió tu aplicación de correo con la información
                            del reporte.
                          </p>
                        )}
                      </form>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
