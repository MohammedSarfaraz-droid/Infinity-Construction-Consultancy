import { Building2, Landmark, Factory, Star } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import SectionLabel from "@/components/ui/SectionLabel";
import StaggerParent, { staggerChild } from "@/components/ui/StaggerParent";
import { motion } from "framer-motion";

const industries = [
  { icon: Building2, title: "General Buildings", text: "Commercial towers, retail centres, residential complexes designed for modern living." },
  { icon: Landmark, title: "Civil Infrastructure", text: "Roads, bridges, drainage, and public works connecting communities." },
  { icon: Factory, title: "Heavy Industrial", text: "Factories, warehouses, processing plants built for operational excellence." },
  { icon: Star, title: "Special Projects", text: "Heritage restoration, bespoke architectural commissions, and unique builds." },
];

const Industries = () => (
  <section className="bg-brand-charcoal text-white py-24 lg:py-32">
    <div className="section-container">
      <AnimateOnScroll className="text-center mb-16">
        <SectionLabel text="Sectors" light center />
        <h2 className="text-4xl lg:text-5xl heading-style text-white">Industries We Serve</h2>
      </AnimateOnScroll>

      <StaggerParent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-700">
        {industries.map((ind) => {
          const Icon = ind.icon;
          return (
            <motion.div key={ind.title} variants={staggerChild} className="bg-brand-charcoal p-10 text-left hover:bg-brand-black transition-colors cursor-pointer">
              <Icon className="text-brand-yellow size-8" />
              <h3 className="text-white font-bold uppercase text-base mt-6 tracking-wide">{ind.title}</h3>
              <p className="text-gray-400 text-sm mt-3 leading-relaxed">{ind.text}</p>
              <button className="border border-gray-700 text-xs text-gray-400 px-5 py-2 mt-6 rounded-none hover:border-brand-yellow hover:text-brand-yellow transition-colors">
                Explore
              </button>
            </motion.div>
          );
        })}
      </StaggerParent>
    </div>
  </section>
);

export default Industries;
