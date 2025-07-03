"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";


  const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Movie Portal",
    desc: "A dynamic platform that allows users to explore, view, and manage movies. Features include detailed movie listings, user authentication, adding and removing favorites, and private routes to enhance personalized experiences. Designed for smooth navigation, it supports movie uploads and favorites management linked to user accounts.",
    img: "https://i.ibb.co/N24C9fZp/Screenshot-2025-02-07-125100.png",
    link: "https://movie-buzz-e0a92.web.app/",
    gitlink: "https://github.com/username/movieportal-client",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "MIcro-Job & Earn",
    desc: "A task-based earning platform where users can post or complete small online jobs for money. Jobs include surveys, data entry, app testing, and more. The app features job listing filters, wallet-based earnings, user profiles, and job completion tracking — offering a flexible way for users to earn through micro-tasks",
    img: "https://i.ibb.co/HTPf095K/Screenshot-2025-02-07-134919.png",
    link: "https://assignment-12-6a1a7.web.app/",
    gitlink: "https://github.com/Programming-Hero-Web-Course4/b10a12-client-side-FarjanaEti",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Food Shearing App",
    desc: "A community-driven app that enables users to share surplus food with others in need. Users can post available food, browse listings by location or availability, and contact donors directly. Aimed at reducing food waste and supporting the community, it includes features like user verification, food categories, and request tracking.",
    img: "https://i.ibb.co/Kp1LNrMh/Screenshot-2025-02-05-180952.png",
    link: "https://food-shearing.web.app/",
    gitlink: "https://github.com/programming-hero-web-course2/b10a11-client-side-FarjanaEti",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Eco-Adventure Travel Tour",
    desc: " Purpose of this project The primary purpose of this project is to promote sustainable and eco-friendly travel by educating and inspiring users about unique, nature-focused adventure experiences. Some key objective are: 1. Enhance User Experience with Technology 2. Bridge the Gap Between Experts and Travelers 3. Foster Community Engagement 4. Inspire and Educate Users 5. Promote Eco-Tourism",
    img: "https://i.ibb.co/KzyRK2T9/Screenshot-2025-07-03-205857.png",
    link: "https://assignment-number-09.web.app/category",
    gitlink: "https://github.com/FarjanaEti/assignment-9",
    
  },
];
const PortfolioPage = () => {

  const ref = useRef();
//scrollYProgress==	Gives a live value between 0 and 1 based on scroll
  const { scrollYProgress } = useScroll({ target: ref });
  // target: ref == Track how much the element attached to ref has been scrolled within the viewport.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);//slides left as you scroll down


  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* main div */}
      <div className="h-[600vh] relative" ref={ref}>
       {/* my work div */}
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
         <h1 className="mr-4">My Works</h1>
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
       
         {/* project section main div */}
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
         {/*for showing 4 project */}
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
          //  for each project
             <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-2xl lg:text-4xl xl:text-6xl">
                    {item.title}
                  </h1>
                  <div className="relative  w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>

                   {/* buttons section */}
                  <div className="flex justify-end">
                  <Link href={item.link} >
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-4 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">Live Link</button>
                  </Link>
                  <Link href={item.gitlink} >
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-4 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">Github link</button>
                  </Link>
                  <button className="p-2 text-sm md:p-4 md:text-md lg:p-4 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">View More</button>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* last div for hire me */}
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;