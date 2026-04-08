import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import SectionLabel from "@/components/ui/SectionLabel";
import StaggerParent, { staggerChild } from "@/components/ui/StaggerParent";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Infinity Construction Consultancy delivered our 12-storey headquarters 3 weeks ahead of schedule. Their on-site team's professionalism was extraordinary.",
    name: "Marcus Webb",
    role: "CEO, Veridian Capital",
    initials: "MW",
  },
  {
    quote: "The bridge project was technically complex. Infinity Construction Consultancy handled every challenge with engineering rigor and clear communication.",
    name: "Priya Nair",
    role: "Director, National Infrastructure Authority",
    initials: "PN",
  },
  {
    quote: "We have worked with many contractors. Infinity Construction Consultancy stands alone in their commitment to quality and zero-compromise safety culture.",
    name: "James Thornton",
    role: "Operations Lead, DeltaPort Logistics",
    initials: "JT",
  },
];

const Testimonials = () => (
  <section className="bg-brand-charcoal text-white py-24 lg:py-32">
    <div className="section-container">
      <AnimateOnScroll className="text-center mb-16">
        <SectionLabel text="Testimonials" light center />
        <h2 className="text-4xl lg:text-5xl heading-style text-white">What Our Clients Say</h2>
      </AnimateOnScroll>

      <StaggerParent className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <motion.div key={t.name} variants={staggerChild} className="bg-brand-black p-8 border-t-2 border-brand-yellow">
            <span className="text-6xl font-black text-brand-yellow leading-none">"</span>
            <p className="text-gray-300 text-sm leading-relaxed mt-4 italic">{t.quote}</p>
            <div className="h-px bg-gray-700 my-6" />
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-yellow text-brand-black text-sm font-black flex items-center justify-center">
                {t.initials}
              </div>
              <div>
                <p className="text-white font-bold text-sm">{t.name}</p>
                <p className="text-gray-500 text-xs">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </StaggerParent>
    </div>
  </section>
);

export default Testimonials;
