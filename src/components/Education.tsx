import { motion } from 'framer-motion';
import { education } from '../data/portfolio';
import { Section } from './Section';

export function Education() {
  return (
    <Section
      id="formacion"
      title="Formación en desarrollo, datos y negocio digital."
      intro="Una base técnica que sigue creciendo hacia desarrollo web, análisis de datos y visión de negocio."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {education.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1], delay: index * 0.04 }}
            className="rounded-[26px] border border-[#d9e2ef] bg-white/76 p-5 shadow-[0_18px_48px_rgba(35,55,85,0.07)]"
          >
            <p className="text-[11px] font-black uppercase tracking-[0.16em] text-cobalt">{item.period}</p>
            <h3 className="mt-5 text-base font-black leading-6 text-ink">{item.title}</h3>
            <p className="mt-3 text-sm font-bold leading-6 text-graphite">{item.center}</p>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
