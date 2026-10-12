// Ícono para cuando agregan la web a la pantalla de inicio del celular
import type { APIRoute } from 'astro';
import sharp from 'sharp';
import { svgIcono } from './favicon.svg';

export const GET: APIRoute = async () => {
  const png = await sharp(Buffer.from(svgIcono())).resize(180, 180).png().toBuffer();
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
};
