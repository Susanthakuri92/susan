@AGENTS.md

# Portfolio Project Instructions

## Project Overview
- **Framework:** Next.js 16 (TypeScript, App Router)
- **Styling:** Tailwind CSS + CSS custom properties for theming
- **Theming:** Dual theme (dark default, light toggle) via `data-theme` attribute on `<html>`
- **Status:** Active development

## Architecture
- **Data:** All homepage content lives in `app/constants.ts` (sections, projects, skills, experience, blog posts)
- **Theming:** CSS variables defined in `app/globals.css` (`:root` for dark, `[data-theme="light"]` for light)
- **Components:** `app/components/` — Header, MobileMenu, ScrollToTop, ThemeToggle
- **Blog:** `app/blog/[slug]/page.tsx` dynamic route, individual post components in `app/blog/*.tsx`
- **Styling approach:** Inline `style` props with `var(--xxx)` references instead of hardcoded Tailwind color classes

## Development Workflow
- Follow Next.js best practices for the `app` router
- All colors must use CSS variables from `globals.css` — never hardcode colors like `text-white` or `bg-zinc-900`
- Ensure all new components are responsive and accessible
- Use warm color palette (coral/terracotta accent, warm browns and creams)
- Test both themes when making visual changes
