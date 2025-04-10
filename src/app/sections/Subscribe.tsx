import { motion } from "motion/react";
import Image from "next/image";

export function Subscribe() {
  return (
    <section>
      <div className="relative flex items-center my-20 max-md:hidden">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute w-[800px] h-[300px] left-1/2 -translate-x-1/2 flex items-center justify-around"
        >
          <Image
            className="absolute h-full w-full bottom-0 -z-10"
            src={"/subscribe-background.svg"}
            alt={""}
            width={800}
            height={400}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Image src={"/letter.svg"} alt={""} width={200} height={200} />
          </motion.div>
          
          <div className="flex flex-col gap-2">
            <motion.h3 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="font-angel text-6xl text-foreground"
            >
              Subscribe to <br />
              four Newsletter
            </motion.h3>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className=""
            >
              <input
                type="text"
                placeholder="Enter your email..."
                className="outline-none bg-[#F2E4DA] p-4 rounded-l-2xl text-foreground"
              />
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer uppercase h-full bg-primary p-4 rounded-2xl -ml-12 text-secondary read tracking-widest"
              >
                SUBSCRIBE
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="md:hidden flex flex-col bg-info items-center p-4"
      >
        <div className="flex flex-col items-start justify-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Image
              src={"/letter.svg"}
              alt={""}
              width={200}
              height={200}
              className=""
            />
          </motion.div>
          
          <div className="flex flex-col gap-2">
            <motion.h3 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="font-angel text-5xl text-foreground"
            >
              Subscribe to <br />
              four Newsletter
            </motion.h3>
            
            <motion.input
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              type="text"
              placeholder="Enter your email..."
              className="outline-none bg-[#F2E4DA] p-4 rounded-l-2xl text-foreground"
            />
            
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer uppercase h-full bg-primary p-4 rounded-2xl text-secondary tracking-widest"
            >
              SUBSCRIBE
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}