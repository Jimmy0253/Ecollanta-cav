# ECOLLANTA — Sitio Web Empresarial Sustentable

Sitio web empresarial desarrollado para **ECOLLANTA** (*Proyecto: Productos desarrollados a partir de neumáticos reciclados*), creado por **Thiago Aguirre** y **Rodrigo Olmedo**.

> *"Transformamos lo que otros desechan en nuevas oportunidades"*

---

## 1. Descripción del proyecto

La aplicación presenta la identidad comercial, filosofía ambiental, catálogo de productos, proceso productivo en 8 etapas, propuestas de personalización, presupuesto académico de referencia y sección audiovisual institucional de **ECOLLANTA**.

### Productos incluidos
1. **Mesa Rotativa EcoLlanta**
   - Precio de venta unitario (referencia académica): `$88.700`
   - Costo de producción unitario: `$56.800`
2. **Tablero NBA EcoRueda**
   - Precio de venta unitario (referencia académica): `$56.950`
   - Costo de producción unitario: `$36.300`

---

## 2. Tecnologías utilizadas

- **React 19** + **TypeScript**
- **Tailwind CSS v4**
- **Vite**
- **Lucide React** (iconografía relacionada con reciclaje, naturaleza y diseño)

---

## 3. Estructura de archivos principal

```text
├── index.html                        # Metadatos SEO, OpenGraph y tipografías (Fraunces + Plus Jakarta Sans)
├── metadata.json                     # Metadatos de la aplicación
├── src/
│   ├── config/
│   │   └── videoConfig.ts            # Configuración centralizada del video institucional (MP4 o YouTube)
│   ├── data/
│   │   └── ecollantaData.ts          # Contenidos, especificaciones técnicas, etapas y precios del proyecto
│   ├── components/
│   │   ├── Navbar.tsx                # Barra de navegación responsive con scroll suave
│   │   ├── HeroSection.tsx           # Portada principal (Hero)
│   │   ├── StorySection.tsx          # Nuestra historia
│   │   ├── VideoSection.tsx          # Reproductor de video institucional integrado
│   │   ├── CommitmentSection.tsx     # Compromiso con el medio ambiente
│   │   ├── ProductsSection.tsx       # Catálogo de productos
│   │   ├── ProductDetailModal.tsx    # Ficha técnica interactiva de producto
│   │   ├── ProcessSection.tsx        # Línea de tiempo de 8 etapas de fabricación
│   │   ├── WhyUsSection.tsx          # Diferenciales de marca
│   │   ├── InnovationSection.tsx     # Galería y explorador de personalización
│   │   ├── PricingSection.tsx        # Precios unitarios del presupuesto académico
│   │   ├── PurposeSection.tsx        # Propósito empresarial
│   │   ├── ContactFooter.tsx         # Formulario de contacto validado y pie de página
│   │   ├── ResilientImage.tsx        # Componente de imagen con respaldo visual
│   │   └── Reveal.tsx                # Animaciones suaves al desplazarse
│   ├── App.tsx                       # Composición principal de secciones
│   └── index.css                     # Paleta cromática y configuración Tailwind CSS
```

---

## 4. Cómo configurar el Video Institucional

El reproductor ubicado entre **Nuestra historia** y **Nuestro compromiso con el medio ambiente** está preparado para funcionar sin modificar la estructura de componentes.

Editá únicamente el archivo `src/config/videoConfig.ts`:

### Opción A: Usar un archivo MP4 local
1. Guardá tu archivo en `public/videos/institucional.mp4`.
2. Modificá `INSTITUTIONAL_VIDEO_CONFIG` en `src/config/videoConfig.ts`:
```ts
export const INSTITUTIONAL_VIDEO_CONFIG: InstitutionalVideoConfig = {
  sourceType: 'mp4',
  sourceUrl: '/videos/institucional.mp4',
  posterUrl: videoPosterImg,
  title: 'Una nueva oportunidad para lo que otros desechan',
  subtitle: 'Conocé cómo transformamos neumáticos en desuso en productos útiles, originales y sustentables',
};
```

### Opción B: Usar una URL de YouTube
```ts
export const INSTITUTIONAL_VIDEO_CONFIG: InstitutionalVideoConfig = {
  sourceType: 'youtube',
  sourceUrl: 'https://www.youtube.com/watch?v=TU_ID_DE_VIDEO',
  posterUrl: videoPosterImg,
  title: 'Una nueva oportunidad para lo que otros desechan',
  subtitle: 'Conocé cómo transformamos neumáticos en desuso en productos útiles, originales y sustentables',
};
```

Mientras `sourceType` permanezca en `'none'`, la sección mostrará una portada ilustrativa con el botón de reproducción desactivado, evitando contenido audiovisual ficticio. También incluye una opción en pantalla para previsualizar un archivo `.mp4` local o un enlace de YouTube durante la sesión.

---

## 5. Integración futura del formulario de contacto

El formulario de `src/components/ContactFooter.tsx` valida nombre, correo electrónico y mensaje, generando un resumen listo para copiar. Para conectarlo a un servicio real (por ejemplo, un endpoint `/api/contact`, Formspree o Resend), reemplazá la lógica dentro de `handleSubmit` por una petición `fetch` hacia tu API backend.

---

## 6. Comandos de ejecución

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo (puerto 3000)
npm run dev

# Verificar tipado TypeScript
npm run lint

# Generar compilación de producción
npm run build
```
