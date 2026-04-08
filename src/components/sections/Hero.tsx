import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import StatCounter from "@/components/ui/StatCounter";
import { Users, ThumbsUp } from "lucide-react";

const words = ["Where", "Innovation", "Meets", "Construction", "Excellence"];

const Hero = () => {
  const imgRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: imgRef, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section id="home" className="bg-white dark:bg-[#1a1c22] transition-theme">
      <div className="section-container min-h-screen flex items-center py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 w-full items-center">
          <div>
            <SectionLabel text="Building The Future" />
            <h1 className="text-5xl sm:text-6xl lg:text-8xl heading-style text-brand-text dark:text-white">
              {words.map((w, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
                  className="inline-block mr-3 lg:mr-5"
                >
                  {w}
                </motion.span>
              ))}
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-brand-muted text-lg mt-6 max-w-xl leading-relaxed"
            >
              Delivering landmark infrastructure and architectural icons with relentless precision and unmatched craftsmanship.
            </motion.p>
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.6 }}
              className="inline-block bg-brand-yellow text-brand-black font-bold px-8 py-4 rounded-none mt-8 hover:translate-x-1 hover:bg-brand-yellow-dark transition-all"
            >
              Start Your Project →
            </motion.a>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-xs text-brand-muted tracking-widest mt-6 uppercase"
            >
              ISO Certified · 500+ Projects · 20 Years
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
            className="bg-brand-black p-10 lg:p-14"
            style={{ clipPath: "polygon(8% 0, 100% 0, 100% 100%, 0 100%)" }}
          >
            <div className="text-7xl font-black text-brand-yellow leading-none">
              <StatCounter target={500} suffix="+" />
            </div>
            <p className="text-sm text-gray-400 uppercase tracking-widest mt-2">Projects Completed</p>
            <div className="h-px bg-gray-700 my-6" />
            <div className="text-7xl font-black text-brand-yellow leading-none">
              <StatCounter target={20} suffix="+" />
            </div>
            <p className="text-sm text-gray-400 uppercase tracking-widest mt-2">Years of Excellence</p>
            <div className="flex items-center gap-6 mt-8 text-gray-400 text-sm">
              <span className="flex items-center gap-2"><Users className="size-4 text-brand-yellow" /> 200 Professionals</span>
              <span className="flex items-center gap-2"><ThumbsUp className="size-4 text-brand-yellow" /> 99% Satisfaction</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div ref={imgRef} className="relative w-full h-48 lg:h-96 overflow-hidden" style={{ clipPath: "polygon(0 0, 100% 0, 100% 88%, 0 100%)" }}>
        <div className="absolute top-0 left-0 right-0 h-1 bg-brand-yellow z-10" />
        <motion.img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&h=900&fit=crop"
          alt="Construction panorama"
          className="w-full h-full object-cover"
          style={{ y: imgY }}
        />
      </div>
    </section>
  );
};

export default Hero;
