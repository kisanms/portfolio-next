"use client";
import { motion } from "framer-motion";

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  return (
    <section id="about" className="py-20 relative">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl z-0"></div>

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
              About Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <p className="text-gray-300 text-lg">
              I'm a passionate Software Engineer with a strong foundation in full-stack development
              and a keen interest in creating innovative solutions to complex problems.
            </p>
            <p className="text-gray-300 text-lg">
              My journey in technology began with a curiosity about how things work,
              which led me to pursue a career in software development. I specialize in
              building scalable web applications and enjoy working with modern technologies.
            </p>
            <p className="text-gray-300 text-lg">
              When I'm not coding, I'm constantly learning new technologies and contributing
              to the developer community through open-source projects and knowledge sharing.
            </p>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
              Tech Stack
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="text-cyan-400 font-semibold">Frontend</h4>
                <ul className="text-gray-300 space-y-1">
                  <li>React / Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>HTML5 / CSS3</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="text-cyan-400 font-semibold">Backend</h4>
                <ul className="text-gray-300 space-y-1">
                  <li>Node.js</li>
                  <li>Python</li>
                  <li>MongoDB</li>
                  <li>PostgreSQL</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="text-cyan-400 font-semibold">Tools</h4>
                <ul className="text-gray-300 space-y-1">
                  <li>Git</li>
                  <li>Docker</li>
                  <li>VS Code</li>
                  <li>Postman</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="text-cyan-400 font-semibold">Other Skills</h4>
                <ul className="text-gray-300 space-y-1">
                  <li>AWS</li>
                  <li>CI/CD</li>
                  <li>Agile</li>
                  <li>Testing</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
