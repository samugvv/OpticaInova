==============================================================
ÓPTICA INNOVA - Carpeta de imágenes
==============================================================

Esta carpeta debe contener las imágenes reales del negocio.
Mientras tanto, la web utiliza placeholders generados por CSS
(con iconos de Font Awesome y degradados) para que la web se
vea profesional sin imágenes.

==============================================================
IMÁGENES RECOMENDADAS A SUBIR
==============================================================

1) favicon.png
   - Logo o icono de Óptica Innova
   - 32x32 px o 64x64 px (PNG con transparencia)

2) og-image.jpg
   - Imagen Open Graph (para compartir en redes sociales)
   - 1200x630 px (JPG)
   - Mostrando el logo o fachada de la óptica

3) hero.jpg (referenciada en CSS como fondo del hero)
   - Foto interior de la óptica o profesional atendiendo
   - 1920x1080 px (JPG) - paisaje, alta calidad

4) intro.jpg
   - Foto de equipo o del óptico atendiendo
   - 600x600 px (JPG) - formato cuadrado

5) sobre-equipo.jpg
   - Foto del equipo (especialmente del óptico principal)
   - 600x600 px (JPG)

6) sobre-interior.jpg
   - Foto del interior de la óptica, ambiente acogedor
   - 600x600 px (JPG)

7) servicios/
   - audifonos.jpg (600x450 px) - máquina de audiometría
   - tonometro.jpg (600x450 px) - tensión ocular
   - miopia.jpg (600x450 px) - niño con gafas o lentes especiales
   - envio.jpg (600x450 px) - lentes de contacto / paquetería
   - lentillas.jpg (600x450 px) - adaptación de lentes
   - reparacion.jpg (600x450 px) - taller de reparación

8) gafas/
   - gafas-graduadas.jpg (400x400 px)
   - gafas-sol.jpg (400x400 px)
   - gafas-infantiles.jpg (400x400 px)
   - monturas-diseno.jpg (400x400 px)

9) blog/ (cuando se publiquen artículos)
   - Cada artículo: 600x400 px (JPG)

==============================================================
CÓMO REEMPLAZAR PLACEHOLDERS POR IMÁGENES REALES
==============================================================

Una vez tengas las imágenes, en css/styles.css busca los
selectores .hero-bg, .intro-image, .service-image, .about-image,
.gallery-item, .blog-card-img y reemplaza el background actual
por:

  background: url('../img/hero.jpg') center/cover no-repeat;

Y elimina (o reduce opacidad de) los pseudo-elementos ::before
que muestran los iconos.

==============================================================
OPTIMIZACIÓN
==============================================================

Antes de subir cualquier imagen real:
- Comprime con TinyPNG, Squoosh u otra herramienta
- Usa formato WebP si es posible (mejor compresión)
- Mantén un tamaño bajo (< 200 KB por imagen idealmente)
- Añade el atributo alt en cada <img> con texto descriptivo

==============================================================
