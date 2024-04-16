export const fadeInFromTopVariant = (delay: number) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.5,
        delay: delay,
      },
    },
  };
};

export const fadeInText = (delay?: number) => {
  return {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: delay || 0,
      },
    },
  };
};

export const scaleXVariant = (delay: number) => {
  return {
    hidden: {
      scaleX: 0,
      originX: 0,
    },
    show: {
      scaleX: 1,
      transition: {
        duration: 1,
        delay: delay || 0,
      },
    },
  };
};

export const staggerContainer = () => {
  const staggerChildren = 0.25;
  const delayChildren = 0.5;

  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};
