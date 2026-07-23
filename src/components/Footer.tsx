import { Link } from "@tanstack/react-router";
import { Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-x-0 top-0 slash-divider" />

      <div className="container-page flex flex-col gap-14 py-20 md:flex-row md:items-start md:justify-between md:gap-0 lg:py-24">
        <div className="flex flex-col items-start md:w-[36%] md:shrink-0">
          <div className="flex items-center gap-3">
            <img
              src="/logo/CordonDeSeguridad_LogoSimbolo04.png"
              alt="Símbolo de Cordón de Seguridad"
              className="h-12 w-auto"
            />
            <div className="leading-tight">
              <div className="text-lg font-black">CORDÓN DE</div>
              <div className="text-xs font-bold tracking-widest">SEGURIDAD LTDA</div>
            </div>
          </div>

          <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/70">
            Vigilancia constante, confianza permanente. <br/>
            Empresa de vigilancia y
            seguridad privada en Cali, Colombia.
          </p>

          <div className="mt-16 space-y-6 text-sm text-white/60">
            <Link to="/pqrs" className="block transition-colors hover:text-white">
              Política de tratamiento de datos personales
            </Link>
            <p>
              © {new Date().getFullYear()} Cordón de Seguridad Ltda. Todos los
              derechos reservados.
            </p>
          </div>
        </div>

        <nav aria-label="Enlaces del pie de página" className="md:w-auto md:shrink-0 md:pt-2">
          <ul className="space-y-4 text-sm text-white/85">
            <li><Link to="/" className="transition-colors hover:text-brand-red">Inicio</Link></li>
            <li><Link to="/quienes-somos" className="transition-colors hover:text-brand-red">Quiénes Somos</Link></li>
            <li><Link to="/servicios" className="transition-colors hover:text-brand-red">Servicios</Link></li>
            <li><Link to="/pqrs" className="transition-colors hover:text-brand-red">PQRS</Link></li>
            <li><Link to="/trabaje-con-nosotros" className="transition-colors hover:text-brand-red">Trabaja con Nosotros</Link></li>
            <li><Link to="/contacto" className="transition-colors hover:text-brand-red">Contacto</Link></li>
          </ul>
        </nav>

        <div className="md:w-[30%] md:shrink-0 md:pt-2">
          <div className="text-sm leading-relaxed text-white/85">
            <h3 className="font-black text-white">Sede Cali:</h3>
            <p>Avenida 5 Norte # 22N-26, Piso 6.</p>
            <p>Barrio San Vicente, Cali, Valle.</p>
            <a
              href="tel:3174280680"
              className="transition-colors hover:text-brand-red"
            >
              Tel: 317 428 0680
            </a>
            <a
              href="mailto:informacion@cordonseguridadltda.com.co"
              className="mt-4 block break-all transition-colors hover:text-brand-red"
            >
              informacion@cordonseguridadltda.com.co
            </a>
          </div>

          <div className="mt-12 flex gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="grid h-10 w-10 place-items-center rounded-full bg-white text-black transition-colors hover:bg-brand-red hover:text-white"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="grid h-10 w-10 place-items-center rounded-full bg-white text-black transition-colors hover:bg-brand-red hover:text-white"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
