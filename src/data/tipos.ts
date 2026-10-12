// Esquema de datos de la web. No hace falta tocar este archivo:
// el contenido se edita en src/data/negocio.ts y TypeScript avisa si falta algo.
import type { NombreIcono } from '../lib/iconos';

export type { NombreIcono };

/** Una foto dentro de src/assets/img. `src` es el nombre del archivo, ej: 'hero-perro.webp' */
export interface Foto {
  src: string;
  /** Texto alternativo: describí la foto como si se la contaras a alguien que no la ve. */
  alt: string;
}

/** Hora en formato 24 h, por ejemplo '09:00' o '20:30'. */
export type Hora = `${number}:${number}`;

export interface FranjaHoraria {
  desde: Hora;
  hasta: Hora;
}

export interface DiaHorario {
  dia: 'Lunes' | 'Martes' | 'Miércoles' | 'Jueves' | 'Viernes' | 'Sábado' | 'Domingo';
  /** Una o más franjas (para horario cortado). Lista vacía = cerrado ese día. */
  franjas: FranjaHoraria[];
}

export interface Servicio {
  icono: NombreIcono;
  titulo: string;
  descripcion: string;
  /** Opcional. Por ejemplo 'Desde $15.000'. Si está vacío no se muestra. */
  precio?: string;
  /** Mensaje que se precarga en WhatsApp. Si está vacío se arma solo con el título. */
  mensaje?: string;
  /** true = tarjeta resaltada en color oscuro (usalo para 1 servicio, por ejemplo urgencias) */
  destacado?: boolean;
}

export interface Punto {
  icono: NombreIcono;
  titulo: string;
  texto: string;
}

export interface Integrante {
  nombre: string;
  especialidad: string;
  frase: string;
  foto: Foto;
}

export interface Pregunta {
  pregunta: string;
  respuesta: string;
}

/** Una reseña REAL copiada de la ficha de Google del negocio. */
export interface Resena {
  autor: string;
  /** De 1 a 5 */
  puntaje: number;
  texto: string;
  /** Como figura en Google, ej: 'hace 2 semanas' o 'septiembre 2026' */
  fecha: string;
}

export type TipoRed = 'instagram' | 'facebook' | 'tiktok' | 'otra';

export interface Red {
  tipo: TipoRed;
  /** Lo que se lee en pantalla, por ejemplo '@veterinariapatitas' */
  etiqueta: string;
  url: string;
}

export interface Encabezado {
  /** Etiqueta chica arriba del título */
  etiqueta: string;
  titulo: string;
  /** Texto corto opcional al lado o debajo del título */
  texto?: string;
}

export interface Negocio {
  /**
   * true = web de muestra para vender: banner de demo, los botones de contacto abren un cartel
   * que lleva a tu WhatsApp y se ve el lugar de las reseñas. Para clientes reales: false.
   */
  modoDemo: boolean;

  /** Quien vende la web (vos). Se usa en el banner, el cartel de demo y el crédito del pie. */
  vendedor: {
    nombre: string;
    /** Solo números con código de país, ej: 5491112345678 */
    whatsapp: string;
    mensaje: string;
  };

  /** Textos que solo aparecen con modoDemo: true */
  demo: {
    banner: { texto: string; boton: string };
    cartel: { texto: string; botonSi: string; botonNo: string };
    /** Bloque punteado que marca dónde van las reseñas de Google */
    avisoResenas: string;
  };

  marca: {
    nombre: string;
    /** Versión corta para el logo y el footer. Si está vacía se usa `nombre`. */
    nombreCorto?: string;
    eslogan: string;
    /** Ruta a un logo propio (SVG o PNG en public/img). Vacío = logo automático con huellita. */
    logo?: string;
    /**
     * Año de apertura. Con esto se calculan los años en todos los textos: escribí {anios}
     * (ej: '+{anios} años') o {desde} (ej: 'desde {desde}') y se completan solos.
     */
    desde?: number;
    colores: {
      /** Color principal de la marca (botones, bloques de color) */
      principal: string;
      /** Color de acento (detalles, subrayados, bloque final) */
      acento: string;
      /** Color de fondo general */
      fondo: string;
      /** Color de los textos. Opcional. */
      texto?: string;
      /** Verde del botón flotante y el "Abierto ahora". Opcional. */
      exito?: string;
    };
  };

  contacto: {
    /**
     * WhatsApp del negocio: solo números con código de país y sin el 15. Ej: 5491123456789.
     * Con modoDemo: true no se usa (los botones abren el cartel de demo).
     */
    whatsapp: string;
    /** Mensaje por defecto al abrir WhatsApp */
    mensajeWhatsapp: string;
    /** Como se lee en pantalla. Ej: '011 4253-1240' */
    telefono: string;
    /** Para el link de llamada, con código de país. Ej: '+541142531240' */
    telefonoLink: string;
    email?: string;
    direccion: {
      calle: string;
      localidad: string;
      provincia: string;
      codigoPostal?: string;
      /** Código de país de 2 letras, ej: 'AR' */
      pais: string;
      /** Texto opcional de referencia, ej: 'a 3 cuadras de la estación' */
      referencia?: string;
    };
    /** Coordenadas del local para el mapa (en Google Maps: clic derecho sobre el local → copiar coordenadas) */
    coordenadas: { lat: number; lng: number };
  };

  horarios: {
    /** Zona horaria para calcular "Abierto ahora". */
    zonaHoraria: string;
    dias: DiaHorario[];
    /** Si atienden urgencias fuera de horario. Vacío = no se muestra. */
    urgencias?: string;
  };

  hero: {
    etiqueta: string;
    /** Título principal. Si está vacío se usa marca.eslogan */
    titulo?: string;
    /** Parte del título que se subraya (tiene que estar escrita igual que en el título) */
    destacado?: string;
    subtitulo: string;
    imagen: Foto;
    /** Fotito redonda que aparece dentro del título. Opcional. */
    imagenTitulo?: Foto;
    botonPrincipal: string;
    botonSecundario: string;
    /** Los 3 datos rápidos debajo de los botones */
    datos: { icono: NombreIcono; titulo: string; texto: string }[];
  };

  servicios: Encabezado & { items: Servicio[] };
  porQue: Encabezado & { imagen?: Foto; items: Punto[] };
  equipo: Encabezado & { items: Integrante[] };
  galeria: Encabezado & { items: Foto[] };
  ubicacion: Encabezado & { textoBoton: string };
  faq: Encabezado & { items: Pregunta[] };
  /**
   * Reseñas REALES de Google, nunca inventadas. Lista vacía = la sección no aparece
   * (en modo demo se ve un bloque punteado que marca el lugar).
   */
  resenas: Encabezado & {
    /** Puntaje promedio de la ficha de Google, ej: 4.8 */
    promedio?: number;
    /** Cantidad total de reseñas en Google */
    total?: number;
    /** Link a la ficha de Google del negocio */
    urlGoogle?: string;
    textoBoton: string;
    items: Resena[];
  };

  cta: {
    titulo: string;
    texto: string;
    boton: string;
    /** Foto recortada (PNG/WebP con fondo transparente) que asoma en el bloque. Opcional. */
    imagen?: Foto;
  };

  redes: Red[];

  footer: {
    descripcion: string;
    /** Texto antes del nombre del vendedor, ej: 'Web hecha por'. Vacío = no se muestra el crédito. */
    textoCredito: string;
  };

  seo: {
    titulo: string;
    descripcion: string;
    /** Imagen al compartir el link (1200 × 630). Vacío = se arma sola con la foto principal. */
    imagenOg?: string;
    /** Dominio final, ej: 'https://veterinariapatitas.com.ar'. En Vercel se completa solo si está vacío. */
    url?: string;
  };
}
