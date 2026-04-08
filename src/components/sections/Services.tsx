import { Building, HardHat, Wrench, Zap } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import SectionLabel from "@/components/ui/SectionLabel";
import StaggerParent, { staggerChild } from "@/components/ui/StaggerParent";
import { motion } from "framer-motion";

const services = [
  {
    icon: Building,
    title: "Commercial Buildings",
    desc: "Office towers, retail centres, and mixed-use developments built to the highest commercial standards.",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    featured: false,
  },
  {
    icon: HardHat,
    title: "Industrial Facilities",
    desc: "State-of-the-art manufacturing plants, warehouses, and processing facilities.",
    img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
    featured: true,
  },
  {
    icon: Wrench,
    title: "Civil Infrastructure",
    desc: "Roads, bridges, drainage systems, and public works that connect communities.",
    img: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&h=600&fit=crop",
    featured: false,
  },
  {
    icon: Zap,
    title: "Special Projects",
    desc: "Heritage restoration, bespoke architectural commissions, and unique structural challenges.",
    img: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop",
    featured: false,
  },
];

const Services = () => (
  <section id="services" className="bg-brand-gray dark:bg-[#22242a] py-24 lg:py-32 transition-theme">
    <div className="section-container">
      <AnimateOnScroll>
        <SectionLabel text="Our Expertise" />
        <h2 className="text-4xl lg:text-5xl heading-style text-brand-text dark:text-white">What We Build</h2>
      </AnimateOnScroll>

      <StaggerParent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
        {services.map((s) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.title}
              variants={staggerChild}
              className={`overflow-hidden group cursor-pointer hover:scale-[1.02] hover:shadow-xl transition duration-300 relative ${
                s.featured ? "bg-brand-black text-white" : "bg-white dark:bg-brand-charcoal"
              }`}
            >
              {s.featured && (
                <span className="absolute top-4 right-4 z-10 bg-brand-yellow text-brand-black text-[10px] font-black px-2 py-1 uppercase tracking-widest">
                  Featured
                </span>
              )}
              <div className="relative h-48 overflow-hidden">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                {s.featured && <div className="absolute inset-0 bg-brand-yellow/0 group-hover:bg-brand-yellow/20 transition-colors duration-300" />}
              </div>
              <div className="p-6">
                <Icon className="text-brand-yellow size-7" />
                <h3 className={`text-lg font-bold uppercase mt-3 ${s.featured ? "text-white" : "text-brand-text dark:text-white"}`}>{s.title}</h3>
                <p className={`text-sm mt-2 leading-relaxed ${s.featured ? "text-gray-400" : "text-brand-muted"}`}>{s.desc}</p>
                <a href="#" className={`text-xs font-semibold tracking-wide mt-4 inline-block ${s.featured ? "text-brand-yellow" : "text-brand-text dark:text-white"}`}>
                  Learn More →
                </a>
              </div>
            </motion.div>
          );
        })}
      </StaggerParent>
    </div>
  </section>
);

export default Services;
