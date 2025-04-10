// components/Gallery.jsx
"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { galleryContainer, galleryItem, imageHoverEffect, priceTag } from "../animations/motion";

export default function Gallery() {
  return (
    <motion.section 
      className="flex flex-col m-36 max-lg:m-20 max-md:m-10 max-sm:m-6"
      variants={galleryContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.div className="flex flex-wrap gap-10 max-sm:gap-6">
        <motion.div 
          className="flex flex-col items-center justify-between bg-foreground/50 px-6 pt-6 rounded-4xl gap-10 w-[30%] max-sm:w-full"
          variants={galleryItem}
        >
          <motion.h3 
            className="text-5xl max-lg:text-4xl max-md:text-3xl font-angel text-info"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Tailored Process <br />
            will make you <br />
            scream, but then
            <br /> happy!
          </motion.h3>
          <motion.div
            whileHover="hover"
            variants={imageHoverEffect}
          >
            <Image
              src={"/tatoo-artist.png"}
              alt={"tatoo artist"}
              width={650}
              height={880}
              className="w-full h-auto"
            />
          </motion.div>
        </motion.div>

        <motion.div 
          className="flex flex-col gap-10 max-sm:gap-6 w-[30%] max-sm:w-full"
          variants={galleryItem}
        >
          <motion.div 
            className="relative bg-info rounded-4xl bg-[url(/gorilla.svg)] bg-no-repeat bg-center h-[50%] max-sm:h-[300px]"
            whileHover="hover"
            variants={imageHoverEffect}
          >
            <motion.p 
              className="absolute text-3xl font-angel text-background m-4 bottom-0 right-0"
              variants={priceTag}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              $ 2800.00
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="relative bg-info rounded-4xl bg-[url(/snake-skull.svg)] bg-no-repeat bg-center h-[50%] max-sm:h-[300px]"
            whileHover="hover"
            variants={imageHoverEffect}
          >
            <motion.p 
              className="absolute text-3xl font-angel text-background m-4 bottom-0 right-0"
              variants={priceTag}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              $ 1500.00
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.div 
          className="flex flex-col items-start justify-start bg-foreground/50 rounded-4xl gap-10 w-[30%] max-sm:w-full"
          variants={galleryItem}
        >
          <motion.div 
            className="relative w-full h-[50%]"
          >
            <Image
              src={"/man-doing-tattoo.png"}
              alt={"tatoo artist"}
              className="w-full h-full object-cover rounded-t-4xl"
              height={680}
              width={450}
            />
            <div className="absolute left-0 bottom-0 w-full bg-gradient-to-t from-foreground/50 to-100% h-1/3 rounded-t-4xl"></div>
          </motion.div>
          <div className="p-8 space-y-10 max-md:p-6 max-md:space-y-6 flex-grow">
            <motion.h3 
              className="text-5xl max-lg:text-4xl max-md:text-3xl font-angel text-info"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Highest rated
              <br /> Tatoo Club in the <br />
              California.
            </motion.h3>
            <motion.p 
              className="text-info/40 max-md:text-sm text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Don&apos;t hesitate. No one has ever regreted the
              <br /> their tatoos! Contact us now, and we&apos;ll help you!
            </motion.p>
            <motion.button 
              className="uppercase px-6 py-4 bg-primary text-center text-background rounded-xl tracking-widest cursor-pointer max-md:px-4 max-md:py-3 max-md:text-sm"
              initial={{ opacity: 0, y: 10 }} 
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              viewport={{ once: true }}
            >
              CONTACT US NOW
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}