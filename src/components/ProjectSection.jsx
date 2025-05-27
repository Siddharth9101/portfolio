import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const req = async () => {
      try {
        setLoading(true);
        const url = `${import.meta.env.VITE_BACKEND_URL}/api/projects`;
        const result = await axios.get(url);
        setProjects(result.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    req();
  }, []);

  if (loading) return null;

  return (
    <section className=" px-8 py-20 text-white" id="projects">
      <div className="w-full flex flex-col items-center">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold mb-2">Projects</h2>
        <div className="h-10 flex items-center">
          <div className="w-[2px] h-full bg-orange-500 relative">
            <div className="w-2 h-2 rounded-full bg-orange-500 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" />
          </div>
        </div>

        {/* Project Card */}
        {projects.map((project, i) => (
          <div
            key={project._id}
            className={`flex my-2 flex-col md:flex-row border border-gray-800 rounded p-2 shadow ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center gap-10 w-full`}
          >
            {/* Project Info */}
            <div className="md:w-1/2 space-y-4">
              <h3 className="text-xl md:text-2xl font-semibold">
                {project.title}
              </h3>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-3 text-sm">
                {project.technologies.map((tech, j) => (
                  <span
                    key={j}
                    className="bg-[#1c2a3a] px-3 py-1 rounded-full border border-gray-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-gray-300">{project.description}</p>

              {/* Buttons */}
              <div className="flex flex-col md:flex-row gap-4 text-center">
                <Link
                  to={project.githubUrl}
                  target="_blank"
                  className="bg-orange-500 px-5 py-2 rounded hover:bg-orange-600 transition"
                >
                  View Github
                </Link>
                <Link
                  to={project.liveUrl}
                  target="_blank"
                  className="border px-5 py-2 rounded hover:bg-white hover:text-black transition"
                >
                  View project →
                </Link>
              </div>
            </div>
            {/* Project Image */}
            <div className="md:w-1/2 border border-white/50">
              <img
                src={project.image}
                alt={project.title}
                className="rounded shadow-lg max-w-full"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
