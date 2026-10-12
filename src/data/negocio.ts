// ─────────────────────────────────────────────────────────────────────────────
//  TODO EL CONTENIDO DE LA WEB ESTÁ EN ESTE ARCHIVO.
//  Para hacer la web de un cliente nuevo, cambiá estos datos y las fotos de
//  public/img. Si dejás una lista vacía (equipo, galería, FAQ…), esa sección
//  desaparece sola.
// ─────────────────────────────────────────────────────────────────────────────
import type { Negocio } from './tipos';

export const negocio: Negocio = {
  // Banner "Esto es una demo". Para las webs de clientes reales poné false.
  modoDemo: true,
  demo: {
    texto: 'Esto es una demo.',
    textoLink: '¿Querés tu web así? Escribime',
    whatsapp: '5491100000000', // ← TU número de WhatsApp
    mensaje: 'Hola! Vi la demo de la veterinaria y quiero una web así para mi negocio.',
  },

  marca: {
    nombre: 'Veterinaria Patitas',
    nombreCorto: 'Patitas',
    eslogan: 'Cuidamos a tu familia de cuatro patas en Quilmes',
    logo: '', // vacío = logo automático con huellita
    desde: 2014,
    // Cambiando estos 3 colores cambia toda la web
    colores: {
      principal: '#0F766E',
      acento: '#FF6B4A',
      fondo: '#FFF8F0',
      texto: '#1E293B',
      exito: '#22C55E',
    },
  },

  contacto: {
    // En la demo apunta a tu número para que el cliente pruebe el botón de verdad
    whatsapp: '5491100000000',
    mensajeWhatsapp: 'Hola! Quería pedir un turno para mi mascota.',
    telefono: '011 4253-1240',
    telefonoLink: '+541142531240',
    email: 'hola@veterinariapatitas.com.ar',
    direccion: {
      calle: 'Av. Mitre 1240',
      localidad: 'Quilmes',
      provincia: 'Buenos Aires',
      codigoPostal: 'B1878',
      pais: 'AR',
      referencia: 'A 4 cuadras de la estación Quilmes',
    },
    coordenadas: { lat: -34.7243, lng: -58.2589 },
  },

  horarios: {
    zonaHoraria: 'America/Argentina/Buenos_Aires',
    dias: [
      { dia: 'Lunes', franjas: [{ desde: '09:00', hasta: '20:00' }] },
      { dia: 'Martes', franjas: [{ desde: '09:00', hasta: '20:00' }] },
      { dia: 'Miércoles', franjas: [{ desde: '09:00', hasta: '20:00' }] },
      { dia: 'Jueves', franjas: [{ desde: '09:00', hasta: '20:00' }] },
      { dia: 'Viernes', franjas: [{ desde: '09:00', hasta: '20:00' }] },
      { dia: 'Sábado', franjas: [{ desde: '09:00', hasta: '14:00' }] },
      { dia: 'Domingo', franjas: [] },
    ],
    urgencias: 'Urgencias 24 h, los 365 días',
  },

  hero: {
    etiqueta: 'Veterinaria de barrio desde 2014',
    titulo: 'Cuidamos a tu familia de cuatro patas en Quilmes',
    destacado: 'cuatro patas',
    subtitulo:
      'Clínica, vacunas, cirugía, peluquería y urgencias 24 h en un solo lugar. Con turnos que se respetan y tiempo para escucharte.',
    imagen: {
      src: '/img/hero-perro.webp',
      alt: 'Golden retriever sonriente sentado junto a una ventana luminosa',
    },
    imagenTitulo: {
      src: '/img/titulo-gato.webp',
      alt: '',
    },
    botonPrincipal: 'Pedir turno por WhatsApp',
    botonSecundario: 'Ver servicios',
    datos: [
      { icono: 'sirena', titulo: 'Urgencias 24 h', texto: 'Todos los días del año' },
      { icono: 'casa', titulo: '+10 años en Quilmes', texto: 'Más de 4.000 pacientes' },
      { icono: 'calendario', titulo: 'Atención con turno', texto: 'Sin esperas largas' },
    ],
  },

  servicios: {
    etiqueta: 'Servicios',
    titulo: 'Todo lo que tu mascota necesita, en un solo lugar',
    texto: 'Tocá cualquier servicio y te respondemos por WhatsApp con disponibilidad y precio.',
    items: [
      {
        icono: 'estetoscopio',
        titulo: 'Consultas clínicas',
        descripcion: 'Chequeos completos, control de peso y seguimiento de tratamientos. Te explicamos todo sin apuro.',
      },
      {
        icono: 'jeringa',
        titulo: 'Vacunación',
        descripcion: 'Plan de vacunas para cachorros, gatitos y adultos, con la libreta al día y recordatorio por WhatsApp.',
      },
      {
        icono: 'latido',
        titulo: 'Cirugías',
        descripcion: 'Quirófano propio, anestesia inhalatoria y monitoreo durante toda la cirugía y la recuperación.',
      },
      {
        icono: 'tijera',
        titulo: 'Peluquería canina y felina',
        descripcion: 'Baño, corte y deslanado con productos suaves. Turnos tranquilos, pensados para que no se estresen.',
      },
      {
        icono: 'bolsa',
        titulo: 'Pet shop y alimentos',
        descripcion: 'Alimentos, accesorios y antiparasitarios. Te asesoramos según la edad y el peso de tu mascota.',
      },
      {
        icono: 'sirena',
        titulo: 'Urgencias 24 h',
        descripcion: 'Ante una emergencia escribinos o llamanos a cualquier hora: siempre hay un veterinario de guardia.',
        mensaje: 'Hola! Tengo una urgencia con mi mascota.',
        destacado: true,
      },
      {
        icono: 'microscopio',
        titulo: 'Análisis clínicos',
        descripcion: 'Laboratorio propio para análisis de sangre, orina y materia fecal, con la mayoría de los resultados en el día.',
      },
      {
        icono: 'escudo-cruz',
        titulo: 'Castraciones',
        descripcion: 'Castración de perros y gatos con chequeo prequirúrgico y control posoperatorio incluido.',
      },
    ],
  },

  porQue: {
    etiqueta: 'Por qué elegirnos',
    titulo: 'Una veterinaria de barrio, con todo lo de una clínica grande',
    texto: 'Hace más de diez años que atendemos a las mascotas de Quilmes. Muchas familias vienen desde el primer cachorro.',
    imagen: {
      src: '/img/por-que.webp',
      alt: 'Veterinaria revisando a un beagle tranquilo sobre la camilla mientras su dueño lo acaricia',
    },
    items: [
      {
        icono: 'mano-corazon',
        titulo: 'Atención personalizada',
        texto: 'Conocemos a cada paciente por su nombre. Te escuchamos y te explicamos cada paso.',
      },
      {
        icono: 'microscopio',
        titulo: 'Equipamiento completo',
        texto: 'Laboratorio, ecografía y quirófano en el mismo lugar: menos viajes y diagnósticos más rápidos.',
      },
      {
        icono: 'reloj',
        titulo: 'Urgencias 24 h',
        texto: 'Las emergencias no avisan. Hay un veterinario de guardia todos los días del año.',
      },
      {
        icono: 'recibo',
        titulo: 'Precios claros',
        texto: 'Te pasamos el presupuesto antes de empezar. Sin sorpresas a la hora de pagar.',
      },
    ],
  },

  equipo: {
    etiqueta: 'Equipo',
    titulo: 'Las personas que van a cuidar a tu mascota',
    texto: 'Veterinarios matriculados que se siguen formando todos los años.',
    items: [
      {
        nombre: 'Dra. Lucía Ferreyra',
        especialidad: 'Clínica general y prevención',
        frase: 'Una buena consulta empieza por escuchar a la familia.',
        foto: { src: '/img/equipo-lucia.webp', alt: 'Retrato de la doctora Lucía Ferreyra con ambo verde' },
      },
      {
        nombre: 'Dr. Martín Arce',
        especialidad: 'Cirugía y traumatología',
        frase: 'Explico cada cirugía con calma. Un dueño tranquilo ayuda a una mejor recuperación.',
        foto: { src: '/img/equipo-martin.webp', alt: 'Retrato del doctor Martín Arce con ambo verde' },
      },
      {
        nombre: 'Dra. Sofía Benítez',
        especialidad: 'Felinos y dermatología',
        frase: 'Los gatos tienen sus tiempos. Los atiendo sin apuro y con mucha paciencia.',
        foto: { src: '/img/equipo-sofia.webp', alt: 'Retrato de la doctora Sofía Benítez con un gato atigrado en brazos' },
      },
    ],
  },

  galeria: {
    etiqueta: 'Galería',
    titulo: 'Así es un día en Patitas',
    texto: 'Un lugar luminoso y tranquilo, pensado para que tu mascota llegue sin miedo.',
    items: [
      { src: '/img/galeria-recepcion.webp', alt: 'Recepción de la veterinaria con mostrador de madera y plantas' },
      { src: '/img/galeria-gato.webp', alt: 'Gato naranja durmiendo sobre una manta tejida al sol' },
      { src: '/img/galeria-peluqueria.webp', alt: 'Perrito blanco recién bañado envuelto en una toalla en la peluquería' },
      { src: '/img/galeria-cachorro.webp', alt: 'Manos de una veterinaria sosteniendo a un cachorro durante el control' },
      { src: '/img/galeria-petshop.webp', alt: 'Estante del pet shop con juguetes, correas y alimentos' },
      { src: '/img/galeria-paseo.webp', alt: 'Perro feliz paseando con correa por una vereda arbolada' },
    ],
  },

  ubicacion: {
    etiqueta: 'Horarios y ubicación',
    titulo: 'Te esperamos en el centro de Quilmes',
    texto: 'Hay lugar para estacionar sobre la avenida y rampa de acceso en la entrada.',
    textoBoton: 'Cómo llegar',
  },

  faq: {
    etiqueta: 'Preguntas frecuentes',
    titulo: 'Lo que más nos preguntan',
    texto: '¿No encontrás lo que buscás? Escribinos y te respondemos enseguida.',
    items: [
      {
        pregunta: '¿Atienden sin turno?',
        respuesta:
          'Sí, pero con turno no esperás. Pedilo por WhatsApp y te lo confirmamos en minutos. Las urgencias se atienden siempre, sin turno.',
      },
      {
        pregunta: '¿Qué medios de pago aceptan?',
        respuesta:
          'Efectivo, transferencia, tarjetas de débito y crédito y billeteras virtuales. En cirugías y tratamientos largos podés pagar en cuotas.',
      },
      {
        pregunta: '¿Hacen visitas a domicilio?',
        respuesta:
          'Sí, en Quilmes, Bernal y Ezpeleta, para consultas y vacunación. Coordinamos el día y el horario por WhatsApp.',
      },
      {
        pregunta: '¿Qué hago si mi mascota tiene una urgencia de noche?',
        respuesta:
          'Llamanos al teléfono de guardia: atendemos las 24 horas, todo el año. Si podés, avisanos que estás en camino así te esperamos listos.',
      },
      {
        pregunta: '¿Cada cuánto hay que vacunar?',
        respuesta:
          'Los cachorros y gatitos necesitan varias dosis en sus primeros meses y los adultos, un refuerzo por año. En la primera consulta armamos su calendario.',
      },
      {
        pregunta: '¿Atienden otros animales además de perros y gatos?',
        respuesta:
          'Nos especializamos en perros y gatos. Si tenés un conejo, un ave u otra mascota, consultanos y te recomendamos colegas de confianza.',
      },
    ],
  },

  // Solo reseñas reales. Mientras la lista esté vacía, la sección no aparece.
  resenas: {
    etiqueta: 'Reseñas',
    titulo: 'Lo que dicen las familias',
    items: [],
  },

  cta: {
    titulo: '¿Tu mascota necesita atención?',
    texto: 'Escribinos y te damos turno hoy.',
    boton: 'Escribinos por WhatsApp',
    imagen: { src: '/img/cta-perro.webp', alt: 'Perro mestizo mirando hacia arriba con las orejas paradas' },
  },

  redes: [
    { tipo: 'instagram', etiqueta: '@veterinariapatitas', url: 'https://www.instagram.com/' },
    { tipo: 'facebook', etiqueta: 'Veterinaria Patitas', url: 'https://www.facebook.com/' },
  ],

  footer: {
    descripcion: 'Clínica veterinaria en Quilmes. Consultas, cirugías, peluquería y urgencias 24 h.',
    credito: {
      texto: 'Web hecha por',
      nombre: 'Tu Marca', // ← tu marca
      url: 'https://wa.me/5491100000000', // ← tu WhatsApp o tu web
    },
  },

  seo: {
    titulo: 'Veterinaria Patitas · Veterinaria en Quilmes con urgencias 24 h',
    descripcion:
      'Consultas, vacunación, cirugías, peluquería y urgencias 24 h en Quilmes. Pedí turno por WhatsApp. Av. Mitre 1240.',
    imagenOg: '', // vacío = se arma sola con la foto principal
    url: '',
  },
};
