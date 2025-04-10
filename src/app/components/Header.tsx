"use client"
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

  
export const links = [
  "HOME PAGE", 
  "PORTIFÓLIO", 
  "ABOUT US",
  "INQUIRIES", 
  "PRICINGS", 
  "CHALLENGES"
];
export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  // Animation variants
  const container = {
    hidden: { opacity: 0, y: -20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0 }
  };

  const starVariants = {
    hidden: { opacity: 0, rotate: -180, scale: 0.5 },
    show: {
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 200, damping: 15 }
    },
    hover: {
      rotate: 360,
      transition: { duration: 1 }
    }
  };

  const linkVariants = {
    hover: {
      y: -3,
      color: "#ffffff",
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.95
    }
  };

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0,
      height: 0,
      transition: { 
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    visible: { 
      opacity: 1,
      height: "auto",
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      }
    }
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <>
      {/* Desktop Header */}
      <motion.header 
        className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 w-[80%] rounded-4xl bg-foreground/50 justify-around items-center p-2 z-20"
        initial="hidden"
        animate="show"
        variants={container}
      >
        <motion.div className="flex items-center justify-center gap-6 text-info uppercase">
          {links.slice(0, links.length/2).map((link) => (
            <motion.div key={link} variants={item}>
              <Link href={"#"}>
                <motion.span 
                  className="cursor-pointer block"
                  variants={linkVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  {link}
                </motion.span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={starVariants}
          whileHover="hover"
        >
          <Image src={"/star.svg"} width={50} height={50} alt={"star"} />
        </motion.div>

        <motion.div className="flex items-center justify-center gap-6 text-info uppercase">
          {links.slice(links.length/2).map((link) => (
            <motion.div key={link} variants={item}>
              <Link href={"#"}>
                <motion.span 
                  className="cursor-pointer block"
                  variants={linkVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  {link}
                </motion.span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.header>

      {/* Mobile Header */}
      <motion.header 
        className="md:hidden fixed top-6 left-1/2 -translate-x-1/2 w-[90%] rounded-4xl bg-foreground/50 flex justify-between items-center p-4 z-20"
        initial="hidden"
        animate="show"
        variants={container}
      >
        <motion.div
          variants={starVariants}
          whileHover="hover"
          className="flex-shrink-0"
        >
          <Image src={"/star.svg"} width={40} height={40} alt={"star"} />
        </motion.div>

        <motion.button
          className="text-info text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </motion.button>
      </motion.header>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden fixed top-24 left-1/2 -translate-x-1/2 w-[90%] rounded-2xl bg-foreground/90 backdrop-blur-md z-20 overflow-hidden"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
          >
            <motion.ul className="p-4 space-y-4">
              {links.map((link) => (
                <motion.li 
                  key={link}
                  variants={mobileItemVariants}
                  className="border-b border-info/20 last:border-0"
                >
                  <Link href={"#"} onClick={() => setIsMobileMenuOpen(false)}>
                    <motion.span 
                      className="cursor-pointer block py-3 text-info uppercase"
                      variants={linkVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      {link}
                    </motion.span>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}