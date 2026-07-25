import React from "react";
import Tilt from "react-parallax-tilt";
import Typewriter from "typewriter-effect";
import { loadSlim } from "@tsparticles/slim";
import profileImage from "../../assets/vicky.jpeg";

const About = () => {
  
  return (
    <section
      id="about"
      className="relative overflow-hidden min-h-[90vh] w-full flex items-center py-16 px-[7vw] lg:px-[15vw] font-sans mt-8 bg-transparent"
    >
      {/* Dynamic Animated Particles Background - Standard Container layout */}

      {/* Ambient Neo-Glow Filters (Safe for Chrome rendering engine) */}
      <div className="absolute top-1/4 left-[-10%] -z-10 h-[450px] w-[450px] rounded-full bg-purple-600/15 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-10%] -z-10 h-[500px] w-[500px] rounded-full bg-indigo-600/15 blur-[150px] pointer-events-none" />

      <div className="w-full flex flex-col-reverse md:flex-row justify-between items-center gap-12 md:gap-8 z-10 relative">
        {/* Left Layout (Content Block) */}
        <div className="md:w-1/2 text-center md:text-left">
          {/* Status Badge */}

          <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Hi, I am
          </h1>

          <h2 className="text-5xl sm:text-7xl md:text-6xl lg:text-4xl font-black mb-8 tracking-tight leading-none bg-gradient-to-r from-white via-slate-100 to-purple-400 bg-clip-text text-transparent">
            Vicky Kumar Gupta
          </h2>

          <h3 className="flex flex-wrap justify-center md:justify-start items-center text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-slate-300 min-h-[44px]">
            <span className="font-medium text-slate-400 ">I am a</span>
            <span className="text-[#8245ec] ml-2.5 font-extrabold bg-gradient-to-r from-[#8245ec] via-[#a855f7] to-[#c084fc] bg-clip-text text-transparent">
              <Typewriter
                options={{
                  strings: [
                    "Frontend Developer",
                    "React Developer",
                    "JavaScript Developer",
                    "Web Developer",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 70,
                  deleteSpeed: 40,
                }}
              />
            </span>
          </h3>

          <p className="text-base sm:text-lg text-slate-400 max-w-xl mb-10 leading-relaxed font-light">
            Hi, I'm{" "}
            <span className="text-white font-semibold">Vicky Kumar Gupta</span>,
            a passionate{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300 font-semibold">
              Frontend Developer
            </span>{" "}
            who loves building modern, responsive, and user-friendly web
            applications. I specialize in{" "}
            <span className="text-white font-medium">
              HTML, CSS, JavaScript, React.js, and Tailwind CSS
            </span>{" "}
            to create clean, fast, and engaging user interfaces. I enjoy solving
            real-world problems, integrating REST APIs, and continuously
            learning new technologies to improve my skills as a developer.
          </p>

          <a
            href="https://drive.google.com/file/d/18bd2TDih1KdqpORZx2le90gEwgg58gM5/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-bold text-white rounded-full group bg-gradient-to-br from-[#8245ec] to-[#a855f7] hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-800 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-[0_0_25px_rgba(130,69,236,0.4)]"
          >
            <span className="relative px-8 py-3.5 transition-all duration-300 bg-zinc-950/90 rounded-full group-hover:bg-opacity-0 tracking-widest text-sm font-black uppercase">
              Download CV
            </span>
          </a>
        </div>

        {/* Right Layout (Cyberpunk Avatar Frame) */}
        <div className="md:w-1/2 flex justify-center md:justify-end flex-col md:flex-row-reverse">
          <div className="relative group">
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-[#8245ec] via-[#a855f7] to-indigo-500 opacity-30 blur-xl group-hover:opacity-75 group-hover:blur-2xl transition duration-700"></div>

            <Tilt
              className="relative w-44 h-44 sm:w-68 sm:h-68 md:w-[26rem] md:h-[26rem] lg:w-[28rem] lg:h-[28rem] border-[3px] border-white/10 rounded-full overflow-hidden bg-gradient-to-b from-zinc-900 to-black p-1 shadow-2xl backdrop-blur-sm"
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1000}
              gyroscope={true}
            >
              <div className="w-full h-full rounded-full overflow-hidden relative ">
                <div className=" absolute inset-0 bg-gradient-to-t from-purple-950/20 via-transparent to-transparent z-10 pointer-events-none" />
                <img
                  src={profileImage}
                  alt="Vicky Gupta"
                  title="Vicky"
                  className="w-full h-full rounded-full object-cover transform scale-100 transition-transform duration-700 group-hover:scale-105 filter contrast-[1.03] brightness-[0.98]"
                />
              </div>
            </Tilt>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
