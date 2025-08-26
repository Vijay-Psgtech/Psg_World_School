export const fadeIn = (direction, offset = 40) => {
  return {
    hidden: {
      y: direction === "up" ? offset : direction === "down" ? -offset : 0,
      x: direction === "left" ? offset : direction === "right" ? -offset : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1,
        ease: "easeOut", 
      },
    },
  };
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export const TextZoomIn = () => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };
};