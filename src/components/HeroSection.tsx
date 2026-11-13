import { ArrowDown, ArrowRight } from 'lucide-react';
import { BRAND_INFO, MEDIA_ASSETS } from '../data/ecollantaData';
import { ResilientImage } from './ResilientImage';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section
      id="inicio"
      className="relative bg-[#F8F7F2] border-b border-[#292929]/10 overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 pt-10 pb-14 lg:pt-16 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          <div className="lg:col-span-6 flex flex-col justify-between py-2">
            <div>
              <p className="text-xs font-medium tracking-wider uppercase text-[#748C54] mb-4">
                Diseño sustentable · Neumáticos reciclados
              </p>

              <h1 className="font-display text-[clamp(2.25rem,4.2vw,3.75rem)] font-semibold leading-[1.08] tracking-tight text-[#292929] mb-6">
                El futuro también se construye reciclando
              </h1>

              <p className="text-base sm:text-lg leading-relaxed text-[#292929]/80 max-w-xl mb-8">
                Convertimos neumáticos en desuso en productos únicos, funcionales y
                accesibles para tu hogar.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('productos')}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 text-xs sm:text-sm font-semibold tracking-wide uppercase bg-[#234D36] text-[#F8F7F2] rounded-lg hover:bg-[#1b3c2a] transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#234D36]"
                >
                  CONOCÉ NUESTROS PRODUCTOS
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('compromiso')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold tracking-wide uppercase bg-transparent text-[#234D36] border border-[#234D36]/35 rounded-lg hover:bg-[#E8E0D0]/60 transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#234D36]"
                >
                  NUESTRA FILOSOFÍA
                </button>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-[#292929]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="text-sm text-[#292929]/75 italic font-display">
                “{BRAND_INFO.slogan}”
              </p>

              <button
                type="button"
                onClick={() => onNavigate('historia')}
                aria-label="Desplazarse hacia Nuestra historia"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#234D36] hover:text-[#748C54] transition-colors self-start sm:self-auto cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#234D36] rounded-sm py-1"
              >
                <span>Explorar historia</span>
                <ArrowDown className="w-4 h-4 animate-bounce motion-reduce:animate-none" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col">
            <figure className="relative flex-1 min-h-[300px] sm:min-h-[380px] lg:min-h-[480px] rounded-xl overflow-hidden border border-[#292929]/10 bg-[#E8E0D0]">
              <ResilientImage
                src={MEDIA_ASSETS.heroMesa}
                alt="Mesa ratona de diseño vintage fabricada con dos neumáticos reciclados revestidos en soga de yute y tapa de madera natural en un living luminoso"
                fallbackTitle="Mesa Rotativa EcoLlanta — Imagen ilustrativa"
                loading="eager"
                className="w-full h-full object-cover"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent px-5 py-4 text-[#F8F7F2]">
                <p className="text-xs font-medium text-[#E8E0D0]">
                  Imagen ilustrativa de diseño vintage · Mesa auxiliar con neumáticos reciclados y yute natural
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
