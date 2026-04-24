# Page Topology for UNVEIL® - Godly

## Section Overview (Top to Bottom)

1. **Header** (fixed)
   - Position: fixed top-3
   - Contains: Logo (left), Navigation (center), Subscribe button (right)
   - Interaction model: static (always visible)
   - Dependencies: overlays content below (z-index: 50)

2. **Hero Section**
   - Position: follows header
   - Contains: Video background, overlay with play button, project info (title, subtitle, visit button, stats)
   - Interaction model: static (video plays automatically)
   - Visual elements: 
     - Video background (3024x1890 aspect ratio)
     - Dark overlay with opacity
     - Centered content column
     - Play button icon (animated spinner)
     - Visit button with hover effect

3. **Filter Section**
   - Position: follows hero
   - Contains: Horizontal scrollable filter tags (Types, Styles, Frameworks, etc.)
   - Interaction model: scroll-driven (horizontal scrolling)
   - Visual elements: 
     - Filter pills with icons and labels
     - Hover states (background change)
     - Active state styling

4. **Loading Indicator**
   - Position: follows filter section
   - Contains: Animated spinner
   - Interaction model: time-driven (continuous spin animation)
   - Visual elements: 
     - Spinning circle animation

## Global Layout Notes

- Page uses flex column layout (`flex flex-col min-h-dvh w-full overflow-x-hidden`)
- Background: white (`bg-white`)
- Text color: black (`text-black`)
- Uses Tailwind CSS utility classes extensively
- Fixed header elements have backdrop blur and semi-transparent backgrounds
- Video uses `object-cover` to maintain aspect ratio while covering container
- Interactive elements use `transition-colors` and `focus-visible` outlines
- Corner styling uses `corner-superellipse` class for rounded rectangles

## Color Palette Observations

From HTML inspection:
- Background: white (`bg-white`)
- Primary text: black (`text-black`)
- Header background: `bg-neutral-400/80` (semi-transparent neutral gray)
- Header text: `text-white`
- Filter buttons: `bg-neutral-100 text-neutral-600 hover:bg-neutral-200/70`
- Visit button: `bg-neutral-900 text-white hover:bg-neutral-800`
- Spinner: `text-neutral-400`

## Typography Observations

- Uses Inter font family (preloaded in HTML)
- Header logo: SVG icon
- Nav links: `font-medium`
- FT badge: `text-sm text-neutral-400`
- Main title: `text-3xl font-medium`
- Stats text: `text-sm text-neutral-400`
- Button text: `font-medium`

## Spacing & Layout

- Header: fixed positioning with `top-3 left-5` and `top-3 right-5`
- Hero section: `pt-24 pb-16 md:py-32 px-5` with max-width container
- Video container: aspect ratio 3024/1890 (~16:9)
- Content gaps: `gap-24` between major sections, `gap-12` within hero
- Button padding: `h-9 pl-4 pr-4 gap-2` for Visit button
- Filter section: `px-8` horizontal padding
- Filter pills: `h-8 pr-3 text-sm gap-1.5 pl-2.5`

## Interactive Behaviors

1. **Video**: Auto-play, muted, loop, playsInline
2. **Subscribe button**: Has hover scaling effect (`active:scale-98`)
3. **Filter pills**: Hover background change, focus outline, active scaling
4. **Visit button**: Hover background change, focus outline, active scaling
5. **Logo link**: Navigates to homepage
6. **Nav links**: Navigate to index/info pages
7. **Spinner**: Continuous spin animation

## Responsive Behavior

- Hero section uses `md:py-32` (increased padding on medium screens)
- Container uses `max-w-6xl mx-auto` (responsive max width)
- Text scales appropriately (text-sm, text-3xl)
- Layout maintains vertical stacking on all screen sizes
