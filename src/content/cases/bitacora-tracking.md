---
title: "Bitácora"
summary: "Historial de lo que se exhibe en cada zona de la tienda a lo largo del tiempo, para relacionar los cambios de layout con la conversión."
origin: "FollowUP"
year: 2026
format: completo
role: ["UX/UI y Product Design: investigación, benchmark, diseño y prototipado"]
tools: ["Figma", "Miro", "Notion", "YouTrack", "Slack", "HTML", "CSS y JavaScript", "librerías de componentes y de gráficos", "Claude", "Codex"]
tags: ["Tracking", "Línea de tiempo", "Configuración"]
contexto: "Plataforma de Tracking · SaaS de analítica retail"
proyecto: "Plataforma de Tracking"
meta: "SaaS de analítica retail"
cover: ../../assets/cases/bitacora-mockup-1.webp
coverAlt: "Mockup de la Bitácora en un laptop: línea de tiempo de enero a octubre con la marca exhibida en cada zona de una tienda, con filtros por tienda, zona y piso; a la izquierda, su descripción: registro y seguimiento del tipo de producto exhibido en cada zona. Datos ficticios."
cover2: ../../assets/cases/bitacora-mockup-2.webp
coverAlt2: "Mockup de la configuración de la Bitácora en un laptop: categorías, tabla de zonas con su categoría actual y panel para registrar un cambio con fecha de vigencia e historial de la zona; a la izquierda, sus beneficios: gestión por zonas, historial de cambios y análisis con contexto. Datos ficticios."
imagenesReferenciales: true
featured: true
order: 10
homeOrder: 2
draft: false
revisadoConfidencialidad: true
---

## Contexto

La bitácora nace en la plataforma de tracking a partir de la necesidad de un cliente: saber qué tipo de producto se estuvo exhibiendo en cada zona de su tienda y en qué período.

El layout de una tienda cambia con frecuencia. La vitrina derecha puede mostrar calzado de mujer este mes y calzado infantil el siguiente. Sin un registro de esos cambios, el cliente no podía relacionar el desempeño de una zona, por ejemplo su conversión, con lo que realmente se exhibía en ella.

## Mi rol

Trabajé entre UX/UI y Product Design. Investigué cómo resuelven otras plataformas este tipo de registro, definí el modelo de categorías junto al equipo, diseñé la bitácora y su configuración, y construí un prototipo funcional que refinamos con los equipos de producto y desarrollo.

## Proceso

1. **Investigación y benchmark.** Revisé cómo otras plataformas trabajan las bitácoras e historiales de cambios, para identificar patrones de visualización en el tiempo y de edición de registros.
2. **Boceto y prototipo funcional.** Llevé las ideas a un prototipo funcional en código para probar la línea de tiempo y el flujo de configuración con interacciones reales.
3. **Refinamiento.** Iteré el prototipo con el equipo de producto y luego con desarrollo, ajustando el modelo de datos y el alcance de cada funcionalidad.

## Decisiones clave

- **Categorías en lugar de renombrar zonas.** Al principio los clientes querían cambiar el nombre de las zonas de la tienda según lo que se exhibía. Lo desaconsejamos: el nombre de una zona identifica un espacio físico dentro de la tienda y está ligado a la base de datos, por lo que cambiarlo afectaría el historial de los reportes. La solución fue crear categorías independientes que se asignan a las zonas.
- **Qué representa una categoría.** Las categorías son flexibles: pueden indicar el tipo de producto exhibido, el área comercial o la marca presente en esa zona.
- **Asignación con vigencia.** Cada categoría se asigna a una zona desde una fecha determinada, con fecha de término opcional. Así los cambios se pueden programar con anticipación y el historial anterior no se modifica.
- **Bitácora y configuración separadas.** La bitácora muestra en una línea de tiempo qué categoría tuvo cada zona, con filtros por tienda, zona y piso, y una vista por zona o por categoría. La configuración concentra la creación de categorías y su asignación a las zonas, con el historial de cada una.

## Resultado

Una bitácora que muestra todas las categorías por las que ha pasado cada zona de la tienda a lo largo del tiempo, y una configuración donde el usuario crea categorías y programa o edita sus asignaciones según lo defina. Con este registro, el cliente puede analizar el desempeño de cada zona sabiendo qué se exhibía en ella en cada período.
