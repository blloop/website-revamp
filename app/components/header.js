'use client'

import { motion } from 'framer-motion'

export default function Header() {
  return (
    <header className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-12">Building Beautiful, Seamless Interactions</h2>
        <a href="/projects" className="bg-[#859F3D] text-white px-8 py-3 rounded-full hover:bg-opacity-80 transition-colors">
          Explore My Work
        </a>
      </div>
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="wave-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#859F3D" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#859F3D" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#859F3D" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="wave-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#31511E" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#31511E" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#31511E" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        {[
          { d: "M0,50 Q20,40 40,60 T80,40 T120,50", stroke: "url(#wave-gradient-1)", strokeWidth: 0.75, duration: 6, delay: 0 },
          { d: "M0,50 Q25,60 50,40 T100,60", stroke: "url(#wave-gradient-2)", strokeWidth: 1, duration: 5, delay: 3 },
          { d: "M0,50 Q10,20 20,60 T40,30 T60,50", stroke: "url(#wave-gradient-2)", strokeWidth: 1.25, duration: 9, delay: 0 },
          { d: "M0,50 Q30,70 60,40 T120,70", stroke: "url(#wave-gradient-1)", strokeWidth: 1.5, duration: 7.5, delay: 3 },
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
              pathOffset: [1, 0, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: wave.duration,
              delay: wave.delay,
              repeat: Infinity,
              ease: "linear",
              times: [0, 0.8, 1]
            }}
          />
        ))}
      </svg>
    </header>
  )
}
