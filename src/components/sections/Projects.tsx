"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import thumbnailPort from "../../assets/thumnail port.png";
import { StaticImageData } from "next/image";
import React from "react";

// Project type definition
interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string | StaticImageData;
  link: string;
  github: string;
}

// Props type for ProjectCard component
interface ProjectCardProps {
  project: Project;
  index: number;
}

// Sample project data - you can modify this with your actual projects
const projects: Project[] = [
  {
    title: "1. Active-Tracker",
    description:
      "A full-stack application built with React-native, Expo-Go, and Firebase. Features real-time location updates and responsive design.",
    tags: ["Expo-Go", "React-native", "Firebase", "Notifee"],
    image: thumbnailPort, // Imported image from assets
    link: "https://play.google.com/store/apps/details?id=com.deepkm.Live_Tracker",
    github: "https://github.com/kisanms/Live_Tracker",
  },
  {
    title: "Project Two",
    description:
      "An AI-powered analytics dashboard with interactive visualizations and real-time data processing.",
    tags: ["React", "Python", "TensorFlow", "D3.js"],
    image: "https://placehold.co/600x400/1e293b/38bdf8?text=Project+Two", // Placeholder image
    link: "https://project2.com",
    github: "https://github.com/yourusername/project2",
  },
  {
    title: "Project Three",
    description:
      "A mobile-first e-commerce platform with advanced filtering and search capabilities.",
    tags: ["React Native", "Node.js", "PostgreSQL", "Redux"],
    image: "https://placehold.co/600x400/1e293b/38bdf8?text=Project+Three", // Placeholder image
    link: "https://project3.com",
    github: "https://github.com/yourusername/project3",
  },
  // Add more projects as needed
];

const ProjectCard = ({ project, index }: ProjectCardProps) => {

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group h-full"
>
      <div className="relative overflow-hidden rounded-xl bg-gray-900/50 border border-gray-800 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 h-full flex flex-col">
        <div className="relative w-full h-48 overflow-hidden rounded-t-xl">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            priority={index === 0}
            unoptimized={typeof project.image === 'string' && project.image.startsWith('http')}
          />
        </div>
        <div className="p-4 sm:p-6 flex flex-col flex-grow">
          <h3 className="text-lg sm:text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
            {project.title}
          </h3>
          <p className="text-gray-400 mb-4 text-sm sm:text-base flex-grow">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-0.5 sm:py-1 text-xs sm:text-sm text-cyan-400 bg-cyan-900/20 rounded-full border border-cyan-800/50"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row sm:space-x-4 gap-2 sm:gap-0 mt-auto">
            <a
              href={project.link}
              onClick={(e) => console.log('Live link clicked:', project.link)}
              className="px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 text-center active:scale-95 touch-manipulation cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View live demo of ${project.title}`}
            >
              View Live
            </a>
            <a
              href={project.github}
              onClick={(e) => console.log('Code link clicked:', project.github)}
              className="px-4 py-2 text-sm font-semibold text-cyan-400 border border-cyan-500 rounded-full hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105 text-center active:scale-95 touch-manipulation cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View source code of ${project.title} on GitHub`}
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
    <section id="projects" className="relative">
      {/* Background accents */}
      <div className="absolute top-0 right-0 bg-blue-500/5 rounded-full blur-3xl z-0 bg-blur-md"></div>
      <div className="absolute bottom-0 left-0 bg-purple-500/5 rounded-full blur-3xl z-0 bg-blur-md"></div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              Featured Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto"></div>
        </motion.div>

        <div className="responsive-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
