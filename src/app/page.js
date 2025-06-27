"use client"
import Image from "next/image";
import { motion } from "framer-motion";
export default function HomePage() {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
    <div  className="flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
     {/* //left image */}
     <div className="relative w-full h-[300px] lg:w-1/2 lg:h-[600px]">
  <Image
  src="/p-1.png"
  alt="Portfolio"
  className="object-contain"
  fill
/>
</div>


     {/* right text */}
      <div className="w-full lg:w-1/2 flex flex-col gap-8 items-center justify-center py-8 lg:py-0">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Crafting Digital Experiences, Designing Tomorrow.
          </h1>
          {/* DESC */}
          <p className="md:text-xs">
            Welcome to my digital canvas, where innovation and creativity
            converge. With a keen eye for aesthetics and a mastery of code, my
            portfolio showcases a diverse collection of projects that reflect my
            commitment to excellence.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              View My Work
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black">
              Contact Me
            </button>
          </div>
        </div>

    </div>
    </motion.div>
  );
}
