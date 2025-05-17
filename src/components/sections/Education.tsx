"use client";
import { motion } from "framer-motion";

interface EducationEntry {
  institution: string;
  degree: string;
  date: string;
  description: string;
}

const Education = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  const educationData: EducationEntry[] = [
    {
      institution: "University of Technology",
      degree: "Master of Computer Science",
      date: "2020 - 2022",
      description: "Specialized in Artificial Intelligence and Machine Learning with focus on neural networks and computer vision systems."
    },
    {
      institution: "City College",
      degree: "Bachelor of Science in Computer Science",
      date: "2016 - 2020",
      description: "Core curriculum in algorithms, data structures, and software engineering. Senior project on web application development."
    },
    {
      institution: "Tech Institute",
      degree: "Certificate in Web Development",
      date: "2015",
      description: "Intensive program covering modern front-end frameworks and responsive design principles."
    }
  ];

  return (
    <section id="education" className="py-20 relative">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              Education
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-8 bg-gray-900/50 p-6 rounded-lg border border-gray-800 shadow-lg"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-4 rounded-full h-16 w-16 flex items-center justify-center text-white font-bold text-xl">
                    {item.date.includes(" - ") 
                      ? item.date.split(" - ")[0].slice(-2) 
                      : item.date.slice(-2)}
                  </div>
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-white">{item.institution}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-1">
                    <h4 className="text-cyan-400 font-medium">{item.degree}</h4>
                    <span className="text-gray-400 text-sm">{item.date}</span>
                  </div>
                  <p className="mt-2 text-gray-300">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

