import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { experience } from '../data/portfolio';
import { Section } from './Section';

export function Experience() {
  return (
    <Section
      id="experiencia"
      title="Experiencia real construyendo, midiendo y automatizando."
      intro="Experiencia práctica en proyectos digitales donde conviven web, SEO, campañas, analítica y operaciones comerciales."
    >
      <div className="space-y-5">
        {experience.map((item, index) => (
          <motion.article
            key={item.company}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
            className="grid gap-6 rounded-[30px] border border-[#d9e2ef] bg-white/78 p-6 shadow-[0_18px_55px_rgba(35,55,85,0.07)] lg:grid-cols-[260px_1fr]"
          >
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-cobalt">{item.period}</p>
              <h3 className="mt-4 text-2xl font-black leading-tight text-ink">{item.company}</h3>
              <p className="mt-3 text-base font-bold leading-6 text-graphite">{item.role}</p>
              <p className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-graphite">
                <MapPin size={15} aria-hidden="true" />
                {item.location}
              </p>
            </div>

            <div>
              <p className="max-w-3xl text-base leading-7 text-graphite">{item.summary}</p>
              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {item.points.map((point) => (
                  <p key={point} className="rounded-2xl bg-[#f7f9fb] px-4 py-3 text-sm leading-6 text-graphite">
                    {point}
                  </p>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
