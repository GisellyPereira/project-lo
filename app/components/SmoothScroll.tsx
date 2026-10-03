"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

export default function SmoothScroll() {
  const pathname = usePathname();
  const lenis = useRef<Lenis | null>(null);
  const previousPathname = useRef(pathname);
  const historyPathname = useRef<string | null>(null);

  useEffect(() => {
    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    const updateScrolling = () => {
      lenis.current?.destroy();
      lenis.current = null;
      if (motionPreference.matches) return;

      lenis.current = new Lenis({
        autoRaf: true,
        smoothWheel: true,
        syncTouch: false,
        anchors: true,
        stopInertiaOnNavigate: true,
      });
    };

    let historyFrame = 0;
    const onPopState = () => {
      historyPathname.current =
        window.location.pathname === previousPathname.current
          ? null
          : window.location.pathname;

      // Stop existing inertia before the browser restores its saved position.
      const instance = lenis.current;
      instance?.scrollTo(instance.actualScroll, { immediate: true });
      window.cancelAnimationFrame(historyFrame);
      historyFrame = window.requestAnimationFrame(() => {
        lenis.current?.resize();
        lenis.current?.scrollTo(window.scrollY, { immediate: true });
      });
    };

    updateScrolling();
    window.addEventListener("popstate", onPopState);
    motionPreference.addEventListener("change", updateScrolling);

    return () => {
      window.removeEventListener("popstate", onPopState);
      window.cancelAnimationFrame(historyFrame);
      motionPreference.removeEventListener("change", updateScrolling);
      lenis.current?.destroy();
      lenis.current = null;
    };
  }, []);

  useEffect(() => {
    const routeChanged = previousPathname.current !== pathname;
    const historyNavigation = historyPathname.current === pathname;
    previousPathname.current = pathname;
    historyPathname.current = null;
    if (!routeChanged && !window.location.hash) return;

    const frame = window.requestAnimationFrame(() => {
      lenis.current?.resize();
      if (historyNavigation) {
        // History restoration also takes precedence over a saved URL hash.
        lenis.current?.scrollTo(window.scrollY, { immediate: true });
        return;
      }
      const hash = window.location.hash;

      if (hash) {
        let id: string;
        try {
          id = decodeURIComponent(hash.slice(1));
        } catch {
          return;
        }
        const target = document.getElementById(id);
        if (target) {
          if (lenis.current)
            lenis.current.scrollTo(target, { immediate: true });
          else target.scrollIntoView({ behavior: "instant" });
        } else if (id === "top") {
          if (lenis.current) lenis.current.scrollTo(0, { immediate: true });
          else window.scrollTo({ top: 0, behavior: "instant" });
        }
        return;
      }

      if (routeChanged) {
        if (lenis.current) lenis.current.scrollTo(0, { immediate: true });
        else window.scrollTo({ top: 0, behavior: "instant" });
      }
    });

    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}
