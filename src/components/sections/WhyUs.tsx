import { Shield, Leaf, DollarSign, HeartPulse } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import SectionLabel from "@/components/ui/SectionLabel";

const features = [
  { icon: Shield, title: "Unmatched Craftsmanship", desc: "Every joint, every pour, every finish — executed to specification." },
  { icon: Leaf, title: "Sustainable Practices", desc: "LEED-aligned methods reducing site waste by 40%." },
  { icon: DollarSign, title: "On-Budget Delivery", desc: "98.7% of projects delivered within agreed budget." },
  { icon: HeartPulse, title: "End-to-End Safety", desc: "Zero lost-time injuries across 500+ project sites." },
];

const WhyUs = () => (
  <section className="bg-white dark:bg-[#1a1c22] py-24 lg:py-32 transition-theme">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch max-w-7xl mx-auto">
      <div className="relative min-h-[400px] lg:min-h-[540px] overflow-hidden" style={{ clipPath: "polygon(0 0, 88% 0, 100% 100%, 0 100%)" }}>
        <img
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1000&h=800&fit=crop"
          alt="Dramatic construction"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <div className="bg-brand-gray dark:bg-[#22242a] p-12 lg:p-20 flex flex-col justify-center transition-theme">
        <AnimateOnScroll>
          <SectionLabel text="Why Us" />
          <h2 className="text-3xl lg:text-4xl heading-style text-brand-text dark:text-white">The STRUX Difference</h2>

          <div className="mt-10 space-y-8">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-brand-yellow flex items-center justify-center shrink-0">
                    <Icon className="text-brand-black size-5" />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase text-sm tracking-wide text-brand-text dark:text-white">{f.title}</h4>
                    <p className="text-sm text-brand-muted mt-1 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  </section>
);

export default WhyUs;
