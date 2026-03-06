<!--
SYNC IMPACT REPORT
==================
Version: 0.1.0 (PRE-RELEASE)
Change Type: MINOR - Added Storybook documentation requirement to Principle I

VERSIONING STRATEGY:
- 0.x.x versions = Pre-release / Work-in-Progress / Standards Development
- 1.0.0 = First Production Release (when constitution is finalized and project launches)
- Post-1.0.0 follows Semantic Versioning (MAJOR.MINOR.PATCH)

Current Status: WORK IN PROGRESS - Standards & Principles Under Active Development

Established Principles (v0.1.0):

Project-Specific Standards (I-V):
  - I. Component-First Architecture
  - II. Performance & SEO Excellence
  - III. Accessibility Standards (NON-NEGOTIABLE)
  - IV. Design System Fidelity
  - V. Type Safety & Modern Tooling

The Standard Foundation (VI-XV from Hassan Habib):
  - VI. People-First & Simplicity
  - VII. Rewritability
  - VIII. Mono-Micro (Modular Monolith)
  - IX. Level 0 (Junior-Friendly Code)
  - X. Open Code
  - XI. Pass Forward (Free Knowledge)
  - XII. Airplane Mode (Cloud-Foreign)
  - XIII. No Toasters (No Forced Tooling)
  - XIV. Readability over Optimization
  - XV. Last Day (Daily Completeness)

Architecture & Organization (XVI-XVII):
  - XVI. Screaming Architecture (Use-Case Driven Structure)
  - XVII. Data Configuration Management (Centralized Data)

Removed Sections: None

Modified Principles:
- I. Component-First Architecture → Added mandatory Storybook story requirement for all components

Added Sections: None

Removed Sections: None

Templates Requiring Updates:
- ✅ .specify/templates/plan-template.md - reviewed for alignment
- ✅ .specify/templates/spec-template.md - reviewed for alignment
- ✅ .specify/templates/tasks-template.md - UPDATED to include automatic Storybook story generation
- ✅ .specify/templates/checklist-template.md - assumed compatible
- ✅ .specify/templates/agent-file-template.md - assumed compatible

Follow-up TODOs:
- Agents MUST automatically create Storybook stories when creating new components
- Existing components without stories should be identified and stories added incrementally

Acknowledgments:
- Principles VI-XV: "The Standard" by Hassan Habib (https://github.com/hassanhabib/The-Standard)
- Principle XVI: "Screaming Architecture" by Robert C. Martin (Uncle Bob) (https://blog.cleancoder.com/uncle-bob/2011/09/30/Screaming-Architecture.html)
-->

# JobHunter07.com Marketing Website Constitution

## Core Principles

### I. Component-First Architecture

All UI features MUST be built as reusable, composable React components.

- Components MUST be independently testable and documented
- Each component MUST have a single, clear responsibility
- Shared components MUST live in `src/app/components/` or `src/app/components/ui/`
- Page-specific components MAY live within their page directory but MUST still be modular
- Components MUST accept props for customization rather than being hardcoded
- NO organizational-only components - each MUST serve a clear functional purpose
- **Every component MUST have a corresponding Storybook story** that:
  - Documents all props and their types
  - Demonstrates all visual states (default, hover, active, disabled, error, etc.)
  - Provides interactive controls for testing different prop combinations
  - Includes accessibility and responsive behavior examples
  - Story files MUST live alongside the component (e.g., `Button.tsx` → `Button.stories.tsx`)

**Rationale**: Component architecture enables rapid iteration, consistent user experience, and maintainable codebase. Marketing sites require frequent A/B testing and content updates - modular components make this efficient. Storybook stories serve as living documentation, enable visual regression testing, and allow non-technical team members to browse and test components in isolation.

### II. Performance & SEO Excellence

The site MUST be lightweight, fast-loading, and optimized for search engines.

- First Contentful Paint (FCP) MUST be under 1.5 seconds on 3G
- Largest Contentful Paint (LCP) MUST be under 2.5 seconds
- Cumulative Layout Shift (CLS) MUST be under 0.1
- Every page MUST have semantic HTML with proper meta tags (title, description, Open Graph)
- Images MUST use modern formats (WebP/AVIF) with appropriate fallbacks
- Code splitting MUST be employed to reduce initial bundle size
- Lazy loading MUST be used for below-the-fold content and images

**Rationale**: Marketing sites live or die by SEO and page speed. Slow sites lose conversions and search rankings. This is a competitive differentiator for JobHunter07.com.

### III. Accessibility Standards (NON-NEGOTIABLE)

All features MUST meet WCAG 2.1 Level AA standards.

- Semantic HTML MUST be used (nav, main, article, section, etc.)
- All interactive elements MUST be keyboard navigable
- Color contrast ratios MUST meet AA standards (4.5:1 for normal text, 3:1 for large text)
- All images MUST have descriptive alt text
- Forms MUST have proper labels and error messaging
- ARIA attributes MUST be used correctly (sparingly, only when semantic HTML insufficient)
- Focus states MUST be visible and clear
- Screen reader testing MUST be performed on all new features

**Rationale**: Accessibility is a legal requirement, ethical imperative, and expands our audience. Non-compliance risks lawsuits and excludes users with disabilities.

### IV. Design System Fidelity

Implementation MUST faithfully represent the Figma designs while remaining responsive and accessible.

- Designs from Figma MUST be implemented with pixel-perfect accuracy where feasible
- Responsive behavior MUST be designed by developer when not specified in Figma
- Design tokens (colors, spacing, typography) MUST be centralized and reusable
- Deviations from Figma MUST be documented and justified (e.g., accessibility, responsiveness)
- The "hunter/journey" visual theme MUST be maintained consistently
- shadcn/ui components MUST be used as the base UI library
- Custom components MUST follow the established design patterns

**Rationale**: Consistent design builds brand trust. Figma represents the source of truth for intended user experience. Deviations create maintenance debt and undermine brand identity.

### V. Type Safety & Modern Tooling

Development MUST use TypeScript and modern build tools to catch errors early and ensure code quality.

- All code MUST be written in TypeScript (no `.js` files except config)
- `any` type MUST be avoided - use proper types, interfaces, or `unknown`
- Type errors MUST be resolved before committing (no `@ts-ignore` without justification)
- ESLint and Prettier MUST be configured and enforced
- Vite MUST be used as the build tool for fast development and optimized production builds
- Dependencies MUST be kept up-to-date (monthly reviews)
- Build errors MUST fail the deployment pipeline

**Rationale**: TypeScript prevents entire classes of runtime errors and improves developer experience through autocomplete and refactoring support. Modern tooling enables fast iteration cycles.

## The Standard Foundation

The following principles are adopted from "The Standard" by Hassan Habib ([https://github.com/hassanhabib/The-Standard](https://github.com/hassanhabib/The-Standard)) and adapted for this project's context.

### VI. People-First & Simplicity

Code MUST prioritize human understanding and maintainability over clever abstractions.

**Simplicity Rules**:
- **No Excessive Inheritance**: Maximum ONE level of inheritance (except for framework requirements like React.Component)
- **No Horizontal Entanglement**: NO "Utils", "Commons", or "Helpers" folders/files with shared code across multiple flows
- **No Vertical Entanglement**: Avoid local base components that create dependency chains (native/external base components acceptable)
- **Autonomous Components**: Each component MUST be self-contained with its own validations, error handling, and utilities
- **No Magic**: WYSIWYG (What You See Is What You Get) - all component logic visible and explicit, no hidden routines

**Rationale**: Simple code enables every team member (especially newcomers) to understand, modify, and own the entire system. Entanglements create single points of failure and prevent engineers from building end-to-end features independently.

### VII. Rewritability

Every component MUST be built with the assumption that it will be rewritten.

- Code MUST be easy to understand, modify, and completely rewrite
- Components MUST be modular and autonomous to minimize rewrite risk
- NO hidden dependencies, runtime injections, or undocumented prerequisites
- Fork, clone, build, run—everything MUST work without configuration surprises

**Rationale**: Business requirements evolve constantly. Code that resists change becomes technical debt. Rewritable code acknowledges that our current solutions are temporary and embraces evolution.

### VIII. Mono-Micro (Modular Monolith)

Build as a monolith with a microservice mindset.

- Each feature flow MUST be fully independent from other flows
- Features MUST be extractable into separate services/packages with minimal effort
- Components MUST NOT share state or logic across feature boundaries
- Pages and major features MUST operate autonomously

**Rationale**: Starting with microservices is over-engineering for a marketing site. But building with modularity from day one means we CAN split if needed without a complete rewrite.

### IX. Level 0 (Junior-Friendly Code)

Code MUST be understandable by entry-Level engineers.

- Variable names MUST be descriptive and self-documenting
- Abstraction layers MUST be justified—prefer explicit over clever
- Code reviews MUST include junior engineers to validate understandability
- Complex patterns MUST be documented with clear comments explaining "why"

**Rationale**: Junior engineers are the future maintainers. If they can't understand it, it won't survive. This also serves as a forcing function for simplicity.

### X. Open Code

Work SHOULD be shareable and open source where possible.

- Architectural patterns, component libraries, and utilities SHOULD be open sourced
- Internal tools SHOULD be publicly available unless security/contractual obligations prevent it
- Documentation SHOULD be written for public consumption (clear, thorough, accessible)
- Proprietary code for financial gain alone is discouraged

**Rationale**: Open code improves quality through external review, helps the community, and attracts talent. Exceptions exist for business-critical IP.

### XI. Pass Forward (Free Knowledge)

Knowledge from this constitution and codebase MUST be shared freely with others.

- Teaching these principles to other engineers MUST be done at no cost
- Code reviews and mentoring MUST be provided without expectation of payment
- Documentation MUST be accessible to engineers regardless of financial, social, or educational status
- Profiting from teaching The Standard principles violates the spirit of this constitution
- Knowledge sharing fosters collaboration, not gatekeeping

**Rationale**: This project benefits from open source tools and free community knowledge. We MUST pay it forward. Engineering knowledge should elevate everyone, not create barriers.

### XII. Airplane Mode (Cloud-Foreign)

Development environment MUST work without network connectivity.

- `npm run dev` MUST work offline after initial setup
- Mock data MUST be available locally for all API integrations
- Build process MUST NOT require live external services
- Tests MUST run without network access

**Rationale**: Cloud-dependent development creates bottlenecks, increases costs, and prevents work during outages or travel. Local-first is developer-first.

### XIII. No Toasters (No Forced Tooling)

The Standard MUST be taught person-to-person, not enforced by automated tools.

- ESLint/Prettier are configured but violations SHOULD be discussed in code review, not auto-blocked
- Architectural decisions MUST be explained and understood, not dictated by CI/CD gates
- Foster a culture of learning and conviction over compliance
- Teach "why" before enforcing "what"

**Rationale**: Tools enforce syntax, not understanding. Engineers who understand principles write better code than those following rules blindly. NOTE: This doesn't eliminate linting—it emphasizes education over enforcement.

### XIV. Readability over Optimization

When in doubt, choose readable code over optimized code.

- Premature optimization MUST be avoided
- Code clarity MUST NOT be sacrificed for performance gains unless measured and justified
- Performance optimization MUST be documented with benchmarks showing necessity
- If optimization obscures intent, refactor or document thoroughly

**Rationale**: Readable code can be optimized later. Unreadable "optimized" code becomes unmaintainable and often isn't actually faster in real-world usage.

### XV. Last Day (Daily Completeness)

Every work session MUST end with code in a releasable state.

- Commits MUST represent complete, working increments
- Unfinished features MUST be behind feature flags or in separate branches
- Code MUST be documented and tested before end of day
- Another engineer MUST be able to pick up the work without explanation

**Rationale**: You might not return tomorrow (vacation, illness, job change). Work that can't be picked up by others creates project risk. Daily completeness ensures continuity.

## Architecture & Organization Principles

The following principles define how the project MUST be structured and organized.

### XVI. Screaming Architecture (Use-Case Driven Structure)

The folder structure MUST scream the business domain and use cases, not the frameworks.

**Vertical Slice Architecture (VSA) Requirements**:
- Organize code by **feature/use-case**, NOT by technical layer (no generic "components", "services", "utils" folders at root)
- Each feature MUST contain ALL its code: components, types, hooks, utilities, tests
- Folder structure MUST communicate "what the application does" not "what frameworks it uses"
- New developers MUST understand the business domain by reading folder names
- Features MUST be independently deployable slices (vertical, not horizontal layers)

**Project Structure Example**:
```
src/
├── features/
│   ├── job-tracking/           # Feature: Job application tracking
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── types/
│   │   ├── utils/
│   │   └── tests/
│   ├── company-scouting/       # Feature: Company research
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── types/
│   │   └── tests/
│   └── resume-management/      # Feature: Resume handling
│       └── ...
├── shared/                     # Only truly shared, reusable code
│   ├── ui/                     # Shared UI components (buttons, inputs)
│   └── utils/                  # Truly generic utilities
├── app/                        # App shell (routing, layout, providers)
└── data/                       # See Principle XVII
```

**Benefits of VSA**:
- New engineers instantly understand WHAT the app does (job tracking, company scouting)
- Features can be developed in isolation with minimal merge conflicts
- Features can be extracted into separate packages/services later
- Reduces coupling between unrelated business capabilities

**Anti-patterns (PROHIBITED)**:
```
❌ src/components/        (What kind of components? For which feature?)
❌ src/services/          (Generic dumping ground)
❌ src/utils/             (Common code smell)
❌ src/helpers/           (Violates Principle VI - No Horizontal Entanglement)
```

**Rationale**: "Screaming Architecture" (Uncle Bob Martin) argues that architecture should reveal intent. When you look at the top-level folders, you should see "JobHunter07 marketing site with features X, Y, Z"—not "a React app with components and services." VSA organizes by business capability, making the codebase self-documenting and protecting against framework lock-in.

**Reference**: [Screaming Architecture by Robert C. Martin](https://blog.cleancoder.com/uncle-bob/2011/09/30/Screaming-Architecture.html)

### XVII. Data Configuration Management (Centralized Data)

Configuration, content, and static data MUST be externalized to a dedicated `/data` folder.

**Data Folder Requirements**:
- ALL configuration data MUST live in `src/data/` (or `data/` at project root)
- NO hardcoded content strings, URLs, or config objects scattered throughout components
- Data files MUST be strongly typed TypeScript modules (`.ts` files, not JSON)
- Each data file MUST export a single, well-typed constant
- Data structure MUST be self-documenting with clear naming

**What belongs in `/data`**:
- ✅ Landing page content (headlines, CTAs, feature lists)
- ✅ Tool descriptions and metadata
- ✅ Navigation menus and routes
- ✅ Tip cards, testimonials, FAQs
- ✅ SEO metadata (titles, descriptions, keywords)
- ✅ External URLs and API endpoints
- ✅ Feature flags and environment-specific config
- ✅ Pricing tiers and plans
- ✅ Social media links, contact info

**Example Structure**:
```
src/data/
├── landing.ts              # Landing page content
├── tools.ts                # Tool cards (Job Tracker, Company Scout, Resume)
├── navigation.ts           # Site navigation structure
├── tips.ts                 # Hunt tips content
├── seo.ts                  # SEO metadata per route
├── pricing.ts              # Pricing plans
└── config.ts               # App-wide configuration
```

**Example Usage** (from [design.jobhunter07.com](https://github.com/Kbdavis007/design.jobhunter07.com/blob/design/landingpage/v001/src/data/landing.ts)):
```typescript
// src/data/landing.ts
export const landingPageData = {
  hero: {
    headline: "Track Your Hunt. Scout Companies. Land Jobs.",
    subheadline: "The job search platform built for hunters, not scrollers.",
    ctaText: "Start Tracking Free",
    ctaUrl: "https://app.jobhunter07.com/signup"
  },
  tools: [
    {
      name: "Job Tracker",
      description: "Never lose track of an application again",
      icon: "📍",
      route: "/job/tracker"
    }
    // ...
  ]
} as const;

// Component usage:
import { landingPageData } from '@/data/landing';

function Hero() {
  return <h1>{landingPageData.hero.headline}</h1>;
}
```

**Benefits**:
- Content updates DON'T require touching component code
- Easy A/B testing (swap data files)
- Enables CMS migration path (data structure already centralized)
- Non-technical team members can update content in one place
- Type safety ensures content matches expected structure
- Easier to spot typos, broken links, and outdated content

**Rationale**: Hardcoding content inside JSX files violates separation of concerns and makes updates risky (editing content = editing code). Centralizing data enables rapid iteration, reduces bugs, and prepares the codebase for future CMS integration. Marketing sites change content frequently—code shouldn't change with it.

## Technology Standards

The following technology stack is MANDATORY for this project:

**Core Framework**:
- React 18+
- TypeScript 5+
- Vite (build tool)

**UI & Styling**:
- Tailwind CSS (utility-first styling)
- shadcn/ui (component library)
- Radix UI (headless component primitives)
- Lucide React (icons)

**State & Routing**:
- React Router (client-side routing)
- React hooks for state management (useState, useContext, useReducer)
- NO global state library unless justified (start simple)

**Development Tools**:
- ESLint (linting)
- Prettier (formatting)
- TypeScript strict mode enabled

**Justification for Stack Changes**:
- Major stack changes (e.g., switching from React to Vue) MUST be documented with migration plan
- Adding new major dependencies MUST be justified in writing
- Removing dependencies MUST include impact analysis

## Quality Gates

All features MUST pass the following gates before deployment:

**Performance Budget**:
- Bundle size MUST NOT exceed 200KB gzipped for initial load
- Total page weight MUST NOT exceed 1MB for any landing page
- Lighthouse performance score MUST be ≥90 on mobile

**Accessibility**:
- Lighthouse accessibility score MUST be 100
- Manual keyboard navigation testing MUST pass
- Screen reader testing (NVDA/JAWS) MUST pass for critical paths

**SEO**:
- Lighthouse SEO score MUST be ≥95
- All pages MUST have unique titles and meta descriptions
- Structured data MUST be implemented where applicable (Organization, WebSite)

**Code Quality**:
- ESLint MUST report zero errors (warnings acceptable with justification)
- TypeScript MUST compile with zero errors
- Prettier MUST be applied to all files

**Browser Support**:
- Site MUST work in last 2 versions of Chrome, Firefox, Safari, Edge
- Critical functionality MUST work without JavaScript (progressive enhancement where feasible)

## Governance

This constitution represents the foundational principles for JobHunter07.com marketing website development, integrating:
- **Project-specific standards** (Principles I-V): Frontend best practices for marketing sites
- **The Standard principles** (Principles VI-XV): Universal software engineering philosophy by Hassan Habib
- **Architecture & Organization** (Principles XVI-XVII): Clean architecture and data management patterns

**Acknowledgments**:
- Principles VI-XV are adapted from "The Standard" by Hassan Habib ([https://github.com/hassanhabib/The-Standard](https://github.com/hassanhabib/The-Standard)). In accordance with The Standard's "Pass Forward" principle, this knowledge is shared freely and must be taught at no cost to future contributors.
- Principle XVI is based on "Screaming Architecture" by Robert C. Martin (Uncle Bob) ([https://blog.cleancoder.com/uncle-bob/2011/09/30/Screaming-Architecture.html](https://blog.cleancoder.com/uncle-bob/2011/09/30/Screaming-Architecture.html)).

**Amendment Process**:
1. Proposed amendments MUST be documented in writing with rationale
2. Amendment proposals MUST include impact analysis on existing codebase
3. Breaking changes (removing/redefining principles) MUST include migration plan
4. Amendments MUST be approved before implementation
5. Version number MUST be incremented according to the versioning strategy:
   - **Pre-Release (0.x.x)**: Current phase while standards are being established
     - **0.0.x** = PATCH: Clarifications, typos, non-semantic refinements
     - **0.x.0** = MINOR: New principles added, material expansions
     - **0.x.x** = No MAJOR version during pre-release
   - **Production Release (1.0.0)**: Constitution finalized and project launched
   - **Post-Production (1.x.x+)**: Standard semantic versioning
     - **MAJOR**: Backward-incompatible principle removals or redefinitions
     - **MINOR**: New principle/section added or materially expanded
     - **PATCH**: Clarifications, wording improvements, non-semantic refinements

**Compliance**:
- All pull requests MUST verify compliance with applicable principles
- Deviations MUST be explicitly justified and documented
- Constitution violations discovered in existing code MUST be tracked and remediated
- Code reviews MUST include constitutional compliance verification

**Documentation**:
- See [README.md](README.md) for project setup and deployment guidance
- See [guidelines/Guidelines.md](guidelines/Guidelines.md) for additional development guidelines
- See [docs/JOBHUNTER07_FIGMA_AI_PLAYBOOK.md](docs/JOBHUNTER07_FIGMA_AI_PLAYBOOK.md) for design implementation guidance
- See "The Standard" by Hassan Habib for deeper architectural philosophy: [https://github.com/hassanhabib/The-Standard](https://github.com/hassanhabib/The-Standard)
- See "Screaming Architecture" by Uncle Bob for use-case driven design: [https://blog.cleancoder.com/uncle-bob/2011/09/30/Screaming-Architecture.html](https://blog.cleancoder.com/uncle-bob/2011/09/30/Screaming-Architecture.html)

**Versioning Strategy**:
- **0.x.x** = Pre-release / Work-in-Progress (current phase)
- **1.0.0** = Production Release (constitution finalized, project launched)
- **Post-1.0.0** = Semantic Versioning (MAJOR.MINOR.PATCH per amendment rules)

**Version**: 0.1.0 | **Status**: WORK IN PROGRESS | **Ratified**: 2026-02-11 | **Last Amended**: 2026-02-11
