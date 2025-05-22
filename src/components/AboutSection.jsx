import Services from "./Services";
import AboutMe from "./AboutMe";

const AboutSection = () => {
  return (
    <section className=" px-8 py-20" id="about">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16">
        <div className="md:w-1/2">
          <Services />
        </div>
        <div className="md:w-1/2">
          <AboutMe />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
