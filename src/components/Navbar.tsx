import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

const NAV_ITEMS = [
  { id: 'historia', label: 'Historia' },
  { id: 'compromiso', label: 'Compromiso' },
  { id: 'productos', label: 'Productos' },
  { id: 'proceso', label: 'Proceso' },
  { id: 'precios', label: 'Precios' },
];

export function Navbar({ onNavigate }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (id: string) => {
    setMobileOpen(false);
    onNavigate(id);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F8F7F2]/95 backdrop-blur-sm border-b border-[#292929]/10">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 h-16 flex items-center justify-between gap-8">
        <a
          href="#inicio"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('inicio');
          }}
          className="font-display text-xl font-bold tracking-tight text-[#234D36] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#234D36] rounded-sm"
        >
          ECOLLANTA
        </a>

        <nav
          aria-label="Navegación principal"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#292929]/80"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.id);
              }}
              className="whitespace-nowrap shrink-0 py-1 hover:text-[#234D36] underline-offset-4 hover:underline transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#234D36] rounded-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => handleNavClick('contacto')}
            className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold tracking-wide uppercase bg-[#234D36] text-[#F8F7F2] rounded-lg hover:bg-[#1b3c2a] transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#234D36]"
          >
            Consultar
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-[#292929] hover:bg-[#E8E0D0]/60 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#234D36]"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          id="mobile-menu"
          aria-label="Menú móvil"
          className="md:hidden border-t border-[#292929]/10 bg-[#F8F7F2] px-4 py-4 space-y-1"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.id);
              }}
              className="block px-3 py-3 text-base font-medium text-[#292929] hover:bg-[#E8E0D0]/50 rounded-lg transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2">
            <button
              type="button"
              onClick={() => handleNavClick('contacto')}
              className="w-full py-3 px-4 text-sm font-semibold tracking-wide uppercase bg-[#234D36] text-[#F8F7F2] rounded-lg hover:bg-[#1b3c2a] transition-colors cursor-pointer"
            >
              Consultar
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
