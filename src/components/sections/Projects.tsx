"use client";
import { motion } from "framer-motion";
import { useState } from "react";

// Sample project data - you can modify this with your actual projects
const projects = [
  {
    title: "Project One",
    description: "A full-stack web application built with Next.js, TypeScript, and MongoDB. Features real-time updates and responsive design.",
    tags: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
    image: "/project1.jpg", // Add your project images to the public folder
    link: "https://project1.com",
    github: "https://github.com/yourusername/project1"
  },
  {
    title: "Project Two",
    description: "An AI-powered analytics dashboard with interactive visualizations and real-time data processing.",
    tags: ["React", "Python", "TensorFlow", "D3.js"],
    image: "/project2.jpg",
    link: "https://project2.com",
    github: "https://github.com/yourusername/project2"
  },
  {
    title: "Project Three",
    description: "A mobile-first e-commerce platform with advanced filtering and search capabilities.",
    tags: ["React Native", "Node.js", "PostgreSQL", "Redux"],
    image: "/project3.jpg",
    link: "https://project3.com",
    github: "https://github.com/yourusername/project3"
  },
  // Add more projects as needed
];

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-xl bg-gray-900/50 border border-gray-800 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10">
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
            {project.title}
          </h3>
          <p className="text-gray-400 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 text-sm text-cyan-400 bg-cyan-900/20 rounded-full border border-cyan-800/50"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex space-x-4">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              View Live
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-semibold text-cyan-400 border border-cyan-500 rounded-full hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
            >
              View Code
            </a>
          </div>
        </div>
        {/* Animated border effect */}
        <div className="absolute inset-0 border-2 border-transparent rounded-xl transition-all duration-300 group-hover:border-cyan-500/50 group-hover:shadow-lg group-hover:shadow-cyan-500/10"></div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              Featured Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
