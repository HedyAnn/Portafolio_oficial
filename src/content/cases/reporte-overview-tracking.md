---
title: "Reporte overview"
summary: "Un one-pager que muestra el estado de salud de una o varias tiendas: visitantes, atención y conversión, semana a semana y día a día."
origin: "FollowUP"
year: 2026
format: completo
role: ["UX/UI y Product Design: discovery, definición, diseño y prototipado"]
tools: ["Miro", "Notion", "YouTrack", "Slack", "HTML", "CSS y JavaScript", "librerías de componentes y de gráficos", "Claude", "Codex"]
tags: ["Dashboards", "Data viz", "Tracking"]
contexto: "Plataforma de Tracking · SaaS de analítica retail"
proyecto: "Plataforma de Tracking"
meta: "SaaS de analítica retail"
cover: ../../assets/cases/reporte-overview-1v3.webp
coverAlt: "Vista Overview de la plataforma de tracking: resumen operacional con visitantes por tienda, tasa de atención y tasa de conversión, un insight destacado y el volumen de visitantes y conversión. Datos ficticios."
cover2: ../../assets/cases/reporte-overview-1v2.webp
coverAlt2: "Vista Overview de la plataforma de tracking: resumen semanal con visitantes por semana, tasa de atención y tasa de conversión, y volumen semanal de visitantes. Datos ficticios."
cover3: ../../assets/cases/reporte-overview-2.webp
coverAlt3: "Vista Overview: conversión y tasa de atención por semana retail y por zona de la tienda, y tabla de evolución por zona. Datos ficticios."
imagenesReferenciales: true
featured: true
order: 9
homeOrder: 1
draft: false
revisadoConfidencialidad: true
---

## Contexto

La plataforma de tracking tiene reportes organizados por temática: visitas, atenciones, conversión y heatmap. Cada uno responde una pregunta específica, pero para tener una visión completa de una tienda el usuario debía recorrerlos uno por uno.

Los usuarios pidieron una página de resumen: una sola vista donde seguir, semana a semana o día a día, cómo evolucionan los indicadores de su tienda o de sus tiendas y conocer su estado de salud general. De esa necesidad nace el Reporte overview.

## Mi rol

Trabajé entre UX/UI y Product Design. Hice el discovery de la necesidad, definí qué información debía incluir la vista y cómo presentarla, y diseñé la solución.

En lugar de partir en Figma, diseñé y prototipé directamente en código (HTML, CSS y JavaScript), con librerías de componentes y de gráficos, y con Claude y Codex como apoyo para acelerar la construcción. Esos prototipos funcionales se refinaron primero con el equipo del Product Owner y después con el equipo de desarrollo, para revisar cada funcionalidad y su factibilidad. La coordinación y el seguimiento del trabajo se hicieron en YouTrack, Notion, Miro y Slack.

## Proceso

1. **Discovery.** Partí de la necesidad planteada por los usuarios e investigué qué decisiones toman con la información de sus tiendas y qué indicadores revisan con más frecuencia.
2. **Definición.** Prioricé qué indicadores de los reportes temáticos debían estar en el resumen y cómo se relacionan entre sí: visitantes, tasa de atención y tasa de conversión.
3. **Prototipos.** Construí prototipos funcionales en código con datos de prueba, lo que permitió evaluar las interacciones reales (filtros, cambio de fechas, desgloses) antes del desarrollo.
4. **Refinamiento.** Iteré los prototipos con el equipo del Product Owner y luego con desarrollo, ajustando alcance y detalles de cada funcionalidad.

## Decisiones clave

- **Qué incluir.** El overview no reemplaza a los reportes temáticos: reúne solo los indicadores que permiten evaluar el estado de la tienda de un vistazo, como el resumen semanal de visitantes, atención y conversión, el volumen semanal y la evolución por zona.
- **Granularidad según las fechas.** Definí cómo se agrupa la información según el rango de fechas seleccionado (por semana retail o por día), y la opción de filtrar por días de la semana, para que los gráficos sigan siendo legibles en cualquier período.
- **Del resumen al detalle.** Cada bloque parte con una lectura general y permite bajar al detalle por zona de la tienda, con un insight destacado (por ejemplo, la conversión mínima y máxima del período) para no obligar al usuario a interpretar cada gráfico.
- **Información descargable.** El detalle se puede descargar para que el usuario lo use fuera de la plataforma.

## Resultado

Un one-pager que concentra la información relevante de la tienda en una sola página: indicadores principales, su evolución en el tiempo, el desglose por zona, insights destacados y detalles descargables. El usuario puede conocer el estado general de su tienda o de sus tiendas sin recorrer cada reporte por separado.
