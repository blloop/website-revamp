"use client";

import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="relative h-screen min-h-[40rem] flex flex-col items-center justify-center overflow-hidden">
      <div className="relative z-10 text-center pt-96">
        <h2 className="text-4xl md:text-6xl font-bold m-6 md:m-12">
          Building Beautiful, Seamless Interactions
        </h2>
        <a
          href="/projects"
          className="bg-[#859F3D] text-white px-8 py-3 rounded-full hover:bg-opacity-80 transition-colors"
        >
          Explore My Work
        </a>
      </div>
      <svg
        id="header-bg"
        className="absolute inset-0 md:w-full h-[48rem] -left-[50vw] md:left-0 w-[200vw]"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <defs>
          <linearGradient
            id="wave-gradient-1"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#859F3D" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#859F3D" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#859F3D" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient
            id="wave-gradient-2"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#6D8631" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#6D8631" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#6D8631" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient
            id="wave-gradient-3"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#4B6B27" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#4B6B27" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#4B6B27" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient
            id="wave-gradient-4"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#31511E" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#31511E" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#31511E" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        {[
          {
            d: "M0,45 Q20,40 40,50 T80,60 T120,50",
            stroke: "url(#wave-gradient-1)",
            strokeWidth: 1.25,
            duration: 6,
            delay: -4,
          },
          {
            d: "M0,48 Q25,60 50,50 T110,50",
            stroke: "url(#wave-gradient-2)",
            strokeWidth: 1,
            duration: 7.5,
            delay: 2,
          },
          {
            d: "M0,52 Q30,40 60,50 T120,60",
            stroke: "url(#wave-gradient-3)",
            strokeWidth: 1.5,
            duration: 6.5,
            delay: 0,
          },
          {
            d: "M0,55 Q20,70 60,50 T110,50",
            stroke: "url(#wave-gradient-4)",
            strokeWidth: 1.25,
            duration: 7,
            delay: -2,
          },
        ].map((wave, index) => (
          <motion.path
            key={index}
            d={wave.d}
            fill="none"
            stroke={wave.stroke}
            strokeWidth={wave.strokeWidth}
            initial={{ pathLength: 0, pathOffset: 1, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 1],
              pathOffset: [0, 0, 1],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: wave.duration,
              delay: wave.delay,
              repeat: Infinity,
              ease: "linear",
              times: [0, 0.8, 1],
            }}
          />
        ))}
      </svg>
    </header>
  );
}
