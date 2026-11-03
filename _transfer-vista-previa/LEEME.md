# Transferencia de la vista previa al sitio

Carpeta temporal. Contiene todo lo que se hizo en la vista previa y todavía no está en `src/`.
Después de pasarlo al sitio, esta carpeta y la rama `transfer/vista-previa` se borran.

- `html/`: páginas generadas de la vista previa (fuente de verdad del texto, fichas y orden).
- `imagenes/`: capturas en tamaño completo.

## Qué aplicar en `src/` (ES y EN)

1. **Casos nuevos** (texto, ficha Rol/Contexto/Herramientas e imágenes tal como en `html/caso-*.html`):
   - `reporte-overview-tracking`: portada `reporte-overview-1v3`, luego `reporte-overview-1v2` (imagen anterior), luego `reporte-overview-2`.
   - `bitacora-tracking`: `bitacora-1`, `bitacora-2`.
   - `heatmap-tracking`: `heatmap-1v2`, `heatmap-2v2`.
   - `tracking-sistema-diseno` (Adaptación al sistema de diseño oficial): sin imágenes, texto "Por escribir".
2. **Quitar** el caso `recorridos-multinivel` (y su mención en `CaseCard.astro`). Los "Siguiente proyecto" que apuntaban a él deben ir a `rediseno-plataforma-bi`.
3. **Subtítulo de proyecto** bajo el título de cada tarjeta: "Proyecto: Plataforma de BI", "Proyecto: Plataforma de Tracking" o "Proyecto: ComunidadFeliz" (ver `html/proyectos.html`, `<p class="project">`). No reordenar la página de proyectos por grupos.
4. **Inicio**: tarjeta grande = Reporte overview; luego Bitácora, Heatmap, Carga de Metas, Carga de turnos, Reporte de Meta Justa, ComunidadFeliz. EAT Japan solo en Proyectos. El botón "Ver los N proyectos" despliega el resto en la misma página (ver `html/inicio.html`).
5. **Nombres**: "Reporte de Meta Justa", "Reporte CPV Clientes por vendedor", "Reporte Control de Dotación".
6. **Aviso "Imágenes referenciales"** (`.mock-note`) en los 10 casos de BI y Tracking, no en EAT Japan ni ComunidadFeliz.
7. **Herramientas**: copiar el campo Herramientas de cada `html/caso-*.html` (lista completa, nunca solo IA).
8. **Carga de turnos**: portada con sidebar `carga-de-turnos-1-con-sidebar.png` y texto completo del caso.
9. Verificar ComunidadFeliz y Meta Justa contra `html/` (ya están en el repo local).

Reglas: no nombrar FollowUP en el sitio; "retail", nunca "retail físico"; no describir a Hedy como Product Owner; datos ficticios.
