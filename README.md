# Demo veterinaria · plantilla de landing

Landing para veterinarias y pet shops hecha con **Astro + Tailwind CSS**. Es un sitio estático, rápido
(Lighthouse 97–100 en celular y 100 en escritorio) y listo para publicar en Vercel.

**Todo el contenido está en un solo archivo: [`src/data/negocio.ts`](src/data/negocio.ts).**
Ninguna sección tiene texto escrito a mano. Si dejás una lista vacía (equipo, galería, preguntas o reseñas),
esa sección desaparece sola y el menú se ajusta.

---

## Cómo hacer la web de un cliente nuevo

1. **Copiá el proyecto.** En GitHub: *Use this template* (o duplicá el repo) con el nombre del cliente,
   por ejemplo `web-veterinaria-sanroque`. Clonalo y corré `npm install`.
2. **Cargá sus datos en `src/data/negocio.ts`.** Nombre, eslogan, WhatsApp, teléfono, dirección,
   coordenadas, horarios, servicios, equipo, preguntas y redes. Poné **`modoDemo: false`** para sacar
   el banner de demo.
3. **Cambiá los colores.** En `marca.colores` alcanza con tocar 3 valores: `principal`, `acento` y
   `fondo`. El color de los textos sobre cada color se elige solo para que siempre se lea bien.
4. **Poné las fotos.**
   - Copiá las fotos originales del cliente (JPG, PNG o WebP, del tamaño que sean) a la carpeta `fotos/`.
   - Corré `npm run fotos`: las convierte a WebP optimizado en `public/img/` (en 3 tamaños, para
     celular y escritorio).
   - En `negocio.ts` referencialas así: `src: '/img/nombre-de-la-foto.webp'`, con un `alt` que describa
     la foto.
5. **Revisala.** `npm run dev` y abrí http://localhost:4321 (probala también desde el celular).
6. **Publicala en Vercel.** Subí los cambios a GitHub, entrá a [vercel.com/new](https://vercel.com/new),
   importá el repo y tocá **Deploy** (detecta Astro solo, no hay que configurar nada). Para usar su
   dominio: *Settings → Domains* en Vercel, y poné ese dominio en `seo.url` de `negocio.ts`.

## Qué foto va en cada lugar

| Dónde | Campo en `negocio.ts` | Formato ideal |
| --- | --- | --- |
| Foto grande de arriba | `hero.imagen` | Vertical (4:5), una mascota mirando a cámara |
| Fotito dentro del título | `hero.imagenTitulo` | Horizontal, recortada a una carita (opcional) |
| Por qué elegirnos | `porQue.imagen` | Vertical, alguien del equipo atendiendo |
| Equipo | `equipo.items[].foto` | Cuadrada, cara y hombros |
| Galería | `galeria.items` | Cualquier forma y cantidad |
| Bloque final | `cta.imagen` | PNG/WebP **con fondo transparente** (opcional) |

La imagen que aparece al compartir el link por WhatsApp se arma sola con el nombre, el eslogan,
los colores y la foto principal (`/og.jpg`). Si querés usar otra, ponela en `public/img` y cargala
en `seo.imagenOg`.

## Reglas importantes

- **Reseñas:** solo reales y con permiso del cliente. Mientras `resenas.items` esté vacío, la sección
  no aparece.
- **Íconos:** genéricos de [Lucide](https://lucide.dev), sin logos de marcas. Los disponibles están
  en `src/lib/iconos.ts` (por ejemplo `estetoscopio`, `jeringa`, `tijera`, `sirena`). Para sumar uno,
  importalo ahí.
- **Fotos de esta demo:** son generadas con IA para mostrar el diseño. En la web de cada cliente van
  sus fotos reales.

## Qué trae

- Banner de demo (se apaga con `modoDemo: false`), barra que se esconde al bajar y menú para celular.
- Botones de WhatsApp con mensaje precargado: uno por servicio, botón flotante con globo
  "¿Te ayudamos?" y bloque final.
- Horarios que resaltan el día de hoy y muestran **"Abierto ahora" / "Cerrado"** con la hora de
  Argentina (o la zona horaria que configures). Soporta horario cortado.
- Mapa de OpenStreetMap y botón "Cómo llegar" que abre la app de mapas del celular.
- SEO: título, descripción, Open Graph, datos estructurados `VeterinaryCare`, `robots.txt`, `sitemap.xml`
  y favicon con el color de la marca.
- Animaciones suaves al hacer scroll que respetan "reducir movimiento" del sistema.

## Estructura

```
src/
  data/negocio.ts      ← el único archivo que se edita por cliente
  data/tipos.ts        ← esquema de datos (TypeScript avisa si falta algo)
  components/          ← Hero, Servicios, PorQue, Equipo, Galeria, Horarios, Ubicacion, FAQ,
                         Resenas, CTA, Pie (footer), BotonWhatsApp, BannerDemo…
  layouts/Base.astro   ← <head>, SEO, colores y fuentes
  pages/               ← la página y los archivos generados (og.jpg, favicon, robots, sitemap)
  styles/global.css    ← estilos base y colores de marca
public/img/            ← fotos optimizadas
fotos/                 ← fotos originales (no se suben al repo)
scripts/optimizar-fotos.mjs
```

## Comandos

| Comando | Qué hace |
| --- | --- |
| `npm install` | Instala dependencias |
| `npm run dev` | Servidor local en http://localhost:4321 |
| `npm run fotos` | Optimiza las fotos de `fotos/` a `public/img/` |
| `npm run build` | Revisa tipos y genera el sitio en `dist/` |
| `npm run preview` | Muestra el sitio ya compilado |
