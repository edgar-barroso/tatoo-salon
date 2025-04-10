// components/Hero.jsx
"use client";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { container, item, buttonVariants, imageVariants } from "../animations/motion";

export function Hero() {
  return (
    <section className="flex flex-col relative min-h-[90vh] item-center justify-center px-[10%]">
      <motion.div
        className="flex flex-col gap-14 mt-20"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h1
          className="text-8xl max-xl:text-7xl font-angel text-info"
          variants={item}
        >
          Body <br />
          paintings
          <br />
          that <span className="text-primary">Defies</span> <br />
          Your Soul
        </motion.h1>

        <motion.div className="w-[300px] cursor-pointer" variants={item}>
          <Link href={"#"}>
            <motion.div
              className="relative text-center uppercase text-background text-2xl"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Image
                className="absolute bottom-1/2 translate-y-1/2 -z-10"
                src={"/button-background.svg"}
                alt={"button"}
                width={300}
                height={100}
              />
              BOOK A VISIT
            </motion.div>
          </Link>
        </motion.div>

        <motion.div className="flex gap-4" variants={item}>
          <div className="bg-primary p-4 rounded-lg">
            <Image src={"/clock-icon.svg"} alt={"clock"} width={20} height={20} />
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex gap-4 w-full">
              <p className="text-primary">Mon-Fi</p>
              <p className="text-info">11:00-21:00</p>
            </div>
            <div className="flex gap-4 w-full">
              <p className="text-primary">Sat-Sun</p>
              <p className="text-info">14:00-20:00</p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute right-[10%] bottom-0 max-lg:hidden z-0"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="relative w-[600px] h-[600px]">
          <motion.div
            className="absolute z-0 bottom-10"
            initial={{ scale: 0.9, rotate: -5 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.7 }}
          >
            <Image
              src="/rectangle.png"
              alt="rectangle"
              width={1000}
              height={1000}
            />
          </motion.div>

          <motion.div
            className="absolute bottom-0"
            variants={imageVariants}
            initial="hidden"
            animate="show"
          >
            <Image src="/girl.png" alt="girl" width={600} height={600} />
          </motion.div>

          <motion.div
            className="absolute bottom-1/3 right-0.5 bg-info rounded-3xl flex gap-5 p-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <div className="flex flex-col items-start justify-center">
              <p className="uppercase text-background/50 text-lg">TIME</p>
              <p className="font-angel text-background text-3xl">2 Weeks</p>
            </div>
            <div className="flex flex-col items-start justify-center ">
              <p className="uppercase text-background/50 text-lg">PRICE</p>
              <p className="font-angel text-background text-3xl">$ 2400.00</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}