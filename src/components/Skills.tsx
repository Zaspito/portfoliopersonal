import { motion } from 'framer-motion';
import { skillGroups } from '../data/portfolio';
import { Section } from './Section';

export function Skills() {
  return (
    <Section
      id="skills"
      title="Skills agrupadas por trabajo real."
      intro="No es una nube infinita de herramientas: son bloques de capacidad que conectan desarrollo, posicionamiento, automatización y medición."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group, index) => {
          const Icon = group.icon;
          return (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.04 }}
              className="rounded-[28px] border border-[#d9e2ef] bg-white/76 p-6 shadow-[0_18px_48px_rgba(35,55,85,0.07)] transition hover:-translate-y-1"
            >
              <div className="mb-5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-2xl bg-[#f1f5fb] text-cobalt">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-black text-ink">{group.title}</h3>
                </div>
                <div className="flex -space-x-2">
                  {group.logos.slice(0, 4).map((logo) => (
                    <span
                      key={logo.name}
                      className="grid size-9 place-items-center rounded-xl border border-[#d9e2ef] bg-white shadow-sm"
                      title={logo.name}
                    >
                      <img src={logo.src} alt="" className="size-5 object-contain" loading="lazy" decoding="async" />
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="rounded-lg bg-[#f7f9fb] px-3 py-2 text-xs font-bold text-graphite">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
