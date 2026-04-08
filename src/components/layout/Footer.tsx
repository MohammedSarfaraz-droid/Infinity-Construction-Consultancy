import { MapPin, Phone, Mail, Youtube } from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-brand-charcoal pt-24 pb-12 relative overflow-hidden">
      <span className="absolute bottom-4 left-0 right-0 text-center text-[12vw] font-black uppercase text-white/[0.03] pointer-events-none select-none leading-none z-0">
        LET'S BUILD
      </span>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-3 h-3 bg-brand-yellow" />
              <span className="text-2xl font-black text-white">Infinity Construction Consultancy</span>
            </div>
            <p className="text-gray-500 text-sm mt-4 leading-relaxed">
              Premier construction company delivering landmark infrastructure and architectural excellence since 2004.
            </p>
            <div className="flex items-center gap-4 mt-6">
              {["LinkedIn", "Twitter", "Instagram"].map((s) => (
                <a key={s} href="#" className="text-gray-600 hover:text-brand-yellow transition-colors text-xs font-semibold uppercase tracking-wide">{s}</a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-6">Company</h4>
            {["About", "Services", "Projects", "Blog", "Careers", "Contact"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="text-gray-500 text-sm hover:text-brand-yellow transition-colors block py-1">
                {l}
              </a>
            ))}
          </div>

          <div>
            <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-6">Contact</h4>
            <div className="space-y-3 text-gray-500 text-sm">
              <p><MapPin className="size-4 inline mr-2 text-brand-yellow" />450 Steel Avenue, New York, NY 10001</p>
              <p><Phone className="size-4 inline mr-2 text-brand-yellow" />+1 (800) 555-0199</p>
              <p><Mail className="size-4 inline mr-2 text-brand-yellow" />info@infinityconstructionconsultancy.com</p>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-6">Newsletter</h4>
            <p className="text-gray-500 text-sm mb-4">Industry insights and project updates.</p>
            <div className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="bg-brand-black border border-gray-700 text-white text-sm px-4 py-3 focus:border-brand-yellow outline-none flex-1 min-w-0"
              />
              <button className="bg-brand-yellow text-brand-black font-black text-sm px-5 py-3 rounded-none hover:bg-brand-yellow-dark transition-colors shrink-0">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-gray-600 text-xs">© 2024 Infinity Construction Consultancy. All rights reserved.</span>
          <div className="flex gap-4 text-gray-600 text-xs">
            <a href="#" className="hover:text-brand-yellow transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-yellow transition-colors">Terms</a>
            <a href="#" className="hover:text-brand-yellow transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
