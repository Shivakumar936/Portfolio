import { useEffect, useRef } from "react";

// A soft white radial glow that follows the pointer. Skipped on touch devices
// and when the user prefers reduced motion.
export default function CursorGlow() {
  const ref = useRef(null);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (isTouch || prefersReduced) return;

    const el = ref.current;
    let frame;
    let target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let current = { ...target };

    const onMove = (e) => {
      target = { x: e.clientX, y: e.clientY };
    };

    const tick = () => {
      current.x += (target.x - current.x) * 0.12;
      current.y += (target.y - current.y) * 0.12;
      if (el) {
        el.style.transform = `translate(${current.x - 200}px, ${
          current.y - 200
        }px)`;
      }
      frame = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    frame = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-0 h-96 w-96 rounded-full"
      style={{
        background:
          "radial-gradient(circle, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 40%, transparent 70%)",
        willChange: "transform",
      }}
    />
  );
}

