import { useState } from "react";
import { MapPin, Phone, Mail, CheckCircle } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import SectionLabel from "@/components/ui/SectionLabel";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", type: "", message: "", budget: "" });

  const update = (field: string, value: string) => setForm((f) => ({ ...f, [field]: value }));

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const inputClass = "border-0 border-b-2 border-gray-200 dark:border-gray-600 focus:border-brand-yellow bg-transparent outline-none py-3 text-sm w-full transition-colors text-brand-text dark:text-gray-200";

  return (
    <section id="contact" className="bg-white dark:bg-[#1a1c22] py-24 lg:py-32 transition-theme">
      <div className="section-container">
        <AnimateOnScroll>
          <SectionLabel text="Contact" />
          <h2 className="text-3xl lg:text-4xl heading-style text-brand-text dark:text-white">Start A Conversation</h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 mt-16">
          <AnimateOnScroll>
            <div className="bg-brand-black text-white p-10 h-full">
              <h3 className="text-2xl font-black uppercase text-brand-yellow">Get In Touch</h3>
              <div className="space-y-6 mt-8">
                <div className="flex gap-4 items-start"><MapPin className="text-brand-yellow size-5 shrink-0 mt-0.5" /><div><p className="text-gray-400 text-sm">450 Steel Avenue<br />New York, NY 10001</p></div></div>
                <div className="flex gap-4 items-start"><Phone className="text-brand-yellow size-5 shrink-0 mt-0.5" /><p className="text-gray-400 text-sm">+1 (800) 555-0199</p></div>
                <div className="flex gap-4 items-start"><Mail className="text-brand-yellow size-5 shrink-0 mt-0.5" /><p className="text-gray-400 text-sm">info@strux.com</p></div>
              </div>
              <div className="bg-brand-yellow/10 border-l-4 border-brand-yellow p-4 mt-8">
                <p className="text-gray-300 text-sm">Office Hours: Mon – Fri, 8:00 AM – 6:00 PM</p>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.15}>
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full gap-4">
                <CheckCircle className="text-brand-yellow size-16" />
                <p className="text-xl font-black uppercase text-brand-text dark:text-white">Message received!</p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input placeholder="Full Name" value={form.name} onChange={(e) => update("name", e.target.value)} className={inputClass} />
                  <input placeholder="Company" value={form.company} onChange={(e) => update("company", e.target.value)} className={inputClass} />
                  <input placeholder="Email" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className={inputClass} />
                  <input placeholder="Phone" value={form.phone} onChange={(e) => update("phone", e.target.value)} className={inputClass} />
                </div>
                <select value={form.type} onChange={(e) => update("type", e.target.value)} className={inputClass}>
                  <option value="">Project Type</option>
                  <option>Commercial</option>
                  <option>Industrial</option>
                  <option>Infrastructure</option>
                  <option>Residential</option>
                  <option>Special</option>
                </select>
                <select value={form.budget} onChange={(e) => update("budget", e.target.value)} className={inputClass}>
                  <option value="">Budget Range</option>
                  <option>$500K – $1M</option>
                  <option>$1M – $5M</option>
                  <option>$5M – $20M</option>
                  <option>$20M+</option>
                </select>
                <textarea placeholder="Message" rows={4} value={form.message} onChange={(e) => update("message", e.target.value)} className={`${inputClass} resize-none`} />
                <button
                  onClick={handleSubmit}
                  className="bg-brand-yellow text-brand-black font-black px-10 py-4 rounded-none uppercase tracking-wide hover:bg-brand-yellow-dark transition-colors w-full sm:w-auto"
                >
                  Send Message
                </button>
              </div>
            )}
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Contact;
