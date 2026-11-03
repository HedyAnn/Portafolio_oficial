---
title: "Carga de turnos"
summary: "Módulo para organizar los turnos de los vendedores en todas las tiendas de una empresa: estado de carga, cobertura del horario y un panel visual para crear turnos."
origin: FollowUP
year: 2026
format: completo
role: ["UX/UI y Product Design: discovery, diseño, prototipado y seguimiento hasta producción"]
tools: ["Figma", "Miro", "Notion", "YouTrack", "Slack", "HTML", "CSS y JavaScript", "librerías de componentes y de gráficos", "Claude", "Codex"]
tags: ["B2B", "Formularios", "Operaciones"]
proyecto: "Plataforma de BI"
cover: ../../assets/cases/carga-de-turnos-1-con-sidebar.png
coverAlt: "Panel general de carga de turnos: estado de carga semanal de 300 semanas, listado de tiendas que requieren atención urgente, botones para importar y exportar turnos, y tabla por tienda con el estado de cada semana. Datos ficticios."
cover2: ../../assets/cases/carga-de-turnos-2.png
coverAlt2: "Vista por tienda: estado de carga de las semanas del período, cobertura por semana, y detalle diario con el porcentaje de cobertura de cada día y el acceso a generar turnos. Datos ficticios."
cover3: ../../assets/cases/carga-de-turnos-3.png
coverAlt3: "Panel de generación de turnos: grilla semanal por vendedor donde se asignan turnos de mañana, tarde, full day o libre, con selector de turnos, copia desde otra semana y barra de cobertura diaria. Datos ficticios."
imagenesReferenciales: true
featured: true
order: 3
homeOrder: 5
draft: false
revisadoConfidencialidad: true
---

## Contexto

En la plataforma de BI surgió la necesidad de que los usuarios pudieran organizar los turnos de sus vendedores en cada una de las tiendas de su empresa, dentro de la misma plataforma.

Los turnos no son un dato aislado: se conectan con otros reportes de la plataforma, como el Reporte de Meta Justa, que reparte la meta de la tienda según el turno y el día de cada vendedor. Sin turnos cargados y completos, esos reportes pierden precisión.

## Mi rol

Trabajé como UX/UI Designer y Product Designer a lo largo de todo el proyecto: discovery con clientes, definición de las vistas y sus reglas, diseño en Figma, prototipo funcional en código y acompañamiento hasta la salida a producción.

## Proceso

1. **Discovery.** Conversé con clientes para entender cómo organizaban los turnos y dónde estaban sus principales dolores al hacerlo.
2. **Bocetos en Figma.** Exploré las primeras ideas y estructuras de pantalla, y las probé antes de pasar al diseño final.
3. **Diseño oficial.** Con lo aprendido, diseñé las vistas definitivas del módulo.
4. **Prototipo funcional.** Construí un prototipo en código (HTML, CSS y JavaScript), apoyándome en IA para acelerar la construcción, y lo usé para probar los flujos con interacciones reales.
5. **Refinamiento y producción.** Iteré a partir de las pruebas, refiné con el equipo y el módulo salió a producción.

## Decisiones clave

El trabajo central fue decidir qué información mostrar en cada pantalla y cómo hacer que una tarea operativa y repetitiva fuera simple para el usuario.

- **Vista general de todas las tiendas.** Muestra el estado de carga de turnos de cada tienda y el progreso del período (semanas completas, parciales, críticas o sin turnos), destaca las tiendas que requieren atención urgente y permite importar y exportar turnos de forma masiva.
- **Vista por tienda.** Muestra el detalle de una tienda: el estado de carga de cada semana y la cobertura de su horario operativo, con el detalle día a día. Desde aquí se suben o descargan los turnos de esa tienda y se accede a la generación de turnos.
- **Panel de generación de turnos.** Una grilla semanal por vendedor donde se asignan turnos (mañana, tarde, full day o libre) de forma visual. Se pueden crear nuevos tipos de turno, copiar los turnos de otra semana y ver la cobertura diaria mientras se edita. La prioridad fue la usabilidad: que el usuario arme la semana de un vistazo, sin formularios largos.
- **Carga masiva y carga manual.** El módulo admite ambos caminos: importar un archivo para muchas tiendas a la vez o crear y editar turnos directamente en el panel.

## Resultado

Un módulo completo de carga de turnos, en producción, con vista general, vista por tienda y un panel de creación de turnos y categorías dentro de la misma plataforma. Los turnos cargados alimentan otros reportes, por lo que el módulo es una pieza clave para que la información de desempeño sea confiable.
