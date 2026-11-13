import { ArrowUpRight, Check } from 'lucide-react';
import { PRODUCTS, ProductItem, formatARS } from '../data/ecollantaData';
import { ResilientImage } from './ResilientImage';
import { Reveal } from './Reveal';

interface ProductsSectionProps {
  onSelectProduct: (product: ProductItem) => void;
}

export function ProductsSection({ onSelectProduct }: ProductsSectionProps) {
  return (
    <section
      id="productos"
      className="py-20 lg:py-28 bg-[#F8F7F2] border-b border-[#292929]/10"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <p className="text-xs font-medium tracking-wider uppercase text-[#748C54] mb-3">
                Nuestros productos · Catálogo principal
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.6rem] font-semibold leading-[1.15] text-[#292929]">
                Diseño artesanal creado a partir de neumáticos en desuso
              </h2>
            </div>
            <p className="text-sm text-[#292929]/70 max-w-md leading-relaxed">
              Las imágenes exhibidas son representaciones ilustrativas coherentes con las especificaciones técnicas y terminaciones vintage de cada diseño.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {PRODUCTS.map((product, index) => (
            <Reveal key={product.id} delayMs={index * 90}>
              <article className="h-full flex flex-col justify-between rounded-xl border border-[#292929]/12 bg-[#F8F7F2] overflow-hidden transition-transform duration-200 hover:-translate-y-0.5">
                <div>
                  <div className="aspect-[4/3] w-full bg-[#E8E0D0] overflow-hidden relative">
                    <ResilientImage
                      src={product.image}
                      alt={product.imageAlt}
                      fallbackTitle={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-6 sm:p-8">
                    <div className="flex items-center justify-between gap-4 text-xs text-[#748C54] font-medium mb-2">
                      <span>{product.category}</span>
                      <span className="font-mono tabular-nums text-[#292929]/75">
                        Ref. {formatARS(product.unitSalePrice)}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-[1.75rem] font-semibold text-[#292929] mb-3">
                      {product.name}
                    </h3>

                    <p className="text-base leading-relaxed text-[#292929]/80 mb-6">
                      {product.description}
                    </p>

                    <div className="space-y-5 pt-5 border-t border-[#292929]/10">
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-[#234D36] mb-3">
                          Características técnicas
                        </h4>
                        <ul className="space-y-2 text-sm text-[#292929]/85">
                          {product.characteristics.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2.5">
                              <Check
                                className="w-4 h-4 text-[#748C54] shrink-0 mt-0.5"
                                strokeWidth={2}
                                aria-hidden="true"
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-[#234D36] mb-2">
                          Beneficios y diferencial
                        </h4>
                        <p className="text-sm leading-relaxed text-[#292929]/80">
                          {product.differential}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <span className="text-xs text-[#292929]/60">
                    Fotografía ilustrativa del diseño proyectado
                  </span>
                  <button
                    type="button"
                    onClick={() => onSelectProduct(product)}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold tracking-wide uppercase bg-[#234D36] text-[#F8F7F2] rounded-lg hover:bg-[#1b3c2a] transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#234D36]"
                  >
                    CONOCER MÁS
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
