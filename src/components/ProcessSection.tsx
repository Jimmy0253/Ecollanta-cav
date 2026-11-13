import { useState } from 'react';
import {
  CheckCircle2,
  Droplets,
  Hammer,
  Layers,
  PackageCheck,
  Paintbrush,
  Ruler,
  Truck,
} from 'lucide-react';
import { MANUFACTURING_STAGES } from '../data/ecollantaData';
import { Reveal } from './Reveal';

const STAGE_ICONS = [
  Truck,
  Droplets,
  Ruler,
  Hammer,
  Layers,
  Paintbrush,
  CheckCircle2,
  PackageCheck,
];

export function ProcessSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentStage = MANUFACTURING_STAGES[activeIndex];
  const CurrentIcon = STAGE_ICONS[activeIndex];

  return (
    <section
      id="proceso"
      className="py-20 lg:py-28 bg-[#E8E0D0]/50 border-b border-[#292929]/10"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
        <Reveal>
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-medium tracking-wider uppercase text-[#748C54] mb-3">
              Proceso de fabricación · 8 etapas productivas
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.6rem] font-semibold leading-[1.15] text-[#292929] mb-4">
              De un residuo a un producto con valor
            </h2>
            <p className="text-base leading-relaxed text-[#292929]/80">
              Cada pieza atraviesa un circuito artesanal ordenado para garantizar limpieza, estabilidad estructural y una terminación cálida y durable.
            </p>
          </div>
        </Reveal>

        <Reveal delayMs={80}>
          <div className="mb-8 rounded-xl border border-[#234D36]/15 bg-[#F8F7F2] p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-[#234D36] text-[#F8F7F2] flex items-center justify-center shrink-0">
                <CurrentIcon className="w-5 h-5" strokeWidth={1.75} />
              </div>
              <div>
                <div className="font-mono text-xs font-medium text-[#748C54] tabular-nums mb-1">
                  Etapa {currentStage.step} de 08
                </div>
                <h3 className="font-display text-2xl font-semibold text-[#292929] mb-1">
                  {currentStage.title}
                </h3>
                <p className="text-base text-[#292929]/80">
                  {currentStage.description}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() =>
                  setActiveIndex((prev) =>
                    prev === 0 ? MANUFACTURING_STAGES.length - 1 : prev - 1
                  )
                }
                className="px-4 py-2 text-xs font-semibold text-[#234D36] border border-[#234D36]/30 rounded-lg hover:bg-[#E8E0D0]/70 transition-colors cursor-pointer"
              >
                Etapa anterior
              </button>
              <button
                type="button"
                onClick={() =>
                  setActiveIndex((prev) => (prev + 1) % MANUFACTURING_STAGES.length)
                }
                className="px-4 py-2 text-xs font-semibold bg-[#234D36] text-[#F8F7F2] rounded-lg hover:bg-[#1b3c2a] transition-colors cursor-pointer"
              >
                Siguiente etapa
              </button>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {MANUFACTURING_STAGES.map((stage, idx) => {
            const Icon = STAGE_ICONS[idx];
            const isActive = idx === activeIndex;
            return (
              <button
                key={stage.step}
                type="button"
                onClick={() => setActiveIndex(idx)}
                aria-pressed={isActive}
                className={`text-left rounded-xl p-6 border transition-all duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#234D36] ${
                  isActive
                    ? 'bg-[#234D36] text-[#F8F7F2] border-[#234D36] shadow-sm'
                    : 'bg-[#F8F7F2] text-[#292929] border-[#292929]/10 hover:border-[#234D36]/40'
                }`}
              >
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span
                    className={`font-mono text-xs font-medium tabular-nums ${
                      isActive ? 'text-[#E8E0D0]' : 'text-[#748C54]'
                    }`}
                  >
                    {stage.step}
                  </span>
                  <Icon
                    className={`w-5 h-5 ${
                      isActive ? 'text-[#E8E0D0]' : 'text-[#234D36]'
                    }`}
                    strokeWidth={1.6}
                    aria-hidden="true"
                  />
                </div>
                <h3
                  className={`font-display text-lg font-semibold mb-2 ${
                    isActive ? 'text-[#F8F7F2]' : 'text-[#292929]'
                  }`}
                >
                  {stage.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    isActive ? 'text-[#E8E0D0]/90' : 'text-[#292929]/75'
                  }`}
                >
                  {stage.description}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
