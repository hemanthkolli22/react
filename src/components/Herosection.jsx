import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <header className="relative min-h-screen bg-gradient-to-r from-[#0f172a] to-[#1e293b] flex items-center justify-center px-6 overflow-hidden">
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-cyan-500 opacity-20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-500 opacity-20 rounded-full blur-3xl animate-pulse" />

      <div className="relative z-10 text-center max-w-4xl space-y-10 text-white">
        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight">
          Step Into Your <span className="text-cyan-400">Future</span> with <br />
          <span className="text-blue-400">Job HUB</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
          Discover top roles, connect with elite companies, and level up your career — all in one place.
        </p>
        <Link to="/jobcards">
          <button className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-white text-lg font-bold rounded-full shadow-xl transition-all duration-300">
            Explore Jobs
          </button>
        </Link>
        <Link to="/jobpositing">
          <button className="px-8 py-4 ml-3 bg-cyan-500 hover:bg-cyan-400 text-white text-lg font-bold rounded-full shadow-xl transition-all duration-300">
            Post Jobs
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Hero;
