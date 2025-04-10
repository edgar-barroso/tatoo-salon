// components/FrequentlyAskedQuestions.jsx
"use client";
import { useState } from "react";
import { IoAdd } from "react-icons/io5";
import { GoDash } from "react-icons/go";
import { motion, AnimatePresence } from "motion/react";
import { containerVariants, titleVariants, itemVariants } from "../animations/motion";


const iconVariants = {
  closed: { rotate: 0 },
  open: { rotate: 90, transition: { duration: 0.2 } },
};

export function FrequentlyAskedQuestions() {
  const [activedAnswer, setActivedAnswer] = useState(
    new Array(frequentlyQuestions.length).fill(false)
  );

  const toggleAnswer = (index:number) => {
    const newActiveAnswers = [...activedAnswer];
    newActiveAnswers[index] = !newActiveAnswers[index];
    setActivedAnswer(newActiveAnswers);
  };

  return (
    <motion.section 
      className="flex flex-col mt-20 py-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.h2 
        className="font-angel text-6xl text-center text-info"
        variants={titleVariants}
      >
        F.A.Q.
      </motion.h2>

      <motion.div 
        className="px-[25%] mt-20 max-xl:px-[20%] max-lg:px-[15%] max-sm:px-[10%]"
      >
        <dl className="space-y-1 w-full">
          {frequentlyQuestions.map((item, index) => (
            <motion.div 
              key={item.question}
              variants={itemVariants}
              className=" overflow-hidden border-b border-info/20"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col   border-info/10">
                <motion.div
                  className="flex flex-row justify-between items-center p-6 cursor-pointer hover:bg-foreground/20 transition-colors duration-300"
                  onClick={() => toggleAnswer(index)}
                  whileTap={{ scale: 0.99 }}
                >
                  <dt className="md:text-2xl text-xl select-none text-info uppercase">{item.question}</dt>

                  <motion.div
                    variants={iconVariants}
                    animate={activedAnswer[index] ? "open" : "closed"}
                    className="text-info"
                  >
                    {activedAnswer[index] ? <GoDash className="rotate-90" size={40} /> : <IoAdd size={40} />}
                  </motion.div>
                </motion.div>
              </div>
              
              <AnimatePresence>
                {activedAnswer[index] && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ 
                      opacity: 1, 
                      height: "auto",
                      transition: {
                        height: {
                          duration: 0.4,
                        },
                        opacity: {
                          duration: 0.25,
                          delay: 0.15,
                        },
                      },
                    }}
                    exit={{ 
                      opacity: 0, 
                      height: 0,
                      transition: {
                        height: {
                          duration: 0.3,
                        },
                        opacity: {
                          duration: 0.2,
                        },
                      },
                    }}
                    className="overflow-hidden"
                  >
                    <motion.dd 
                      className="text-lg md:text-xl p-6 pt-2 text-info/80"
                      initial={{ y: 10 }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.answer}
                    </motion.dd>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </dl>
      </motion.div>
    </motion.section>
  );
}

const frequentlyQuestions = [
  {
    question: "What is your tattoo process?",
    answer: `Our tattoo process begins with a free consultation where we discuss your ideas and vision. Next, our artists create a custom design based on your input. Once you approve the design, we schedule your appointment.

    For your tattoo session, we ensure a sterile environment with single-use needles and fresh ink. Depending on the complexity and size, your tattoo might require multiple sessions. After completion, we provide detailed aftercare instructions to ensure proper healing and long-lasting results.`,
  },
  {
    question: "How do you determine pricing?",
    answer: `Our pricing is based on several factors: size, complexity, detail level, placement, and estimated time. Simple small designs start around $150, while larger, more detailed pieces can range from $1500 to $3000+.

    We charge an hourly rate for larger projects, typically between $150-250 per hour depending on the artist's experience. For custom designs, we require a non-refundable deposit that will be applied to your final tattoo cost. We provide accurate price estimates during your consultation after understanding your specific requirements.`,
  },
  {
    question: "Can you draw any tattoo style?",
    answer: `Our studio features artists specialized in various tattoo styles including traditional, neo-traditional, realism, blackwork, Japanese (irezumi), geometric, watercolor, and portrait tattoos.

    Each of our artists has their own specialty and portfolio of work. During your consultation, we'll match you with the artist whose style best fits your vision. While we can accommodate most styles, we recommend browsing our artists' portfolios to find the best match for your desired aesthetic. For highly specialized styles, we may have a waiting list for our most experienced artists.`,
  },
  {
    question: "What is your location?",
    answer: `Our main studio is located in downtown Los Angeles at 1234 Ink Avenue, CA 90012. We're easily accessible by public transportation and have parking available for clients.

    Our studio is open Monday-Friday from 11:00 AM to 9:00 PM, and Saturday-Sunday from 2:00 PM to 8:00 PM. We accept both walk-ins for small pieces and scheduled appointments for larger work. For the best experience, we recommend booking a consultation in advance through our website or by calling (213) 555-1234.`,
  },
  {
    question: "Do you offer custom designs?",
    answer: `Yes, we specialize in custom tattoo designs tailored to your individual vision. Our artists work closely with you to transform your ideas into unique artwork that perfectly represents your style and story.

    The custom design process begins with an in-depth consultation where we discuss your concept, placement, size, and aesthetic preferences. Our artist will then create a draft design for your review. We offer up to two rounds of revisions to ensure you're completely satisfied before proceeding with your tattoo.`,
  },
];