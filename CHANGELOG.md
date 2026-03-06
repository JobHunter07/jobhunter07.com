# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added — Speckit Agent Workflow

A complete Speckit agent specification system for AI-assisted requirements engineering and pre-implementation quality assurance.

**Agent files** (`.github/agents/`):
- `speckit.checklist.agent.md` — Generates requirements-quality checklists with domain-specific items (UX, API, Performance, Security) and a dynamic clarifying question mechanism.
- `speckit.analyze.agent.md` — Non-destructive cross-artifact consistency analysis across `spec.md`, `plan.md`, and `tasks.md`, with severity-based reporting and remediation workflow.
- `speckit.clarify.agent.md` — Drives structured clarification sessions before spec authoring begins.
- `speckit.constitution.agent.md` — Enforces constitution alignment across all Speckit outputs.
- `speckit.implement.agent.md` — Guides implementation from approved task lists.
- `speckit.plan.agent.md` — Converts approved specs into structured implementation plans.
- `speckit.specify.agent.md` — Authors specification documents from clarified requirements.
- `speckit.tasks.agent.md` — Decomposes plans into granular, constitution-aligned tasks.
- `speckit.taskstoissues.agent.md` — Converts tasks to GitHub Issues.

**Templates & prompts**:
- `.specify/templates/tasks-template.md` — Task template that auto-generates Storybook stories for React component work.
- `.github/prompts/speckit.clarify.prompt.md` — Prompt entry point for the clarify agent.

**Constitution** (`.specify/memory/constitution.md`):
- Established `constitution.md` at v0.0.1, upgraded to v0.1.0 with a mandatory Storybook story requirement for all React component changes (enables living documentation and visual regression testing).

### Added — Storybook Component Documentation

Storybook was integrated as the primary tool for visual documentation and interactive testing of React UI components.

**Configuration** (`.storybook/`):
- `main.ts` — Storybook builder and framework configuration targeting the `src` directory.
- `preview.ts` — Global decorators and viewport presets for mobile, tablet, and desktop responsive previews.

**Component stories** (`src/app/components/`):
- `AboutSection.stories.tsx`
- `ContactSection.stories.tsx`
- `FounderStorySection.stories.tsx`
- `Header.stories.tsx`
- `Hero.stories.tsx`
- `HuntTipsSection.stories.tsx`
- `TipCard.stories.tsx`
- `ToolCard.stories.tsx`
- `ToolsSection.stories.tsx`
- `figma/ImageWithFallback.stories.tsx` — Utility component with fallback handling for image load failures.

**`package.json`** updated with:
- New scripts: `storybook` (dev server on port 6006) and `build-storybook` (static build).
- `@storybook/*` devDependencies for React/Vite integration.

### Changed

- `.gitignore` — Removed stale entries; Storybook build output (`storybook-static/`) excluded.
- `README.md` — Added Speckit reference link.
