import React from 'react'
import { SkillsInfo } from '../../constants'
import Tilt from "react-parallax-tilt";
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-1 px-5 sm:px-8 md:px-12 lg:px-20 xl:px-28 font-sans bg-skills-gradient"
    >
      {/* Section Title */}
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-wide">
          SKILLS
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#8245ec] to-[#a855f7] mx-auto mt-4 rounded-full"></div>
        <p className="max-w-3xl mx-auto mt-6 sm:text-lg text-slate-400 leading-8 text-base">
          My technical expertise includes modern frontend and backend
          technologies, development tools, and frameworks used to create
          responsive, scalable, and high-performance web applications. I am
          passionate about writing clean, maintainable code and continuously
          expanding my knowledge by learning new technologies and building
          real-world projects.
        </p>
      </div>
      {/* Skill Categories */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-7xl mx-auto py-10">
        {SkillsInfo.map((category) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className=" w-full bg-zinc-900/60 backdrop-blur-xl p-6 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 shadow-[0_0_40px_rgba(130,69,236,0.1)]"
          >
            {/* Category Header */}
            <h3 className="text-lg sm:text-xl font-bold text-center text-white mb-6 border-b border-purple-500/20 pb-3">
              {category.title}
            </h3>

            {/* Chrome Engine Safe: Beautiful Flex Tags Wrap Layout */}
            <div className="flex flex-wrap items-center justify-center gap-4 w-full">
              {category.skills.map((skill) => (
                <Tilt
                  key={skill.name}
                  tiltMaxAngleX={20}
                  tiltMaxAngleY={20}
                  perspective={1000}
                  scale={1.05}
                  transitionSpeed={1000}
                  gyroscope={true}
                >
                  {/* Horizontal Pill Layout - Fixed Width & Chrome Stretch Protection */}
                  <div className="flex items-center gap-2 bg-zinc-950 hover:bg-purple-950/30 border border-zinc-800 hover:border-purple-500 rounded-lg py-2 px-3 transition-all duration-300 cursor-pointer shadow-lg min-w-[140px] sm:min-w-[160px]">
                    {/* Logo Frame with Strict Structural Sizing */}
                    <motion.div
                      whileHover={{ scale: 1.08, rotate: 2 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="w-5 h-5 object-contain"
                    >
                      <img
                        src={skill.logo}
                        alt={`${skill.name} logo`}
                        className="w-full h-full object-contain filter drop-shadow-[0_2px_6px_rgba(130,69,236,0.3)] group-hover:scale-110 transition-transform duration-300"
                      />
                    </motion.div>

                    {/* Text Area - Forced No-Wrap to guarantee it stays in one line */}
                    <span className="text-xs sm:text-sm font-semibold tracking-wide text-zinc-300 group-hover:text-white transition-colors duration-300 whitespace-nowrap">
                      {skill.name}
                    </span>
                  </div>
                </Tilt>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Skills
