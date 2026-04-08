import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import SectionLabel from "@/components/ui/SectionLabel";
import StaggerParent, { staggerChild } from "@/components/ui/StaggerParent";
import { motion } from "framer-motion";

const projects = [
  { title: "Meridian Corporate Tower", cat: "Commercial", img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=600&fit=crop", featured: true },
  { title: "Eastbridge Interchange", cat: "Infrastructure", img: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&h=600&fit=crop", featured: false },
  { title: "Harlow Industrial Park", cat: "Industrial", img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop", featured: false },
  { title: "Civic Cultural Centre", cat: "Public", img: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop", featured: false },
  { title: "Nova Residential Complex", cat: "Residential", img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop", featured: false },
  { title: "Harbor Logistics Hub", cat: "Industrial", img: "https://images.unsplash.com/photo-1494412574643-ff11b0a5eb19?w=800&h=600&fit=crop", featured: false },
];

const Projects = () => (
  <section id="projects" className="bg-brand-black py-24 lg:py-32">
    <div className="section-container">
      <AnimateOnScroll>
        <SectionLabel text="Portfolio" light />
        <h2 className="text-4xl lg:text-5xl heading-style text-white">Selected Works</h2>
      </AnimateOnScroll>

      <StaggerParent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            variants={staggerChild}
            className={`relative overflow-hidden group cursor-pointer ${
              i === 0 ? "sm:col-span-2 h-80 lg:h-96" : "h-64 lg:h-80"
            }`}
          >
            <img
              src={p.img}
              alt={p.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <span className="bg-brand-yellow text-brand-black text-[10px] font-black px-2 py-1 uppercase tracking-widest">
                {p.cat}
              </span>
              <h3 className="text-white font-bold text-lg mt-2 uppercase">{p.title}</h3>
            </div>
          </motion.div>
        ))}
      </StaggerParent>
    </div>
  </section>
);

export default Projects;
