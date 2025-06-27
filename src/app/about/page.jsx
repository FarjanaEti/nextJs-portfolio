"use client"
import React from 'react'
import { motion } from "framer-motion";
import { FaLaptopCode, FaMusic, FaLightbulb, FaSmile } from "react-icons/fa";
export default function AboutPage() {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >

    <div id='about' className="max-w-7xl mt-20 mx-auto p-10 bg-gradient-to-r from-[#FFCDB2] to-[#FCE7C8] shadow-xl rounded-lg">
      <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-6">
        About Me
      </h2>

      {/* Intro */}
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-gray-700 text-lg text-center mb-6"
      >
        Hello!  I’m a passionate <span className="font-semibold">CSE student</span> currently exploring the 
        world of <span className="text-blue-600 font-semibold">web development</span>. 
        I have worked with <span className="font-semibold">C</span> and <span className="font-semibold">C++</span>, 
        but when I discovered <span className="font-semibold text-yellow-600">JavaScript</span> and 
        <span className="font-semibold text-yellow-600"> React</span>, I found them more exciting than any other language!
      </motion.p>

      {/* Cards Container (Centered) */}
      <div className="flex flex-wrap gap-6 justify-center">
        {/* Programming Journey */}
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 100 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
          className="bg-white p-6 rounded-lg shadow-lg w-[300px] md:w-[500px] flex-shrink-0 hover:scale-105 transition-transform duration-300"
        >
          <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <FaLaptopCode className="text-blue-600" /> My Programming Journey
          </h3>
          <p className="text-gray-700 mt-2">
            I started with <span className="font-semibold">C and C++</span>, then explored{" "}
            <span className="font-semibold">HTML, CSS, and JavaScript</span>. Now, I am diving deeper into{" "}
            <span className="font-semibold">React.js & Next.js</span>.
          </p>
        </motion.div>

        {/* What I Enjoy Working On */}
        <motion.div
          initial={{ x: 100 }}
          animate={{ x: -50 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
          className="bg-white p-6 rounded-lg shadow-lg w-[300px] md:w-[500px] flex-shrink-0 hover:scale-105 transition-transform duration-300"
        >
          <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <FaLightbulb className="text-yellow-500" /> What I Enjoy Working On
          </h3>
          <p className="text-gray-700 mt-2">
            I love creating <span className="font-semibold">user-friendly web applications</span>, 
            working with **API integrations**, and exploring new technologies.
          </p>
        </motion.div>

        {/* Hobbies */}
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 100 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
          className="bg-white p-6 rounded-lg shadow-lg w-[300px] md:w-[500px] flex-shrink-0 hover:scale-105 transition-transform duration-300"
        >
          <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <FaMusic className="text-pink-500" /> Beyond Programming
          </h3>
          <ul className="list-disc pl-6 text-gray-700 mt-2">
            <li>🎵 Listening to music</li>
            <li>💻 Exploring new tech trends</li>
          </ul>
        </motion.div>

        {/* Personality */}
        <motion.div
          initial={{ x: 100 }}
          animate={{ x: -50 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
          className="bg-white p-6 rounded-lg shadow-lg w-[300px] md:w-[500px] flex-shrink-0 hover:scale-105 transition-transform duration-300"
        >
          <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <FaSmile className="text-green-500" /> My Personality
          </h3>
          <p className="text-gray-700 mt-2">
            I am <span className="font-semibold">curious, detail-oriented</span>, and enjoy **continuous learning**.  
            I take my work seriously, but I also **value creativity & fun** along the way! 
          </p>
        </motion.div>
      </div>
    </div>
    </motion.div>
  )
}
