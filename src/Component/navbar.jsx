"use client";
import Image from 'next/image';
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './navLink';
import { motion } from "framer-motion";
const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

//1st line of menubar
const topBar = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  
//2nd line of menubar
  const centerBar = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
//3rd line of menubar
  const bottomBar = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  //for menu item 
  const menulist = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };
  //for menu item shows after 2 second
  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

export default function Navbar() {
  const [open,setOpen]=useState(false);
  return (
    <div className='h-full items-center justify-between flex px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
     {/* link for big screen */}
     <div className='hidden md:flex  gap-4 w-1/3'>
     {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
     </div>
     {/* logo in middle  */}
     <div className='md:hidden lg:flex lg:justify-center  w-1/3 xl:justify-center'>
      <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1">
            
            E <span className='text-amber-600'>T</span> I</span>
          <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
            .dev
          </span>
        </Link>
      </div>   
   {/* social  at right*/}
    <div className="hidden justify-end md:flex gap-4 w-1/3">
        <Link href="https://github.com/FarjanaEti">
          <Image src="/github.png" alt="" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/dribbble.png" alt="" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/instagram.png" alt="" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/facebook.png" alt="" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/pinterest.png" alt="" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/linkedin.png" alt="" width={24} height={24} />
        </Link>
      </div>
      {/*Responsive menu  */}
     <div className='md:hidden'>
      <button className='w-10 h-8 flex z-50 relative flex-col justify-between'
      onClick={()=>setOpen((prev)=>(!prev))}>
        <motion.div
            variants={topBar}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerBar}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomBar}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
      </button>
      {/* menu list */}
      {
        open && (
       <motion.div
            variants={menulist}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
          >
        {links.map((link)=>(
          <motion.div
                variants={listItemVariants}
                className=""
                key={link.title}
              >
          <Link href={link.url} >{link.title}</Link>
           </motion.div>
        ))}
      </motion.div>
        )
      }
      
      </div>                      
   </div>
  )
}
