// Favicon con la huellita en el color principal de la marca (se genera al compilar)
import type { APIRoute } from 'astro';
import { negocio } from '../data/negocio';
import { textoSobre } from '../lib/utilidades';

export function svgIcono(): string {
  const fondo = negocio.marca.colores.principal;
  const color = textoSobre(fondo, negocio.marca.colores.texto || '#1E293B');
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="18" fill="${fondo}"/><g transform="translate(13 12) rotate(-12 19 20)" fill="${color}"><ellipse cx="8" cy="15" rx="4" ry="5.2" transform="rotate(-22 8 15)"/><ellipse cx="15.5" cy="7.5" rx="4.2" ry="5.6" transform="rotate(-8 15.5 7.5)"/><ellipse cx="24.5" cy="7.5" rx="4.2" ry="5.6" transform="rotate(8 24.5 7.5)"/><ellipse cx="32" cy="15" rx="4" ry="5.2" transform="rotate(22 32 15)"/><path d="M20 18.5c-5.6 0-11.2 6.6-11.2 11.6 0 3.6 2.8 5.6 6.1 5.6 2 0 3.4-1 5.1-1s3.1 1 5.1 1c3.3 0 6.1-2 6.1-5.6 0-5-5.6-11.6-11.2-11.6z"/></g></svg>`;
}

export const GET: APIRoute = () =>
  new Response(svgIcono(), { headers: { 'Content-Type': 'image/svg+xml' } });
