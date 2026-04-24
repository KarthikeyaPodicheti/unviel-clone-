# Hero Section Specification

## Overview
- **Target file:** `src/components/HeroSection.tsx`
- **Screenshot:** `docs/design-references/unveil-1016-desktop-full.png` (crop to hero section)
- **Interaction model:** static (video plays automatically)

## DOM Structure
<section class="w-full bg-neutral-50 pt-24 pb-16 md:py-32 px-5">
  <div class="w-full max-w-6xl mx-auto">
    <div class="overflow-hidden shadow-2xl relative w-full" style="aspect-ratio:3024/1890">
      <video src="https://pub-8c02bb0f8aa04c19b7b7ee44644801fd.r2.dev/videos/1280/28bc38d8-d36a-426a-a48b-2cf94c5ded8b.mp4" autoPlay muted loop playsInline class="w-full h-full object-cover transition-opacity duration-300 opacity-0"></video>
      <div class="absolute inset-0 flex items-center justify-center bg-black/10 transition-opacity duration-300 opacity-100">
        <svg aria-hidden="true" class="animate-spin text-white" width="32" height="32" viewBox="0 0 20 20" fill="none" style="animation-duration:0.3s">
          <path d="M10 2 A8 8 0 1 1 2 10" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
        </svg>
      </div>
    </div>
  </div>
  <div class="w-full flex flex-col gap-24">
    <div class="w-full flex flex-col">
      <div class="w-full bg-neutral-50 pt-24 pb-16 md:py-32 px-5">
        <div class="w-full max-w-6xl mx-auto">
          <div class="flex flex-col items-center gap-4">
            <div class="flex flex-col items-center gap-1">
              <span class="text-sm text-neutral-400">FT. <!-- -->1,016</span>
              <h1 class="text-3xl font-medium">UNVEIL®</h1>
            </div>
            <a rel="noopener noreferrer" href="https://unveil.fr?ref=godly" target="_blank" class="relative inline-flex items-center justify-center rounded-full corner-superellipse/1.25 font-medium cursor-pointer transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-teal-400 active:scale-98 disabled:cursor-not-allowed disabled:opacity-50 bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-white/90 h-9 pl-4 pr-4 gap-2">
              Visit
            </a>
            <div class="flex flex-col items-center gap-1 text-sm text-neutral-400">
              <span>32,366<!-- --> views</span>
              <span>1y ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

## Computed Styles (exact values from getComputedStyle)

### Hero Section Container
- background-color: rgb(248 250 252) (bg-neutral-50)
- padding-top: 1.5rem (pt-24)
- padding-bottom: 1rem (pb-16)
- padding-top: 2rem (md:py-32) - applies at medium breakpoint
- padding-left: 1.25rem (px-5)
- padding-right: 1.25rem (px-5)

### Video Container
- overflow: hidden
- box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1) (shadow-2xl)
- position: relative
- width: 100%
- aspect-ratio: 3024/1890 (~1.6:1)

### Background Video
- width: 100%
- height: 100%
- object-fit: cover (object-cover)
- transition: opacity 0.3s ease (transition-opacity duration-300)
- opacity: 0 (initially transparent, becomes visible via JS?)

### Video Overlay Container
- position: absolute
- inset: 0 (top/right/bottom/left: 0)
- display: flex
- align-items: center
- justify-content: center
- background-color: rgb(0 0 0 / 0.625) (bg-black/10)
- transition: opacity 0.3s ease (transition-opacity duration-300)
- opacity: 1 (fully visible)

### Play Button Icon
- width: 2rem (32px)
- height: 2rem (32px)
- color: white (text-white)
- animation: spin 0.3s linear infinite (animate-spin)

### Hero Content Wrapper
- display: flex
- flex-direction: column
- gap: 1.5rem (gap-24)

### Hero Header Content
- display: flex
- flex-direction: column
- align-items: center
- gap: 1rem (gap-4)

### FT Badge
- font-size: 0.875rem (text-sm)
- color: rgb(107 114 128) (text-neutral-400)
- margin-bottom: 0.25rem (gap-1)

### Main Title
- font-size: 1.875rem (text-3xl)
- font-weight: 500 (font-medium)

### Visit Button
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
- background-color: rgb(17 24 39) (bg-neutral-900)
- color: white (text-white)
- hover-background-color: rgb(30 41 59) (hover:bg-neutral-800)
- height: 2.25rem (h-9)
- padding-left: 1rem (pl-4)
- padding-right: 1rem (pr-4)
- gap: 0.5rem (gap-2)

### Stats Text
- display: flex
- flex-direction: column
- align-items: center
- gap: 0.25rem (gap-1)
- font-size: 0.875rem (text-sm)
- color: rgb(107 114 128) (text-neutral-400)

## States & Behaviors

### Video Loading State
- Initially: opacity 0 (transparent)
- After loading: opacity 1 (visible) - controlled by JS
- Transition: opacity 0.3s ease (transition-opacity duration-300)

### Overlay State
- Always visible with opacity 1
- Background: rgba(0, 0, 0, 0.0625) (bg-black/10)
- Transition: opacity 0.3s ease

### Hover States
- **Visit Button:**
  - background-color: changes from rgb(17 24 39) to rgb(30 41 59)
  - transform: scale(0.98) on active (click)

### Click Behaviors
- **Visit Button:** Navigates to "https://unveil.fr?ref=godly" in new tab

## Assets
- Background Video: https://pub-8c02bb0f8aa04c19b7b7ee44644801fd.r2.dev/videos/1280/28bc38d8-d36a-426a-a48b-2cf94c5ded8b.mp4
- Play Button Icon: Inline SVG (spinner: M10 2 A8 8 0 1 1 2 10)

## Text Content (verbatim)
- FT. 1,016
- UNVEIL®
- Visit
- 32,366 views
- 1y ago

## Responsive Behavior
- **Desktop (1440px):** As described above
- **Tablet (768px):** 
  - Hero section padding increases (md:py-32 adds 2rem top/bottom padding)
  - Container max-width: 6xl (remains same)
- **Mobile (390px):**
  - Hero section padding: pt-24 pb-16 (1.5rem top, 1rem bottom)
  - Text scales appropriately
  - Video maintains aspect ratio