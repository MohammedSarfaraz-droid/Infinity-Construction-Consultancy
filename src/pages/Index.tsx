import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Mission from "@/components/sections/Mission";
import Services from "@/components/sections/Services";
import StoryStats from "@/components/sections/StoryStats";
import About from "@/components/sections/About";
import Industries from "@/components/sections/Industries";
import WhyUs from "@/components/sections/WhyUs";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import Process from "@/components/sections/Process";
import Contact from "@/components/sections/Contact";
import FinalCTA from "@/components/sections/FinalCTA";

const Index = () => (
  <>
    <TopBar />
    <Navbar />
    <Hero />
    <Mission />
    <Services />
    <StoryStats />
    <About />
    <Industries />
    <WhyUs />
    <Projects />
    <Testimonials />
    <Process />
    <Contact />
    <FinalCTA />
    <Footer />
  </>
);

export default Index;
