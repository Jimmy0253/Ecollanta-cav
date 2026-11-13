import { ArrowRight } from 'lucide-react';
import { PURPOSE_CONTENT } from '../data/ecollantaData';
import { Reveal } from './Reveal';

interface PurposeSectionProps {
  onNavigate: (sectionId: string) => void;
}

export function PurposeSection({ onNavigate }: PurposeSectionProps) {
  return (
    <section
      id="proposito"
      className="py-24 lg:py-32 bg-[#E8E0D0] text-[#292929] border-b border-[#292929]/10"
    >
      <div className="max-w-[960px] mx-auto px-4 sm:px-8 text-center">
        <Reveal>
          <p className="text-xs font-medium tracking-wider uppercase text-[#234D36] mb-4">
            Nuestro propósito · Visión de futuro
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.85rem] font-semibold leading-[1.12] text-[#292929] mb-10">
            {PURPOSE_CONTENT.title}
          </h2>
        </Reveal>

        <Reveal delayMs={80}>
          <div className="space-y-5 text-base sm:text-lg leading-[1.75] text-[#292929]/85 max-w-[62ch] mx-auto mb-10">
            {PURPOSE_CONTENT.paragraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delayMs={140}>
          <button
            type="button"
            onClick={() => onNavigate('contacto')}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 text-xs sm:text-sm font-semibold tracking-wide uppercase bg-[#234D36] text-[#F8F7F2] rounded-lg hover:bg-[#1b3c2a] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#234D36]"
          >
            Ponete en contacto con el equipo
            <ArrowRight className="w-4 h-4" />
          </button>
        </Reveal>
      </div>
    </section>
  );
}
