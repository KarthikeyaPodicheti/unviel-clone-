# Behavior Audit - UNVEIL® (Godly)

## Scroll Sweep
- Header remains fixed at top across the page (`position: fixed`, `z-index: 50`).
- No section-based parallax or intersection-triggered transitions detected on this page route.
- Main motion is spinner loops and video playback.
- Filter chips wrap naturally; no snap containers detected.

## Click Sweep
- `Index` nav link navigates to `/`.
- `Info` nav link navigates to `/info`.
- `Subscribe` button is interactive and styled for active press state.
- `Visit` button opens `https://unveil.fr?ref=godly` in a new tab.
- Filter chips navigate to corresponding filtered listings using query parameters.

## Hover Sweep
- Filter chips transition background color from `oklch(0.97 0 0)` to `oklch(0.922 0 0 / 0.7)`.
- Visit button transitions from `oklch(0.205 0 0)` to darker neutral hover.
- Header controls preserve neutral frosted style; active scale interaction applies to buttons.

## Animated States
- Video is autoplay, muted, looped.
- Hero overlay spinner rotates continuously with `animation-duration: 0.3s`.
- Bottom loading spinner rotates continuously with same duration.

## Responsive Sweep
- Desktop (1440): full-width layout with centered `max-w-6xl` hero media and centered filter wrap.
- Tablet (768): same topology, scaled spacing, filter pills wrap into additional rows.
- Mobile (390): fixed header still present, hero and filters stack vertically, chip rows wrap densely.

## Interaction Model Summary
- Header: static + click-driven links/button.
- Hero: mostly static + time-driven media playback and spinner animation.
- Filter section: click-driven navigation, responsive wrap behavior.
- Loading section: time-driven spinner animation.
