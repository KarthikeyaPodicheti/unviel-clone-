# LoadingIndicator Specification

## Overview
- **Target file:** `src/components/LoadingIndicator.tsx`
- **Screenshot:** `docs/design-references/unveil-1016-desktop-full.png` (bottom loading area)
- **Interaction model:** time-driven

## DOM Structure
<div class="w-full py-16 flex justify-center">
  <svg aria-hidden="true" class="animate-spin text-neutral-400" width="24" height="24" viewBox="0 0 20 20" fill="none" style="animation-duration:0.3s">
    <path d="M10 2 A8 8 0 1 1 2 10" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
  </svg>
</div>

## Computed Styles (exact values from getComputedStyle)

### Container
- display: flex
- justify-content: center
- width: 100%
- padding-top: 4rem
- padding-bottom: 4rem

### Spinner Icon
- width: 24px
- height: 24px
- color: oklch(0.708 0 0)
- animation-name: spin
- animation-duration: 0.3s
- animation-timing-function: linear
- animation-iteration-count: infinite

## States & Behaviors

### Spinner Loop
- **Trigger:** page render
- **State A:** rotation 0deg
- **State B:** rotation 360deg
- **Transition:** continuous CSS keyframe loop, 0.3s linear infinite
- **Implementation approach:** CSS animation utility (`animate-spin`) + inline duration override

### Hover states
- N/A

## Per-State Content (if applicable)
- N/A

## Assets
- Icon path: inline SVG spinner arc

## Text Content (verbatim)
- N/A

## Responsive Behavior
- **Desktop (1440px):** centered 24px spinner with generous vertical breathing room
- **Tablet (768px):** same visual model
- **Mobile (390px):** same visual model
- **Breakpoint:** no layout shift required
