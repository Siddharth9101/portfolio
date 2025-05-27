import Hero from "./Hero";
import Navbar from "./Navbar";
import AboutSection from "./AboutSection";
import ProjectSection from "./ProjectSection";
import Contact from "./Contact";
import Footer from "./Footer";
import BackToTop from "./BackToTop";
import Skills from "./Skills";
const Layout = () => {
  return (
    <div className="relative bg-main font-sans min-h-screen">
      <div className="absolute inset-0 bg-black/20 z-0 " />
      <div className="relative z-10  max-w-6xl mx-auto">
        <Navbar />
        <Hero />
        <AboutSection />
        <Skills />
        <ProjectSection />
        <Contact />
        <Footer />
        <BackToTop />
      </div>
    </div>
  );
};

export default Layout;
