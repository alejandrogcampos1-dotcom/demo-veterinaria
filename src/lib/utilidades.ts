import type { DiaHorario, FranjaHoraria, Negocio } from '../data/tipos';

/** Link de WhatsApp con mensaje precargado. */
export function linkWhatsApp(numero: string, mensaje?: string): string {
  const limpio = numero.replace(/\D/g, '');
  const texto = mensaje ? `?text=${encodeURIComponent(mensaje)}` : '';
  return `https://wa.me/${limpio}${texto}`;
}

/** Mensaje de WhatsApp para un servicio: usa el del servicio o lo arma con el título. */
export function mensajeServicio(titulo: string, mensaje?: string): string {
  return mensaje?.trim() || `Hola! Quiero consultar por ${titulo.toLowerCase()}.`;
}

/** '09:00' → '9', '09:30' → '9:30' */
function horaCorta(hora: string): string {
  const [h, m] = hora.split(':');
  return m === '00' ? String(Number(h)) : `${Number(h)}:${m}`;
}

export function textoFranjas(franjas: FranjaHoraria[]): string {
  if (franjas.length === 0) return 'Cerrado';
  return (
    franjas.map((f) => `${horaCorta(f.desde)} a ${horaCorta(f.hasta)}`).join(' y ') + ' h'
  );
}

const ABREVIATURAS: Record<DiaHorario['dia'], string> = {
  Lunes: 'Lun',
  Martes: 'Mar',
  Miércoles: 'Mié',
  Jueves: 'Jue',
  Viernes: 'Vie',
  Sábado: 'Sáb',
  Domingo: 'Dom',
};

/** Agrupa días seguidos con el mismo horario: "Lun a Vie · 9 a 20 h" */
export function resumenHorarios(dias: DiaHorario[]): { dias: string; horario: string }[] {
  const grupos: { desde: DiaHorario; hasta: DiaHorario; horario: string }[] = [];
  for (const dia of dias) {
    if (dia.franjas.length === 0) continue;
    const horario = textoFranjas(dia.franjas);
    const ultimo = grupos.at(-1);
    const seguido = ultimo && dias.indexOf(ultimo.hasta) === dias.indexOf(dia) - 1;
    if (ultimo && seguido && ultimo.horario === horario) ultimo.hasta = dia;
    else grupos.push({ desde: dia, hasta: dia, horario });
  }
  return grupos.map((g) => ({
    dias:
      g.desde === g.hasta
        ? ABREVIATURAS[g.desde.dia]
        : `${ABREVIATURAS[g.desde.dia]} a ${ABREVIATURAS[g.hasta.dia]}`,
    horario: g.horario,
  }));
}

/** Dirección en una línea: "Av. Mitre 1240, Quilmes, Buenos Aires" */
export function direccionCompleta(negocio: Negocio): string {
  const d = negocio.contacto.direccion;
  return [d.calle, d.localidad, d.provincia].filter(Boolean).join(', ');
}

/** Link "Cómo llegar": abre la app de mapas del celular con la ruta hasta el local. */
export function linkComoLlegar(negocio: Negocio): string {
  const destino = encodeURIComponent(direccionCompleta(negocio));
  return `https://www.google.com/maps/dir/?api=1&destination=${destino}`;
}

/** URL del mapa embebido de OpenStreetMap centrado en el local. */
export function urlMapa(lat: number, lng: number): string {
  const delta = 0.006;
  const bbox = [lng - delta, lat - delta * 0.6, lng + delta, lat + delta * 0.6]
    .map((n) => n.toFixed(5))
    .join('%2C');
  return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat}%2C${lng}`;
}

// ── Colores ─────────────────────────────────────────────────────────────────

function luminancia(hex: string): number {
  const limpio = hex.replace('#', '');
  const completo = limpio.length === 3 ? [...limpio].map((c) => c + c).join('') : limpio;
  const [r, g, b] = [0, 2, 4].map((i) => {
    const c = parseInt(completo.slice(i, i + 2), 16) / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contraste(a: string, b: string): number {
  const [l1, l2] = [luminancia(a), luminancia(b)].sort((x, y) => y - x);
  return (l1 + 0.05) / (l2 + 0.05);
}

/** Elige blanco o el color de texto según cuál se lea mejor sobre `fondo`. */
export function textoSobre(fondo: string, oscuro: string): string {
  return contraste(fondo, '#FFFFFF') >= contraste(fondo, oscuro) ? '#FFFFFF' : oscuro;
}
