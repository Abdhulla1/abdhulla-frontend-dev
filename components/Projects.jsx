"use client";
import React, { useState } from "react";
import ProjectCard from "./Reusable/ProjectCard";

const projectsData = [
  {
    image: "/images/project.png",
    title: "Annex Global Conferences",
    skills: ["NextJs", "React","JavaScript","Tailwindcss","HTML","CSS"],
    projectLink: "https://annexglobalconferences.com/",
  },
  {
    image: "/images/project-1.png",
    title: "Employee Management System",
    skills: ["Java", "Springboot", "React","MySQL","front-end integration"],
    projectLink: "https://github.com/Abdhulla1/Employee-Management-System",
  },
  {
    image: "/images/project-2.png",
    title: "Online Hotel Booking Management System",
    skills: ["Java", "Springboot", "React","JavaScript","MySQL","Bootstrap "],
    projectLink: "https://github.com/Abdhulla1/Online-Hotel-Booking-Management-System",
  },
  {
    image: "/images/foodieApp.png",
    title: "Foodie App",
    skills: ["NextJs", "React","JavaScript","SQLlite3","HTML","CSS"],
    projectLink: "https://foodiewebappp.netlify.app/",
  }
];

export default function Projects() {
  const allSkills = [...new Set(projectsData.flatMap((p) => p.skills))];

  const [selectedSkill, setSelectedSkill] = useState(null);
  const filteredProjects = selectedSkill
    ? projectsData.filter((p) => p.skills.includes(selectedSkill))
    : projectsData;
  return (
    <div className=" mt-30 w-screen flex flex-col justify-center items-center p-20 lg:px-28  ">
      <h2 className="text-2xl lg:text-4xl font-bold">Projects</h2>
      <h4 className="text-sm lg:text-md text-transparent bg-clip-text bg-gradient-to-r  from-[#4FC3F7] to-black dark:to-white">
        Some of my Work
      </h4>

      <div className="flex flex-wrap gap-3 mt-5">
            <button
            onClick={() => setSelectedSkill(null)}
            className={`border-2 px-4 py-2 rounded-full`}
          >
            All
          </button>
        {allSkills.map((skills) => (
          <button
            key={skills}
            onClick={() => setSelectedSkill(skills)}
            className={`border-2 px-4 py-2 rounded-full ${
              selectedSkill === skills ? "bg-[#484E53] text-white " : ""
            }`}
          >
            {skills}
          </button>
        ))} 
      </div>
      <div className="grid lg:grid-cols-3 space-y-2 gap-5 mt-20">
        {filteredProjects.map((project,i) => (
          <ProjectCard key={i} title={project.title} image={project.image} skills={project.skills} link={project.projectLink}/>
        ))}
      </div>
    </div>
  );
}
