import { Download, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { contactLinks, navItems } from '../data/portfolio';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-white/90 backdrop-blur-xl">
      <div className="section-shell">
        <nav className="flex min-h-[68px] items-center justify-between" aria-label="Navegación principal">
          <a href="#inicio" onClick={close} className="focus-ring flex items-end rounded-lg" aria-label="Inicio">
            <span className="text-[34px] font-black leading-none tracking-tight text-cobalt sm:text-[42px]">Á</span>
            <span className="-ml-1 text-[30px] font-black leading-none tracking-tight text-cobalt sm:text-[36px]">M</span>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            <a
              href="#inicio"
              className="focus-ring relative py-6 text-[13px] font-bold text-ink after:absolute after:inset-x-0 after:bottom-0 after:h-1 after:rounded-full after:bg-cobalt"
            >
              Inicio
            </a>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="focus-ring py-6 text-[13px] font-bold text-ink transition hover:text-cobalt"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            className="focus-ring hidden items-center gap-2 rounded-md bg-cobalt px-5 py-3 text-[13px] font-black text-white shadow-[0_10px_22px_rgba(29,92,255,0.22)] transition hover:-translate-y-0.5 hover:bg-ink sm:inline-flex"
            href={contactLinks.cv}
            download
          >
            Descargar CV
            <Download size={15} aria-hidden="true" />
          </a>

          <button
            className="focus-ring inline-flex size-11 items-center justify-center rounded-full border border-line bg-white text-ink lg:hidden"
            type="button"
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
          </button>
        </nav>

        {isOpen ? (
          <div className="glass-panel mb-3 rounded-2xl p-3 lg:hidden">
            <div className="grid gap-1">
              <a
                href="#inicio"
                onClick={close}
                className="focus-ring rounded-xl px-4 py-3 text-sm font-bold text-graphite hover:bg-white hover:text-cobalt"
              >
                Inicio
              </a>
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={close}
                  className="focus-ring rounded-xl px-4 py-3 text-sm font-bold text-graphite hover:bg-white hover:text-cobalt"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={contactLinks.cv}
                download
                onClick={close}
                className="focus-ring mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-cobalt px-4 py-3 text-sm font-extrabold text-white"
              >
                Descargar CV
                <Download size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
