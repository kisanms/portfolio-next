"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const techWords = [
    "Full Stack Developer",
    "Problem Solver",
    "Tech Enthusiast",
    "Software Engineer"
  ];

  // Rotating words effect
  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % techWords.length);
    }, 3000);

    return () => clearInterval(wordInterval);
  }, [techWords.length]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 md:top-20 left-5 md:left-10 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow bg-blur-md"></div>
        <div className="absolute bottom-10 md:bottom-20 right-5 md:right-10 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow bg-blur-md"></div>
      </div>

      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-bold mb-4 md:mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              Hello, I&apos;m Kisan Majumdar
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-semibold mb-6 md:mb-8 min-h-[3.5rem]"
        >
          <span className="text-gray-300">I&apos;m a </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            {techWords[currentWordIndex]}
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-400 max-w-2xl mx-auto mb-8 md:mb-12"
        >
          Passionate about creating innovative solutions and building cutting-edge applications.
          Let&apos;s turn ideas into reality through elegant code.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="px-6 sm:px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 sm:px-8 py-3 bg-transparent border-2 border-cyan-500 rounded-full text-cyan-400 font-semibold hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Scroll indicator - hide on small mobile screens */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
        >
          <div className="w-5 h-9 sm:w-6 sm:h-10 border-2 border-cyan-500 rounded-full flex justify-center p-1">
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-cyan-500 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
