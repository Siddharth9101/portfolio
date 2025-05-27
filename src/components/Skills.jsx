import React from "react";
import {
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiDocker,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPostman,
} from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";

const Skills = () => {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "Node", icon: <FaNodeJs /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Tailwind", icon: <RiTailwindCssFill /> },
    { name: "Next.js", icon: <RiNextjsLine /> },
    { name: "Docker", icon: <SiDocker /> },
  ];
  return (
    <div className="text-white">
      <div className="text-center mb-2">
        <h2 className="text-3xl font-bold">My Skills</h2>
      </div>
      <div className="w-full h-10 flex justify-center items-center mb-4">
        <div className="w-[2px] h-full bg-orange-500 relative">
          <div className="w-2 h-2 rounded-full bg-orange-500 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" />
        </div>
      </div>

      <div className="flex justify-center flex-wrap gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex gap-2 py-2 px-4 rounded-full bg-amber-600 items-center justify-center shadow shadow-white/30 hover:bg-amber-500 transition-all duration-300 ease-in-out hover:scale-110 cursor-pointer"
          >
            <span className="text-xl md:text-2xl text-white">{skill.icon}</span>
            <span className="text-white">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
