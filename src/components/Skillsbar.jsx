import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React", icon: <FaReact /> },
  { name: "Node", icon: <FaNodeJs /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
];

export default function Skillsbar() {
  return (
    <div className="overflow-hidden whitespace-nowrap py-4 bg-black/10">
      <div className="inline-block animate-marquee paused-on-hover">
        {[...skills, ...skills].map((skill, index) => (
          <div
            key={index}
            className="inline-flex items-center gap-2 text-white opacity-85 mx-6 text-lg group-hover:opacity-100 transition-opacity duration-300"
          >
            <span className="text-2xl text-white/60">{skill.icon}</span>
            <span className="text-white/60">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
