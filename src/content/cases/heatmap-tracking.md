---
title: "Heatmap (mapa de calor)"
summary: "Reporte de mapa de calor para tiendas de uno o varios pisos: muestra dónde ocurren las atenciones y por dónde circula el tráfico, en vista agregada o en serie."
origin: "FollowUP"
year: 2026
format: completo
role: ["UX/UI y Product Design: investigación, diseño, prototipado y definición de interacciones"]
tools: ["Miro", "Notion", "YouTrack", "Slack", "HTML", "CSS y JavaScript", "librerías de componentes y de gráficos", "Claude", "Codex"]
tags: ["Heatmaps", "Data viz", "Tracking"]
contexto: "Plataforma de Tracking · SaaS de analítica retail"
proyecto: "Plataforma de Tracking"
meta: "SaaS de analítica retail"
cover: ../../assets/cases/heatmap-mockup.webp
coverAlt: "Mockup del mapa de calor en un laptop: pisos de la tienda apilados en perspectiva con las zonas de mayor concentración de atenciones, panel de plantas con visitantes únicos y retenidos, y control de opacidad; a la izquierda, sus beneficios: atenciones en tienda, tráfico de visitantes y tiendas de uno o varios pisos. Datos ficticios."
cover2: ../../assets/cases/heatmap-2v2.webp
coverAlt2: "Mapa de calor de la planta baja sobre el plano de la tienda, con las zonas de mayor actividad resaltadas y el selector de pisos a la izquierda. Datos ficticios."
imagenesReferenciales: true
featured: true
order: 11
homeOrder: 3
draft: false
revisadoConfidencialidad: true
---

## Contexto

El heatmap nace como un reporte de la plataforma de tracking para responder dos preguntas sobre el espacio físico de la tienda:

- **Dónde ocurren las atenciones**, es decir, las interacciones entre el staff y los clientes.
- **Dónde se concentra el tráfico**: qué zonas reciben más visitantes a lo largo del día.

Las tiendas de los clientes tienen arquitecturas distintas: algunas de un solo piso y otras de varios. El reporte debía funcionar para todas, mostrando la información piso por piso cuando corresponde, sin perder la visión del conjunto.

## Mi rol

Trabajé entre UX/UI y Product Design. Junto al equipo tomé las decisiones sobre cómo representar tiendas de uno o varios pisos, cómo mostrar atenciones y tráfico, y cómo debía interactuar el usuario con el mapa.

Diseñé y prototipé el reporte directamente en código (HTML, CSS y JavaScript), con librerías de componentes y de gráficos, y con Codex y Claude como apoyo para acelerar la construcción. Lo refiné con los equipos de producto y desarrollo, coordinando el trabajo en YouTrack, Notion, Miro y Slack.

## Proceso

1. **Investigación.** Revisé qué necesitaba entender el cliente sobre el uso de su tienda y qué datos entrega el tracking para atenciones y tráfico.
2. **Prototipo funcional.** Construí el reporte en código con datos de prueba, lo que permitió evaluar la navegación entre pisos y el comportamiento del mapa con interacciones reales, no solo con pantallas estáticas.
3. **Refinamiento.** Iteré el prototipo con el equipo de producto y luego con desarrollo, para ajustar el alcance y resolver la factibilidad de cada interacción.

## Decisiones clave

- **Una solución para distintas arquitecturas de tienda.** El reporte se adapta a tiendas de un piso o de varios. Cuando hay más de uno, combina una vista en perspectiva con los pisos apilados, para comparar la actividad entre plantas de un vistazo, y una vista de cada planta sobre su plano para analizar el detalle. Un panel lateral lista los pisos con sus visitantes únicos y retenidos, y permite cambiar de planta.
- **Atenciones y tráfico en el mismo reporte.** Un selector permite alternar entre ambas capas sin salir de la vista, porque responden preguntas distintas sobre el mismo espacio.
- **Vista agregada y vista en serie.** La vista agregada suma todas las atenciones o recorridos del período seleccionado. La vista en serie muestra cómo cambia el mapa con granularidad por hora, cada 4 horas o por día.
- **Legibilidad del mapa.** Controles como la opacidad del mapa de calor y una leyenda que se puede mostrar u ocultar ayudan a leer las zonas calientes sin tapar el plano.

## Resultado

Un reporte que muestra el heatmap de atenciones y de tráfico en tiendas de uno o varios pisos. Ayuda al cliente a entender cómo se distribuyen las atenciones y el flujo de personas dentro de su tienda, en distintos horarios y días de la semana, y a tomar decisiones sobre el layout con esa información.
