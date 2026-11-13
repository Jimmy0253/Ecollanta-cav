import { ArrowRight, Info } from 'lucide-react';
import { PRODUCTS, formatARS } from '../data/ecollantaData';
import { Reveal } from './Reveal';

interface PricingSectionProps {
  onConsultProduct: (productName: string) => void;
}

export function PricingSection({ onConsultProduct }: PricingSectionProps) {
  return (
    <section
      id="precios"
      className="py-20 lg:py-28 bg-[#F8F7F2] border-b border-[#292929]/10"
    >
      <div className="max-w-[1140px] mx-auto px-4 sm:px-8">
        <Reveal>
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-medium tracking-wider uppercase text-[#748C54] mb-3">
              Nuestros precios · Presupuesto de referencia
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.6rem] font-semibold leading-[1.15] text-[#292929] mb-4">
              Valores unitarios calculados del proyecto
            </h2>
            <p className="text-base leading-relaxed text-[#292929]/80">
              Presentamos la estructura económica estimada para nuestras dos líneas principales, buscando sostener una propuesta accesible y transparente.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {PRODUCTS.map((product, idx) => (
            <Reveal key={product.id} delayMs={idx * 80}>
              <article className="h-full flex flex-col justify-between rounded-xl border border-[#292929]/12 bg-[#E8E0D0]/35 p-7 sm:p-9">
                <div>
                  <div className="text-xs font-medium text-[#748C54] mb-2">
                    {product.category}
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-[#292929] mb-6">
                    {product.name}
                  </h3>

                  <div className="pb-6 mb-6 border-b border-[#292929]/12">
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#234D36] mb-1">
                      Precio de venta unitario
                    </div>
                    <div className="font-mono text-4xl sm:text-[2.75rem] font-semibold text-[#234D36] tabular-nums tracking-tight">
                      {formatARS(product.unitSalePrice)}
                    </div>
                  </div>

                  <div className="flex items-baseline justify-between gap-4 mb-6">
                    <span className="text-sm text-[#292929]/75">
                      Costo de producción unitario
                    </span>
                    <span className="font-mono text-base font-medium text-[#292929] tabular-nums">
                      {formatARS(product.unitProductionCost)}
                    </span>
                  </div>

                  <p className="text-sm leading-relaxed text-[#292929]/75 mb-8">
                    {product.uses}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => onConsultProduct(product.name)}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-semibold tracking-wide uppercase bg-[#234D36] text-[#F8F7F2] rounded-lg hover:bg-[#1b3c2a] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#234D36]"
                >
                  Consultar por {product.shortName}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delayMs={120}>
          <div
            role="note"
            className="rounded-xl border border-[#292929]/12 bg-[#E8E0D0]/60 px-5 py-4 flex items-start gap-3.5 text-sm text-[#292929]/85"
          >
            <Info
              className="w-5 h-5 text-[#234D36] shrink-0 mt-0.5"
              aria-hidden="true"
            />
            <p className="leading-relaxed">
              <strong className="font-semibold text-[#292929]">
                Nota presupuestaria:
              </strong>{' '}
              Los valores económicos detallados corresponden exclusivamente al presupuesto académico del proyecto y no deben interpretarse como precios actualizados del mercado ni como una operación de venta electrónica activa.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
