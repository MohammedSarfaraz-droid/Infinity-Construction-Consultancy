import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import SectionLabel from "@/components/ui/SectionLabel";

const timeline = [
  { year: "2004", text: "Founded as a regional contractor in New York" },
  { year: "2009", text: "First Major Infrastructure Contract" },
  { year: "2015", text: "National Expansion across 12 states" },
  { year: "2020", text: "ISO 9001 Certification achieved" },
  { year: "2024", text: "500th Project milestone completed" },
];

const About = () => (
  <section id="about" className="bg-brand-gray dark:bg-[#22242a] py-24 lg:py-32 transition-theme">
    <div className="section-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <AnimateOnScroll>
          <SectionLabel text="About Infinity Construction Consultancy" />
          <h2 className="text-3xl lg:text-4xl heading-style text-brand-text dark:text-white">A Legacy Built In Steel And Concrete</h2>
          <p className="text-brand-muted text-base leading-relaxed mt-6">
            For two decades, Infinity Construction Consultancy has been at the forefront of construction innovation. Our portfolio spans commercial towers, civil infrastructure, and landmark architectural commissions that shape skylines and communities alike.
          </p>

          <div className="mt-10 space-y-6">
            {timeline.map((item) => (
              <div key={item.year} className="flex items-start gap-4">
                <span className="text-brand-yellow font-black text-sm w-16 shrink-0">{item.year}</span>
                <div className="w-px h-6 bg-brand-yellow/30" />
                <p className="text-sm text-brand-muted dark:text-gray-400">{item.text}</p>
              </div>
            ))}
          </div>

          <a href="#contact" className="inline-block bg-brand-yellow text-brand-black font-bold px-8 py-4 rounded-none mt-10 hover:bg-brand-yellow-dark transition-colors">
            Work With Us
          </a>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=1000&fit=crop"
              alt="Construction team"
              className="w-full h-[500px] lg:h-[600px] object-cover border-l-4 border-brand-yellow"
            />
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  </section>
);

export default About;
