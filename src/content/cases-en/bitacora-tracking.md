---
title: "Activity log"
summary: "A history of what is displayed in each store zone over time, to relate layout changes to conversion."
origin: "FollowUP"
year: 2026
format: completo
role: ["UX/UI and Product Design: research, benchmark, design and prototyping"]
tools: ["Figma", "Miro", "Notion", "YouTrack", "Slack", "HTML", "CSS and JavaScript", "component and chart libraries", "Claude", "Codex"]
tags: ["Tracking", "Timeline", "Configuration"]
contexto: "Tracking platform · Retail analytics SaaS"
proyecto: "Tracking platform"
meta: "Retail analytics SaaS"
cover: ../../assets/cases/bitacora-mockup-1.webp
coverAlt: "Mockup of the activity log on a laptop: January-to-October timeline with the brand displayed in each store zone, with filters by store, zone and floor; on the left, its benefits: history by zone, tracking by category and greater traceability. Fictional data."
cover2: ../../assets/cases/bitacora-mockup-2.webp
coverAlt2: "Mockup of the activity log configuration on a laptop: categories, table of zones with their current category, and a panel to register a change with a start date and the zone's history; on the left, its benefits: zone management, change history and analysis with context. Fictional data."
imagenesReferenciales: true
featured: true
order: 10
homeOrder: 2
draft: false
revisadoConfidencialidad: true
---

## Context

The activity log was born in the tracking platform from a client's need: knowing what type of product was displayed in each zone of their store and during which period.

A store's layout changes often. The right-hand display can show women's footwear this month and children's footwear the next. Without a record of those changes, the client could not relate a zone's performance, such as its conversion, to what was actually displayed there.

## My role

I worked across UX/UI and Product Design. I researched how other platforms handle this kind of record, defined the category model with the team, designed the log and its configuration, and built a functional prototype that we refined with the product and development teams.

## Process

1. **Research and benchmark.** I reviewed how other platforms handle activity logs and change histories, to identify patterns for visualizing data over time and editing records.
2. **Sketch and functional prototype.** I turned the ideas into a functional prototype in code to test the timeline and the configuration flow with real interactions.
3. **Refinement.** I iterated the prototype with the product team and then with development, adjusting the data model and the scope of each feature.

## Key decisions

- **Categories instead of renaming zones.** At first, clients wanted to rename store zones according to what was displayed. We advised against it: a zone's name identifies a physical space in the store and is tied to the database, so changing it would affect the reports' history. The solution was to create independent categories that are assigned to zones.
- **What a category represents.** Categories are flexible: they can indicate the type of product displayed, the commercial area or the brand present in that zone.
- **Assignment with validity dates.** Each category is assigned to a zone from a given date, with an optional end date. This way changes can be scheduled in advance and the previous history is not modified.
- **Log and configuration kept separate.** The log shows on a timeline which category each zone had, with filters by store, zone and floor, and a view by zone or by category. The configuration brings together creating categories and assigning them to zones, with the history of each one.

## Outcome

An activity log that shows every category each store zone has had over time, and a configuration where users create categories and schedule or edit their assignments as they see fit. With this record, the client can analyze each zone's performance knowing what was displayed there in each period.
