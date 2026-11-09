---
title: "Heatmap"
summary: "A heatmap report for single- and multi-floor stores: it shows where attention happens and where traffic flows, in an aggregated or series view."
origin: "FollowUP"
year: 2026
format: completo
role: ["UX/UI and Product Design: research, design, prototyping and interaction definition"]
tools: ["Miro", "Notion", "YouTrack", "Slack", "HTML", "CSS and JavaScript", "component and chart libraries", "Claude", "Codex"]
tags: ["Heatmaps", "Data viz", "Tracking"]
contexto: "Tracking platform · Retail analytics SaaS"
proyecto: "Tracking platform"
meta: "Retail analytics SaaS"
cover: ../../assets/cases/heatmap-mockup.webp
coverAlt: "Mockup of the heatmap on a laptop: store floors stacked in perspective with the zones of highest attention concentration, a floor panel with unique and retained visitors, and an opacity control; on the left, its benefits: in-store attention, visitor traffic and single- or multi-floor stores. Fictional data."
imagenesReferenciales: true
featured: true
order: 11
homeOrder: 3
draft: false
revisadoConfidencialidad: true
---

## Context

The heatmap was born as a tracking platform report to answer two questions about the store's physical space:

- **Where attention happens**, that is, interactions between staff and customers.
- **Where traffic concentrates**: which zones receive the most visitors throughout the day.

Clients' stores have different layouts: some have a single floor and others several. The report had to work for all of them, showing information floor by floor when needed, without losing the overall view.

## My role

I worked across UX/UI and Product Design. Together with the team, I made the decisions on how to represent single- and multi-floor stores, how to show attention and traffic, and how users should interact with the map.

I designed and prototyped the report directly in code (HTML, CSS and JavaScript), with component and chart libraries, and with Codex and Claude as support to speed up the build. I refined it with the product and development teams, coordinating the work in YouTrack, Notion, Miro and Slack.

## Process

1. **Research.** I reviewed what the client needed to understand about how their store is used and what data tracking provides for attention and traffic.
2. **Functional prototype.** I built the report in code with test data, which made it possible to evaluate navigation between floors and the map's behavior with real interactions, not just static screens.
3. **Refinement.** I iterated the prototype with the product team and then with development, to adjust the scope and resolve the feasibility of each interaction.

## Key decisions

- **One solution for different store layouts.** The report adapts to single- or multi-floor stores. When there is more than one floor, it combines a perspective view with the floors stacked, to compare activity across floors at a glance, and a view of each floor on its floor plan to analyze the detail. A side panel lists the floors with their unique and retained visitors, and lets users switch floors.
- **Attention and traffic in the same report.** A selector lets users switch between both layers without leaving the view, because they answer different questions about the same space.
- **Aggregated view and series view.** The aggregated view adds up all attention events or paths for the selected period. The series view shows how the map changes by hour, every 4 hours or by day.
- **Map readability.** Controls such as heatmap opacity and a legend that can be shown or hidden help read the hot zones without covering the floor plan.

## Outcome

A report that shows the attention and traffic heatmap for single- and multi-floor stores. It helps clients understand how attention and the flow of people are distributed in their store, at different times and days of the week, and make layout decisions with that information.
