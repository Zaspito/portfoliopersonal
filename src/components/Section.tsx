import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type SectionProps = {
  id?: string;
  label?: string;
  title: string;
  intro?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, label, title, intro, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`section-shell py-8 sm:py-10 lg:py-12 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mb-6 max-w-2xl"
      >
        {label ? (
          <p className="mb-2 text-[11px] font-black uppercase tracking-[0.22em] text-cobalt">
            {label}
          </p>
        ) : null}
        <h2 className="text-balance text-3xl font-black leading-[1.05] text-ink sm:text-4xl lg:text-[46px]">
          {title}
        </h2>
        {intro ? <p className="mt-3 text-sm leading-6 text-graphite">{intro}</p> : null}
      </motion.div>
      {children}
    </section>
  );
}
