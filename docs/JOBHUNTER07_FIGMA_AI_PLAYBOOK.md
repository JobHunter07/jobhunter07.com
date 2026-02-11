# Jobhunter07 – Figma AI + ChatGPT Design Playbook

Author: Brian Davis  
Project: Jobhunter07 Marketing Site  
Audience: Backend / Full-Stack Developers using AI for Frontend Design  
Status: In Progress

---

## 1. Project Overview

**Jobhunter07.com** is a marketing and information website, not the application itself.

Purpose:
- Explain Jobhunter07 tools
- Build trust and credibility
- Drive users to the App

The actual application lives at:
- `app.jobhunter07.com`

This site is NOT the app. It is a professional marketing surface designed for SEO and conversion.

---

## 2. Site Architecture (Finalized)

### Top Navigation

| Item | Behavior |
|------|----------|
| Home | `/` |
| Tools | Scrolls to Tools section on Home |
| Pricing | `/pricing` (standalone page) |
| About | `/about` |
| Contact | `/contact` |
| Primary CTA | Links to `app.jobhunter07.com` |

### Tools Section (Home Page)

Tool cards:
- Job Tracker
- Company Scout
- Resume (renamed from CV Ambush)

Click behavior:
- Job Tracker → `/job/tracker`
- Company Scout → `/company/scout`
- Resume → `/resume`

These pages EXPLAIN the tools.  
The tools themselves exist only in the App.

---

## 3. Tool Detail Page Pattern (Locked)

All tool pages follow the same SEO-friendly structure:

1. Hero section with tool-specific imagery
2. Problem the tool solves
3. How the tool works (screenshots)
4. Why it’s different
5. Who it’s for (personas)
6. CTA linking to the App
7. SEO content section below the fold

### Tool Themes

**/job/tracker**
- Theme: Tracking the hunt
- Visuals: maps, trails, checkpoints
- SEO keywords: job application tracker, track job applications

**/company/scout**
- Theme: Reconnaissance and research
- Visuals: binoculars, reports
- SEO keywords: company research for jobs, interview preparation

**/resume**
- Theme: Preparation and readiness
- Visuals: resumes, documents, folders
- SEO keywords: resume management, resume organization

---

## 4. Visual Theme (Locked)

- Hunter / journey metaphor
- Subtle, professional, premium
- No aggressive or literal hunting visuals

Core motifs:
- Forest
- Trail
- Footprints
- Compass
- Torn paper transitions
- Maps and textures

Think: exploration and progress, not cosplay.

---

## 5. Figma AI – Hero Refinement Prompt (Reference)

```text
Refine ONLY the hero section.

Replace the background with a realistic forest scene:
- Tall pine trees
- Light mist
- Dirt trail centered vertically

Trail details:
- Deer footprints
- Human boot prints following the deer

Add a compass:
- Centered above the headline
- Semi-transparent, decorative

Blend the header into the hero:
- Semi-transparent or gradient header
- No solid color bar cutting the image

Preserve headline, subtitle, and CTA.
