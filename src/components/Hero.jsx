import Skillsbar from "./Skillsbar";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="overflow-hidden">
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-10 py-20 text-white">
        <div className="max-w-xl space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold">
            Hello<span className="text-orange-500">.</span>
          </h1>
          <div className="flex gap-4 items-center">
            <div className="h-1 md:w-[100px] w-[50px] bg-orange-500" />
            <h2 className="text-xl md:text-2xl">
              I'm{" "}
              <span className="text-white font-medium">Siddharth Saxena</span>
            </h2>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold">Software Developer</h3>
          <div className="flex justify-around items-center mt-6">
            <button
              className="bg-orange-500 text-white text-sm md:text-base px-4 md:px-6 py-3 rounded hover:bg-orange-600"
              onClick={() => {
                const contactSection = document.querySelector("#contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Got a project?
            </button>
            <button
              className="border border-white text-sm md:text-base px-4  md:px-6 py-3 rounded hover:bg-white hover:text-black"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/Siddharth Saxena.pdf";
                link.download = "Siddharth Saxena.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              My resume
            </button>
          </div>
        </div>
        <div className="mt-12 md:mt-0 relative">
          <div className="w-64 h-64 bg-orange-500 rounded-full flex items-center justify-center">
            <div className="w-48 h-48 bg-[#0f172a] rounded-full">
              <div className="size-full rounded-full overflow-hidden">
                <img
                  src="/profile-pic.png"
                  className="size-full object-cover"
                  alt="profile pic"
                />
              </div>
            </div>
          </div>

          <span className="absolute -top-3 -left-3">
            <FaAngleLeft size={56} className="text-orange-600" />
          </span>
          <span className="absolute -bottom-3 -right-3">
            <FaAngleRight size={56} className="text-orange-600" />
          </span>
        </div>
      </section>
      <Skillsbar />
    </div>
  );
};

export default Hero;
