"use client";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 },
  },
  tap: {
    scale: 0.95,
  },
};

const logoVariants = {
  hover: {
    y: -5,
    transition: { duration: 0.2 },
  },
};

const galleryContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const galleryItem = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const imageHoverEffect = {
  hover: {
    scale: 1.03,
    transition: { duration: 0.3 },
  },
};

const priceTag = {
  hidden: { opacity: 0, x: 20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.3 } },
};

const testimonialContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const testimonialItem = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const clientImageVariants = {
  inactive: { scale: 1, filter: "grayscale(40%)" },
  active: { 
    scale: 1.25, 
    filter: "grayscale(0%)",
    transition: { duration: 0.3 } 
  },
  hover: {
    scale: 1.1,
    transition: { duration: 0.2 }
  }
};



export default function Home() {

  const [selectedClient,setSelectedClient] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedClient((prev) => (prev + 1) % clients.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, [selectedClient]);

  return (
    <main className="bg-[url(/background.png)] bg-cover bg-fixed bg-center bg-repeat">
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
              <Image src={"/clock-icon.svg"} alt={""} width={20} height={20} />
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
              className="relative bg-info rounded-4xl bg-[url(/gorilla.svg)] bg-no-repeat bg-center h-[45%] max-sm:h-[300px]"
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
              className="relative bg-info rounded-4xl bg-[url(/snake-skull.svg)] bg-no-repeat bg-center h-[45%] max-sm:h-[300px]"
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
    {clients.map(({id, srcImg, name}) => (
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
        <motion.h4 
          className="font-angel text-4xl text-info"
        >
          {clients.find((client) => client.id === selectedClient)?.name}
        </motion.h4>
        <motion.p 
          className="text-xl text-info/80"
        >
          {clients.find((client) => client.id === selectedClient)?.testimony}
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
    </main>
  );
}

const clients = [
  {
    id:0,
    srcImg: "/client1.png",
    name: "Jake Matthews",
    testimony: "Absolutely thrilled with my tattoo! The detail is insane and the vibe in the studio was super chill.",
  },
  {
    id:1,
    srcImg: "/client2.png",
    name: "Amy Delgado",
    testimony: "I was nervous at first, but they made me feel at home. My piece turned out better than I imagined.",
  },
  {
    id:2,
    srcImg: "/client3.png",
    name: "Chris Thompson",
    testimony: "Hands down the best tattoo experience I’ve ever had. Clean lines, awesome energy, and great people.",
  },
  {
    id:3,
    srcImg: "/client4.png",
    name: "Sasha Lee",
    testimony: "My tattoo is a work of art. The artist really listened to what I wanted and nailed it!",
  },
  {
    id:4,
    srcImg: "/client5.png",
    name: "Marcus Cole",
    testimony: "From start to finish, the process was smooth. Super professional and incredibly talented team.",
  },
];