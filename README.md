# Demo veterinaria · plantilla de landing

Landing para veterinarias y pet shops hecha con **Astro + Tailwind CSS**. Es un sitio estático, rápido
(Lighthouse 95+ en celular) y listo para publicar en Vercel.

**Todo el contenido está en un solo archivo: [`src/data/negocio.ts`](src/data/negocio.ts).**
Ninguna sección tiene texto escrito a mano. Si dejás una lista vacía (equipo, galería, preguntas o reseñas),
esa sección desaparece sola y el menú se ajusta.

---

## Cómo hacer la web de un cliente nuevo

1. **Copiá el proyecto.** En GitHub: *Use this template* (o duplicá el repo) con el nombre del cliente,
   por ejemplo `web-veterinaria-sanroque`. Clonalo y corré `npm install`.
2. **Cargá sus datos en `src/data/negocio.ts`.** Nombre, eslogan, WhatsApp, teléfono, dirección,
   coordenadas, horarios, servicios, equipo, preguntas y redes. Poné **`modoDemo: false`**: se van el
   banner y el cartel de demo, y todos los botones pasan a abrir el WhatsApp del negocio
   (`contacto.whatsapp`; si queda vacío, el build avisa con un error).
3. **Cambiá los colores.** En `marca.colores` alcanza con tocar 3 valores: `principal`, `acento` y
   `fondo`. El color de los textos sobre cada color se elige solo para que siempre se lea bien.
4. **Poné las fotos.** Copiá las fotos del cliente (JPG, PNG o WebP, del tamaño que sean) a
   `src/assets/img/` y en `negocio.ts` referencialas por el nombre del archivo:
   `src: 'nombre-de-la-foto.jpg'`, con un `alt` que describa la foto. Al compilar, Astro las convierte
   solo a AVIF y WebP en varios tamaños.
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
los colores y la foto principal (`/og.jpg`). Si querés usar otra, ponela en `public/` y cargá su ruta
en `seo.imagenOg`.

## Modo demo y datos del vendedor

- `modoDemo: true` es la web de muestra para vender: banner "Esta es una web de ejemplo…" con botón
  *Quiero la mía* (se puede cerrar), y todos los botones de contacto (WhatsApp, teléfono, mail) abren
  un cartel que explica cómo funcionaría en la web del cliente y lleva a tu WhatsApp.
- Tus datos están en el bloque `vendedor` (nombre, WhatsApp y mensaje). Se usan en el banner, el cartel
  y el crédito "Web hecha por …" del pie. Los textos del banner y del cartel están en `demo`.
- **Años automáticos:** en cualquier texto podés escribir `{anios}` o `{desde}` y se completan con
  `marca.desde` (por ejemplo `'+{anios} años en Quilmes'`).

## Reglas importantes

- **Reseñas:** solo reales, copiadas de la ficha de Google del negocio (autor, puntaje, texto y fecha),
  más el promedio, la cantidad total y el link a la ficha. Mientras `resenas.items` esté vacío, la
  sección no aparece; en modo demo se ve un bloque punteado que marca el lugar.
- **Íconos:** genéricos de [Lucide](https://lucide.dev), sin logos de marcas. Los disponibles están
  en `src/lib/iconos.ts` (por ejemplo `estetoscopio`, `jeringa`, `tijera`, `sirena`). Para sumar uno,
  importalo ahí.
- **Fotos de esta demo:** son generadas con IA para mostrar el diseño. En la web de cada cliente van
  sus fotos reales.

## Qué trae

- Banner y cartel de demo (se apagan con `modoDemo: false`), barra que se esconde al bajar y menú
  para celular.
- Botones de WhatsApp con mensaje precargado: uno por servicio, botón flotante con globo
  "¿Te ayudamos?" (respeta el área segura del celular) y bloque final.
- Horarios que resaltan el día de hoy y muestran **"Abierto ahora"** o **"Cerrado · abre … a las …"**
  con la hora de Argentina (o la zona que configures), y "Guardia 24 h disponible" si hay urgencias.
  Soporta horario cortado.
- Sección "Lo que dicen en Google" con reseñas reales.
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
  assets/img/           ← fotos (Astro las optimiza al compilar)
public/img/            ← texturas decorativas
```

## Comandos

| Comando | Qué hace |
| --- | --- |
| `npm install` | Instala dependencias |
| `npm run dev` | Servidor local en http://localhost:4321 |
| `npm run build` | Revisa tipos y genera el sitio en `dist/` |
| `npm run preview` | Muestra el sitio ya compilado |
