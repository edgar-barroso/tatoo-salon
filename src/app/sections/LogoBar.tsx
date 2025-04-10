// components/LogoBar.jsx
"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { logoVariants } from "../animations/motion";

export default function LogoBar() {
  return (
    <motion.div
      className="bg-foreground/50 flex justify-around items-center px-[15%] py-5 flex-wrap max-md:gap-6 max-md:justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.8 }}
    >
      {[1, 2, 3, 4, 5].map((logo) => (
        <motion.div key={logo} variants={logoVariants} whileHover="hover">
          <Image
            src={`/logo${logo}.svg`}
            alt={`logo${logo}`}
            width={120}
            height={50}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}