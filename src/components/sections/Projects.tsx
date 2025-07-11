// components/Projects.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import thumbnailPort from "../../assets/thumnail port.png"; // Ensure this file exists
import thumbnailPort2 from "../../assets/Feature g.png"; // Ensure this file exists
import thumbnailPort3 from "../../assets/Feature g (1).png"; // Ensure this file exists
import thumbnailPort4 from "../../assets/Feature g4.png"; // Ensure this file exists
import thumbnailPort5 from "../../assets/Feature 5.png"; // Ensure this file exists
import { StaticImageData } from "next/image";

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

// Sample project data
const projects: Project[] = [
  {
    title: "1. Active-Tracker",
    description:
      "A full-stack application built with React-native, Expo-Go, and Firebase. Features real-time location updates and responsive design.",
    tags: ["Expo-Go", "React-native", "Firebase", "Notifee", "Google-Maps"],
    image: thumbnailPort,
    link: "https://play.google.com/store/apps/details?id=com.deepkm.Live_Tracker",
    github: "https://github.com/kisanms/Live_Tracker",
  },
  {
    title: "2. Ghar Seva App",
    description:
      "A Home Service App built with React Native, Hygraph, MongoDB. It allows users to book home services easily.",
    tags: ["React-Native", "GrapghQL", "Hygrapgh", "MongoDB", "Clerk"],
    image: thumbnailPort2,
    link: "https://www.linkedin.com/posts/kisansmajumdar_techinnovation-teamwork-reactnative-activity-7271471986587938816-kJka?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEWTvooB-46p3owaCuS3o3Dz2VmnvqRWo8M", // Update with actual link
    github: "https://github.com/kisanms/Home_Service_App", // Update with actual link
  },
  {
    title: "3. Crosspix-Wallpaper App",
    description:
      "An AI-generated images through PixaBay API which can be use for wallpaper, with Responsive design and Mansoory Layout (Shopify).",
    tags: ["React-Native", "Pixabay", "Expo", "TailwindCSS", "Mansoory"],
    image: thumbnailPort3,
    link: "https://crosspix-wallpaper.netlify.app/home", // Update with actual link
    github: "https://github.com/kisanms/Crosspix_Wallpaper_App", // Update with actual link
  },
  {
    title: "4. Edit-Expense App",
    description:
      "A platform where we can track our Projects, Income, Expense and Profit.",
    tags: ["React-Native", "Firebase", "R-N Paper (UI)", "Expo-Go", "Formik"],
    image: thumbnailPort4,
    link: "https://sites.google.com/view/edit-expense/home", // Update with actual link
    github: "https://github.com/kisanms/editexpense", // Update with actual link
  },
  {
    title: "5. QRush - QR Code Generator",
    description:
      "A platform where users can generate and manage QR codes effortlessly.",
    tags: ["React-Native", "Supabase", "Web-App", "Expo-Go", "QR Code"],
    image: thumbnailPort5,
    link: "https://q-rush.netlify.app/", // Update with actual link
    github: "https://github.com/kisanms/QRush", // Update with actual link
  },
];

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group h-full z-10"
    >
      <div className="relative overflow-hidden rounded-xl bg-gray-900/50 border border-gray-800 backdrop-blur-sm h-full flex flex-col">
        {/* Project image */}
        <div className="relative w-full h-48 overflow-hidden rounded-t-xl">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            priority={index === 0}
          />
        </div>
        {/* Project details */}
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
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row sm:space-x-4 gap-2 sm:gap-0 mt-auto z-20">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 text-center cursor-pointer z-20"
              aria-label={`View live demo of ${project.title}`}
            >
              View Live
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-semibold text-cyan-400 border border-cyan-500 rounded-full hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105 text-center cursor-pointer z-20"
              aria-label={`View source code of ${project.title} on GitHub`}
            >
              View Code
            </a>
          </div>
        </div>
        {/* Animated border effect */}
        <div className="absolute inset-0 border-2 border-transparent rounded-xl transition-all duration-300 group-hover:border-cyan-500/50 group-hover:shadow-lg group-hover:shadow-cyan-500/10 pointer-events-none z-0" />
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="relative">
      {/* Background accents */}
      <div className="absolute top-0 right-0 bg-blue-500/5 rounded-full blur-3xl z-0 bg-blur-md pointer-events-none" />
      <div className="absolute bottom-0 left-0 bg-purple-500/5 rounded-full blur-3xl z-0 bg-blur-md pointer-events-none" />

      {/* Main content */}
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
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto" />
        </motion.div>

        {/* Project grid */}
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
