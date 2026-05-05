export function Footer() {
  return (
    <footer className="section-shell border-t border-line py-6">
      <div className="flex flex-col gap-3 text-xs font-semibold text-graphite sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-end gap-3">
          <span className="text-3xl font-black leading-none text-cobalt">ÁM</span>
          <span>© {new Date().getFullYear()} Ángel Muñiz Pedraza.</span>
        </div>
        <p>SEO técnico · WordPress · Automatización · Desarrollo web</p>
      </div>
    </footer>
  );
}
