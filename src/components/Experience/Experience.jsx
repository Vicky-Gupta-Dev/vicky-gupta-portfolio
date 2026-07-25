import React from "react";
import { experiences } from "../../constants"; // Import your data

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-4 pb-2 px-[6vw] md:px-[8vw] lg:px-[15vw] font-sans bg-skills-gradient relative overflow-hidden clip-path-custom-2"
    >
      {/* Ambient Backdrop Glow for Premium Look */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[150px] pointer-events-none" />

      {/* Section Title */}
      <div className="text-center mb-20 relative z-10">
        <h2 className="text-3xl sm:text-4xl font-black text-white tracking-wider uppercase">
          EXPERIENCE
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#8245ec] to-[#a855f7] mx-auto mt-4 rounded-full"></div>
        <p className="text-zinc-400 mt-4 text-base sm:text-lg font-medium max-w-xl mx-auto">
          My journey as a developer includes internships, freelance work, and
          personal projects where I built responsive, scalable, and
          user-friendly web applications. I have gained hands-on experience with
          modern web technologies, collaborated on real-world projects, and
          continuously improved my technical and problem-solving skills.
        </p>
      </div>

      {/* Experience Timeline Container */}
      <div className="relative w-full max-w-5xl mx-auto flex flex-col justify-center">
        {/* Chrome Engine Safe: Perfect Center Vertical Line */}
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#8245ec] via-purple-500/40 to-transparent transform sm:-translate-x-1/2 z-0"></div>

        {/* Experience Entries */}
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`relative w-full flex flex-col sm:flex-row items-start sm:items-center mb-16 z-10 ${
              index % 2 === 0 ? "sm:flex-row-reverse" : ""
            }`}
          >
            {/* 1. Timeline Circle Node (Chrome Flex Protected Alignment) */}
            <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-20 shrink-0 select-none">
              <div className="bg-zinc-950 border-[3px] border-[#8245ec] w-10 h-10 sm:w-14 sm:h-14 rounded-full flex justify-center items-center shadow-[0_0_15px_rgba(130,69,236,0.5)] overflow-hidden">
                <img
                  src={experience.img}
                  alt={experience.company}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* 2. Content Block Container (Proper 50% split to avoid text overflow) */}
            <div className="w-full sm:w-[50%] pl-14 sm:pl-0 sm:px-8 md:px-12">
              <div className="w-full p-5 sm:p-7 rounded-2xl border border-white/10 bg-zinc-900/70 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:border-purple-500/30 transition-all duration-300 hover:scale-[1.02] group cursor-pointer">
                {/* Header Profile Info inside Card */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-zinc-950 rounded-xl overflow-hidden border border-white/5 shrink-0 p-1 flex items-center justify-center">
                    <img
                      src={experience.img}
                      alt={experience.company}
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>

                  <div className="flex flex-col min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-purple-400 transition-colors duration-300 truncate">
                      {experience.role}
                    </h3>
                    <h4 className="text-xs sm:text-sm font-medium text-zinc-400 truncate">
                      {experience.company}
                    </h4>
                  </div>
                </div>

                {/* Date Display */}
                <div className="inline-block px-2.5 py-1 bg-white/5 rounded-md text-xs font-semibold text-purple-300 tracking-wide mb-4 border border-white/5">
                  {experience.date}
                </div>

                {/* Description Text */}
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal mb-5 break-words">
                  {experience.desc}
                </p>

                {/* Skills Section Inside Card */}
                <div className="pt-4 border-t border-white/5">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2.5">
                    Skills Used:
                  </h5>
                  <div className="flex flex-wrap gap-1.5">
                    {experience.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="bg-purple-950/40 text-purple-300 border border-purple-500/20 px-3 py-1 text-[11px] font-semibold rounded-md tracking-wide whitespace-nowrap"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Spacer Block for Desktop Layout Balancing */}
            <div className="hidden sm:block sm:w-[50%]"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
