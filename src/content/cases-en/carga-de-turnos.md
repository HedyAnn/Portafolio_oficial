---
title: "Shift Loading"
summary: "Module to organize salespeople's shifts across all of a company's stores: loading status, coverage of opening hours and a visual panel to create shifts."
origin: FollowUP
year: 2026
format: completo
role: ["UX/UI and Product Design: discovery, design, prototyping and follow-up to production"]
tools: ["Figma", "Miro", "Notion", "YouTrack", "Slack", "HTML", "CSS and JavaScript", "component and chart libraries", "Claude", "Codex"]
tags: [B2B, Forms, Operations]
proyecto: "BI platform"
cover: ../../assets/cases/carga-de-turnos-mockup-1.webp
coverAlt: "Mockup of Shift Loading on a laptop: weekly loading status for 300 weeks, stores that need urgent attention, shift upload and download, and a table per store with the status of each week; on the left, its benefits: connection with other reports, greater accuracy and centralized management. Fictional data."
cover2: ../../assets/cases/carga-de-turnos-mockup-2.webp
coverAlt2: "Mockup of shift generation on a laptop: list of salespeople, weekly grid with morning, afternoon, full day or day-off shifts, daily coverage, a shift selector and copy from another week; on the left, its benefits: connection with other reports, greater accuracy and centralized management. Fictional data."
imagenesReferenciales: true
featured: true
order: 3
homeOrder: 5
draft: false
revisadoConfidencialidad: true
---

## Context

In the BI platform, users needed to be able to organize their salespeople's shifts for each of their company's stores, within the same platform.

Shifts are not an isolated piece of data: they connect to other reports in the platform, such as the Fair Goal report, which splits the store's goal according to each salesperson's shift and day. Without complete shifts loaded, those reports lose accuracy.

## My role

I worked as UX/UI Designer and Product Designer throughout the project: discovery with clients, definition of the views and their rules, design in Figma, a functional prototype in code, and follow-up until release to production.

## Process

1. **Discovery.** I talked with clients to understand how they organized shifts and where their main pain points were.
2. **Sketches in Figma.** I explored the first ideas and screen structures, and tested them before moving to the final design.
3. **Final design.** With what I learned, I designed the module's final views.
4. **Functional prototype.** I built a prototype in code (HTML, CSS and JavaScript), using AI to speed up the build, and used it to test the flows with real interactions.
5. **Refinement and production.** I iterated based on the tests, refined it with the team, and the module went to production.

## Key decisions

The core of the work was deciding what information to show on each screen and how to make an operational, repetitive task simple for users.

- **Overview of all stores.** Shows the shift loading status of each store and the period's progress (complete, partial, critical or empty weeks), highlights stores that need urgent attention, and allows bulk import and export of shifts.
- **Store view.** Shows the detail of one store: the loading status of each week and the coverage of its operating hours, with day-by-day detail. From here users upload or download that store's shifts and access shift generation.
- **Shift generation panel.** A weekly grid per salesperson where shifts (morning, afternoon, full day or off) are assigned visually. Users can create new shift types, copy shifts from another week and see daily coverage while editing. The priority was usability: letting users build the week at a glance, without long forms.
- **Bulk and manual loading.** The module supports both paths: importing a file for many stores at once, or creating and editing shifts directly in the panel.

## Outcome

A complete shift loading module, in production, with an overview, a store view and a panel for creating shifts and shift types within the same platform. The loaded shifts feed other reports, which makes the module a key piece for reliable performance information.
