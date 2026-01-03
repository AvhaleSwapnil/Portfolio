"use client";
import React from "react";

const Hero = () => {
  return (
    <div className="bg-black text-white text-center min-h-screen py-24 md:py-16 flex flex-col justify-center relative overflow-hidden" id="home">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-green-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 animate-fade-in">
        <img
          src="/assets/mypic.jpeg"
          alt="Swapnil Avhale"
          className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-110 border-4 border-green-500/20 shadow-2xl animate-float"
        />
        <h1 className="text-4xl md:text-6xl font-bold font-sans tracking-tight mb-4">
          I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Swapnil Avhale
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 font-light mb-8 max-w-2xl mx-auto px-4">
          Software Engineer focused on delivering exceptional digital experiences through modern web technologies.
        </p>

        <div className="mt-8 flex justify-center gap-6">
          <a href="tel:+919561742305">
            <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold px-8 py-3 rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(74,222,128,0.5)]">
              Contact Me
            </button>
          </a>

          <button
            onClick={() => window.open("/Nadim - Front-End 8m exp.docx", "_blank")}
            className="bg-transparent border-2 border-green-400 text-green-400 font-semibold px-8 py-3 rounded-full transform transition-all duration-300 hover:bg-green-400/10 hover:scale-105"
          >
            Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
