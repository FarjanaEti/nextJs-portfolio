"use client"
import { AnimatePresence } from 'framer-motion'
import React from 'react'
import Navbar from './navbar'
import { motion } from "framer-motion";
import { usePathname } from 'next/navigation';

export default function TransitionProvider({children}) {
      const pathName = usePathname();
      console.log(pathName)                        
  return (
     <AnimatePresence mode='wait'>  {/* //1st jabe tarpor 2nd */}
        <div key={pathName} className="w-screen min-h-screen bg-gradient-to-b from-blue-50 to-red-100">
    {/* //first black page from top to bottom */}
    <motion.div
          className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
    {/* showing pathname */}
        <motion.div
          className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-50 w-fit h-fit"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {pathName.substring(1)}
        </motion.div>

  {/* //2nd black page bottom to top and visible the original path */}
         <motion.div
          className="h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-30"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
        />
                 <div className="h-24">
                  <Navbar></Navbar>
                 </div>
                <div className="min-h-[calc(100vh-6rem)]">{children}</div>
        
                </div>                      
     </AnimatePresence>
  )
}
