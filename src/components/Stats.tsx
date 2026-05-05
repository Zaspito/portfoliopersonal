import { motion } from 'framer-motion';
import { BarChart3, Gauge, Layers3, Workflow } from 'lucide-react';
import { stats } from '../data/portfolio';

const statVisuals = [
  { icon: BarChart3, accent: '#1d5cff', progress: '92%', note: 'tráfico orgánico' },
  { icon: Gauge, accent: '#5e9f79', progress: '72%', note: 'autoridad' },
  { icon: Workflow, accent: '#ea4b71', progress: '84%', note: 'operación' },
  { icon: Layers3, accent: '#7457ff', progress: '78%', note: 'multi-site' },
];

export function Stats() {
  return (
    <section id="logros" className="section-shell py-14">
      <div className="mb-8 grid gap-5 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
        <div>
          <p className="border-b border-cobalt pb-2 text-sm font-black uppercase tracking-[0.18em] text-cobalt">
            Logros destacados
          </p>
          <h2 className="mt-6 text-4xl font-black tracking-[-0.02em] text-ink">Resultados con contexto.</h2>
        </div>
        <p className="max-w-2xl text-base leading-7 text-graphite lg:justify-self-end">
          Métricas presentadas como señales de trabajo real: crecimiento, autoridad, operación comercial y gestión técnica.
        </p>
      </div>
      <div className="grid gap-4 lg:grid-cols-4">
        {stats.map((stat, index) => {
          const visual = statVisuals[index];
          const Icon = visual.icon;
          return (
            <motion.article
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, rotateX: 2 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.04 }}
              className="group rounded-[30px] border border-[#d9e2ef] bg-white/82 p-6 shadow-[0_18px_50px_rgba(35,55,85,0.07)]"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="grid size-12 place-items-center rounded-2xl bg-[#f1f5fb]" style={{ color: visual.accent }}>
                  <Icon size={22} aria-hidden="true" />
                </span>
                <span className="rounded-full bg-[#f7f9fb] px-3 py-1 text-[11px] font-black uppercase tracking-[0.14em] text-graphite/65">
                  {visual.note}
                </span>
              </div>
              <p className="text-[34px] font-black leading-[1.02] tracking-[-0.04em] text-ink">{stat.value}</p>
              <h3 className="mt-5 text-base font-black" style={{ color: visual.accent }}>
                {stat.label}
              </h3>
              <p className="mt-3 min-h-[72px] text-sm leading-6 text-graphite">{stat.detail}</p>
              <div className="mt-5 h-2 overflow-hidden rounded-full bg-[#edf2f8]">
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: visual.progress }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 + index * 0.05 }}
                  className="block h-full rounded-full"
                  style={{ backgroundColor: visual.accent }}
                />
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
