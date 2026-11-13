import { MEDIA_ASSETS, STORY_CONTENT } from '../data/ecollantaData';
import { ResilientImage } from './ResilientImage';
import { Reveal } from './Reveal';

export function StorySection() {
  return (
    <section
      id="historia"
      className="py-20 lg:py-28 bg-[#F8F7F2] border-b border-[#292929]/10"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="text-xs font-medium tracking-wider uppercase text-[#748C54] mb-3">
                Nuestra historia · Origen de ECOLLANTA
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.6rem] font-semibold leading-[1.15] text-[#292929] mb-8">
                {STORY_CONTENT.title}
              </h2>
            </Reveal>

            <Reveal delayMs={80}>
              <div className="space-y-5 text-base leading-[1.7] text-[#292929]/85 max-w-[65ch]">
                {STORY_CONTENT.paragraphs.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:sticky lg:top-24">
            <Reveal delayMs={120}>
              <figure className="rounded-xl overflow-hidden border border-[#292929]/10 bg-[#E8E0D0]">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <ResilientImage
                    src={MEDIA_ASSETS.historiaWorkshop}
                    alt="Proceso artesanal de transformación en taller: neumático recuperado junto a disco de madera lijada, soga de yute y herramientas de carpintería"
                    fallbackTitle="Proceso de transformación en taller"
                    className="w-full h-full object-cover"
                  />
                </div>
                <figcaption className="px-6 py-4 bg-[#E8E0D0]/55 border-t border-[#292929]/10">
                  <p className="text-sm font-medium text-[#292929]">
                    Del neumático descartado al objeto funcional
                  </p>
                  <p className="text-xs text-[#292929]/70 mt-1">
                    Imagen ilustrativa del trabajo en taller combinando caucho recuperado, madera preparada y fibras naturales.
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
