import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

const asset = (file: string) => `/images/portfolio/${file}`;

function ToolIcon({ src, label }: { src: string; label: string }) {
  return (
    <span className="grid size-9 place-items-center rounded-xl border border-[#d9e2ef] bg-white shadow-sm" title={label}>
      <img src={src} alt="" className="size-5 object-contain" decoding="async" />
    </span>
  );
}

function BrowserFrame() {
  return (
    <div className="rounded-[22px] border border-[#d7e1ee] bg-white shadow-[0_22px_60px_rgba(35,55,85,0.14)]">
      <div className="flex items-center gap-2 border-b border-[#e4ebf4] px-4 py-3">
        <span className="size-2.5 rounded-full bg-[#ff6b6b]" />
        <span className="size-2.5 rounded-full bg-[#ffd166]" />
        <span className="size-2.5 rounded-full bg-[#6bcf8f]" />
        <span className="ml-3 h-2 w-36 rounded-full bg-[#e7edf5]" />
      </div>
      <div className="grid gap-4 p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="grid size-14 place-items-center overflow-hidden rounded-2xl border border-[#e4ebf4] bg-white">
              <img src={asset('aicc-cover.webp')} alt="Logo AICC" className="size-12 object-contain" decoding="async" />
            </span>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-cobalt">AICC</p>
              <p className="mt-1 text-lg font-black leading-5 text-ink">SEO técnico + formación</p>
            </div>
          </div>
          <span className="rounded-full bg-[#ecf7f1] px-3 py-1 text-xs font-black text-[#5e9f79]">+10k visitas</span>
        </div>
        <div className="grid grid-cols-[1fr_90px] gap-4">
          <div className="space-y-2">
            <span className="block h-3 rounded-full bg-[#dfe8f3]" />
            <span className="block h-3 w-10/12 rounded-full bg-[#eaf0f7]" />
            <span className="block h-3 w-8/12 rounded-full bg-[#eaf0f7]" />
            <div className="mt-4 flex gap-2">
              <ToolIcon src={asset('wordpress.svg')} label="WordPress" />
              <ToolIcon src={asset('woocommerce.svg')} label="WooCommerce" />
              <ToolIcon src={asset('google-ads.svg')} label="Google Ads" />
              <ToolIcon src={asset('n8n.svg')} label="n8n" />
            </div>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-[#102033] to-[#24466e] p-3 text-white">
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/60">Leads</p>
            <p className="mt-2 text-2xl font-black">+127%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SearchConsolePanel() {
  return (
    <div className="rounded-[20px] border border-[#d7e1ee] bg-white p-4 shadow-[0_18px_48px_rgba(35,55,85,0.12)]">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={asset('google-search-console.svg')} alt="" className="size-8 object-contain" decoding="async" />
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-graphite/55">Search Console</p>
            <p className="text-sm font-black text-ink">Rendimiento orgánico</p>
          </div>
        </div>
        <ArrowUpRight className="text-cobalt" size={18} aria-hidden="true" />
      </div>
      <svg viewBox="0 0 220 92" className="h-28 w-full" role="img" aria-label="Gráfico de crecimiento orgánico">
        <path d="M4 78 C35 66 48 70 72 54 C98 36 112 52 134 34 C158 15 176 28 216 10" fill="none" stroke="#2563eb" strokeWidth="5" strokeLinecap="round" />
        <path d="M4 78 C35 66 48 70 72 54 C98 36 112 52 134 34 C158 15 176 28 216 10 L216 90 L4 90 Z" fill="url(#heroChart)" opacity="0.16" />
        <defs>
          <linearGradient id="heroChart" x1="110" x2="110" y1="10" y2="90">
            <stop stopColor="#2563eb" />
            <stop offset="1" stopColor="#ffffff" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function AutomationPanel() {
  const tools = [
    { label: 'n8n', src: asset('n8n.svg') },
    { label: 'Sheets', src: asset('google-sheets.svg') },
    { label: 'Apps Script', src: asset('google-apps-script.svg') },
    { label: 'WhatsApp', src: asset('whatsapp.svg') },
  ];

  return (
    <div className="rounded-[20px] border border-[#d7e1ee] bg-[#fbfdfb] p-4 shadow-[0_18px_48px_rgba(35,55,85,0.11)]">
      <p className="text-xs font-black uppercase tracking-[0.16em] text-[#5e9f79]">Automatización</p>
      <p className="mt-1 text-sm font-black text-ink">n8n · Sheets · WhatsApp/YCloud</p>
      <div className="mt-5 flex items-center gap-2">
        {tools.map((tool, index) => (
          <div key={tool.label} className="flex items-center gap-2">
            <ToolIcon src={tool.src} label={tool.label} />
            {index < tools.length - 1 ? <span className="h-px w-4 bg-[#9fc9af]" /> : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function SevillaVetCard() {
  return (
    <div className="overflow-hidden rounded-[20px] border border-[#d7e1ee] bg-white shadow-[0_18px_48px_rgba(35,55,85,0.11)]">
      <div className="relative h-28">
        <img
          src={asset('sevillavet-hospital.jpg')}
          alt="Recepción SevillaVet"
          className="h-full w-full object-cover"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#102033]/42 to-transparent" />
      </div>
      <div className="flex items-center justify-between gap-3 p-4">
        <div>
          <img src={asset('sevillavet-logo.png')} alt="SevillaVet" className="h-8 w-auto object-contain" decoding="async" />
          <p className="mt-1 text-xs font-black uppercase tracking-[0.16em] text-graphite/55">Los Ángeles</p>
        </div>
        <CheckCircle2 className="text-[#5e9f79]" size={24} aria-hidden="true" />
      </div>
    </div>
  );
}

export function Hero3D() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 90, damping: 24 });
  const smoothY = useSpring(mouseY, { stiffness: 90, damping: 24 });
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [3, -3]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-4, 4]);

  return (
    <motion.div
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
        mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
      }}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
      style={{ rotateX, rotateY, transformPerspective: 1200 }}
      className="relative min-h-[430px] rounded-[34px] sm:min-h-[520px] lg:min-h-[560px]"
    >
      <div className="absolute inset-x-10 bottom-10 h-28 rounded-[50%] bg-[#d9e5f4]/55 blur-3xl" />
      <motion.div
        style={{
          x: useTransform(smoothX, [-0.5, 0.5], [-14, 14]),
          y: useTransform(smoothY, [-0.5, 0.5], [-10, 10]),
        }}
        className="absolute left-[5%] top-[12%] z-20 w-[68%]"
      >
        <BrowserFrame />
      </motion.div>
      <motion.div
        style={{
          x: useTransform(smoothX, [-0.5, 0.5], [16, -16]),
          y: useTransform(smoothY, [-0.5, 0.5], [8, -8]),
        }}
        className="absolute right-[1%] top-[4%] z-10 w-[42%] rotate-2"
      >
        <SearchConsolePanel />
      </motion.div>
      <motion.div
        style={{
          x: useTransform(smoothX, [-0.5, 0.5], [-8, 8]),
          y: useTransform(smoothY, [-0.5, 0.5], [12, -12]),
        }}
        className="absolute bottom-[11%] right-[5%] z-30 w-[56%] -rotate-1"
      >
        <AutomationPanel />
      </motion.div>
      <motion.div
        style={{
          x: useTransform(smoothX, [-0.5, 0.5], [10, -10]),
          y: useTransform(smoothY, [-0.5, 0.5], [-6, 6]),
        }}
        className="absolute bottom-[4%] left-[9%] z-10 w-[40%] rotate-1"
      >
        <SevillaVetCard />
      </motion.div>
    </motion.div>
  );
}
