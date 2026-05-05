import { motion, useScroll, useTransform } from 'framer-motion';

export function GlobalBackground() {
  const { scrollYProgress } = useScroll();
  const firstY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const secondY = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#fbfaf6]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(37,99,235,0.08),transparent_28%),radial-gradient(circle_at_88%_8%,rgba(112,154,128,0.10),transparent_28%),linear-gradient(180deg,#fffdfa_0%,#f6f8fb_48%,#fffefa_100%)]" />
      <div className="absolute inset-0 opacity-[0.025] [background-image:radial-gradient(#162033_0.5px,transparent_0.5px)] [background-size:4px_4px]" />
      <motion.div
        style={{ y: firstY }}
        className="absolute -left-28 top-28 h-72 w-72 rounded-[38%_62%_52%_48%] bg-gradient-to-br from-[#dbe8ff] to-[#eef7f1] opacity-50 blur-3xl"
      />
      <motion.div
        style={{ y: secondY }}
        className="absolute -right-32 top-[36rem] h-96 w-96 rounded-[55%_45%_44%_56%] bg-gradient-to-br from-[#e0f5f0] to-[#eef1ff] opacity-45 blur-3xl"
      />
    </div>
  );
}
