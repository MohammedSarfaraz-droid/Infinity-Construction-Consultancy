import { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";

interface Props {
  target: number;
  suffix?: string;
  className?: string;
}

const StatCounter = ({ target, suffix = "", className = "" }: Props) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const duration = 1800;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, target]);

  return (
    <span ref={ref} className={className}>
      {count}{suffix}
    </span>
  );
};

export default StatCounter;
