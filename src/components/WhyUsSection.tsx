import { DIFFERENTIALS } from '../data/ecollantaData';
import { Reveal } from './Reveal';

export function WhyUsSection() {
  return (
    <section
      id="diferenciales"
      className="py-20 lg:py-28 bg-[#F8F7F2] border-b border-[#292929]/10"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <Reveal>
              <p className="text-xs font-medium tracking-wider uppercase text-[#748C54] mb-3">
                ¿Por qué elegirnos? · Propuesta de valor
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-[1.15] text-[#292929] mb-5">
                Diseñamos diferente. Pensamos diferente.
              </h2>
              <p className="text-base leading-relaxed text-[#292929]/80">
                Cada decisión de diseño busca equilibrar estética vintage, utilidad real en el hogar, accesibilidad económica y respeto por los recursos existentes.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {DIFFERENTIALS.map((item, idx) => (
                <Reveal key={item.index} delayMs={idx * 45}>
                  <article className="h-full rounded-xl border border-[#292929]/10 bg-[#E8E0D0]/30 p-6 sm:p-7">
                    <span className="font-mono text-xs font-medium text-[#748C54] tabular-nums block mb-3">
                      {item.index}
                    </span>
                    <h3 className="font-display text-xl font-semibold text-[#292929] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base leading-relaxed text-[#292929]/80">
                      {item.description}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
