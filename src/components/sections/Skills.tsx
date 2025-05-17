"use client";
import { motion } from "framer-motion";

// Type definitions
interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

interface SkillBarProps {
  skill: Skill;
  index: number;
}

interface SkillCategoryProps {
  category: SkillCategory;
  index: number;
}

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend Development",
    skills: [
      { name: "React/Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "HTML5/CSS3", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "JavaScript", level: 90 }
    ]
  },
  {
    name: "Backend Development",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 80 },
      { name: "Express.js", level: 85 },
      { name: "RESTful APIs", level: 90 },
      { name: "GraphQL", level: 75 }
    ]
  },
  {
    name: "Database & Cloud",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "AWS", level: 75 },
      { name: "Docker", level: 80 },
      { name: "Firebase", level: 85 }
    ]
  },
  {
    name: "Tools & Others",
    skills: [
      { name: "Git", level: 90 },
      { name: "CI/CD", level: 80 },
      { name: "Agile/Scrum", level: 85 },
      { name: "Testing", level: 80 },
      { name: "UI/UX Design", level: 75 }
    ]
  }
];

const SkillBar = ({ skill, index }: SkillBarProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="mb-3 sm:mb-4"
    >
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm sm:text-base text-gray-300">{skill.name}</span>
        <span className="text-xs sm:text-sm text-cyan-400">{skill.level}%</span>
      </div>
      <div className="h-1.5 sm:h-2 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 0.8, delay: index * 0.05 }}
          className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
        />
      </div>
    </motion.div>
  );
};

const SkillCategory = ({ category, index }: SkillCategoryProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-4 sm:p-6 hover:border-cyan-500/50 transition-all duration-300 h-full touch-manipulation"
    >
      <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
        {category.name}
      </h3>
      <div className="space-y-3 sm:space-y-4">
        {category.skills.map((skill, idx) => (
          <SkillBar key={skill.name} skill={skill} index={idx} />
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="relative">
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
              Technical Skills
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            A comprehensive overview of my technical expertise and proficiency levels
            across various technologies and tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory key={category.name} category={category} index={index} />
          ))}
        </div>

        {/* Additional skills cloud */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-12 text-center"
        >
          <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Additional Skills & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {[
              "VS Code",
              "Webpack",
              "Redux",
              "Jest",
              "Cypress",
              "Figma",
              "Material UI",
              "Bootstrap",
              "Sass",
              "npm",
              "Yarn",
              "Linux",
            ].map((skill: string, index: number) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-800/50 text-gray-300 text-xs sm:text-sm rounded-full border border-gray-700 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300 active:scale-95 touch-manipulation"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
