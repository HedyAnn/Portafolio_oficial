---
title: Carga de Metas
summary: Módulo que permite a cada cliente cargar sus metas y completar automáticamente los KPIs a partir de los datos que declara.
origin: FollowUP
year: 2026
format: completo
role: [Product Design, Discovery, Modelo de datos, Especificación funcional, Prototipado]
tools: [Figma, FigJam, Miro, Stitch, Notion, Codex, Claude, GitHub, YouTrack]
tags: [Data & BI, Reglas de negocio, B2B]
cover: ../../assets/cases/carga-de-metas.png
coverAlt: Vista por tienda del módulo de carga de metas, con el gráfico de meta diaria contra la venta del año anterior, la meta del período, los días cargados y los botones para subir y descargar metas. Datos ficticios.
cover2: ../../assets/cases/carga-de-metas-2.png
coverAlt2: "Tabla de metas por semana retail, con una semana desplegada que muestra el detalle día a día: meta de venta, entradas, artículos por ticket, tasa de conversión, tasa de captación y ticket promedio. Datos ficticios."
featured: true
order: 1
draft: false
revisadoConfidencialidad: true
---

## Contexto

La plataforma es un SaaS que usan cadenas de retail para monitorear su operación: entrega reportes de cumplimiento, metas, KPIs de venta y desempeño por tienda. Todos ellos se construyen sobre la misma comparación, entre la venta real de cada tienda y la meta definida para el período.

Las metas las define cada cliente y hasta entonces llegaban en planillas Excel que el equipo de cuentas (KAM) consolidaba con cada uno. Mientras esa carga no estuviera completa, los reportes no podían calcularse.

El objetivo del módulo fue trasladar esa carga al propio cliente, con retroalimentación inmediata sobre la cobertura del período y la comparación con el año anterior, y con la flexibilidad de admitir distintos niveles de detalle: hay clientes que declaran solo la meta de venta y otros que agregan tickets, conversión, entradas o ticket promedio, indicadores que además dependen entre sí.

*Las pantallas usan una tienda y cifras ficticias.*

## Mi rol

Diseñé el módulo de punta a punta: hice el discovery con clientes y stakeholders, definí el modelo de datos y las reglas de negocio, escribí la especificación funcional, diseñé las pantallas en Figma y construí un prototipo funcional en código para probarlo con usuarios. También tomé decisiones de alcance y prioridad a lo largo del proyecto.

## Proceso

### 1. Discovery

Partí investigando los dolores de los clientes al cargar sus metas. En paralelo me reuní con los stakeholders que reciben esas planillas, para entender qué les costaba a ellos. Eso definió el alcance del módulo.

### 2. Entender cómo llegan las metas

Revisé cómo cada cliente declara sus metas y qué indicadores trae. De ahí salió la primera regla: **la meta de venta es siempre obligatoria** y todos los demás KPIs son opcionales, porque hay clientes que solo cargan venta.

### 3. Bocetear en código antes de diseñar

Antes de abrir Figma armé bocetos funcionales en código, apoyándome en herramientas de IA (Codex y Claude). Sirvieron para probar ideas rápido y descartar las que no funcionaban, sin invertir tiempo en pantallas terminadas.

### 4. Definir el modelo de datos

Definí el día como **la única granularidad que se almacena**. Las metas semanales y mensuales no se cargan: se calculan agregando los días del período. Con esto el sistema mantiene una sola fuente de verdad y se evitan inconsistencias entre un nivel y otro.

### 5. Diseñar el algoritmo que completa los KPIs

Los indicadores de venta se derivan unos de otros y cada cliente declara una combinación distinta. Diseñé un algoritmo que **completa cualquier KPI a partir de los datos que el cliente sí declaró**, en cualquier dirección, sin pedirle información que no tiene. La captación quedó fuera del sistema, como indicador independiente.

### 6. Separar cargar de editar

La especificación define dos comportamientos distintos: **cargar el Excel**, donde el sistema lee el archivo y calcula todo internamente, y **editar la tabla ya generada**, donde la persona corrige valores puntuales.

### 7. Diseñar las vistas

- **Panel general:** muestra, día por día, si cada tienda tiene meta, no la tiene o está cerrada. Es un estado binario, rápido de leer.
- **Vista por tienda:** compara la meta diaria con la venta del año anterior, muestra la meta del período, los días cargados y la cobertura por semana, con umbrales de severidad. Desde aquí se suben y descargan las metas.

### 8. Prototipo funcional y pruebas con usuarios

Con los diseños listos, construí un prototipo funcional en código y lo probé con usuarios. Las pruebas sirvieron para verificar que el flujo de carga se entendiera y para ajustar detalles antes de pasar la especificación a desarrollo.

## Decisiones clave

Buena parte del trabajo fue tomar decisiones y sostenerlas: cómo se interpretan los datos que el cliente no declara, qué ocurre cuando un archivo llega con errores, hasta dónde permitir la edición manual y qué quedaba fuera del alcance de esta versión. Cada decisión quedó documentada en la especificación junto con su justificación, para que el equipo de desarrollo trabajara con un criterio único.

## Resultado

Una especificación funcional completa (versión 1.2), el diseño del panel general y de la vista por tienda, y un prototipo funcional probado con usuarios, listos para que el equipo los construya.

<!-- Completar con resultados: adopción, tiempo de carga antes/después, errores evitados, comentarios del equipo de cuentas. -->
