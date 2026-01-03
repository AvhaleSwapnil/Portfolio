import React from "react";

const About = () => {
  return (
    <div className="bg-black text-white py-16 md:py-24" id="about">
      <div className="container mx-auto px-6 md:px-16 lg:px-24">

        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Me</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center md:space-x-24">

          {/* Image Side */}
          <div className="w-full md:w-5/16 mb-12 md:mb-0 relative">
            <img
              src="/assets/mypic.jpeg"
              alt="Profile"
              className="relative w-full h-[400px] object-cover rounded-2xl z-10"
            />
          </div>

          {/* Content Side */}
          <div className="w-full md:w-7/12 flex flex-col justify-center">
            <p className="text-xl leading-relaxed text-gray-300 mb-8 text-justify">
              I am a passionate <span className="text-green-400 font-semibold">Software Engineer</span> with a deep focus on crafting modern, high-performance web applications. My journey is defined by a relentless drive to solve complex problems through clean and efficient code.
            </p>

            {/* Skills Progress Bars */}
            <div className="space-y-6 pt-4">

              {/* Skill Item */}
              <div className="group">
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-300">Frontend Development (React, Next.js)</span>
                  <span className="text-green-400">95%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full w-[95%] shadow-[0_0_10px_rgba(74,222,128,0.5)] transform origin-left transition-transform duration-1000 scale-x-0 group-hover:scale-x-100 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}></div>
                </div>
              </div>

              {/* Skill Item */}
              <div className="group">
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-300">Styling (Tailwind CSS, CSS3)</span>
                  <span className="text-green-400">90%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full w-[90%] shadow-[0_0_10px_rgba(74,222,128,0.5)] transform origin-left transition-transform duration-1000 scale-x-0 group-hover:scale-x-100 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}></div>
                </div>
              </div>

              {/* Skill Item */}
              <div className="group">
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-300">JavaScript / TypeScript</span>
                  <span className="text-green-400">85%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full w-[85%] shadow-[0_0_10px_rgba(74,222,128,0.5)] transform origin-left transition-transform duration-1000 scale-x-0 group-hover:scale-x-100 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}></div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6 mt-12 text-center border-t border-gray-800 pt-8">
              <div>
                <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  1+
                </h3>
                <p className="text-sm text-gray-400 mt-1">Years Experience</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  10+
                </h3>
                <p className="text-sm text-gray-400 mt-1">Projects Built</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  5+
                </h3>
                <p className="text-sm text-gray-400 mt-1">Happy Clients</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
