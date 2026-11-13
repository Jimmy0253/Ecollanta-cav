import { FormEvent, useEffect, useState } from 'react';
import {
  Check,
  Copy,
  Globe,
  Instagram,
  Mail,
  MessageSquare,
  Send,
  Share2,
} from 'lucide-react';
import { BRAND_INFO, PRODUCTS } from '../data/ecollantaData';

interface ContactFooterProps {
  preselectedInterest: string;
  onNavigate: (sectionId: string) => void;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function ContactFooter({
  preselectedInterest,
  onNavigate,
}: ContactFooterProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState('Consulta general');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedSummary, setSubmittedSummary] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [socialNotice, setSocialNotice] = useState<string | null>(null);

  useEffect(() => {
    if (!preselectedInterest) return;
    setInterest(preselectedInterest);
    setMessage((prev) =>
      prev.trim()
        ? prev
        : `Hola, me gustaría recibir más información sobre: ${preselectedInterest}.`
    );
    setSubmittedSummary(null);
  }, [preselectedInterest]);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!name.trim() || name.trim().length < 2) {
      nextErrors.name = 'Ingresá tu nombre completo (mínimo 2 caracteres).';
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailPattern.test(email.trim())) {
      nextErrors.email = 'Ingresá una dirección de correo electrónico válida.';
    }
    if (!message.trim() || message.trim().length < 10) {
      nextErrors.message = 'Escribí un mensaje de al menos 10 caracteres.';
    }
    return nextErrors;
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    const summary = [
      `Consulta para ${BRAND_INFO.name}`,
      `Nombre: ${name.trim()}`,
      `Correo: ${email.trim()}`,
      `Motivo / Producto: ${interest}`,
      `Mensaje: ${message.trim()}`,
    ].join('\n');

    setSubmittedSummary(summary);
    setCopied(false);
  };

  const handleCopySummary = async () => {
    if (!submittedSummary) return;
    try {
      await navigator.clipboard.writeText(submittedSummary);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  const handleResetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
    setErrors({});
    setSubmittedSummary(null);
    setCopied(false);
  };

  const handleSocialClick = (channelName: string) => {
    setSocialNotice(
      `Canal visual (${channelName}): este sitio corresponde a un proyecto empresarial académico, por lo que aún no cuenta con perfiles sociales públicos activos.`
    );
  };

  return (
    <footer id="contacto" className="bg-[#292929] text-[#F8F7F2]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 py-20 lg:py-24 border-b border-[#F8F7F2]/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-xs font-medium tracking-wider uppercase text-[#E8E0D0]/75 mb-3">
                Contacto · Consultas sobre el proyecto
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-[1.15] text-[#F8F7F2] mb-4">
                Conversá con ECOLLANTA
              </h2>
              <p className="text-base leading-relaxed text-[#E8E0D0]/85">
                ¿Querés consultar por la Mesa Rotativa EcoLlanta, el Tablero NBA EcoRueda o proponer una personalización? Completá el formulario para preparar tu consulta.
              </p>
            </div>

            <div className="pt-6 border-t border-[#F8F7F2]/12 space-y-4">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[#E8E0D0]/70 mb-1.5">
                  Integrantes del proyecto
                </h3>
                <p className="text-base font-medium text-[#F8F7F2]">
                  {BRAND_INFO.founders.join(' y ')}
                </p>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[#E8E0D0]/70 mb-1.5">
                  Actividad principal
                </h3>
                <p className="text-sm leading-relaxed text-[#E8E0D0]/80">
                  Diseño, fabricación y comercialización de muebles y artículos recreativos utilizando neumáticos en desuso.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-xl bg-[#F8F7F2] text-[#292929] p-6 sm:p-8 border border-[#F8F7F2]/15">
              {submittedSummary ? (
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#234D36] text-[#F8F7F2] flex items-center justify-center shrink-0">
                      <Check className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-[#292929]">
                        Consulta validada y preparada
                      </h3>
                      <p className="text-sm text-[#292929]/75 mt-1">
                        Los datos fueron validados correctamente. Como este sitio corresponde a un proyecto académico sin servidor de correo externo conectado, podés copiar el resumen de tu consulta o redactar una nueva.
                      </p>
                    </div>
                  </div>

                  <pre className="p-4 rounded-lg bg-[#E8E0D0]/65 border border-[#292929]/10 text-xs font-mono text-[#292929] whitespace-pre-wrap leading-relaxed">
                    {submittedSummary}
                  </pre>

                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={handleCopySummary}
                      className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wide bg-[#234D36] text-[#F8F7F2] rounded-lg hover:bg-[#1b3c2a] transition-colors cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4" />
                          Resumen copiado
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          Copiar resumen
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-[#292929]/80 border border-[#292929]/20 rounded-lg hover:bg-[#E8E0D0]/60 transition-colors cursor-pointer"
                    >
                      Nueva consulta
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#292929]/80 mb-2"
                      >
                        Nombre completo
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ej. María González"
                        aria-invalid={Boolean(errors.name)}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#292929]/20 rounded-lg text-[#292929] placeholder:text-[#292929]/40 focus:outline-none focus:border-[#234D36]"
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-xs text-red-700" role="alert">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#292929]/80 mb-2"
                      >
                        Correo electrónico
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="nombre@correo.com"
                        aria-invalid={Boolean(errors.email)}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#292929]/20 rounded-lg text-[#292929] placeholder:text-[#292929]/40 focus:outline-none focus:border-[#234D36]"
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-red-700" role="alert">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-interest"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#292929]/80 mb-2"
                    >
                      Producto o motivo de consulta
                    </label>
                    <select
                      id="contact-interest"
                      value={interest}
                      onChange={(e) => setInterest(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#292929]/20 rounded-lg text-[#292929] focus:outline-none focus:border-[#234D36]"
                    >
                      <option value="Consulta general">Consulta general sobre ECOLLANTA</option>
                      {PRODUCTS.map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name}
                        </option>
                      ))}
                      {interest !== 'Consulta general' &&
                        !PRODUCTS.some((p) => p.name === interest) && (
                          <option value={interest}>{interest}</option>
                        )}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#292929]/80 mb-2"
                    >
                      Mensaje
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Contanos en qué producto o idea de personalización estás interesado..."
                      aria-invalid={Boolean(errors.message)}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#292929]/20 rounded-lg text-[#292929] placeholder:text-[#292929]/40 focus:outline-none focus:border-[#234D36] resize-y"
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-red-700" role="alert">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
                    <p className="text-xs text-[#292929]/65">
                      Formulario demostrativo preparado para integración con servicio de mensajería.
                    </p>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold tracking-wide uppercase bg-[#234D36] text-[#F8F7F2] rounded-lg hover:bg-[#1b3c2a] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#234D36]"
                    >
                      Enviar consulta
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#F8F7F2]/10">
          <div className="md:col-span-5 space-y-3">
            <span className="font-display text-2xl font-bold tracking-tight text-[#F8F7F2] block">
              {BRAND_INFO.name}
            </span>
            <p className="text-sm text-[#E8E0D0]/90 italic font-display">
              “{BRAND_INFO.slogan}”
            </p>
            <p className="text-xs text-[#E8E0D0]/70 leading-relaxed max-w-sm">
              {BRAND_INFO.projectTitle}. Integrantes: {BRAND_INFO.founders.join(' y ')}.
            </p>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#E8E0D0]/70 mb-4">
              Navegación
            </h3>
            <ul className="grid grid-cols-2 gap-y-2.5 gap-x-4 text-sm text-[#E8E0D0]/85">
              {[
                { id: 'inicio', label: 'Inicio' },
                { id: 'historia', label: 'Nuestra historia' },
                { id: 'video-institucional', label: 'Video institucional' },
                { id: 'compromiso', label: 'Compromiso' },
                { id: 'productos', label: 'Productos' },
                { id: 'proceso', label: 'Proceso' },
                { id: 'innovacion', label: 'Personalización' },
                { id: 'precios', label: 'Precios' },
              ].map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(link.id);
                    }}
                    className="hover:text-[#F8F7F2] hover:underline underline-offset-4 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#E8E0D0]/70 mb-4">
              Canales digitales
            </h3>
            <div className="flex items-center gap-2.5 mb-3">
              {[
                { label: 'Instagram', Icon: Instagram },
                { label: 'Mensajería', Icon: MessageSquare },
                { label: 'Correo institucional', Icon: Mail },
                { label: 'Sitio institucional', Icon: Globe },
                { label: 'Compartir', Icon: Share2 },
              ].map(({ label, Icon }) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => handleSocialClick(label)}
                  aria-label={`${label} (canal visual del proyecto académico)`}
                  className="w-10 h-10 rounded-lg border border-[#F8F7F2]/15 bg-[#F8F7F2]/5 text-[#E8E0D0] hover:bg-[#234D36] hover:text-[#F8F7F2] flex items-center justify-center transition-colors cursor-pointer"
                >
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
            <p className="text-xs text-[#E8E0D0]/65 leading-relaxed">
              Elementos visuales referenciales sin perfiles externos publicados.
            </p>
            {socialNotice && (
              <p
                role="status"
                className="mt-2 text-xs text-[#E8E0D0] bg-[#234D36]/80 border border-[#E8E0D0]/20 rounded-lg p-2.5 leading-relaxed"
              >
                {socialNotice}
              </p>
            )}
          </div>
        </div>

        <div className="pt-8 space-y-4">
          <p className="font-display text-base sm:text-lg text-[#E8E0D0] text-center">
            “{BRAND_INFO.closingQuote}”
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#E8E0D0]/65 text-center sm:text-left">
            <p>{BRAND_INFO.academicNotice}</p>
            <p className="whitespace-nowrap shrink-0">
              ECOLLANTA · Thiago Aguirre &amp; Rodrigo Olmedo
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
