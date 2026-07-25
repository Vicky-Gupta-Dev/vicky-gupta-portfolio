import React, { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    // Chrome safe body scroll lock
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    // Chrome safe body scroll unlock
    document.body.style.overflow = "unset";
  };

  return (
    <section
      id="projects"
      className="py-2 px-[6vw] md:px-[8vw] lg:px-[12vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-wider text-white uppercase">
          Projects
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-zinc-400 mt-4 text-base sm:text-lg max-w-xl mx-auto font-normal">
         Explore a collection of my real-world projects that highlight my skills in designing and developing modern web applications. From responsive user interfaces to full-stack solutions, each project demonstrates my passion for clean code, performance, problem-solving, and creating exceptional user experiences.
        </p>
      </div>

      {/* Projects Grid - Balanced Layout & Uniform Heights */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch w-full max-w-7xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="flex flex-col h-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-xl rounded-2xl overflow-hidden cursor-pointer hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-1.5 transition-all duration-300 group"
          >
            <div className="p-4 aspect-video w-full overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded-xl filter brightness-[0.9] group-hover:scale-103 transition-transform duration-500"
              />
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300 line-clamp-1">
                {project.title}
              </h3>
              <p className="text-sm text-zinc-400 font-light leading-relaxed mb-6 line-clamp-3 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-zinc-950 text-purple-400 border border-purple-500/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Chrome Safe Modal Container */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 transition-all duration-300"
          onClick={handleCloseModal}
        >
          {/* Modal Main Panel - added max-h & overflow-y-auto for Chrome layout safety */}
          <div
            className="bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative flex flex-col"
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside modal
          >
            {/* Header Sticky Action Area */}
            <div className="sticky top-0 right-0 left-0 flex justify-end p-4 bg-zinc-900/90 backdrop-blur-md z-30 border-b border-zinc-800/40">
              <button
                onClick={handleCloseModal}
                className="text-zinc-400 hover:text-white text-2xl font-light h-8 w-8 flex items-center justify-center rounded-full bg-zinc-950 border border-zinc-800 transition-colors"
              >
                &times;
              </button>
            </div>

            {/* Scrollable Dynamic Body Content */}
            <div className="p-6 sm:p-8 flex flex-col">
              {/* Image Frame Wrapper */}
              <div className="w-full aspect-video bg-zinc-950 rounded-xl overflow-hidden shadow-inner border border-zinc-800/60 mb-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Layout Meta data */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 tracking-tight">
                {selectedProject.title}
              </h3>

              <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              {/* Skill Tags Wrap Box */}
              <div className="flex flex-wrap gap-2 mb-8">
                {selectedProject.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs font-semibold px-3 py-1 rounded-full bg-zinc-950 text-purple-300 border border-purple-500/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Sticky Action Footer Anchors */}
              <div className="grid grid-cols-2 gap-4 mt-auto pt-6 border-t border-zinc-800/80">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center py-3 px-4 rounded-xl text-sm font-bold text-zinc-300 bg-zinc-950 border border-zinc-800 hover:border-purple-500/40 hover:text-white transition-all duration-300 tracking-wider uppercase"
                >
                  View Code
                </a>
                <a
                  href={selectedProject.webapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center py-3 px-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg hover:brightness-110 hover:shadow-purple-500/20 transition-all duration-300 tracking-wider uppercase"
                >
                  View Live
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
