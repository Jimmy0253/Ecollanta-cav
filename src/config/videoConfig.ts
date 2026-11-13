import videoPosterImg from '../assets/images/video_portada_institucional_1794529768579.jpg';

export type VideoSourceType = 'none' | 'mp4' | 'youtube';

export interface InstitutionalVideoConfig {
  /**
   * Tipo de fuente audiovisual:
   * - 'none': Muestra la portada ilustrativa con el reproductor preparado (sin video ficticio).
   * - 'mp4': Reproduce un archivo MP4 local (por ejemplo: '/videos/institucional.mp4' ubicado en /public/videos/).
   * - 'youtube': Reproduce un enlace de YouTube dentro de la misma página.
   */
  sourceType: VideoSourceType;

  /**
   * Ruta del archivo MP4 local o URL completa de YouTube.
   * Ejemplos:
   * - MP4 local: '/videos/ecollanta-presentacion.mp4'
   * - YouTube: 'https://www.youtube.com/watch?v=ID_DEL_VIDEO' o 'https://youtu.be/ID_DEL_VIDEO'
   */
  sourceUrl: string;

  /**
   * Imagen de portada personalizada (thumbnail 16:9).
   */
  posterUrl: string;

  /**
   * Textos principales de la sección audiovisual.
   */
  title: string;
  subtitle: string;
}

/**
 * CONFIGURACIÓN CENTRALIZADA DEL VIDEO INSTITUCIONAL
 * -------------------------------------------------
 * Para activar el video sin modificar el resto del código:
 * 1. Cambiá `sourceType` a 'mp4' o 'youtube'.
 * 2. Completá `sourceUrl` con la ruta del archivo local o el enlace de YouTube.
 */
export const INSTITUTIONAL_VIDEO_CONFIG: InstitutionalVideoConfig = {
  sourceType: 'none',
  sourceUrl: '',
  posterUrl: videoPosterImg,
  title: 'Una nueva oportunidad para lo que otros desechan',
  subtitle:
    'Conocé cómo transformamos neumáticos en desuso en productos útiles, originales y sustentables',
};

/**
 * Convierte distintas variantes de URL de YouTube en una URL embebible segura.
 * Devuelve null si el enlace no corresponde a un video válido de YouTube.
 */
export function extractYouTubeEmbedUrl(rawUrl: string): string | null {
  const trimmed = rawUrl.trim();
  if (!trimmed) return null;

  try {
    const parsed = new URL(trimmed);
    const host = parsed.hostname.replace(/^www\./, '').toLowerCase();
    let videoId: string | null = null;

    if (host === 'youtu.be') {
      videoId = parsed.pathname.split('/').filter(Boolean)[0] ?? null;
    } else if (host === 'youtube.com' || host === 'm.youtube.com' || host === 'youtube-nocookie.com') {
      if (parsed.pathname === '/watch') {
        videoId = parsed.searchParams.get('v');
      } else if (parsed.pathname.startsWith('/embed/')) {
        videoId = parsed.pathname.split('/embed/')[1]?.split('/')[0] ?? null;
      } else if (parsed.pathname.startsWith('/shorts/')) {
        videoId = parsed.pathname.split('/shorts/')[1]?.split('/')[0] ?? null;
      }
    }

    if (!videoId || !/^[a-zA-Z0-9_-]{6,20}$/.test(videoId)) {
      return null;
    }

    return `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
  } catch {
    return null;
  }
}
