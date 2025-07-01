"use client"
import React, { useRef } from 'react'
import { motion, useInView, useScroll } from "framer-motion";
import Brain from '@/Component/brain';
import Image from 'next/image';

export default function AboutPage() {
 const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });
  const skillRef = useRef();
    const isSkillRefInView = useInView(skillRef, { margin: "-100px" });
  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

    return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
{/* main div */}
<div className="h-full overflow-scroll lg:flex" ref={containerRef}>
  {/* text container */}
   <div className='p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-56 lg:w-2/3 lg:pr-0 xl:w-1/2'>
    {/* biography container */}
      <div className='flex flex-col gap-12 justify-center'>
        {/* biography image will be here */}
         <Image
              src="https://i.ibb.co/Cs7ph5BW/9bf0f160-c5de-4553-a7be-90f3107088b6.jpg"
              alt=""
              width={112}
              height={112}
              className="w-28 h-28 rounded-full object-cover"
            />
       {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESC */}
            <p className='text-lg'>Hi, I’m Eti, a passionate and detail-oriented developer focused on building clean, user-friendly, and impactful digital experiences. From turning ideas into interactive interfaces to solving problems through code, I thrive on creating things that matter. I believe in continuous learning, purposeful design, and leaving every project better than I found it. Welcome to my portfolio — a reflection of where I’ve been, what I’ve built, and where I’m heading.</p>
          
           {/* BIOGRAPHY QUOTE */}
            <span className="italic">
              "Write code like you're writing your legacy — clean, bold, and with intention."
            </span>
              {/* BIOGRAPHY SIGN SVG*/}
            <div className="self-end">
           <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="130.000000pt" height="80.000000pt" viewBox="0 0 1380.000000 780.000000"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Created by potrace 1.16, written by Peter Selinger 2001-2019
</metadata>
<g transform="translate(0.000000,780.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M9381 5693 c-72 -37 -112 -97 -156 -233 -70 -217 -97 -384 -97 -600
0 -226 37 -428 136 -749 20 -63 34 -116 33 -117 -3 -3 -366 -109 -425 -124
-58 -15 -82 -41 -82 -88 0 -43 26 -78 66 -88 28 -7 47 -3 289 69 94 27 179 50
190 51 34 2 73 -174 140 -619 14 -93 37 -219 51 -280 14 -60 26 -121 26 -135
1 -47 -152 -292 -272 -435 -79 -93 -257 -270 -350 -346 -526 -433 -1543 -687
-2863 -716 l-298 -6 22 54 c59 147 207 617 339 1074 40 138 74 252 76 254 2 2
13 -4 25 -15 20 -18 46 -19 710 -19 l689 0 27 27 c38 38 37 92 -1 124 l-27 24
-690 0 c-379 0 -689 3 -689 7 0 3 41 151 91 327 113 400 235 844 284 1041 21
83 40 152 42 154 1 2 12 -4 24 -15 20 -17 36 -19 193 -17 426 7 828 35 1160
82 188 26 201 30 223 55 13 15 23 40 23 55 0 35 -32 77 -64 85 -14 3 -123 -7
-243 -24 -219 -29 -374 -44 -578 -55 -60 -3 -146 -8 -190 -10 -44 -3 -174 -7
-290 -11 -115 -4 -213 -8 -217 -11 -11 -6 -11 -2 17 132 14 66 28 157 31 202
7 78 6 82 -19 107 -53 53 -140 21 -150 -55 -41 -289 -125 -631 -369 -1494
-317 -1125 -524 -1801 -617 -2015 -22 -52 -41 -109 -41 -126 0 -40 39 -77 82
-79 18 0 46 -9 61 -19 27 -18 46 -19 325 -13 500 11 924 48 1347 118 403 67
795 173 1090 296 105 44 337 169 423 229 259 179 523 446 682 690 28 43 53 81
55 83 5 4 8 -3 65 -149 88 -222 234 -466 335 -558 109 -99 282 -162 449 -162
100 0 164 14 250 53 142 65 350 245 398 345 l26 52 35 -47 c18 -27 53 -77 77
-113 69 -103 131 -150 290 -217 113 -48 309 -121 330 -124 79 -9 132 81 83
140 -10 11 -87 47 -178 81 -210 80 -298 124 -336 169 -17 20 -77 101 -134 181
l-103 146 13 70 c48 251 68 791 46 1247 -13 268 -29 364 -74 434 -107 167
-295 145 -391 -45 -35 -69 -102 -287 -127 -410 -29 -148 -37 -391 -16 -532 37
-245 140 -492 309 -736 l49 -72 -32 -83 c-28 -74 -41 -92 -103 -152 -87 -84
-195 -158 -273 -187 -152 -57 -390 0 -495 119 -104 119 -241 385 -320 623 -49
148 -51 161 -39 191 44 104 114 330 135 438 40 196 48 277 55 548 l6 254 35
12 c118 41 276 132 354 203 30 27 36 39 36 73 0 29 -7 47 -25 64 -40 41 -75
33 -169 -35 -79 -57 -232 -137 -243 -126 -3 3 -14 87 -24 188 -46 458 -91 803
-119 914 -64 249 -172 387 -312 401 -45 4 -61 1 -107 -24z m136 -181 c36 -37
87 -141 108 -223 24 -90 32 -144 60 -394 55 -475 76 -682 73 -720 l-3 -39
-135 -43 c-74 -24 -139 -41 -144 -40 -5 2 -24 52 -43 112 -107 348 -145 594
-124 820 24 264 111 555 166 555 7 0 26 -13 42 -28z m1536 -1554 c29 -59 37
-174 44 -610 6 -382 -3 -650 -26 -783 l-6 -40 -22 35 c-47 76 -123 240 -151
325 -43 128 -63 263 -63 414 1 190 31 356 102 557 52 148 86 176 122 102z
m-1282 -75 c2 -320 -25 -569 -84 -763 l-13 -45 -12 65 c-6 36 -21 135 -32 220
-21 155 -58 341 -85 434 -25 82 -26 79 93 119 59 19 113 35 120 36 8 1 12 -19
13 -66z"/>
<path d="M11099 5097 c-21 -16 -39 -51 -39 -76 0 -12 -5 -21 -10 -21 -25 0
-60 -50 -60 -85 0 -38 35 -85 65 -85 8 0 15 -8 15 -18 0 -28 48 -95 87 -122
53 -36 130 -34 202 5 74 41 104 83 109 153 5 80 -20 108 -108 127 -36 8 -77
14 -91 15 -23 0 -27 5 -33 39 -10 66 -89 105 -137 68z"/>
</g>
          </svg>
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
         </div>

         {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                TypeScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                SCSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MongoDB
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                PostgreSQL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Node.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Nest.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Express.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Spring Boot
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                GraphQL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Apollo
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Redux
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Framer Motion
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Three.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                WebGL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Webpack
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Vite
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Docker
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                AWS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Firebase
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Git
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Figma
              </div>
            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>

        {/*main experience div*/}
        <div  className="flex flex-col gap-12 
        justify-center pb-48"   ref={experienceRef}>
       <motion.h1
              initial={{ x: "-300px" }}
               animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>

            {/*3 experience list and center line*/}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
            {/*first left experience and center line for left*/}
              <div className="flex justify-between h-48">
                {/* LEFT job*/}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                   Internships
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I led web development, offering expertise in JavaScript
                    frameworks.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2027 - Future
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Apple
                  </div>
                </div>

                  {/* CENTER  line*/}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>

                {/* RIGHT job*/}
                <div className="w-1/3 "></div>
              </div>
             {/*first left experience and center line for left ends */}

              {/*middle right EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>

                  {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                   Personal Projects
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    Developed a micro job marketplace where users 
                    can offer and complete small tasks to earn money
                    .{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="px-3 text-red-400 text-sm font-semibold">
                    Jan 2025 – Mar 2025{" "}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Earnify
                  </div>
                </div>
              </div>
              {/*middle right EXPERIENCE LIST ITEM end*/}

        {/*last left EXPERIENCE LIST ITEM  start*/}
              <div className="flex  justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Academic Project{" "}
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    Built a feature-rich e-commerce platform with product listing, cart, and checkout functionalities.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                     2025- Present{" "}
                  </div>
                   <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    NeoMartX
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/*last left EXPERIENCE LIST ITEM ends*/}

            </motion.div>


          </div>
          
        </div>
  {/* motion brain image container */}
  <div className='hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2'>
   <Brain scrollYProgress={scrollYProgress}></Brain>
  </div>
</div>
    </motion.div>
  )
}
