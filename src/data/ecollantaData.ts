import heroMesaImg from '../assets/images/hero_mesa_vintage_1794529744091.jpg';
import historiaWorkshopImg from '../assets/images/historia_transformacion_1794529744691.jpg';
import compromisoBosqueImg from '../assets/images/compromiso_naturaleza_1794529744654.jpg';
import productoMesaImg from '../assets/images/producto_mesa_rotativa_1794529744869.jpg';
import productoTableroImg from '../assets/images/producto_tablero_nba_1794529745656.jpg';
import galeriaPersonalizacionImg from '../assets/images/galeria_personalizacion_1794529745722.jpg';

export interface ProductItem {
  id: 'mesa-rotativa' | 'tablero-nba';
  category: string;
  name: string;
  shortName: string;
  description: string;
  image: string;
  imageAlt: string;
  characteristics: string[];
  uses: string;
  differential: string;
  benefits: string[];
  unitProductionCost: number;
  unitSalePrice: number;
}

export interface ProcessStage {
  step: string;
  title: string;
  description: string;
}

export interface CustomizationIdea {
  id: string;
  title: string;
  description: string;
  appliesTo: string;
  previewMode: 'natural' | 'led' | 'glow';
}

export const BRAND_INFO = {
  name: 'ECOLLANTA',
  projectTitle: 'Productos desarrollados a partir de neumáticos reciclados',
  slogan: 'Transformamos lo que otros desechan en nuevas oportunidades',
  founders: ['Thiago Aguirre', 'Rodrigo Olmedo'],
  closingQuote:
    'El cambio comienza cuando decidimos darle una nueva oportunidad a lo que otros descartan.',
  academicNotice:
    'Proyecto empresarial académico desarrollado por Thiago Aguirre y Rodrigo Olmedo. Los datos económicos exhibidos pertenecen al presupuesto de estudio y no constituyen una tienda comercial activa ni precios actualizados de mercado.',
};

export const MEDIA_ASSETS = {
  heroMesa: heroMesaImg,
  historiaWorkshop: historiaWorkshopImg,
  compromisoBosque: compromisoBosqueImg,
  productoMesa: productoMesaImg,
  productoTablero: productoTableroImg,
  galeriaPersonalizacion: galeriaPersonalizacionImg,
};

export const STORY_CONTENT = {
  title: 'Una idea que nació de una preocupación',
  paragraphs: [
    'ECOLLANTA nació a partir de una preocupación que compartimos: el impacto que generan los residuos en nuestro planeta y, especialmente, la enorme cantidad de neumáticos que se desechan diariamente.',
    'Nos llamó la atención que un material tan resistente y duradero terminara acumulándose en basurales, contaminando el entorno o siendo quemado, liberando sustancias perjudiciales para el medio ambiente.',
    'Frente a esta realidad, decidimos que no queríamos quedarnos simplemente observando el problema. Queríamos formar parte de la solución.',
    'Así surgió nuestra empresa: con la idea de demostrar que aquello que muchos consideran basura todavía puede tener muchísimo valor.',
    'Comenzamos a desarrollar productos que combinan creatividad, utilidad, diseño y conciencia ambiental, transformando neumáticos en desuso en muebles y artículos recreativos.',
    'Nuestra iniciativa no busca solamente comercializar productos, sino también transmitir un mensaje: podemos consumir de otra manera, reutilizar los recursos disponibles y construir un futuro más responsable.',
  ],
};

export const COMMITMENT_CONTENT = {
  title: 'Nuestro planeta es el motivo por el que existimos',
  paragraphs: [
    'En ECOLLANTA creemos que cuidar el medio ambiente no debería ser una tendencia, sino una responsabilidad.',
    'Nuestra preocupación por el planeta fue precisamente el motivo que nos llevó a crear esta empresa. Nos resulta difícil ignorar el impacto ambiental que generan los residuos, especialmente los neumáticos usados, que pueden tardar cientos de años en degradarse.',
    'Por eso decidimos actuar.',
    'En lugar de permitir que estos materiales terminen acumulándose en basurales o sean quemados, buscamos darles una segunda oportunidad, convirtiéndolos en productos que puedan utilizarse durante muchos años.',
    'Creemos que cada neumático recuperado representa una oportunidad para reducir residuos, aprovechar recursos existentes y demostrar que la creatividad puede generar soluciones concretas.',
    'No pretendemos solucionar por completo la contaminación mundial, pero sí aportar nuestro granito de arena y demostrar que los pequeños cambios también importan.',
    'Nuestro propósito es que cada persona que adquiera uno de nuestros productos no solamente se lleve un objeto útil y atractivo, sino que también forme parte de una forma más consciente de consumir.',
  ],
  pillars: [
    {
      index: '01',
      title: 'Reutilización',
      description:
        'Recuperamos neumáticos en desuso y los incorporamos nuevamente al circuito productivo.',
    },
    {
      index: '02',
      title: 'Reducción de residuos',
      description:
        'Evitamos que materiales aprovechables terminen acumulados en basurales o sean descartados incorrectamente.',
    },
    {
      index: '03',
      title: 'Consumo responsable',
      description:
        'Promovemos alternativas de compra que aprovechan materiales existentes en lugar de utilizar exclusivamente materias primas nuevas.',
    },
    {
      index: '04',
      title: 'Concientización ambiental',
      description:
        'Buscamos inspirar a otras personas y demostrar que los residuos pueden convertirse en recursos valiosos.',
    },
  ],
  highlightedPhrase:
    'Lo que hoy parece un desecho, mañana puede convertirse en algo extraordinario.',
};

export const PRODUCTS: ProductItem[] = [
  {
    id: 'mesa-rotativa',
    category: 'Mobiliario sustentable',
    name: 'Mesa Rotativa EcoLlanta',
    shortName: 'Mesa Rotativa',
    description:
      'Una mesa auxiliar diseñada para el hogar, fabricada a partir de dos neumáticos usados unidos entre sí y revestidos con materiales decorativos.',
    image: productoMesaImg,
    imageAlt:
      'Imagen ilustrativa de la Mesa Rotativa EcoLlanta: mesa baja de diseño vintage con dos neumáticos revestidos en soga de yute, tapa superior de madera de 60 cm y ruedas giratorias',
    characteristics: [
      'Dos neumáticos reciclados',
      'Tapa superior de madera de aproximadamente 60 cm de diámetro',
      'Base inferior reforzada',
      'Cuatro ruedas giratorias o patitas',
      'Revestimiento de soga de yute, sisal o tela resistente',
      'Terminación vintage',
      'Apta para interiores y exteriores protegidos',
    ],
    uses: 'Mesa ratona, mesa auxiliar o superficie de apoyo para el living, patio, galería o jardín.',
    differential:
      'Un mueble original, funcional y decorativo que combina materiales reciclados con diseño.',
    benefits: [
      'Movilidad práctica gracias a sus cuatro ruedas giratorias o apoyo firme con patitas',
      'Estructura robusta que aprovecha la durabilidad natural del caucho reciclado',
      'Acabado artesanal cálido que se integra fácilmente en ambientes interiores o galerías',
    ],
    unitProductionCost: 56800,
    unitSalePrice: 88700,
  },
  {
    id: 'tablero-nba',
    category: 'Artículo recreativo',
    name: 'Tablero NBA EcoRueda',
    shortName: 'Tablero NBA',
    description:
      'Un tablero recreativo de básquet diseñado para disfrutar del deporte y el entretenimiento en casa.',
    image: productoTableroImg,
    imageAlt:
      'Imagen ilustrativa del Tablero NBA EcoRueda: tablero de madera vintage de 90 por 60 cm con aro fabricado a partir de una sección de neumático reciclado y red tejida',
    characteristics: [
      'Tablero de madera de aproximadamente 90 x 60 cm',
      'Aro fabricado a partir de un neumático pequeño o sección de rueda',
      'Fijación mediante tornillos y tacos Fischer',
      'Diseño vintage personalizable',
      'Posibilidad de incorporar una red decorativa',
    ],
    uses: 'Ideal para niños, adolescentes y adultos que quieran disfrutar de una actividad recreativa en el hogar.',
    differential:
      'Transformamos un neumático descartado en un elemento deportivo, promoviendo la actividad física y el entretenimiento familiar.',
    benefits: [
      'Fomenta el juego activo y los momentos compartidos en patios, habitaciones o quinchos',
      'Instalación firme en pared mediante sistema de tornillos y tacos Fischer',
      'Estética personalizable con colores deportivos, nombres o motivos vintage',
    ],
    unitProductionCost: 36300,
    unitSalePrice: 56950,
  },
];

export const MANUFACTURING_STAGES: ProcessStage[] = [
  {
    step: '01',
    title: 'Recolección',
    description: 'Conseguimos neumáticos usados en gomerías y talleres.',
  },
  {
    step: '02',
    title: 'Limpieza',
    description: 'Lavamos, desengrasamos y revisamos los neumáticos.',
  },
  {
    step: '03',
    title: 'Preparación',
    description: 'Medimos, cortamos y preparamos las maderas.',
  },
  {
    step: '04',
    title: 'Ensamblaje',
    description: 'Unimos los neumáticos con las estructuras de madera.',
  },
  {
    step: '05',
    title: 'Diseño',
    description: 'Colocamos revestimientos y detalles decorativos.',
  },
  {
    step: '06',
    title: 'Terminación',
    description: 'Pintamos, barnizamos y revisamos los acabados.',
  },
  {
    step: '07',
    title: 'Control de calidad',
    description: 'Comprobamos estabilidad, resistencia y seguridad.',
  },
  {
    step: '08',
    title: 'Entrega',
    description: 'Preparamos los productos para su comercialización.',
  },
];

export const DIFFERENTIALS = [
  {
    index: '01',
    title: 'Materiales reciclados',
    description:
      'Aprovechamos neumáticos que de otra manera serían descartados.',
  },
  {
    index: '02',
    title: 'Diseños originales',
    description:
      'Productos con una estética vintage y personalidad propia.',
  },
  {
    index: '03',
    title: 'Accesibilidad',
    description:
      'Buscamos ofrecer alternativas económicas para las familias.',
  },
  {
    index: '04',
    title: 'Funcionalidad',
    description:
      'Productos preparados para cumplir una utilidad concreta.',
  },
  {
    index: '05',
    title: 'Personalización',
    description:
      'Ofrecemos posibilidades de incorporar colores, nombres y diseños especiales.',
  },
  {
    index: '06',
    title: 'Compromiso ambiental',
    description:
      'Nuestra identidad empresarial está basada en la reutilización responsable.',
  },
];

export const CUSTOMIZATION_IDEAS: CustomizationIdea[] = [
  {
    id: 'pintura-artistica',
    title: 'Diseños artísticos y pinturas personalizadas',
    description:
      'Intervenciones pintadas a mano sobre la tapa de madera o el tablero, adaptadas al estilo de cada ambiente.',
    appliesTo: 'Mesa Rotativa EcoLlanta · Tablero NBA EcoRueda',
    previewMode: 'natural',
  },
  {
    id: 'equipos-deportivos',
    title: 'Colores de equipos deportivos favoritos',
    description:
      'Paletas cromáticas y líneas inspiradas en clubes o disciplinas deportivas para personalizar el tablero de básquet.',
    appliesTo: 'Tablero NBA EcoRueda',
    previewMode: 'natural',
  },
  {
    id: 'brilla-oscuridad',
    title: 'Pintura que brilla en la oscuridad',
    description:
      'Detalles con pigmentos fotoluminiscentes en bordes del aro, líneas del tablero o motivos decorativos nocturnos.',
    appliesTo: 'Tablero NBA EcoRueda · Mesa Rotativa EcoLlanta',
    previewMode: 'glow',
  },
  {
    id: 'luces-led',
    title: 'Incorporación de luces LED en la mesa',
    description:
      'Iluminación LED cálida oculta bajo la tapa de madera para resaltar la textura del revestimiento y ambientar el living.',
    appliesTo: 'Mesa Rotativa EcoLlanta',
    previewMode: 'led',
  },
  {
    id: 'guardado-interno',
    title: 'Espacios de guardado dentro de los neumáticos',
    description:
      'Aprovechamiento del volumen hueco interior con tapa removible para almacenar mantas, libros o accesorios del hogar.',
    appliesTo: 'Mesa Rotativa EcoLlanta',
    previewMode: 'natural',
  },
  {
    id: 'nombres-familiares',
    title: 'Personalización con nombres o diseños familiares',
    description:
      'Grabado o rotulado artesanal con iniciales, apellidos o dedicatorias para convertir cada pieza en un objeto único.',
    appliesTo: 'Mesa Rotativa EcoLlanta · Tablero NBA EcoRueda',
    previewMode: 'natural',
  },
];

export const PURPOSE_CONTENT = {
  title: 'No fabricamos solamente productos. Creamos nuevas oportunidades',
  paragraphs: [
    'Queremos demostrar que emprender también puede significar cuidar el planeta.',
    'Nuestra empresa representa una idea sencilla: no todo lo que se desecha pierde su valor.',
    'A través de nuestros productos buscamos unir diseño, creatividad y responsabilidad ambiental, demostrando que es posible crear objetos útiles y atractivos mientras contribuimos a reducir los residuos.',
    'Nuestro objetivo es crecer, innovar y lograr que cada vez más personas descubran el valor de reutilizar.',
  ],
};

export function formatARS(amount: number): string {
  return `$${amount.toLocaleString('es-AR')}`;
}
