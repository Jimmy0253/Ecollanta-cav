import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Film, Link2, Play, RotateCcw, Upload, Youtube } from 'lucide-react';
import {
  INSTITUTIONAL_VIDEO_CONFIG,
  VideoSourceType,
  extractYouTubeEmbedUrl,
} from '../config/videoConfig';
import { ResilientImage } from './ResilientImage';
import { Reveal } from './Reveal';

export function VideoSection() {
  const [sourceType, setSourceType] = useState<VideoSourceType>(
    INSTITUTIONAL_VIDEO_CONFIG.sourceType
  );
  const [sourceUrl, setSourceUrl] = useState<string>(
    INSTITUTIONAL_VIDEO_CONFIG.sourceUrl
  );
  const [isPlaying, setIsPlaying] = useState(false);

  // Panel opcional para que el propietario pruebe un MP4 local o enlace de YouTube sin editar código
  const [showPreviewSetup, setShowPreviewSetup] = useState(false);
  const [youtubeInput, setYoutubeInput] = useState('');
  const [setupError, setSetupError] = useState<string | null>(null);
  const [objectUrl, setObjectUrl] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      if (objectUrl) {
        URL.revokeObjectURL(objectUrl);
      }
    };
  }, [objectUrl]);

  const youtubeEmbedUrl =
    sourceType === 'youtube' ? extractYouTubeEmbedUrl(sourceUrl) : null;

  const hasValidConfiguredVideo =
    (sourceType === 'mp4' && Boolean(sourceUrl.trim())) ||
    (sourceType === 'youtube' && Boolean(youtubeEmbedUrl));

  const handlePlayClick = () => {
    if (!hasValidConfiguredVideo) return;
    setIsPlaying(true);
  };

  const handleLocalMp4Selected = (event: ChangeEvent<HTMLInputElement>) => {
    setSetupError(null);
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.includes('mp4') && !file.name.toLowerCase().endsWith('.mp4')) {
      setSetupError('Seleccioná un archivo en formato MP4 válido.');
      return;
    }

    if (objectUrl) {
      URL.revokeObjectURL(objectUrl);
    }

    const blobUrl = URL.createObjectURL(file);
    setObjectUrl(blobUrl);
    setSourceType('mp4');
    setSourceUrl(blobUrl);
    setIsPlaying(true);
    setShowPreviewSetup(false);
  };

  const handleApplyYoutube = (event: FormEvent) => {
    event.preventDefault();
    setSetupError(null);
    const embed = extractYouTubeEmbedUrl(youtubeInput);
    if (!embed) {
      setSetupError(
        'Ingresá una URL válida de YouTube (por ejemplo: https://www.youtube.com/watch?v=...).'
      );
      return;
    }
    setSourceType('youtube');
    setSourceUrl(youtubeInput.trim());
    setIsPlaying(true);
    setShowPreviewSetup(false);
  };

  const handleResetToDefault = () => {
    if (objectUrl) {
      URL.revokeObjectURL(objectUrl);
      setObjectUrl(null);
    }
    setSourceType(INSTITUTIONAL_VIDEO_CONFIG.sourceType);
    setSourceUrl(INSTITUTIONAL_VIDEO_CONFIG.sourceUrl);
    setYoutubeInput('');
    setSetupError(null);
    setIsPlaying(false);
  };

  return (
    <section
      id="video-institucional"
      className="py-20 lg:py-24 bg-[#E8E0D0]/45 border-b border-[#292929]/10"
    >
      <div className="max-w-[1100px] mx-auto px-4 sm:px-8">
        <Reveal>
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-medium tracking-wider uppercase text-[#748C54] mb-3">
              Video institucional · Presentación audiovisual
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-[1.15] text-[#292929] mb-4">
              {INSTITUTIONAL_VIDEO_CONFIG.title}
            </h2>
            <p className="text-base leading-relaxed text-[#292929]/80">
              {INSTITUTIONAL_VIDEO_CONFIG.subtitle}
            </p>
          </div>
        </Reveal>

        <Reveal delayMs={90}>
          <div className="rounded-xl overflow-hidden border border-[#292929]/15 bg-[#292929] shadow-sm">
            <div className="relative aspect-video w-full bg-[#1e2621]">
              {isPlaying && hasValidConfiguredVideo ? (
                sourceType === 'mp4' ? (
                  <video
                    src={sourceUrl}
                    poster={INSTITUTIONAL_VIDEO_CONFIG.posterUrl}
                    controls
                    autoPlay
                    playsInline
                    className="w-full h-full object-contain bg-black"
                  >
                    Tu navegador no admite la reproducción de video HTML5.
                  </video>
                ) : (
                  <iframe
                    src={youtubeEmbedUrl ?? undefined}
                    title="Video institucional ECOLLANTA"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                )
              ) : (
                <>
                  <ResilientImage
                    src={INSTITUTIONAL_VIDEO_CONFIG.posterUrl}
                    alt="Portada ilustrativa del taller ECOLLANTA con neumáticos reciclados, mesa artesanal y tablero de básquet"
                    fallbackTitle="Portada Video Institucional ECOLLANTA"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/20 flex flex-col items-center justify-center p-6 text-center">
                    <button
                      type="button"
                      onClick={handlePlayClick}
                      disabled={!hasValidConfiguredVideo}
                      aria-disabled={!hasValidConfiguredVideo}
                      aria-label={
                        hasValidConfiguredVideo
                          ? 'Reproducir video institucional'
                          : 'Reproducción desactivada hasta incorporar un archivo MP4 o URL de YouTube'
                      }
                      className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center border transition-transform duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F8F7F2] ${
                        hasValidConfiguredVideo
                          ? 'bg-[#234D36] text-[#F8F7F2] border-[#F8F7F2]/40 hover:scale-105 cursor-pointer shadow-lg'
                          : 'bg-[#292929]/75 text-[#E8E0D0]/60 border-[#E8E0D0]/30 cursor-not-allowed'
                      }`}
                    >
                      <Play className="w-7 h-7 sm:w-8 sm:h-8 ml-1" />
                    </button>

                    <div className="mt-5 max-w-md">
                      {hasValidConfiguredVideo ? (
                        <p className="text-sm font-medium text-[#F8F7F2]">
                          Hacé clic para reproducir el video en esta misma página
                        </p>
                      ) : (
                        <div className="space-y-1.5">
                          <p className="text-sm font-semibold text-[#F8F7F2]">
                            Espacio audiovisual preparado
                          </p>
                          <p className="text-xs sm:text-sm text-[#E8E0D0]/90 leading-relaxed">
                            El video institucional aún no fue cargado. Este reproductor admite un archivo MP4 local o un enlace de YouTube desde la configuración del sitio.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="bg-[#F8F7F2] px-5 py-4 border-t border-[#292929]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 text-xs text-[#292929]/75">
                <Film className="w-4 h-4 text-[#234D36] shrink-0" />
                <span>
                  {hasValidConfiguredVideo
                    ? `Fuente cargada (${sourceType === 'mp4' ? 'Archivo MP4' : 'YouTube'}) · Reproducción integrada`
                    : 'Portada ilustrativa · Reproductor listo para MP4 o YouTube'}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {sourceUrl !== INSTITUTIONAL_VIDEO_CONFIG.sourceUrl && (
                  <button
                    type="button"
                    onClick={handleResetToDefault}
                    className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#292929]/80 hover:text-[#234D36] border border-[#292929]/15 rounded-lg transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Restablecer portada
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => {
                    setSetupError(null);
                    setShowPreviewSetup((prev) => !prev);
                  }}
                  aria-expanded={showPreviewSetup}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#234D36] border border-[#234D36]/30 rounded-lg hover:bg-[#E8E0D0]/60 transition-colors cursor-pointer whitespace-nowrap"
                >
                  <Link2 className="w-3.5 h-3.5" />
                  {showPreviewSetup ? 'Ocultar opciones de video' : 'Vincular MP4 o YouTube'}
                </button>
              </div>
            </div>

            {showPreviewSetup && (
              <div className="bg-[#E8E0D0]/45 px-5 py-5 border-t border-[#292929]/10 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-display text-base font-semibold text-[#292929] mb-1.5">
                    Probar archivo MP4 local
                  </h3>
                  <p className="text-xs text-[#292929]/75 mb-3">
                    Cargá un archivo <code className="font-mono">.mp4</code> desde tu dispositivo para visualizarlo en el reproductor, o definilo de forma permanente en{' '}
                    <code className="font-mono text-[#234D36]">src/config/videoConfig.ts</code>.
                  </p>
                  <label className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold bg-[#234D36] text-[#F8F7F2] rounded-lg hover:bg-[#1b3c2a] transition-colors cursor-pointer">
                    <Upload className="w-3.5 h-3.5" />
                    <span>Seleccionar archivo MP4</span>
                    <input
                      type="file"
                      accept="video/mp4"
                      onChange={handleLocalMp4Selected}
                      className="sr-only"
                    />
                  </label>
                </div>

                <form onSubmit={handleApplyYoutube}>
                  <h3 className="font-display text-base font-semibold text-[#292929] mb-1.5">
                    Vincular URL de YouTube
                  </h3>
                  <p className="text-xs text-[#292929]/75 mb-3">
                    Pegá un enlace de YouTube para reproducirlo integrado sin salir de la página.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="url"
                      value={youtubeInput}
                      onChange={(e) => setYoutubeInput(e.target.value)}
                      placeholder="https://www.youtube.com/watch?v=..."
                      aria-label="URL de YouTube"
                      className="flex-1 px-3 py-2 text-xs bg-[#F8F7F2] border border-[#292929]/20 rounded-lg text-[#292929] placeholder:text-[#292929]/45 focus:outline-none focus:border-[#234D36]"
                    />
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold bg-[#748C54] text-[#F8F7F2] rounded-lg hover:bg-[#617645] transition-colors cursor-pointer whitespace-nowrap"
                    >
                      <Youtube className="w-3.5 h-3.5" />
                      Aplicar enlace
                    </button>
                  </div>
                </form>

                {setupError && (
                  <p
                    role="alert"
                    className="md:col-span-2 text-xs font-medium text-red-800 bg-red-100/80 border border-red-300 rounded-lg px-3 py-2"
                  >
                    {setupError}
                  </p>
                )}
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
