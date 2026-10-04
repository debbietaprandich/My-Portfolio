import { useEffect, useRef, useState } from "react";

export function Counter({ value, display }: { value: number; display: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => entry?.isIntersecting && setVisible(true),
      { threshold: 0.3 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(value);
      return;
    }
    const start = performance.now();
    const duration = 1100;
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.round(value * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [value, visible]);

  const formatted =
    value >= 1000000
      ? `${(count / 1000000).toFixed(count < value ? 1 : 0)}M+`
      : value >= 100000
        ? `${Math.round(count / 1000)}K+`
        : value >= 1000
          ? `${(count / 1000).toFixed(value % 10000 ? 1 : 0)}K+`
          : count.toLocaleString();
  return <span ref={ref}>{visible ? formatted : display}</span>;
}
