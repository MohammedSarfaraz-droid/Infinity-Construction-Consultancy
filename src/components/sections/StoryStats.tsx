import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import StatCounter from "@/components/ui/StatCounter";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const stats = [
  { value: 500, suffix: "+", label: "Projects" },
  { value: 20, suffix: "+", label: "Years" },
  { value: 200, suffix: "+", label: "Professionals" },
  { value: 99, suffix: "%", label: "Satisfaction" },
];

const StoryStats = () => {
  const imgRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: imgRef, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section className="bg-white dark:bg-[#1a1c22] py-24 lg:py-32 transition-theme">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 max-w-7xl mx-auto">
        <div ref={imgRef} className="relative min-h-[400px] lg:min-h-[500px] overflow-hidden" style={{ clipPath: "polygon(0 0, 92% 0, 100% 100%, 0 100%)" }}>
          <motion.img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1000&h=800&fit=crop"
            alt="Construction site"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ y: imgY }}
          />
        </div>

        <div className="p-12 lg:p-20 flex flex-col justify-center">
          <AnimateOnScroll>
            <SectionLabel text="Our Story" />
            <h2 className="text-3xl lg:text-4xl heading-style text-brand-text dark:text-white leading-tight">
              Two Decades Of Building The Extraordinary
            </h2>
            <p className="text-brand-muted text-base leading-relaxed mt-6">
              From a single regional office to a nationally recognized construction powerhouse, Infinity Construction Consultancy has consistently raised the bar in project delivery, safety, and client satisfaction.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-2 gap-8 mt-12">
            {stats.map((s) => (
              <AnimateOnScroll key={s.label}>
                <div className="text-5xl font-black text-brand-text dark:text-white">
                  <StatCounter target={s.value} suffix={s.suffix} />
                </div>
                <div className="h-1 w-10 bg-brand-yellow mt-2 mb-3" />
                <p className="text-xs uppercase tracking-widest text-brand-muted">{s.label}</p>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryStats;
