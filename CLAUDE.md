# CLAUDE.md — Portafolio de Hedy Herrada

Este archivo da contexto a Claude Code al inicio de cada sesión. Léelo completo antes de proponer cambios.

## El proyecto

Portafolio personal de Hedy Herrada como Product Designer y UX/UI Designer. Es un proyecto propio, independiente de su trabajo en FollowUP.

- Repositorio: `HedyAnn/Portafolio_oficial`
- Publicación: GitHub Pages
- Sitio publicado: https://hedyann.github.io/Portafolio_oficial/
- LinkedIn: https://www.linkedin.com/in/hedy-herrada-75365b147/

El propio portafolio también se documenta como caso de estudio: el diseño y la construcción de la landing con apoyo de IA.

## Sobre Hedy (cómo describir su trabajo)

- Product Designer en FollowUP (Chile), una plataforma SaaS de analítica para **retail**. Escribir "retail" a secas, nunca "retail físico": sus clientes también tienen comercio online.
- Empezó en FollowUP como UX/UI Designer y hoy su rol es de Product Designer. Se presentan como dos cargos dentro de la misma empresa.
- Diseña modelos de datos, especificaciones funcionales y UI/UX de funcionalidades de analítica.
- Tomó decisiones de alcance y prioridad, pero **no** describirla como Product Owner: trabajó junto al PO del proyecto y no se le debe atribuir ese rol.
- Evitar la palabra "lidera" para describir su rol.
- Sigue el proceso de diseño completo (discovery, investigación, definición, prototipado, pruebas con usuarios). **No** presentar su trabajo como hecho "solo con IA". La IA (Claude, Codex) es una herramienta para construir prototipos funcionales en código y probarlos con usuarios.
- Trabaja con Scrum. Herramientas: Figma, FigJam, Miro, Maze, Notion, YouTrack, Slack, Claude, Codex. Domina Python y hace prototipos en HTML, CSS y JavaScript.

## Contenido del portafolio

### Casos de FollowUP
- **Meta Justa**: dashboard que asigna metas a vendedores de forma justa según horario y días trabajados, y muestra cumplimiento, desempeño de tienda, ventas y otros indicadores.
- **Reporte CPV** (clientes por vendedor) y **reporte de control de CPV**, para ver si una tienda está sobredotada o subdotada de personal.
- **Bitácora del producto de tracking** (recorridos, heatmaps, conteo).
- Contexto general: la plataforma tiene muchos reportes (cumplimiento, metas, KPIs de venta, desempeño por tienda) que comparan lo que vendió cada tienda contra lo que debía vender.

### Proyectos independientes / académicos (publicados en Behance)
- **EAT Japan App** y su branding — Diplomado UX/UI, Coderhouse, 2025.
- **Rediseño ComunidadFeliz** — proyecto independiente.

## Reglas de confidencialidad (obligatorias)

- Sin logo de FollowUP en ningún lugar del sitio.
- Sin datos reales de clientes. Todas las pantallas, gráficos y tablas de casos FollowUP usan datos ficticios (mock).
- Sin detalles internos del sistema. Explicar en términos generales que se tomaron decisiones, no cómo funciona por dentro.

## Dirección visual

- Identidad y sistema de diseño propios, totalmente distintos de los de FollowUP. Los proyectos de FollowUP son contenido, no referencia de estilo.
- Paleta: magenta y violeta. Moderna, creativa, un poco femenina.
- **Tema oscuro por defecto.**
- Animaciones expresivas pero medidas. Respetar `prefers-reduced-motion`.

## Tono y redacción

- Español latino neutro, sin voseo ni modismos regionales.
- Serio y profesional, con la terminología correcta del área. Nada que suene "New Age".
- Directo y factual: contexto → necesidad → problema a resolver → decisiones → resultado. Sin frases de color, metáforas ni opiniones.
- Mantener en inglés los términos propios del área (stakeholder, discovery, user research, wireframe, etc.) en lugar de traducirlos.

## Arquitectura

Hedy quiere que el portafolio tenga una arquitectura real (frontend, backend, seguridad), no solo un HTML estático. Considerar:
- GitHub Pages solo sirve contenido estático; cualquier backend (formulario de contacto, API, base de datos mock) debe vivir en un servicio aparte.
- No subir claves, tokens ni secretos al repositorio. Usar variables de entorno y `.gitignore`.

<!-- Completar con la estructura real de carpetas, stack y comandos cuando esté definida:
## Estructura del repo
## Comandos (dev, build, deploy)
-->

## Cómo trabajar en este repo

- Antes de cambios grandes (estructura, estilos globales, navegación), proponer el plan y esperar aprobación.
- Revisar el resultado en el navegador (Preview) antes de dar algo por terminado, en escritorio y en ancho de teléfono.
- Cuidar accesibilidad: contraste suficiente sobre fondo oscuro, navegación por teclado, textos alternativos en imágenes.
- Commits pequeños y con mensajes descriptivos.

## Skills útiles

- `frontend-design`: guía de dirección visual, tipografía y decisiones de diseño para UI. Instalar el plugin correspondiente en Claude Code si no está disponible.
- `accessibility-review`, `ux-copy` y `design-critique` (plugin de diseño): para auditar accesibilidad, revisar textos de interfaz y criticar pantallas.

<!-- Agregar aquí otras skills que hayas usado en el proyecto. -->
