import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Layers3, LineChart, Workflow } from 'lucide-react';
import { aboutHighlights, brandLogos, capabilityPillars, profileSummary } from '../data/portfolio';

const signalCards = [
  { label: 'Web', value: 'WordPress + WooCommerce', icon: Layers3 },
  { label: 'Growth', value: 'SEO técnico + GEO', icon: LineChart },
  { label: 'Ops', value: 'n8n + Apps Script', icon: Workflow },
];

export function About() {
  const { scrollYProgress } = useScroll();
  const visualY = useTransform(scrollYProgress, [0.08, 0.32], [28, -18]);

  return (
    <section id="sobre-mi" className="section-shell py-16">
      <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <p className="border-b border-cobalt pb-2 text-sm font-black uppercase tracking-[0.18em] text-cobalt">
            Sobre mí
          </p>
          <h2 className="mt-6 text-balance text-4xl font-black leading-[1.02] tracking-[-0.02em] text-ink sm:text-5xl">
            Perfil técnico con mentalidad de producto, SEO y automatización.
          </h2>

          <motion.div
            style={{ y: visualY }}
            className="mt-10 overflow-hidden rounded-[32px] border border-[#d9e2ef] bg-white/82 p-5 shadow-[0_22px_70px_rgba(35,55,85,0.1)]"
          >
            <div className="relative rounded-[24px] bg-[#f4f8ff] p-5">
              <div className="absolute right-5 top-5 rounded-2xl bg-white px-3 py-2 text-xs font-black text-cobalt shadow-sm">
                Sistema digital
              </div>
              <p className="text-5xl font-black tracking-[-0.05em] text-ink">
                ÁM<span className="text-cobalt">.</span>
              </p>
              <p className="mt-2 max-w-xs text-sm font-bold leading-6 text-graphite">
                Desarrollo, posicionamiento, datos y automatización conectados en un mismo criterio.
              </p>
              <div className="mt-6 grid gap-3">
                {signalCards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <div key={card.label} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 shadow-sm">
                      <div>
                        <p className="text-[11px] font-black uppercase tracking-[0.16em] text-cobalt">{card.label}</p>
                        <p className="mt-1 text-sm font-black text-ink">{card.value}</p>
                      </div>
                      <Icon className="text-cobalt" size={20} aria-hidden="true" />
                    </div>
                  );
                })}
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {brandLogos.slice(0, 5).map((logo) => (
                  <span key={logo.label} className="grid size-10 place-items-center rounded-xl bg-white shadow-sm" title={logo.label}>
                    <img src={logo.src} alt="" className="size-5 object-contain" loading="lazy" decoding="async" />
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          className="rounded-[34px] border border-[#d9e2ef] bg-white/80 p-6 shadow-[0_24px_72px_rgba(35,55,85,0.09)] sm:p-8"
        >
          <p className="text-lg leading-8 text-graphite">{profileSummary}</p>

          <div className="mt-8 grid gap-4">
            {aboutHighlights.map((highlight, index) => (
              <motion.div
                key={highlight}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                className="group flex items-start gap-4 rounded-2xl bg-[#f7f9fb] p-4 transition hover:-translate-y-0.5 hover:bg-[#eef4ff]"
              >
                <ArrowUpRight className="mt-1 shrink-0 text-cobalt transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={18} aria-hidden="true" />
                <p className="leading-7 text-graphite">{highlight}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {capabilityPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article key={pillar.title} className="rounded-2xl border border-[#d9e2ef] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_16px_38px_rgba(35,55,85,0.08)]">
                  <Icon size={20} className="text-cobalt" aria-hidden="true" />
                  <h3 className="mt-4 text-base font-black text-ink">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-graphite">{pillar.text}</p>
                </article>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
