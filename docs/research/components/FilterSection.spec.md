# Filter Section Specification

## Overview
- **Target file:** `src/components/FilterSection.tsx`
- **Screenshot:** `docs/design-references/unveil-1016-desktop-full.png` (crop to filter section)
- **Interaction model:** scroll-driven (horizontal scrolling)

## DOM Structure
<div class="w-full px-8">
  <div class="w-full flex justify-center items-center max-w-lg mx-auto">
    <div class="flex flex-wrap justify-center gap-2">
      <!-- Filter pills for Types -->
      <a href="/?types=%5B%22agency%22%5D" class="relative inline-flex items-center justify-center rounded-full corner-superellipse/1.25 font-medium cursor-pointer transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-teal-400 active:scale-98 disabled:cursor-not-allowed disabled:opacity-50 bg-neutral-100 text-neutral-600 hover:bg-neutral-200/70 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 h-8 pr-3 text-sm gap-1.5 pl-2.5">
        <!-- Agency Icon -->
        Agency
      </a>
      <!-- Design -->
      <a href="/?types=%5B%22design%22%5D" class="...">Design</a>
      <!-- Portfolio -->
      <a href="/?types=%5B%22portfolio%22%5D" class="...">Portfolio</a>
      <!-- Styles -->
      <a href="/?styles=%5B%22clean%22%5D" class="...">Clean</a>
      <!-- Fun -->
      <a href="/?styles=%5B%22fun%22%5D" class="...">Fun</a>
      <!-- Horizontal Layout -->
      <a href="/?styles=%5B%22horizontal-layout%22%5D" class="...">Horizontal Layout</a>
      <!-- Infinite Scroll -->
      <a href="/?styles=%5B%22infinite-scroll%22%5D" class="...">Infinite Scroll</a>
      <!-- Interactive -->
      <a href="/?styles=%5B%22interactive%22%5D" class="...">Interactive</a>
      <!-- Light -->
      <a href="/?styles=%5B%22light%22%5D" class="...">Light</a>
      <!-- Minimal -->
      <a href="/?styles=%5B%22minimal%22%5D" class="...">Minimal</a>
      <!-- Unusual Layout -->
      <a href="/?styles=%5B%22unusual-layout%22%5D" class="...">Unusual Layout</a>
      <!-- NB International -->
      <a href="/?fonts=%5B%22nb-international%22%5D" class="...">NB International</a>
      <!-- Svelte -->
      <a href="/?frameworks=%5B%22svelte%22%5D" class="...">Svelte</a>
      <!-- SvelteKit -->
      <a href="/?frameworks=%5B%22sveltekit%22%5D" class="...">SvelteKit</a>
      <!-- Vercel -->
      <a href="/?hosting=%5B%22vercel%22%5D" class="...">Vercel</a>
      <!-- DatoCMS -->
      <a href="/?cms=%5B%22datocms%22%5D" class="...">DatoCMS</a>
      <!-- GSAP -->
      <a href="/?animation=%5B%22gsap%22%5D" class="...">GSAP</a>
      <!-- Transitions -->
      <a href="/?animation=%5B%22transitions%22%5D" class="...">Transitions</a>
      <!-- Tailwind CSS -->
      <a href="/?styling=%5B%22tailwind-css%22%5D" class="...">Tailwind CSS</a>
    </div>
  </div>
</div>

## Computed Styles (exact values from getComputedStyle)

### Filter Section Container
- padding-left: 2rem (px-8)
- padding-right: 2rem (px-8)

### Filter Content Wrapper
- display: flex
- justify-content: center
- align-items: center
- max-width: 32rem (max-w-lg)
- margin-left: auto (mx-auto)
- margin-right: auto (mx-auto)

### Filter Pills Container
- display: flex
- flex-wrap: wrap
- justify-content: center
- gap: 0.5rem (gap-2)

### Individual Filter Pills
- position: relative
- display: inline-flex
- align-items: center
- justify-content: center
- border-radius: 0.5rem (rounded-full)
- corner-superellipse: 1.25 (custom property)
- font-weight: 500 (font-medium)
- cursor: pointer
- transition: background-color 0.2s, transform 0.1s (transition-colors)
- whitespace: nowrap
- focus-visible: outline 2px solid teal-400 (focus-visible:outline-2 focus-visible:outline-teal-400)
- active: scale(0.98) (active:scale-98)
- disabled: cursor: not-allowed, opacity: 0.5 (disabled:cursor-not-allowed disabled:opacity-50)
- background-color: rgb(243 244 246) (bg-neutral-100)
- color: rgb(107 114 128) (text-neutral-600)
- hover-background-color: rgb(229 231 235 / 70%) (hover:bg-neutral-200/70)
- dark-mode background: rgb(255 255 255 / 10%) (dark:bg-white/10)
- dark-mode text: white (dark:text-white)
- dark-mode hover background: rgb(255 255 255 / 20%) (dark:hover:bg-white/20)
- height: 2rem (h-8)
- padding-right: 0.75rem (pr-3)
- font-size: 0.875rem (text-sm)
- gap: 0.375rem (gap-1.5)
- padding-left: 0.625rem (pl-2.5)

## States & Behaviors

### Hover States
- **Filter Pills:**
  - background-color: changes from rgb(243 244 246) to rgb(229 231 235 / 70%)
  - In dark mode: changes from rgb(255 255 255 / 10%) to rgb(255 255 255 / 20%)

### Click Behaviors
- **Filter Pills:** Update URL query parameters to filter content by type, style, framework, etc.

### Scroll Behavior
- The filter section is designed to be horizontally scrollable when content overflows
- Uses flex-wrap to allow wrapping to multiple lines on smaller screens
- On very large screens with many filters, horizontal scrolling may be needed

## Assets
- Icons: Each filter pill contains an SVG icon specific to its category
  - Types: Agency, Design, Portfolio (different icons)
  - Styles: Clean, Fun, Horizontal Layout, Infinite Scroll, Interactive, Light, Minimal, Unusual Layout (style icons)
  - Frameworks: Svelte, SvelteKit (framework icons)
  - Hosting: Vercel (hosting icon)
  - CMS: DatoCMS (CMS icon)
  - Animation: GSAP, Transitions (animation icons)
  - Styling: Tailwind CSS (styling icon)

## Text Content (verbatim)
- Agency
- Design
- Portfolio
- Clean
- Fun
- Horizontal Layout
- Infinite Scroll
- Interactive
- Light
- Minimal
- Unusual Layout
- NB International
- Svelte
- SvelteKit
- Vercel
- DatoCMS
- GSAP
- Transitions
- Tailwind CSS

## Responsive Behavior
- **Desktop (1440px):** Filter pills display in multiple rows as needed, wrapping when they exceed container width
- **Tablet (768px):** Same behavior as desktop, but container may be narrower causing earlier wrapping
- **Mobile (390px):**
  - Container padding reduces (px-8 still applies but effective width is smaller)
  - Font sizes remain text-sm (0.875rem)
  - Pills wrap to new lines as needed
  - All filters remain accessible without horizontal scrolling due to wrapping