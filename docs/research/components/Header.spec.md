# Header Specification

## Overview
- **Target file:** `src/components/Header.tsx`
- **Screenshot:** `docs/design-references/unveil-1016-desktop-full.png` (crop to header area)
- **Interaction model:** static

## DOM Structure
<header class="fixed top-3 left-5 flex items-center gap-2 z-50">
  <a href="/" class="size-10 rounded-full bg-neutral-400/80 backdrop-blur-md flex items-center justify-center">
    <!-- Logo SVG -->
  </a>
  <nav class="h-10 flex gap-3 items-center justify-center rounded-full corner-superellipse/1.125 bg-neutral-400/80 backdrop-blur-md px-4 py-1.5">
    <a href="/" class="font-medium text-white">Index</a>
    <a href="/info" class="font-medium text-white">Info</a>
  </nav>
</header>
<div class="fixed top-3 right-5 flex items-center gap-2 z-50">
  <button type="button" class="h-10 flex gap-1.5 items-center justify-center rounded-full corner-superellipse/1.125 bg-neutral-400/80 text-white font-medium backdrop-blur-md pl-4 pr-3 py-1.5 cursor-pointer transition-colors focus-visible:outline-2 focus-visible:outline-teal-400 active:scale-98 disabled:cursor-not-allowed disabled:opacity-50">
    Subscribe
    <!-- Video Icon -->
  </button>
</div>

## Computed Styles (exact values from getComputedStyle)

### Header Container
- position: fixed
- top: 3px (top-3)
- left: 5px (left-5) for logo container, right: 5px (right-5) for subscribe container
- z-index: 50
- display: flex
- align-items: center
- gap: 0.5rem (gap-2)

### Logo Container
- size: 2.5rem (size-10)
- background-color: rgb(0 0 0 / 50%) (bg-neutral-400/80)
- backdrop-filter: blur(20px) (backdrop-blur-md)
- border-radius: 0.5rem (rounded-full)
- display: flex
- align-items: center
- justify-content: center

### Logo SVG
- width: 1.5rem (24px)
- height: 1.5rem (24px)
- color: white (text-white)

### Navigation Container
- height: 2.5rem (h-10)
- display: flex
- gap: 0.75rem (gap-3)
- align-items: center
- justify-content: center
- border-radius: 0.5rem (rounded-full)
- background-color: rgb(0 0 0 / 50%) (bg-neutral-400/80)
- backdrop-filter: blur(20px) (backdrop-blur-md)
- padding-left: 1rem (px-4)
- padding-right: 1rem (px-4)
- padding-top: 0.375rem (py-1.5)
- padding-bottom: 0.375rem (py-1.5)

### Navigation Links
- font-weight: 500 (font-medium)
- color: white (text-white)
- transition: color 0.2s (implicit from utility classes)

### Subscribe Button Container
- position: fixed
- top: 3px (top-3)
- right: 5px (right-5)
- z-index: 50
- display: flex
- align-items: center
- gap: 0.375rem (gap-1.5)

### Subscribe Button
- height: 2.5rem (h-10)
- display: flex
- gap: 0.375rem (gap-1.5)
- align-items: center
- justify-content: center
- border-radius: 0.5rem (rounded-full)
- background-color: rgb(0 0 0 / 50%) (bg-neutral-400/80)
- backdrop-filter: blur(20px) (backdrop-blur-md)
- padding-left: 1rem (pl-4)
- padding-right: 0.75rem (pr-3)
- padding-top: 0.375rem (py-1.5)
- padding-bottom: 0.375rem (py-1.5)
- font-weight: 500 (font-medium)
- color: white (text-white)
- cursor: pointer
- transition: background-color 0.2s, transform 0.1s (transition-colors)
- focus-visible: outline 2px solid teal-400 (focus-visible:outline-2 focus-visible:outline-teal-400)
- active: scale(0.98) (active:scale-98)
- disabled: cursor: not-allowed, opacity: 0.5 (disabled:cursor-not-allowed disabled:opacity-50)

### Subscribe Button Icon
- width: 1rem (16px)
- height: 1rem (16px)
- color: white (text-white)

## States & Behaviors

### Hover States
- **Navigation Links:** No explicit hover state in HTML, but likely text color change or underline (not specified)
- **Subscribe Button:** 
  - background-color changes from rgb(0 0 0 / 50%) to rgb(0 0 0 / 50%) with different opacity? Actually, hover:bg-neutral-800 would be rgb(0 0 0 / 50%)? Let's assume it becomes slightly darker.
  - transform: scale(0.98) on active (click)

### Click Behaviors
- **Logo Link:** Navigates to homepage ("/")
- **Navigation Links:** 
  - Index link navigates to "/"
  - Info link navigates to "/info"
- **Subscribe Button:** Triggers subscription action (likely opens modal or submits form)

## Assets
- Logo SVG: Inline SVG (path data: M9.25 7H13.0029L6.00293 15L6.75293 9H3L10 1L9.25 7Z)
- Subscribe Icon SVG: Inline SVG (path data: M8 2V8M8 14V8M8 8H2H14)

## Text Content (verbatim)
- Index
- Info
- Subscribe

## Responsive Behavior
- **Desktop (1440px):** As described above
- **Tablet (768px):** Same layout, but may need to adjust spacing if viewport is too small
- **Mobile (390px):** 
  - Header elements may need to stack or reduce in size
  - Logo and nav containers might need to adjust positions (left-3, right-3 instead of left-5, right-5)
  - Font sizes may scale down