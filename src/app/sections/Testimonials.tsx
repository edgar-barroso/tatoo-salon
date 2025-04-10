// components/Testimonials.jsx
"use client";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import {
  testimonialContainer,
  testimonialItem,
  clientImageVariants,
} from "../animations/motion";
import { useState, useEffect } from "react";

export default function Testimonials() {
  const [selectedClient, setSelectedClient] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedClient((prev) => (prev + 1) % clients.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, [selectedClient]);
  return (
    <motion.section
      className="flex flex-col gap-8 items-center mb-20"
      variants={testimonialContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.h2
        className="text-6xl max-xl:text-4xl font-angel text-center text-info"
        variants={testimonialItem}
      >
        What Clients say?!
      </motion.h2>

      <motion.div
        className="flex gap-10 mb-10 max-md:gap-6 max-sm:flex-wrap max-sm:justify-center"
        variants={testimonialItem}
      >
        {clients.map(({ id, srcImg, name }) => (
          <motion.div
            key={id}
            variants={clientImageVariants}
            initial="inactive"
            animate={selectedClient === id ? "active" : "inactive"}
            whileHover="hover"
            onClick={() => setSelectedClient(id)}
            className="relative cursor-pointer"
          >
            <Image
              className="w-[120px] h-[120px] rounded-full object-cover"
              src={srcImg}
              alt={name}
              width={300}
              height={300}
            />
            <motion.div
              className="absolute inset-0 rounded-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: selectedClient === id ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="flex flex-col gap-5 p-10 text-start bg-foreground/60 rounded-4xl w-4/5 max-w-3xl"
        variants={testimonialItem}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedClient}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col gap-5"
          >
            <motion.h4 className="font-angel text-4xl text-info">
              {clients.find((client) => client.id === selectedClient)?.name}
            </motion.h4>
            <motion.p className="text-xl text-info/80">
              {
                clients.find((client) => client.id === selectedClient)
                  ?.testimony
              }
            </motion.p>
            <motion.div
              className="flex mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {[...Array(5)].map((_, i) => (
                <motion.svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#f59e0b"
                  className="mr-1"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </motion.svg>
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </motion.section>
  );
}



const clients = [
  {
    id: 0,
    srcImg: "/client1.png",
    name: "Jake Matthews",
    testimony: "Absolutely thrilled with my tattoo! The detail is insane and the vibe in the studio was super chill.",
  },
  {
    id: 1,
    srcImg: "/client2.png",
    name: "Amy Delgado",
    testimony: "I was nervous at first, but they made me feel at home. My piece turned out better than I imagined.",
  },
  {
    id: 2,
    srcImg: "/client3.png",
    name: "Chris Thompson",
    testimony: "Hands down the best tattoo experience I've ever had. Clean lines, awesome energy, and great people.",
  },
  {
    id: 3,
    srcImg: "/client4.png",
    name: "Sasha Lee",
    testimony: "My tattoo is a work of art. The artist really listened to what I wanted and nailed it!",
  },
  {
    id: 4,
    srcImg: "/client5.png",
    name: "Marcus Cole",
    testimony: "From start to finish, the process was smooth. Super professional and incredibly talented team.",
  },
];