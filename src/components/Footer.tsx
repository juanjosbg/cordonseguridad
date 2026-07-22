import { Link } from "@tanstack/react-router";
import { Shield, Mail, Phone, MapPin, Instagram, Facebook, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-ink text-white relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 slash-divider" />
      <div className="container-page py-16 grid gap-12 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="grid place-items-center h-11 w-11 rounded-lg bg-brand-red">
              <Shield className="h-6 w-6 text-white" strokeWidth={2.5} />
            </div>
            <div className="leading-tight">
              <div className="text-base font-black">CORDÓN DE</div>
              <div className="text-[11px] font-bold tracking-widest text-brand-red">SEGURIDAD LTDA</div>
            </div>
          </div>
          <p className="text-sm text-white/70 leading-relaxed">
            Vigilancia constante, confianza permanente. Empresa de vigilancia y seguridad privada en Cali, Colombia.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-brand-red mb-4">Enlaces</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link to="/quienes-somos" className="hover:text-brand-red">Quiénes Somos</Link></li>
            <li><Link to="/servicios" className="hover:text-brand-red">Servicios</Link></li>
            <li><Link to="/pqrs" className="hover:text-brand-red">PQRS</Link></li>
            <li><Link to="/trabaje-con-nosotros" className="hover:text-brand-red">Trabaja con Nosotros</Link></li>
            <li><Link to="/contacto" className="hover:text-brand-red">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-brand-red mb-4">Contacto</h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 text-brand-red" /> 317 428 0680</li>
            <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 text-brand-red" /> informacion@cordonseguridadltda.com.co</li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-brand-red" /> Avenida 5 Norte # 22N-26, Piso 6. Barrio San Vicente, Cali, Valle.</li>
            <li className="flex items-start gap-2"><Globe className="h-4 w-4 mt-0.5 text-brand-red" /> cordonseguridadltda.com.co</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-brand-red mb-4">Síguenos</h4>
          <div className="flex gap-3">
            <a href="#" className="grid place-items-center h-10 w-10 rounded-full border border-white/20 hover:bg-brand-red hover:border-brand-red transition-colors">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" className="grid place-items-center h-10 w-10 rounded-full border border-white/20 hover:bg-brand-red hover:border-brand-red transition-colors">
              <Facebook className="h-4 w-4" />
            </a>
          </div>
          <p className="text-xs text-white/50 mt-6">
            Denuncia anónima:<br />
            <a href="/pqrs" className="text-brand-red font-semibold">Canal seguro 24/7</a>
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Cordón de Seguridad Ltda. Todos los derechos reservados.</p>
          <p>Vigilancia constante, confianza permanente.</p>
        </div>
      </div>
    </footer>
  );
}
