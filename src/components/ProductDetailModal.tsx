import { useEffect } from 'react';
import { ArrowRight, Check, X } from 'lucide-react';
import { ProductItem, formatARS } from '../data/ecollantaData';
import { ResilientImage } from './ResilientImage';

interface ProductDetailModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onInquireProduct: (productName: string) => void;
}

export function ProductDetailModal({
  product,
  onClose,
  onInquireProduct,
}: ProductDetailModalProps) {
  useEffect(() => {
    if (!product) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#292929]/70 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl bg-[#F8F7F2] text-[#292929] border border-[#292929]/15 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 px-6 py-4 bg-[#F8F7F2]/95 backdrop-blur-xs border-b border-[#292929]/10">
          <div className="text-xs font-medium text-[#748C54]">
            {product.category} · Ficha técnica del proyecto
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar ficha de producto"
            className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-[#292929] hover:bg-[#E8E0D0] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#234D36]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 p-6 sm:p-8">
          <div className="md:col-span-5 space-y-4">
            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-[#E8E0D0] border border-[#292929]/10">
              <ResilientImage
                src={product.image}
                alt={product.imageAlt}
                fallbackTitle={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-xs text-[#292929]/65 leading-relaxed">
              Imagen ilustrativa de referencia acorde a los materiales y medidas proyectadas por ECOLLANTA.
            </p>

            <div className="rounded-xl bg-[#E8E0D0]/65 border border-[#292929]/10 p-5 space-y-2">
              <div className="flex items-baseline justify-between gap-3">
                <span className="text-xs font-medium uppercase tracking-wider text-[#234D36]">
                  Precio de venta unitario
                </span>
                <span className="font-mono text-2xl font-semibold text-[#234D36] tabular-nums">
                  {formatARS(product.unitSalePrice)}
                </span>
              </div>
              <div className="flex items-baseline justify-between gap-3 text-xs text-[#292929]/75">
                <span>Costo de producción unitario</span>
                <span className="font-mono tabular-nums">
                  {formatARS(product.unitProductionCost)}
                </span>
              </div>
              <p className="text-[11px] text-[#292929]/65 pt-2 border-t border-[#292929]/10">
                Valores correspondientes al presupuesto académico del proyecto.
              </p>
            </div>
          </div>

          <div className="md:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div>
                <h3
                  id="modal-product-title"
                  className="font-display text-2xl sm:text-3xl font-semibold text-[#292929] mb-2"
                >
                  {product.name}
                </h3>
                <p className="text-base leading-relaxed text-[#292929]/85">
                  {product.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#234D36] mb-2.5">
                  Especificaciones y materiales
                </h4>
                <ul className="space-y-2 text-sm text-[#292929]/85">
                  {product.characteristics.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <Check
                        className="w-4 h-4 text-[#748C54] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#234D36] mb-1.5">
                  Usos recomendados
                </h4>
                <p className="text-sm leading-relaxed text-[#292929]/80">
                  {product.uses}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#234D36] mb-2">
                  Beneficios principales
                </h4>
                <ul className="space-y-1.5 text-sm text-[#292929]/80">
                  {product.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#748C54] font-semibold">·</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-[#292929]/10 flex flex-wrap items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-[#292929]/75 border border-[#292929]/20 rounded-lg hover:bg-[#E8E0D0]/60 transition-colors cursor-pointer"
              >
                Volver al catálogo
              </button>
              <button
                type="button"
                onClick={() => onInquireProduct(product.name)}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wide bg-[#234D36] text-[#F8F7F2] rounded-lg hover:bg-[#1b3c2a] transition-colors cursor-pointer"
              >
                Consultar por este producto
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
