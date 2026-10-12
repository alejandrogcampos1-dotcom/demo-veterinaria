// Esquema de datos de la web. No hace falta tocar este archivo:
// el contenido se edita en src/data/negocio.ts y TypeScript avisa si falta algo.
import type { NombreIcono } from '../lib/iconos';

export type { NombreIcono };

/** Una foto dentro de public/img. `src` empieza con /img/… */
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

export interface Resena {
  nombre: string;
  /** Opcional, por ejemplo 'Dueña de Lola' */
  detalle?: string;
  texto: string;
  /** De 1 a 5 */
  estrellas?: number;
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
  /** true = muestra el banner "Esto es una demo". Para clientes reales: false. */
  modoDemo: boolean;
  demo: {
    texto: string;
    textoLink: string;
    /** Tu WhatsApp (el de quien vende la web), solo números con código de país. */
    whatsapp: string;
    mensaje: string;
  };

  marca: {
    nombre: string;
    /** Versión corta para el logo y el footer. Si está vacía se usa `nombre`. */
    nombreCorto?: string;
    eslogan: string;
    /** Ruta a un logo propio (SVG o PNG en public/img). Vacío = logo automático con huellita. */
    logo?: string;
    /** Año de apertura: se usa para datos estructurados. */
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
    /** Solo números con código de país y sin el 15. Ej: 5491123456789 */
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
  /** Solo reseñas reales del cliente. Lista vacía = la sección no aparece. */
  resenas: Encabezado & { items: Resena[] };

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
    credito: {
      texto: string;
      nombre: string;
      /** Link de tu marca (por ejemplo, tu WhatsApp). */
      url: string;
    };
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
