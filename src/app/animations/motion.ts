export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

export const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const buttonVariants = {
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 },
  },
  tap: {
    scale: 0.95,
  },
};

export const logoVariants = {
  hover: {
    y: -5,
    transition: { duration: 0.2 },
  },
};

export const galleryContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

export const galleryItem = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export const imageHoverEffect = {
  hover: {
    scale: 1.03,
    transition: { duration: 0.3 },
  },
};

export const priceTag = {
  hidden: { opacity: 0, x: 20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.3 } },
};

export const testimonialContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

export const testimonialItem = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const clientImageVariants = {
  inactive: { scale: 1, filter: "grayscale(40%)" },
  active: {
    scale: 1.25,
    filter: "grayscale(0%)",
    transition: { duration: 0.3 },
  },
  hover: {
    scale: 1.1,
    transition: { duration: 0.2 },
  },
};

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

export const titleVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};



export const socialIconVariants = {
  hover: { 
    scale: 1.2, 
    transition: { type: "spring", stiffness: 400, damping: 10 } 
  }
};

export const letterVariants = {
  hidden: { scale: 0.8, rotate: -10, opacity: 0 },
  visible: {
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: { 
      type: "spring", 
      stiffness: 300,
      damping: 10,
      delay: 0.2
    }
  },
  hover: {
    rotate: 5,
    y: -5,
    transition: { type: "spring", stiffness: 400 }
  }
};