import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects, type Project } from '../data/portfolio';
import { Section } from './Section';

const asset = (file: string) => `/images/portfolio/${file}`;

function SmallLogo({ src, label }: { src: string; label: string }) {
  return (
    <span className="grid size-10 place-items-center rounded-xl border border-[#d9e2ef] bg-white shadow-sm" title={label}>
      <img src={src} alt="" className="size-5 object-contain" loading="lazy" decoding="async" />
    </span>
  );
}

function ProjectMockup({ project }: { project: Project }) {
  if (project.visual === 'sevillavet') {
    return (
      <div className="relative h-64 overflow-hidden rounded-[24px] bg-[#eef8f6]">
        <img
          src={project.image}
          alt={project.imageAlt}
          className="h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d2b2c]/65 via-[#0d2b2c]/12 to-transparent" />
        <div className="absolute left-5 top-5 rounded-full bg-white/92 px-3 py-1 text-xs font-black text-[#258a8d] shadow-sm">
          Los Ángeles
        </div>
        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
          {project.logo ? (
            <span className="rounded-2xl bg-white/94 px-4 py-3 shadow-sm">
              <img src={project.logo} alt={project.logoAlt} className="h-10 w-auto max-w-[190px] object-contain" loading="lazy" decoding="async" />
            </span>
          ) : null}
          <span className="rounded-2xl bg-white/16 px-4 py-3 text-xs font-black uppercase tracking-[0.16em] text-white backdrop-blur">
            Hospital veterinario
          </span>
        </div>
      </div>
    );
  }

  if (project.visual === 'automation') {
    const tools = [
      { label: 'n8n', src: asset('n8n.svg') },
      { label: 'Google Sheets', src: asset('google-sheets.svg') },
      { label: 'Apps Script', src: asset('google-apps-script.svg') },
      { label: 'WhatsApp', src: asset('whatsapp.svg') },
    ];

    return (
      <div className="h-auto min-h-[16rem] rounded-[24px] bg-[#f7f9fb] p-5">
        <p className="text-sm font-black uppercase tracking-[0.16em] text-cobalt">Lead routing</p>
        <div className="mt-6 flex items-center justify-between gap-2 rounded-[22px] bg-white p-4 shadow-sm">
          {tools.map((tool, index) => (
            <div key={tool.label} className="flex flex-1 items-center gap-2">
              <div className="grid justify-items-center gap-2">
                <SmallLogo src={tool.src} label={tool.label} />
                <span className="text-[11px] font-black text-graphite">{tool.label}</span>
              </div>
              {index < tools.length - 1 ? <span className="h-px flex-1 bg-[#cbd8e7]" /> : null}
            </div>
          ))}
        </div>
        <div className="mt-5 grid grid-cols-2 gap-3">
          {['Clasificación', 'Plantillas', 'CRM', 'Respuesta'].map((item) => (
            <span key={item} className="rounded-2xl border border-[#d9e2ef] bg-white px-4 py-3 text-sm font-black text-graphite shadow-sm">
              {item}
            </span>
          ))}
        </div>
      </div>
    );
  }

  if (project.visual === 'ai') {
    return (
      <div className="h-auto min-h-[16rem] rounded-[24px] bg-[#f6f3ff] p-5">
        <p className="text-sm font-black uppercase tracking-[0.16em] text-[#6f5bd6]">IA aplicada</p>
        <div className="mt-6 grid grid-cols-2 gap-3">
          <div className="rounded-[22px] bg-white p-5 shadow-sm">
            <img src={project.image} alt={project.imageAlt} className="size-10 object-contain" loading="lazy" decoding="async" />
            <p className="mt-4 text-sm font-black text-ink">Claude Skills</p>
            <span className="mt-3 block h-2 rounded-full bg-[#dcd5ff]" />
            <span className="mt-2 block h-2 w-8/12 rounded-full bg-[#ebe7ff]" />
          </div>
          <div className="rounded-[22px] bg-white p-5 shadow-sm">
            {project.logo ? (
              <img src={project.logo} alt={project.logoAlt} className="size-10 object-contain" loading="lazy" decoding="async" />
            ) : null}
            <p className="mt-4 text-sm font-black text-ink">Asistentes</p>
            <span className="mt-3 block h-2 rounded-full bg-[#dcd5ff]" />
            <span className="mt-2 block h-2 w-7/12 rounded-full bg-[#ebe7ff]" />
          </div>
        </div>
        <div className="mt-4 flex gap-2">
          <span className="rounded-xl bg-white px-3 py-2 text-xs font-black text-[#6f5bd6]">SEO</span>
          <span className="rounded-xl bg-white px-3 py-2 text-xs font-black text-[#6f5bd6]">Ventas</span>
          <span className="rounded-xl bg-white px-3 py-2 text-xs font-black text-[#6f5bd6]">Soporte</span>
        </div>
      </div>
    );
  }

  if (project.visual === 'bonmenu') {
    return (
      <div className="relative h-64 overflow-hidden rounded-[24px] bg-[#f9faf6]">
        <img src={project.image} alt={project.imageAlt} className="h-full w-full object-cover" loading="lazy" decoding="async" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f1f17]/64 via-[#0f1f17]/22 to-transparent" />
        <div className="absolute left-5 top-5 rounded-[22px] bg-white/92 p-4 shadow-sm">
          <p className="text-3xl font-black text-[#416f52]">BonMenu</p>
          <p className="mt-1 text-xs font-black uppercase tracking-[0.16em] text-graphite/55">Nutrición + datos</p>
        </div>
        <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-3">
          <span className="rounded-2xl bg-white/90 px-3 py-3 text-xs font-black text-graphite shadow-sm">Dieta</span>
          <span className="rounded-2xl bg-white/90 px-3 py-3 text-xs font-black text-graphite shadow-sm">Alimentos</span>
          <span className="rounded-2xl bg-white/90 px-3 py-3 text-xs font-black text-graphite shadow-sm">Comparador</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-64 overflow-hidden rounded-[24px] bg-[#eef4ff] p-5">
      <div className="absolute right-5 top-5 grid size-24 place-items-center rounded-[26px] bg-white shadow-sm">
        {project.logo ? (
          <img src={project.logo} alt={project.logoAlt} className="size-20 object-contain" loading="lazy" decoding="async" />
        ) : null}
      </div>
      <div className="rounded-[20px] bg-[#12213a] p-4 shadow-sm">
        <div className="mb-4 flex gap-1.5">
          <span className="size-2 rounded-full bg-white/35" />
          <span className="size-2 rounded-full bg-white/35" />
          <span className="size-2 rounded-full bg-white/35" />
        </div>
        <div className="space-y-3 pr-24">
          <span className="block h-3 rounded-full bg-white/55" />
          <span className="block h-3 w-10/12 rounded-full bg-white/30" />
          <span className="block h-3 w-8/12 rounded-full bg-white/30" />
        </div>
      </div>
      <div className="mt-4 flex gap-3">
        <SmallLogo src={asset('wordpress.svg')} label="WordPress" />
        <SmallLogo src={asset('woocommerce.svg')} label="WooCommerce" />
        <SmallLogo src={asset('google-search-console.svg')} label="Search Console" />
        <SmallLogo src={asset('google-ads.svg')} label="Google Ads" />
      </div>
      <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/86 p-4 shadow-sm">
        <img src={project.image} alt={project.imageAlt} className="h-12 w-auto object-contain" loading="lazy" decoding="async" />
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <Section
      id="proyectos"
      title="Proyectos como sistemas, no como tarjetas bonitas."
      intro="Una selección de trabajos y sistemas reales: webs, SEO, automatización, captación y producto digital."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => {
          const Icon = project.icon;
          return (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: index * 0.04 }}
              className={`group rounded-[34px] border border-[#d9e2ef] bg-white/78 p-4 shadow-[0_20px_60px_rgba(35,55,85,0.08)] transition hover:-translate-y-1 hover:shadow-[0_28px_76px_rgba(35,55,85,0.12)] ${
                index === 0 ? 'lg:col-span-2 lg:grid lg:grid-cols-[0.92fr_1.08fr] lg:gap-6' : ''
              }`}
            >
              <ProjectMockup project={project} />
              <div className="p-3 sm:p-5">
                <div className="mb-5 flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.14em] text-cobalt">
                    <Icon size={17} aria-hidden="true" />
                    Case {String(index + 1).padStart(2, '0')}
                  </span>
                  <ArrowUpRight className="text-graphite/50 transition group-hover:text-cobalt" size={21} aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-black leading-tight tracking-[-0.02em] text-ink">{project.title}</h3>
                <p className="mt-4 text-base leading-7 text-graphite">{project.description}</p>
                <div className="mt-5 rounded-2xl bg-[#f7f9fb] p-4">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-graphite/55">Enfoque / resultado</p>
                  <p className="mt-2 text-sm leading-6 text-graphite">{project.outcome}</p>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-lg border border-[#d9e2ef] bg-white px-3 py-2 text-xs font-black text-graphite">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
