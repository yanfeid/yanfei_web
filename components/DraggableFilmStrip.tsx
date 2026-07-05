"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

interface DraggableFilmStripProps {
  children: ReactNode;
  /** auto-drift speed in px/s */
  speed?: number;
}

/**
 * Infinite horizontal strip: drifts slowly on its own, can be grabbed
 * and dragged, and pauses while the pointer is over it.
 * Content is rendered twice; scroll position wraps at one copy's width.
 */
export default function DraggableFilmStrip({
  children,
  speed = 30,
}: DraggableFilmStripProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const offset = useRef(0);
  const paused = useRef(false);
  const dragging = useRef(false);
  const lastX = useRef(0);
  const [grabbed, setGrabbed] = useState(false);
  const movedRef = useRef(0);

  const apply = useCallback(() => {
    const w = copyRef.current?.offsetWidth ?? 0;
    if (w > 0) {
      // wrap into [-w, 0)
      offset.current = ((offset.current % w) - w) % w;
    }
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${offset.current}px)`;
    }
  }, []);

  useEffect(() => {
    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      if (!paused.current && !dragging.current) {
        offset.current -= speed * dt;
        apply();
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [speed, apply]);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    movedRef.current = 0;
    lastX.current = e.clientX;
    setGrabbed(true);
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    const dx = e.clientX - lastX.current;
    lastX.current = e.clientX;
    movedRef.current += Math.abs(dx);
    offset.current += dx;
    apply();
  };

  const endDrag = () => {
    dragging.current = false;
    setGrabbed(false);
  };

  // suppress accidental link clicks after a real drag
  const onClickCapture = (e: React.MouseEvent) => {
    if (movedRef.current > 6) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <div
      className={`overflow-hidden select-none [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] ${
        grabbed ? "cursor-grabbing" : "cursor-grab"
      }`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerLeave={() => {
        endDrag();
        paused.current = false;
      }}
      onPointerEnter={() => {
        paused.current = true;
      }}
      onClickCapture={onClickCapture}
    >
      <div ref={trackRef} className="flex w-max will-change-transform">
        <div ref={copyRef} className="flex gap-3 pr-3">
          {children}
        </div>
        <div aria-hidden className="flex gap-3 pr-3">
          {children}
        </div>
      </div>
    </div>
  );
}
