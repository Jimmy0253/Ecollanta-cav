import { useState } from 'react';
import { ArrowRight, Lightbulb, Palette, Sparkles } from 'lucide-react';
import { CUSTOMIZATION_IDEAS, MEDIA_ASSETS } from '../data/ecollantaData';
import { ResilientImage } from './ResilientImage';
import { Reveal } from './Reveal';

interface InnovationSectionProps {
  onSelectCustomization: (ideaTitle: string) => void;
}

type PreviewLighting = 'natural' | 'led' | 'glow';

export function InnovationSection({
  onSelectCustomization,
}: InnovationSectionProps) {
  const [selectedIdeaId, setSelectedIdeaId] = useState(CUSTOMIZATION_IDEAS[3].id);
  const [lightingMode, setLightingMode] = useState<PreviewLighting>('led');

  const selectedIdea =
    CUSTOMIZATION_IDEAS.find((idea) => idea.id === selectedIdeaId) ??
    CUSTOMIZATION_IDEAS[0];

  const handleSelectIdea = (id: string, mode: PreviewLighting) => {
    setSelectedIdeaId(id);
    setLightingMode(mode);
  };

  return (
    <section
      id="innovacion"
      className="py-20 lg:py-28 bg-[#E8E0D0]/45 border-b border-[#292929]/10"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
        <Reveal>
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-medium tracking-wider uppercase text-[#748C54] mb-3">
              Innovación y personalización · A medida de cada espacio
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.6rem] font-semibold leading-[1.15] text-[#292929] mb-4">
              Cada producto puede ser único
            </h2>
            <p className="text-base leading-relaxed text-[#292929]/80">
              Explorá nuestras líneas de intervención artística y funcional para adaptar tanto la Mesa Rotativa EcoLlanta como el Tablero NBA EcoRueda a tu hogar.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <div className="lg:col-span-6 space-y-3">
            {CUSTOMIZATION_IDEAS.map((idea, idx) => {
              const isSelected = idea.id === selectedIdeaId;
              return (
                <button
                  key={idea.id}
                  type="button"
                  onClick={() => handleSelectIdea(idea.id, idea.previewMode)}
                  aria-pressed={isSelected}
                  className={`w-full text-left rounded-xl p-5 border transition-all duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#234D36] ${
                    isSelected
                      ? 'bg-[#234D36] text-[#F8F7F2] border-[#234D36]'
                      : 'bg-[#F8F7F2] text-[#292929] border-[#292929]/10 hover:border-[#234D36]/40'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div
                        className={`text-xs font-medium mb-1 ${
                          isSelected ? 'text-[#E8E0D0]/85' : 'text-[#748C54]'
                        }`}
                      >
                        0{idx + 1} · {idea.appliesTo}
                      </div>
                      <h3
                        className={`font-display text-lg font-semibold ${
                          isSelected ? 'text-[#F8F7F2]' : 'text-[#292929]'
                        }`}
                      >
                        {idea.title}
                      </h3>
                      {isSelected && (
                        <p className="text-sm leading-relaxed text-[#E8E0D0]/90 mt-2">
                          {idea.description}
                        </p>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-6 flex flex-col">
            <div className="flex-1 rounded-xl overflow-hidden border border-[#292929]/12 bg-[#F8F7F2] flex flex-col justify-between">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#292929]">
                <ResilientImage
                  src={MEDIA_ASSETS.galeriaPersonalizacion}
                  alt="Ejemplo ilustrativo de personalización en mesa de neumático reciclado con detalles botánicos pintados a mano e iluminación LED cálida"
                  fallbackTitle="Galería de personalización ECOLLANTA"
                  className={`w-full h-full object-cover transition-all duration-300 ${
                    lightingMode === 'natural'
                      ? 'brightness-110 saturate-95'
                      : lightingMode === 'glow'
                        ? 'brightness-75 contrast-125 hue-rotate-15'
                        : 'brightness-100 saturate-110'
                  }`}
                />
                {lightingMode === 'glow' && (
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-[#234D36]/35 via-transparent to-[#748C54]/25"
                  />
                )}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent p-5 text-[#F8F7F2]">
                  <p className="text-xs font-medium text-[#E8E0D0]/90 mb-1">
                    Vista ilustrativa · {selectedIdea.appliesTo}
                  </p>
                  <p className="font-display text-lg font-semibold">
                    {selectedIdea.title}
                  </p>
                </div>
              </div>

              <div className="p-6 space-y-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#292929]/70">
                    Simular ambiente visual
                  </span>
                  <div
                    role="group"
                    aria-label="Modo de iluminación ilustrativa"
                    className="inline-flex items-center gap-1 p-1 bg-[#E8E0D0]/70 rounded-lg"
                  >
                    <button
                      type="button"
                      onClick={() => setLightingMode('natural')}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                        lightingMode === 'natural'
                          ? 'bg-[#F8F7F2] text-[#234D36] shadow-xs'
                          : 'text-[#292929]/75 hover:text-[#292929]'
                      }`}
                    >
                      <Palette className="w-3.5 h-3.5" />
                      Natural
                    </button>
                    <button
                      type="button"
                      onClick={() => setLightingMode('led')}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                        lightingMode === 'led'
                          ? 'bg-[#F8F7F2] text-[#234D36] shadow-xs'
                          : 'text-[#292929]/75 hover:text-[#292929]'
                      }`}
                    >
                      <Lightbulb className="w-3.5 h-3.5" />
                      LED cálido
                    </button>
                    <button
                      type="button"
                      onClick={() => setLightingMode('glow')}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                        lightingMode === 'glow'
                          ? 'bg-[#F8F7F2] text-[#234D36] shadow-xs'
                          : 'text-[#292929]/75 hover:text-[#292929]'
                      }`}
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      Fosforescente
                    </button>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#292929]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p className="text-xs text-[#292929]/70 leading-relaxed">
                    Podés combinar colores, nombres familiares o iluminación según tus preferencias.
                  </p>
                  <button
                    type="button"
                    onClick={() => onSelectCustomization(selectedIdea.title)}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wide bg-[#234D36] text-[#F8F7F2] rounded-lg hover:bg-[#1b3c2a] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    Consultar idea
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
