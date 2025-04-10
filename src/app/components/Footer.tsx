"use client";
import Link from "next/link";
import { links } from "./Header";
import Image from "next/image";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";
import { containerVariants, itemVariants, socialIconVariants } from "../animations/motion";

export function Footer() {

  return (
    <footer className="bg-background pt-12 overflow-hidden">
      <div className="flex justify-between px-[10%] text-info/80 my-10 max-md:flex-col max-md:gap-8">
        {/* Star logo with more playful animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            rotate: 0,
            transition: { 
              type: "spring", 
              stiffness: 260, 
              damping: 20 
            } 
          }}
          whileHover={{ rotate: 10, scale: 1.1 }}
        >
          <Image src={"/star.svg"} width={50} height={50} alt={"star"} />
        </motion.div>
        
        {/* First column of links */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col border-l-[1px] border-l-primary px-6 gap-5 justify-between items-start"
        >
          {links.slice(0, links.length / 2).map((link) => (
            <motion.div
              key={link}
              variants={itemVariants}
              whileHover={{ x: 5, color: "#ffffff" }}
            >
              <Link href={""} className="uppercase hover:text-primary transition-colors">
                {link}
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Second column of links */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col border-l-[1px] border-l-primary px-6 gap-5 justify-between items-start "
        >
          {links.slice(links.length / 2).map((link) => (
            <motion.div
              key={link}
              variants={itemVariants}
              whileHover={{ x: 5, color: "#ffffff" }}
            >
              <Link href={""} className="uppercase hover:text-primary transition-colors">
                {link}
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Social icons with more dynamic animations */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            transition: { type: "spring", stiffness: 300 }
          }}
          className="flex gap-5 text-3xl md:self-center text-primary"
        >
          <motion.div 
            variants={socialIconVariants}
            whileHover="hover"
            whileTap={{ scale: 0.9 }}
          >
            <Link href={""} className="hover:text-red-500 transition-colors">
              <FaYoutube />
            </Link>
          </motion.div>
          <motion.div 
            variants={socialIconVariants}
            whileHover="hover"
            whileTap={{ scale: 0.9 }}
          >
            <Link href={""} className="hover:text-blue-400 transition-colors">
              <AiFillTwitterCircle />
            </Link>
          </motion.div>
          <motion.div 
            variants={socialIconVariants}
            whileHover="hover"
            whileTap={{ scale: 0.9 }}
          >
            <Link href={""} className="hover:text-pink-600 transition-colors">
              <AiFillInstagram />
            </Link>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Bottom section with smoother animation */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          transition: { 
            type: "spring", 
            stiffness: 100,
            delay: 0.5
          } 
        }}
        className="border-t-[1px] border-primary/20 mx-[10%] flex max-md:flex-col max-md:items-start max-md:gap-5 justify-between items-center py-5 "
      >
        <motion.div 
          className="flex gap-5 uppercase text-info/80 max-md:flex-col max-md:text-sm  max-md:text-start max-md:w-full"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          <motion.div variants={itemVariants}>
            <Link href={""} className="hover:text-primary transition-colors">Terms & conditions</Link>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Link href={""} className="hover:text-primary transition-colors">privacy policy</Link>
          </motion.div>
        </motion.div>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.7 } }}
          className="text-info/40 max-md:text-sm"
        >
          © 2023 fIGHTING STAR. All rights reserved.
        </motion.p>
      </motion.div>
    </footer>
  );
}