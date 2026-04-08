import { Phone, Mail, MapPin } from "lucide-react";

const TopBar = () => (
  <div className="bg-brand-black text-white text-xs py-2 hidden md:block">
    <div className="section-container flex justify-between items-center">
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-1.5"><Phone className="size-3" /> +1 (800) 555-0199</span>
        <span className="w-px h-3 bg-gray-700" />
        <span className="flex items-center gap-1.5"><Mail className="size-3" /> info@strux.com</span>
        <span className="w-px h-3 bg-gray-700" />
        <span className="flex items-center gap-1.5"><MapPin className="size-3" /> 450 Steel Ave, New York, NY</span>
      </div>
      <div className="flex items-center gap-4">
        <a href="#" className="hover:text-brand-yellow transition-colors">LinkedIn</a>
        <a href="#" className="hover:text-brand-yellow transition-colors">Twitter</a>
        <a href="#" className="hover:text-brand-yellow transition-colors">Instagram</a>
      </div>
    </div>
  </div>
);

export default TopBar;
