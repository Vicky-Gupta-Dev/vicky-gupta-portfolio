import React from "react";
import { education } from "../../constants"; // Import the education data

const Education = () => {
  return (
    <section
      id="education"
      className="py-16 px-4 sm:px-[6vw] md:px-[8vw] font-sans bg-skills-gradient relative overflow-hidden clip-path-custom-3"
    >
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[300px] w-[300px] sm:h-[600px] sm:w-[600px] rounded-full bg-purple-600/5 blur-[100px] sm:blur-[160px] pointer-events-none" />

      {/* Section Title */}
      <div className="text-center mb-12 relative z-10">
        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-wider text-white uppercase">
          Education
        </h2>
        <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mt-3 rounded-full"></div>
        <p className="text-zinc-400 mt-3 text-sm sm:text-lg max-w-xl mx-auto font-normal px-2">
          My education has laid the foundation for my career as a Frontend
          Developer. By combining academic knowledge with self-learning and
          practical project experience, I have built strong expertise in modern
          web technologies, responsive design, and problem-solving while
          continuously improving my development skills.
        </p>
      </div>

      {/* Modern High-Fidelity Timeline Wrapper */}
      <div className="relative max-w-5xl mx-auto w-full">
        {/* Central Vertical Line (Safe for Left-Align on Mobile 339px, Center on Desktop) */}
        <div className="absolute left-4 sm:left-1/2 top-1 bottom-1 w-[2px] bg-gradient-to-b from-purple-500/80 via-indigo-500/30 to-zinc-800 transform sm:-translate-x-1/2 z-0" />

        {/* Education Entries */}
        {education.map((edu, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={edu.id}
              className={`relative flex flex-col sm:flex-row items-start sm:items-center mb-10 sm:mb-16 w-full z-10 ${
                isEven ? "sm:justify-start" : "sm:justify-end"
              }`}
            >
              {/* Timeline Center Node with Image - **CURSOR POINTER FIX** */}
              <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-zinc-900 border-2 border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.4)] flex items-center justify-center p-0.5 overflow-hidden transition-transform duration-300 hover:scale-110 z-20">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-full h-full object-cover rounded-full bg-white filter brightness-95"
                />
              </div>

              {/* Layout Content Card Wrapper */}
              <div
                className={`w-[calc(100%-2.25rem)] sm:w-[calc(50%-2.5rem)] ml-10 sm:ml-0 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-xl hover:border-purple-500/30 shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                  isEven ? "sm:mr-auto" : "sm:ml-auto"
                }`}
              >
                {/* Brand Frame for Institutional Logo & Meta Info */}
                <div className="flex items-center gap-3 sm:gap-4 mb-3 w-full">
                  {/* Card Inner Logo Frame (flex-shrink-0 keeps it visible at 339px) */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-zinc-800 border border-zinc-700/50 p-1 flex-shrink-0 flex items-center justify-center overflow-hidden shadow-md">
                    <img
                      src={edu.img}
                      alt={edu.school}
                      className="w-full h-full object-cover rounded"
                    />
                  </div>

                  <div className="flex-grow min-w-0">
                    <h3 className="text-sm sm:text-lg font-bold text-white tracking-tight leading-snug truncate">
                      {edu.degree}
                    </h3>
                    <h4 className="text-xs sm:text-sm font-medium text-zinc-400 truncate mt-0.5">
                      {edu.school}
                    </h4>
                  </div>
                </div>

                {/* Sub-meta badge layout */}
                <div className="flex items-center justify-between gap-2 mb-3 bg-zinc-950/40 border border-zinc-800/40 px-2.5 py-1 rounded-lg">
                  <span className="text-[11px] font-semibold text-purple-400">
                    Grade: {edu.grade}
                  </span>
                  <span className="text-[10px] font-medium text-zinc-500">
                    {edu.date}
                  </span>
                </div>

                {/* Structural Narrative Description */}
                <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed border-t border-zinc-800/60 pt-2 break-words hyphens-auto">
                  {edu.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
