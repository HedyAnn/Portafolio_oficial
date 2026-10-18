---
title: "Goal Loading"
summary: "A module that lets each client load their goals and completes the KPIs automatically from the data they declare."
origin: FollowUP
year: 2026
format: completo
role: [Product Design, Discovery, Data model, Functional specification, Prototyping]
tools: [Figma, FigJam, Miro, Stitch, Notion, Codex, Claude, GitHub, YouTrack]
tags: [Data & BI, Business rules, B2B]
cover: ../../assets/cases/carga-de-metas.png
coverAlt: Store view of the goal loading module, with the daily goal vs. last year's sales chart, the period goal, the loaded days and the buttons to upload and download goals. Fictional data.
cover2: ../../assets/cases/carga-de-metas-2.png
coverAlt2: "Goals table by retail week, with one week expanded showing the day-by-day detail: sales goal, foot traffic, items per ticket, conversion rate, capture rate and average ticket. Fictional data."
featured: true
order: 1
draft: false
revisadoConfidencialidad: true
---

## Context

The platform is a SaaS retail chains use to monitor their operation: it delivers reports on compliance, goals, sales KPIs and store performance. All of them rest on the same comparison, between each store's actual sales and the goal set for the period.

Goals are defined by each client, and until then they arrived as Excel files the account team (KAMs) consolidated with each of them. Until that load was complete, the reports could not be calculated.

The module's objective was to move that task to the client, with immediate feedback on period coverage and the comparison against last year, and enough flexibility to accept different levels of detail: some clients declare only a sales goal, while others add tickets, conversion, foot traffic or average ticket — indicators that also depend on one another.

*Screens use a fictional store and figures.*

## My role

I designed the module end to end: I ran the discovery with clients and stakeholders, defined the data model and business rules, wrote the functional specification, designed the screens in Figma and built a working prototype in code to test with users. I also made scope and priority calls throughout the project.

## Process

### 1. Discovery

I started by researching what clients struggled with when loading their goals. In parallel I met the stakeholders who receive those spreadsheets, to understand their side of it. That set the scope of the module.

### 2. Understand how goals arrive

I reviewed how each client declares its goals and which indicators they include. That produced the first rule: **the sales goal is always required** and every other KPI is optional, because some clients only upload sales.

### 3. Sketch in code before designing

Before opening Figma I built working sketches in code, with the help of AI tools (Codex and Claude). They let me try ideas quickly and drop the ones that didn't hold up, without spending time on finished screens.

### 4. Define the data model

I defined the day as **the only grain that is stored**. Weekly and monthly goals are not uploaded: they are calculated by aggregating the days in the period. This keeps a single source of truth and prevents inconsistencies between levels.

### 5. Design the algorithm that completes the KPIs

Sales indicators derive from one another, and each client declares a different combination. I designed an algorithm that **completes any KPI from the data the client did declare**, in any direction, without asking for information they don't have. Capture rate stayed outside the system as an independent indicator.

### 6. Separate uploading from editing

The specification defines two distinct behaviors: **uploading the Excel file**, where the system reads it and calculates everything internally, and **editing the generated table**, where a person fixes specific values.

### 7. Design the views

- **General panel:** shows, day by day, whether each store has a goal, has none or is closed. It is a binary state that reads at a glance.
- **Store view:** compares the daily goal with last year's sales and shows the period goal, loaded days and weekly coverage with severity thresholds. Goals are uploaded and downloaded from here.

### 8. Working prototype and user testing

With the designs ready, I built a working prototype in code and tested it with users. The sessions checked that the loading flow read clearly and let me fix details before handing the specification to development.

## Key decisions

Much of the work was making decisions and standing by them: how to read the data a client doesn't declare, what happens when a file arrives with errors, how far manual editing should go, and what fell outside the scope of this version. Each decision was documented in the specification along with its rationale, so the development team worked from a single criterion.

## Outcome

A complete functional specification (version 1.2), the design of the general panel and the store view, and a working prototype tested with users, ready for the team to build.

<!-- Add outcomes: adoption, upload time before/after, errors avoided, feedback from the account team. -->
