// Convierte las fotos de la carpeta fotos/ a WebP optimizado dentro de public/img/.
// Uso: poné las fotos originales (JPG, PNG o WebP, del tamaño que sean) en fotos/
// y corré `npm run fotos`. Por cada foto genera tres versiones:
//   public/img/<nombre>.webp     → hasta 1600 px de ancho (pantallas grandes)
//   public/img/<nombre>-md.webp  → 800 px de ancho
//   public/img/<nombre>-sm.webp  → 480 px de ancho (celulares)
// La web elige sola la que corresponde a cada pantalla.
import { mkdir, readdir } from 'node:fs/promises';
import { extname, basename, join } from 'node:path';
import sharp from 'sharp';

const ORIGEN = 'fotos';
const DESTINO = join('public', 'img');
const EXTENSIONES = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif', '.tif', '.tiff']);

const archivos = (await readdir(ORIGEN).catch(() => [])).filter((a) =>
  EXTENSIONES.has(extname(a).toLowerCase()),
);

if (archivos.length === 0) {
  console.log(`No hay fotos en ${ORIGEN}/. Copiá ahí las fotos originales y volvé a correr el comando.`);
  process.exit(0);
}

await mkdir(DESTINO, { recursive: true });

for (const archivo of archivos) {
  const nombre = basename(archivo, extname(archivo))
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // saca tildes
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
  const entrada = sharp(join(ORIGEN, archivo)).rotate(); // respeta la orientación del celular

  const { width: ancho = 0 } = await entrada.metadata();
  const kb = (bytes) => `${Math.round(bytes / 1024)} KB`;
  const resumen = [];

  for (const [sufijo, max, calidad] of [
    ['', 1600, 80],
    ['-md', 800, 78],
    ['-sm', 480, 76],
  ]) {
    // Solo genera versiones bastante más chicas que la original
    if (sufijo && ancho <= max * 1.1) continue;
    const info = await entrada
      .clone()
      .resize({ width: max, withoutEnlargement: true })
      .webp({ quality: calidad, effort: 6, smartSubsample: true })
      .toFile(join(DESTINO, `${nombre}${sufijo}.webp`));
    resumen.push(`${info.width}px ${kb(info.size)}`);
  }
  console.log(`✓ ${archivo} → /img/${nombre}.webp (${resumen.join(' · ')})`);
}
