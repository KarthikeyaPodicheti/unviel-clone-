"use client";

import {
  useEffect,
  useRef,
  useState,
  useCallback,
  useMemo,
} from "react";
import { projects } from "@/types/website";

/* ── data ──────────────────────────────────────────────── */
interface CardData {
  id: number;
  src: string;
  title: string;
  slug: string;
  width: number;
  height: number;
}

const allCards: CardData[] = projects.map((p, i) => ({
  id: i,
  src: p.thumbnail,
  title: p.title,
  slug: p.slug,
  width: p.thumbnailWidth,
  height: p.thumbnailHeight,
}));

/* ── helpers ───────────────────────────────────────────── */
/** Clamp a value between min and max */
function clamp(v: number, min: number, max: number) {
  return Math.max(min, Math.min(max, v));
}

/** Smooth-step for depth-of-field falloff */
function smoothstep(edge0: number, edge1: number, x: number) {
  const t = clamp((x - edge0) / (edge1 - edge0), 0, 1);
  return t * t * (3 - 2 * t);
}

/* ── component ─────────────────────────────────────────── */
export default function CardFan3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dims, setDims] = useState({ w: 1440, h: 900 });
  const [mounted, setMounted] = useState(false);
  const [loaded, setLoaded] = useState<Set<number>>(new Set());
  const [scrollOffset, setScrollOffset] = useState(0);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const scrollTarget = useRef(0);
  const scrollCurrent = useRef(0);
  const rafId = useRef<number>(0);

  /* resize */
  const measure = useCallback(() => {
    if (containerRef.current) {
      setDims({
        w: containerRef.current.clientWidth,
        h: containerRef.current.clientHeight,
      });
    }
  }, []);

  /* smooth scroll animation loop */
  const animateScroll = useCallback(() => {
    const lerp = 0.08;
    scrollCurrent.current +=
      (scrollTarget.current - scrollCurrent.current) * lerp;
    setScrollOffset(scrollCurrent.current);
    rafId.current = requestAnimationFrame(animateScroll);
  }, []);

  useEffect(() => {
    setMounted(true);
    measure();
    window.addEventListener("resize", measure);
    rafId.current = requestAnimationFrame(animateScroll);

    return () => {
      window.removeEventListener("resize", measure);
      cancelAnimationFrame(rafId.current);
    };
  }, [measure, animateScroll]);

  /* wheel handler → drives the diagonal scroll */
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const delta = e.deltaY + e.deltaX;
      scrollTarget.current += delta * 0.8;
      // Clamp so we don't scroll past card boundaries
      const maxScroll = (allCards.length - 1) * 220;
      scrollTarget.current = clamp(scrollTarget.current, -maxScroll * 0.2, maxScroll);
    };
    const el = containerRef.current;
    if (el) {
      el.addEventListener("wheel", onWheel, { passive: false });
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, [mounted]);

  const markLoaded = useCallback((i: number) => {
    setLoaded((s) => new Set(s).add(i));
  }, []);

  /* ── geometry ────────────────────────────────────────── */
  const { w: vw, h: vh } = dims;

  // Cards to render (all of them, we cull off-screen ones)
  const cards = allCards;

  // Base card dimensions – match original's more delicate sizing (~20% viewport)
  const baseW = Math.max(vw * 0.20, 220);

  // Card offsets — tighter deck spacing
  const stepX = 72;
  const stepY = -50;

  // Anchor: when scrollOffset=0 the "center" card sits at viewport center
  const anchorX = vw * 0.40;
  const anchorY = vh * 0.52;

  // Pixel offset from scroll
  const scrollPx = scrollOffset;
  const scrollStepEquiv = scrollPx / 220; // how many "cards" we've scrolled

  // Focus index (which card is closest to center)
  const focusIdx = clamp(Math.round(scrollStepEquiv + cards.length * 0.35), 0, cards.length - 1);

  /* ── render ──────────────────────────────────────────── */
  if (!mounted) {
    return (
      <div
        ref={containerRef}
        style={{ position: "absolute", inset: 0, background: "#fafafa" }}
      />
    );
  }

  // Floating label for the focused card
  const focusedCard = cards[focusIdx];
  const focusProgress = focusIdx - scrollStepEquiv - cards.length * 0.35;

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        inset: 0,
        perspective: "2800px",
        perspectiveOrigin: "50% 42%",
        overflow: "hidden",
        background: "#fafafa",
        cursor: "grab",
      }}
    >
      {/* 3D scene */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
        }}
      >
        {cards.map((card, i) => {
          // Position of this card relative to anchor
          const cardScrollPos = i - scrollStepEquiv - cards.length * 0.35;
          const cx = anchorX + cardScrollPos * stepX;
          const cy = anchorY + cardScrollPos * stepY;

          // Skip if far off-screen (performance culling)
          if (cx < -baseW * 1.5 || cx > vw + baseW * 1.5) return null;
          if (cy < -baseW * 2 || cy > vh + baseW * 2) return null;

          // Z-depth: cards further from focus are deeper
          const distFromFocus = Math.abs(cardScrollPos);
          const z = -distFromFocus * 6;

          // Fixed card size — all cards identical
          const cardW = 260;
          const cardH = 340;

          // Scale: cards near focus are larger
          const scaleFactor = 1.0 - clamp(distFromFocus * 0.03, 0, 0.2);

          // Depth-of-field: subtler blur for non-focal cards
          const dofAmount = smoothstep(0.5, 4, distFromFocus) * 5;

          // Hover state
          const isHovered = hoveredIdx === i;
          const hoverZ = isHovered ? 60 : 0;
          const hoverScale = isHovered ? 1.04 : 1;

          // Glass frame padding – thinner to match original's delicate frames
          const framePad = Math.round(baseW * 0.018);

          return (
            <a
              key={card.id}
              href={`/project/${card.slug}`}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              style={{
                position: "absolute",
                left: `${cx}px`,
                top: `${cy}px`,
                width: `${cardW + framePad * 2}px`,
                height: `${cardH + framePad * 2}px`,
                transform: `translate(-50%, -50%) translateZ(${z + hoverZ}px) scale(${scaleFactor * hoverScale})`,
                transformStyle: "preserve-3d",
                transition: isHovered
                  ? "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), filter 0.5s ease"
                  : "transform 0.15s linear, filter 0.4s ease",
                cursor: "pointer",
                display: "block",
                textDecoration: "none",
                willChange: "transform",
                // Glass frame: frosted translucent border
                background: "rgba(255,255,255,0.45)",
                backdropFilter: `blur(${Math.round(dofAmount * 2)}px)`,
                WebkitBackdropFilter: `blur(${Math.round(dofAmount * 2)}px)`,
                border: "1px solid rgba(255,255,255,0.6)",
                boxShadow: isHovered
                  ? "0 20px 60px rgba(0,0,0,0.2), 0 4px 16px rgba(0,0,0,0.08), inset 0 0 0 1px rgba(255,255,255,0.3)"
                  : `0 ${8 + distFromFocus * 3}px ${20 + distFromFocus * 8}px rgba(0,0,0,${0.08 + distFromFocus * 0.02}), inset 0 0 0 1px rgba(255,255,255,0.2)`,
                padding: `${framePad}px`,
              }}
            >
              {/* Image inside the glass frame */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                  background: "#e5e2dd",
                }}
              >
                <img
                  src={card.src}
                  alt={card.title}
                  draggable={false}
                  onLoad={() => markLoaded(i)}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    pointerEvents: "none",
                    userSelect: "none",
                    opacity: loaded.has(i) ? 1 : 0,
                    transition: "opacity 0.6s ease",
                    // Depth-of-field blur on the image itself
                    filter: `blur(${dofAmount}px)`,
                  }}
                />
              </div>
            </a>
          );
        })}
      </div>

      {/* Floating project label below the focused card */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          bottom: "12%",
          transform: "translateX(-50%)",
          fontSize: "0.65625rem",
          lineHeight: "1.1",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          fontWeight: 400,
          color: "rgba(0,0,0,0.35)",
          fontFamily:
            '"NB International Pro", "Helvetica Neue", Arial, sans-serif',
          pointerEvents: "none",
          whiteSpace: "nowrap",
          transition: "opacity 0.4s ease",
          opacity: focusedCard ? 1 : 0,
          zIndex: 5,
        }}
      >
        {focusedCard?.title}
      </div>

      {/* Soft edge vignette – fades cards at viewport edges */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `
            linear-gradient(to right, #fafafa 0%, transparent 8%, transparent 92%, #fafafa 100%),
            linear-gradient(to bottom, rgba(250,250,250,0.5) 0%, transparent 15%, transparent 85%, rgba(250,250,250,0.6) 100%)
          `,
          pointerEvents: "none",
          zIndex: 3,
        }}
      />
    </div>
  );
}
