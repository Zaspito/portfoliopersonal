import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { brandLogos, contactLinks, ctaLabels } from '../data/portfolio';
import { Hero3D } from './Hero3D';

export function Hero() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.28], [0, 54]);

  return (
    <section id="inicio" className="relative">
      <motion.div
        style={{ y: heroY }}
        className="pointer-events-none absolute left-1/2 top-20 h-64 w-full max-w-[42rem] -translate-x-1/2 rounded-full bg-white/60 blur-3xl"
      />
      <div className="section-shell grid items-center gap-10 py-14 sm:py-16 lg:grid-cols-[0.88fr_1.12fr] lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[660px]"
        >
          <div className="mb-7 inline-flex border-b border-cobalt pb-1 text-sm font-black uppercase tracking-[0.18em] text-cobalt">
            Portfolio profesional · Sevilla
          </div>

          <h1 className="text-balance text-[42px] font-black leading-[0.98] tracking-[-0.035em] text-ink sm:text-6xl lg:text-[74px]">
            Ángel Muñiz <span className="text-cobalt">Pedraza</span>
          </h1>

          <p className="mt-6 max-w-2xl text-xl font-black leading-tight text-graphite sm:text-2xl lg:text-[30px]">
            SEO Técnico · WordPress · Automatización · Desarrollo Web
          </p>

          <p className="mt-6 max-w-xl text-base leading-8 text-graphite sm:text-lg">
            Construyo ecosistemas digitales que combinan posicionamiento, automatización,
            inteligencia artificial aplicada y desarrollo web para aumentar visibilidad, captar leads y
            optimizar procesos.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              className="focus-ring group inline-flex items-center justify-center gap-2 rounded-2xl bg-ink px-7 py-4 text-sm font-black text-white shadow-[0_18px_34px_rgba(16,32,51,0.18)] transition hover:-translate-y-1 hover:bg-cobalt"
              href="#contacto"
            >
              <Mail size={18} aria-hidden="true" />
              {ctaLabels.contact}
            </a>
            <a
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-2xl border border-line bg-white/76 px-7 py-4 text-sm font-black text-ink shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-cobalt hover:text-cobalt"
              href="#proyectos"
            >
              {ctaLabels.projects}
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-2xl border border-line bg-white/76 px-7 py-4 text-sm font-black text-ink shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-[#5e9f79] hover:text-[#5e9f79]"
              href={contactLinks.cv}
              download
            >
              <Download size={18} aria-hidden="true" />
              {ctaLabels.cv}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3" aria-label="Marcas y herramientas principales">
            {brandLogos.map((mark, index) => (
              <motion.span
                key={mark.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.42 + index * 0.05 }}
                className="inline-flex items-center gap-2 rounded-2xl border border-[#d9e2ef] bg-white/82 px-3 py-2 text-xs font-black text-graphite shadow-sm transition hover:-translate-y-1 hover:border-cobalt/35"
              >
                <img src={mark.src} alt="" className="size-4 object-contain" loading="eager" decoding="async" />
                {mark.label}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 26 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          className="relative"
        >
          <Hero3D />
        </motion.div>
      </div>
    </section>
  );
}
