import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, Images } from "lucide-react";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

const photos = [
  { src: "/photos/FAPT0118.jpg", alt: "Equipo durante jornada institucional" },
  { src: "/photos/FAPT0113.jpg", alt: "Personal durante actividad corporativa" },
  { src: "/photos/FAPT0098.jpg", alt: "Actividad institucional de seguridad" },
  { src: "/photos/FAPT0080.jpg", alt: "Talento humano de Cordón de Seguridad" },
  { src: "/photos/FAPT0079.jpg", alt: "Jornada del personal de vigilancia" },
  { src: "/photos/FAPT0004.jpg", alt: "Equipo operativo de seguridad" },
  { src: "/photos/DSC06252.JPG", alt: "Equipo de Cordón de Seguridad" },
];

export function PhotoGallery() {
  const [api, setApi] = useState<CarouselApi>();
  const [isPaused, setIsPaused] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!api || isPaused || dialogOpen) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const interval = window.setInterval(() => api.scrollNext(), 3500);
    return () => window.clearInterval(interval);
  }, [api, dialogOpen, isPaused]);

  const openPhoto = useCallback((index: number) => {
    setActiveIndex(index);
    setDialogOpen(true);
  }, []);

  const showPrevious = useCallback(() => {
    setActiveIndex((current) =>
      current === 0 ? photos.length - 1 : current - 1,
    );
  }, []);

  const showNext = useCallback(() => {
    setActiveIndex((current) =>
      current === photos.length - 1 ? 0 : current + 1,
    );
  }, []);

  return (
    <>
      <section className="overflow-hidden bg-brand-ink py-20 text-white md:py-24">
        <div className="container-page">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.3em] text-brand-red">
                <Images className="h-4 w-4" />
                Nuestra galería
              </p>
              <h2 className="mt-4 max-w-2xl text-4xl font-black leading-tight text-white md:text-5xl">
                Conoce nuestro equipo y nuestra labor.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-white/60">
              La galería avanza automáticamente. Haz clic en cualquier imagen
              para verla completa y recorrer las demás.
            </p>
          </div>

          <Carousel
            setApi={setApi}
            opts={{ align: "start", loop: true }}
            className="mx-auto"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocusCapture={() => setIsPaused(true)}
            onBlurCapture={() => setIsPaused(false)}
          >
            <CarouselContent>
              {photos.map((photo, index) => (
                <CarouselItem
                  key={photo.src}
                  className="basis-[88%] sm:basis-1/2 lg:basis-1/3"
                >
                  <button
                    type="button"
                    onClick={() => openPhoto(index)}
                    className="group relative block h-[300px] w-full overflow-hidden rounded-2xl bg-black text-left shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-4 focus-visible:ring-offset-brand-ink"
                    aria-label={`Ampliar: ${photo.alt}`}
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      loading={index < 3 ? "eager" : "lazy"}
                      decoding="async"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-80"
                    />
                    <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70" />
                    <span className="absolute bottom-4 right-4 grid h-11 w-11 place-items-center rounded-full bg-white text-black shadow-lg transition-transform group-hover:scale-110">
                      <Expand className="h-5 w-5" />
                    </span>
                  </button>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-3 h-11 w-11 border-0 bg-white text-black hover:bg-brand-red hover:text-white disabled:hidden md:-left-5" />
            <CarouselNext className="right-3 h-11 w-11 border-0 bg-white text-black hover:bg-brand-red hover:text-white disabled:hidden md:-right-5" />
          </Carousel>
        </div>
      </section>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="flex h-[94vh] w-[96vw] max-w-[96vw] flex-col overflow-hidden border-0 bg-black p-0 text-white sm:rounded-2xl">
          <DialogTitle className="sr-only">
            Galería de Cordón de Seguridad
          </DialogTitle>
          <DialogDescription className="sr-only">
            Imagen ampliada. Usa las flechas o las miniaturas para recorrer la
            galería.
          </DialogDescription>

          <div className="relative min-h-0 flex-1">
            <img
              src={photos[activeIndex].src}
              alt={photos[activeIndex].alt}
              className="h-full w-full object-contain"
            />

            <button
              type="button"
              onClick={showPrevious}
              aria-label="Ver foto anterior"
              className="absolute left-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-black shadow-xl transition hover:bg-brand-red hover:text-white md:left-6"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              type="button"
              onClick={showNext}
              aria-label="Ver foto siguiente"
              className="absolute right-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-black shadow-xl transition hover:bg-brand-red hover:text-white md:right-6"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <div className="absolute left-4 top-4 rounded-full bg-black/60 px-4 py-2 text-sm font-bold backdrop-blur">
              {activeIndex + 1} / {photos.length}
            </div>
          </div>

          <div className="border-t border-white/10 bg-black p-3 md:p-4">
            <div className="mx-auto flex max-w-5xl gap-2 overflow-x-auto pb-1">
              {photos.map((photo, index) => (
                <button
                  type="button"
                  key={photo.src}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Ver imagen ${index + 1}: ${photo.alt}`}
                  aria-current={activeIndex === index}
                  className={`h-16 w-24 shrink-0 overflow-hidden rounded-lg border-2 transition md:h-20 md:w-28 ${
                    activeIndex === index
                      ? "border-brand-red opacity-100"
                      : "border-transparent opacity-50 hover:opacity-90"
                  }`}
                >
                  <img
                    src={photo.src}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
