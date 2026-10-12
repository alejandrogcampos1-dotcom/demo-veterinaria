// Imagen para compartir el link (WhatsApp, Facebook, etc.). Se arma sola en cada build
// con el nombre, el eslogan, los colores y la foto principal de negocio.ts.
// Si preferís una imagen propia, ponela en public/img y cargá su ruta en seo.imagenOg.
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import type { APIRoute } from 'astro';
import satori from 'satori';
import sharp from 'sharp';
import { negocio } from '../data/negocio';
import { textoSobre } from '../lib/utilidades';

type Nodo = { type: string; props: Record<string, unknown> };
const el = (type: string, style: Record<string, unknown>, children?: unknown, extra = {}): Nodo => ({
  type,
  props: { style, children, ...extra },
});

const fuente = (paquete: string, archivo: string) =>
  readFileSync(join(process.cwd(), 'node_modules', '@fontsource', paquete, 'files', archivo));

export const GET: APIRoute = async () => {
  const { marca, hero, contacto, horarios } = negocio;
  const c = {
    principal: marca.colores.principal,
    acento: marca.colores.acento,
    fondo: marca.colores.fondo,
    texto: marca.colores.texto || '#1E293B',
  };
  const sobrePrincipal = textoSobre(c.principal, c.texto);
  const sobreAcento = textoSobre(c.acento, c.texto);

  // Foto principal en JPEG (lo que entiende el renderizador)
  const foto = await sharp(join(process.cwd(), 'public', hero.imagen.src))
    .resize(560, 700, { fit: 'cover', position: 'centre' })
    .jpeg({ quality: 85 })
    .toBuffer();
  const fotoUrl = `data:image/jpeg;base64,${foto.toString('base64')}`;

  // Título palabra por palabra, con la parte destacada en el color principal
  const titulo = hero.titulo || marca.eslogan;
  const destacado = hero.destacado || '';
  const inicio = destacado ? titulo.indexOf(destacado) : -1;
  let posicion = 0;
  const palabras = titulo.split(' ').map((palabra) => {
    const dentro = inicio >= 0 && posicion >= inicio && posicion < inicio + destacado.length;
    posicion += palabra.length + 1;
    return el('span', { color: dentro ? c.principal : c.texto, marginRight: 16 }, palabra);
  });

  const nombreCorto = marca.nombreCorto || marca.nombre;
  const bajada =
    marca.nombreCorto && marca.nombre.includes(marca.nombreCorto)
      ? marca.nombre.replace(marca.nombreCorto, '').trim()
      : '';

  const huella = el(
    'svg',
    { width: 34, height: 34 },
    [
      el('ellipse', {}, undefined, { cx: 8, cy: 15, rx: 4, ry: 5.2, fill: sobrePrincipal }),
      el('ellipse', {}, undefined, { cx: 15.5, cy: 7.5, rx: 4.2, ry: 5.6, fill: sobrePrincipal }),
      el('ellipse', {}, undefined, { cx: 24.5, cy: 7.5, rx: 4.2, ry: 5.6, fill: sobrePrincipal }),
      el('ellipse', {}, undefined, { cx: 32, cy: 15, rx: 4, ry: 5.2, fill: sobrePrincipal }),
      el('path', {}, undefined, {
        d: 'M20 18.5c-5.6 0-11.2 6.6-11.2 11.6 0 3.6 2.8 5.6 6.1 5.6 2 0 3.4-1 5.1-1s3.1 1 5.1 1c3.3 0 6.1-2 6.1-5.6 0-5-5.6-11.6-11.2-11.6z',
        fill: sobrePrincipal,
      }),
    ],
    { viewBox: '0 0 40 40' },
  );

  const chip = (texto: string, fondo: string, color: string) =>
    el(
      'div',
      {
        display: 'flex',
        alignItems: 'center',
        padding: '12px 22px',
        borderRadius: 999,
        background: fondo,
        color,
        fontSize: 22,
        fontFamily: 'Inter',
        fontWeight: 600,
      },
      texto,
    );

  const arbol = el(
    'div',
    {
      width: 1200,
      height: 630,
      display: 'flex',
      position: 'relative',
      background: c.fondo,
      overflow: 'hidden',
    },
    [
      // Forma de color detrás de la foto
      el('div', {
        position: 'absolute',
        right: -90,
        top: -60,
        width: 520,
        height: 520,
        borderRadius: 999,
        background: c.acento,
      }),
      // Foto en arco
      el(
        'div',
        {
          position: 'absolute',
          right: 70,
          top: 56,
          width: 410,
          height: 520,
          display: 'flex',
          overflow: 'hidden',
          borderTopLeftRadius: 205,
          borderTopRightRadius: 205,
          borderBottomLeftRadius: 36,
          borderBottomRightRadius: 36,
        },
        el('img', { width: 410, height: 520, objectFit: 'cover' }, undefined, { src: fotoUrl }),
      ),
      // Columna de texto
      el(
        'div',
        {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          // El alto y el ancho no incluyen el padding: 630 - 64 - 64 = 502
          width: 600,
          height: 502,
          padding: '64px 0 64px 72px',
        },
        [
          el('div', { display: 'flex', alignItems: 'center' }, [
            el(
              'div',
              {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 64,
                height: 64,
                borderRadius: 18,
                background: c.principal,
              },
              huella,
            ),
            el('div', { display: 'flex', flexDirection: 'column', marginLeft: 16 }, [
              ...(bajada
                ? [
                    el(
                      'div',
                      {
                        fontFamily: 'Inter',
                        fontWeight: 600,
                        fontSize: 15,
                        letterSpacing: 3,
                        color: c.texto,
                        opacity: 0.7,
                      },
                      bajada.toUpperCase(),
                    ),
                  ]
                : []),
              el(
                'div',
                { fontFamily: 'Jakarta', fontWeight: 800, fontSize: 34, color: c.texto, letterSpacing: -1 },
                nombreCorto,
              ),
            ]),
          ]),
          el(
            'div',
            {
              display: 'flex',
              flexWrap: 'wrap',
              fontFamily: 'Jakarta',
              fontWeight: 800,
              fontSize: 64,
              lineHeight: 1.04,
              letterSpacing: -2.6,
            },
            palabras,
          ),
          el('div', { display: 'flex', gap: 12 }, [
            ...(horarios.urgencias ? [chip(horarios.urgencias.split(',')[0], c.acento, sobreAcento)] : []),
            chip(`${contacto.direccion.calle}, ${contacto.direccion.localidad}`, c.principal, sobrePrincipal),
          ]),
        ],
      ),
    ],
  );

  const svg = await satori(arbol as never, {
    width: 1200,
    height: 630,
    fonts: [
      { name: 'Jakarta', data: fuente('plus-jakarta-sans', 'plus-jakarta-sans-latin-800-normal.woff'), weight: 800 },
      { name: 'Inter', data: fuente('inter', 'inter-latin-600-normal.woff'), weight: 600 },
    ],
  });

  const jpg = await sharp(Buffer.from(svg)).jpeg({ quality: 86, mozjpeg: true }).toBuffer();
  return new Response(new Uint8Array(jpg), { headers: { 'Content-Type': 'image/jpeg' } });
};
