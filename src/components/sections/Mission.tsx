import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import SectionLabel from "@/components/ui/SectionLabel";
import StaggerParent, { staggerChild } from "@/components/ui/StaggerParent";
import { motion } from "framer-motion";

const columns = [
  {
    title: "Who We Are",
    text: "Founded in 2004, STRUX has grown from a regional contractor to a nationally recognized construction force, delivering landmark infrastructure and architectural icons across the country.",
    cta: "Our Story",
  },
  {
    title: "Our Mission",
    text: "To engineer spaces that elevate human experience — through relentless precision, innovative methods, and a commitment to on-time, on-budget delivery.",
    cta: "Learn More",
  },
  {
    title: "Our Values",
    text: "Integrity in every beam. Accountability on every site. Excellence in every deliverable. Safety above all else.",
    cta: "See Values",
  },
];

const Mission = () => (
  <section className="bg-brand-black text-white py-24 lg:py-32">
    <div className="section-container">
      <AnimateOnScroll className="text-center mb-16">
        <SectionLabel text="Our Foundation" light center />
        <h2 className="text-4xl lg:text-5xl heading-style text-white">Built On Purpose, Driven By Precision</h2>
      </AnimateOnScroll>

      <StaggerParent className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-800">
        {columns.map((col) => (
          <motion.div key={col.title} variants={staggerChild} className="bg-brand-black p-10 lg:p-14">
            <h3 className="text-brand-yellow text-xl font-bold uppercase tracking-wide">{col.title}</h3>
            <p className="text-gray-400 text-base leading-relaxed mt-4">{col.text}</p>
            <a href="#about" className="inline-block border border-gray-600 text-white text-sm px-6 py-3 mt-8 rounded-none hover:border-brand-yellow hover:text-brand-yellow transition-colors">
              {col.cta}
            </a>
          </motion.div>
        ))}
      </StaggerParent>
    </div>
  </section>
);

export default Mission;
