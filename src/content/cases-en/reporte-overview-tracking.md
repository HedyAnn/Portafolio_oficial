---
title: "Overview report"
summary: "A one-pager that shows the health of one or more stores: visitors, attention and conversion, week by week and day by day."
origin: "FollowUP"
year: 2026
format: completo
role: ["UX/UI and Product Design: discovery, definition, design and prototyping"]
tools: ["Miro", "Notion", "YouTrack", "Slack", "HTML", "CSS and JavaScript", "component and chart libraries", "Claude", "Codex"]
tags: ["Dashboards", "Data viz", "Tracking"]
contexto: "Tracking platform · Retail analytics SaaS"
proyecto: "Tracking platform"
meta: "Retail analytics SaaS"
cover: ../../assets/cases/reporte-overview-mockup.webp
coverAlt: "Mockup of the Overview report on a laptop: tracking platform view with a store's operational summary, its retention, attention and conversion indicators, and daily charts; on the left, its benefits: integrated view, evolution and status, and greater efficiency. Fictional data."
imagenesReferenciales: true
featured: true
order: 9
homeOrder: 1
draft: false
revisadoConfidencialidad: true
---

## Context

The tracking platform has reports organized by topic: visits, attention, conversion and heatmap. Each one answers a specific question, but to get a complete view of a store users had to go through them one by one.

Users asked for a summary page: a single view where they could follow, week by week or day by day, how their store's or stores' indicators evolve and understand their overall health. The Overview report came out of that need.

## My role

I worked across UX/UI and Product Design. I ran the discovery of the need, defined what information the view should include and how to present it, and designed the solution.

Instead of starting in Figma, I designed and prototyped directly in code (HTML, CSS and JavaScript), with component and chart libraries, and with Claude and Codex as support to speed up the build. These functional prototypes were refined first with the Product Owner's team and then with the development team, to review each feature and its feasibility. Coordination and follow-up were done in YouTrack, Notion, Miro and Slack.

## Process

1. **Discovery.** I started from the need raised by users and researched what decisions they make with their stores' information and which indicators they check most often.
2. **Definition.** I prioritized which indicators from the topic reports belonged in the summary and how they relate to each other: visitors, attention rate and conversion rate.
3. **Prototypes.** I built functional prototypes in code with test data, which made it possible to evaluate real interactions (filters, date changes, breakdowns) before development.
4. **Refinement.** I iterated the prototypes with the Product Owner's team and then with development, adjusting the scope and details of each feature.

## Key decisions

- **What to include.** The overview does not replace the topic reports: it brings together only the indicators needed to assess a store's status at a glance, such as the weekly summary of visitors, attention and conversion, weekly volume and the evolution by zone.
- **Granularity based on dates.** I defined how information is grouped depending on the selected date range (by retail week or by day), and the option to filter by days of the week, so charts stay readable for any period.
- **From summary to detail.** Each block starts with a general reading and lets users drill down by store zone, with a highlighted insight (for example, the period's lowest and highest conversion) so users don't have to interpret every chart.
- **Downloadable information.** The detail can be downloaded so users can work with it outside the platform.

## Outcome

A one-pager that brings the store's relevant information together on a single page: main indicators, their evolution over time, the breakdown by zone, highlighted insights and downloadable detail. Users can understand the overall status of their store or stores without going through each report separately.
