import { motion } from 'framer-motion';
import { Download, Mail, MapPin, Phone } from 'lucide-react';
import { contactLinks } from '../data/portfolio';
import { Section } from './Section';

export function Contact() {
  const emailHref = `mailto:${contactLinks.email}`;
  const phoneHref = `tel:${contactLinks.phone.replace(/\s/g, '')}`;

  return (
    <Section
      id="contacto"
      title="¿Construimos algo que funcione de verdad?"
      intro="Si buscas una mezcla de web, SEO, automatización y criterio técnico, aquí tienes una vía directa para hablar."
      className="pb-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden rounded-[34px] border border-[#d9e2ef] bg-white/78 shadow-[0_22px_70px_rgba(35,55,85,0.09)]"
      >
        <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4 border-b border-[#d9e2ef] p-6 sm:p-8 lg:border-b-0 lg:border-r">
            <a href={emailHref} className="focus-ring flex items-center gap-4 rounded-2xl bg-[#f7f9fb] p-4 font-bold text-graphite hover:text-cobalt">
              <Mail size={18} className="text-cobalt" aria-hidden="true" />
              {contactLinks.email}
            </a>
            <a href={phoneHref} className="focus-ring flex items-center gap-4 rounded-2xl bg-[#f7f9fb] p-4 font-bold text-graphite hover:text-cobalt">
              <Phone size={18} className="text-cobalt" aria-hidden="true" />
              {contactLinks.phone}
            </a>
            <p className="flex items-center gap-4 rounded-2xl bg-[#f7f9fb] p-4 font-bold text-graphite">
              <MapPin size={18} className="text-cobalt" aria-hidden="true" />
              {contactLinks.location}
            </p>
          </div>

          <div className="p-6 sm:p-8">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-cobalt">Contacto directo</p>
            <h3 className="mt-4 text-3xl font-black leading-tight tracking-[-0.02em] text-ink">
              Webs, SEO, leads y automatización con una sola visión.
            </h3>
            <p className="mt-4 max-w-2xl leading-7 text-graphite">
              Estoy disponible para oportunidades profesionales, proyectos digitales y colaboraciones
              donde la parte técnica tenga impacto real en negocio.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a className="focus-ring inline-flex items-center justify-center rounded-2xl bg-ink px-6 py-4 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-cobalt" href={emailHref}>
                Enviar email
              </a>
              <a className="focus-ring inline-flex items-center justify-center rounded-2xl border border-line bg-white px-6 py-4 text-sm font-black text-ink transition hover:-translate-y-1 hover:border-cobalt hover:text-cobalt" href={phoneHref}>
                Llamar
              </a>
              <a className="focus-ring inline-flex items-center justify-center gap-2 rounded-2xl border border-line bg-white px-6 py-4 text-sm font-black text-ink transition hover:-translate-y-1 hover:border-cobalt hover:text-cobalt" href={contactLinks.cv} download>
                <Download size={17} aria-hidden="true" />
                Descargar CV
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
