import { useEffect, useRef, useState } from "react";

/**
 * useScrollReveal
 * Returns { ref, visible } — attach ref to any element to trigger
 * a CSS class once it enters the viewport.
 *
 * @param {object} options
 * @param {number}  options.threshold  - 0–1, how much of the element must be visible (default 0.12)
 * @param {string}  options.rootMargin - IntersectionObserver rootMargin (default "-40px")
 * @param {boolean} options.once       - animate only the first time (default true)
 */
export function useScrollReveal({ threshold = 0.12, rootMargin = "-40px", once = true } = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, visible };
}