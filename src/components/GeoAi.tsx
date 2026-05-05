import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { geoAiPoints } from '../data/portfolio';
import { Section } from './Section';

const logos = [
  { label: 'Google Search Console', src: '/images/portfolio/google-search-console.svg' },
  { label: 'Google Ads', src: '/images/portfolio/google-ads.svg' },
  { label: 'OpenAI', src: '/images/portfolio/openai.svg' },
  { label: 'Claude', src: '/images/portfolio/anthropic.svg' },
];

export function GeoAi() {
  return (
    <Section
      id="geo-ai"
      title="GEO e IA aplicada, explicado sin humo."
      intro="Optimizo proyectos para buscadores tradicionales y también para nuevos entornos generativos, cuidando estructura, entidades, contenido, autoridad y claridad semántica."
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="grid gap-8 rounded-[34px] border border-[#d9e2ef] bg-[#fbfcfd]/82 p-6 shadow-[0_20px_60px_rgba(35,55,85,0.07)] lg:grid-cols-[0.9fr_1.1fr]"
      >
        <div className="rounded-[26px] bg-white p-6">
          <div className="mb-6 flex gap-3">
            {logos.map((logo) => (
              <span key={logo.label} className="grid size-11 place-items-center rounded-2xl border border-[#d9e2ef] bg-white shadow-sm" title={logo.label}>
                <img src={logo.src} alt="" className="size-6 object-contain" loading="lazy" decoding="async" />
              </span>
            ))}
          </div>
          <p className="text-sm font-black uppercase tracking-[0.16em] text-cobalt">Método</p>
          <h3 className="mt-4 text-3xl font-black leading-tight tracking-[-0.02em] text-ink">
            Que Google, los usuarios y los asistentes entiendan lo mismo.
          </h3>
          <p className="mt-5 leading-7 text-graphite">
            La IA aplicada entra como capa práctica: estructura, prompts, asistentes internos y
            procesos que ayudan a producir mejor, medir mejor y responder con más claridad.
          </p>
        </div>
        <div className="grid gap-3">
          {geoAiPoints.map((point) => (
            <div key={point} className="flex gap-3 rounded-2xl bg-white px-5 py-4">
              <Check className="mt-1 shrink-0 text-cobalt" size={18} aria-hidden="true" />
              <p className="leading-7 text-graphite">{point}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
