import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FinalCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-brand-black py-24 lg:py-32 text-center">
      <div className="section-container" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl sm:text-5xl lg:text-7xl heading-style text-white leading-tight"
        >
          Ready To Build Something Extraordinary?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="text-brand-muted text-lg mt-6"
        >
          From concept to completion — STRUX delivers.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mt-10"
        >
          <a href="#contact" className="bg-brand-yellow text-brand-black font-black px-10 py-4 rounded-none hover:bg-brand-yellow-dark transition-colors uppercase tracking-wide">
            Start Your Project
          </a>
          <a href="#projects" className="border-2 border-white text-white font-black px-10 py-4 rounded-none hover:bg-white hover:text-brand-black transition-colors uppercase tracking-wide">
            View Our Work
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
