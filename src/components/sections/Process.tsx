import { MessageSquare, PenTool, HardHat, CheckCircle } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import SectionLabel from "@/components/ui/SectionLabel";
import StaggerParent, { staggerChild } from "@/components/ui/StaggerParent";
import { motion } from "framer-motion";

const steps = [
  { num: "01", icon: MessageSquare, title: "Meet & Consult", desc: "We listen to your vision, assess feasibility, and define project scope." },
  { num: "02", icon: PenTool, title: "Planning & Design", desc: "Detailed engineering plans, 3D modelling, permit acquisition, and cost validation." },
  { num: "03", icon: HardHat, title: "Construction", desc: "Site mobilisation, daily progress reporting, quality and safety enforcement." },
  { num: "04", icon: CheckCircle, title: "Handover", desc: "Final inspection, documentation, defect resolution, and post-completion support." },
];

const Process = () => (
  <section className="bg-brand-gray dark:bg-[#22242a] py-24 lg:py-32 transition-theme">
    <div className="section-container">
      <AnimateOnScroll>
        <SectionLabel text="Our Process" />
        <h2 className="text-3xl lg:text-4xl heading-style text-brand-text dark:text-white">How We Work</h2>
      </AnimateOnScroll>

      <StaggerParent className="grid grid-cols-1 md:grid-cols-4 gap-0 mt-16">
        {steps.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.num}
              variants={staggerChild}
              className={`relative p-10 ${i < 3 ? "md:border-r border-gray-300 dark:border-gray-700" : ""}`}
            >
              <span className="text-8xl font-black text-brand-yellow/20 leading-none absolute top-6 right-6">{s.num}</span>
              <Icon className="text-brand-text dark:text-white size-7 mt-2 relative z-10" />
              <h3 className="font-black uppercase text-base tracking-wide mt-4 text-brand-text dark:text-white relative z-10">{s.title}</h3>
              <p className="text-sm text-brand-muted mt-2 leading-relaxed relative z-10">{s.desc}</p>
              {i < 3 && <div className="hidden md:block absolute right-0 top-1/2 w-8 h-px bg-brand-yellow" />}
            </motion.div>
          );
        })}
      </StaggerParent>
    </div>
  </section>
);

export default Process;
