import { Leaf, Recycle, RefreshCw, Sprout } from 'lucide-react';
import { COMMITMENT_CONTENT, MEDIA_ASSETS } from '../data/ecollantaData';
import { ResilientImage } from './ResilientImage';
import { Reveal } from './Reveal';

const PILLAR_ICONS = [RefreshCw, Recycle, Leaf, Sprout];

export function CommitmentSection() {
  return (
    <section
      id="compromiso"
      className="py-24 lg:py-32 bg-[#234D36] text-[#F8F7F2] border-b border-[#F8F7F2]/10"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-xs font-medium tracking-wider uppercase text-[#E8E0D0]/80 mb-3">
                Nuestro compromiso con el medio ambiente
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold leading-[1.12] text-[#F8F7F2] mb-8">
                {COMMITMENT_CONTENT.title}
              </h2>
            </Reveal>

            <Reveal delayMs={80}>
              <div className="space-y-5 text-base leading-[1.72] text-[#F8F7F2]/90 max-w-[65ch]">
                {COMMITMENT_CONTENT.paragraphs.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <Reveal delayMs={120}>
              <figure className="rounded-xl overflow-hidden border border-[#F8F7F2]/15 bg-[#1b3c2a]">
                <div className="aspect-[16/10] w-full overflow-hidden">
                  <ResilientImage
                    src={MEDIA_ASSETS.compromisoBosque}
                    alt="Bosque natural entre neblina matinal simbolizando la preservación ambiental y el respeto por el entorno"
                    fallbackTitle="Compromiso ambiental ECOLLANTA"
                    className="w-full h-full object-cover"
                  />
                </div>
                <figcaption className="px-5 py-3.5 border-t border-[#F8F7F2]/10 text-xs text-[#E8E0D0]/85">
                  Cada neumático recuperado evita décadas de acumulación en basurales o quemas contaminantes.
                </figcaption>
              </figure>
            </Reveal>

            <Reveal delayMs={160}>
              <blockquote className="rounded-xl border border-[#E8E0D0]/25 bg-[#1b3c2a]/70 p-7 sm:p-8">
                <p className="font-display text-xl sm:text-2xl font-medium leading-snug text-[#E8E0D0]">
                  “{COMMITMENT_CONTENT.highlightedPhrase}”
                </p>
              </blockquote>
            </Reveal>
          </div>
        </div>

        <Reveal delayMs={120}>
          <div className="pt-12 border-t border-[#F8F7F2]/15">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {COMMITMENT_CONTENT.pillars.map((pillar, idx) => {
                const Icon = PILLAR_ICONS[idx % PILLAR_ICONS.length];
                return (
                  <article
                    key={pillar.index}
                    className="rounded-xl border border-[#F8F7F2]/15 bg-[#1b3c2a]/60 p-6 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-4 mb-5">
                        <span className="font-mono text-xs font-medium text-[#E8E0D0]/75 tabular-nums">
                          {pillar.index}
                        </span>
                        <Icon
                          className="w-5 h-5 text-[#E8E0D0]"
                          strokeWidth={1.6}
                          aria-hidden="true"
                        />
                      </div>
                      <h3 className="font-display text-lg font-semibold text-[#F8F7F2] mb-2.5">
                        {pillar.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-[#E8E0D0]/85">
                        {pillar.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
