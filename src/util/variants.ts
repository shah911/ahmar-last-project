import { Variants } from "motion";

export const letterAnimation: Variants = {
  initail: {
    y: 0,
    transition: {
      type: "tween",
      duration: 0.5,
      ease: [0.6, 0.01, 0.05, 0.95],
    },
  },
  animate: {
    y: "-100%",
    transition: {
      type: "tween",
      duration: 0.5,
      ease: [0.6, 0.01, 0.05, 0.95],
    },
  },
};

export const letterAnimationTwo: Variants = {
  initail: {
    y: "100%",
    transition: {
      type: "tween",
      duration: 0.5,
      ease: [0.6, 0.01, 0.05, 0.95],
    },
  },
  animate: {
    y: 0,
    transition: {
      type: "tween",
      duration: 0.5,
      ease: [0.6, 0.01, 0.05, 0.95],
    },
  },
};

export const main: Variants = {
  initial: {
    clipPath: "inset(0 0 100% 0)",
  },
  animate: {
    clipPath: "inset(0)",
    transition: {
      type: "tween",
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  exit: {
    clipPath: "inset(0 0 100% 0)",
    transition: {
      type: "tween",
      duration: 0.75,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export const cover: Variants = {
  initial: {
    clipPath: "inset(100% 0 0 0)",
  },
  animate: {
    clipPath: "inset(100% 0 0 0)",
    transition: {
      type: "tween",
      duration: 0.6,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  exit: {
    clipPath: "inset(0)",
    transition: {
      type: "tween",
      duration: 0.6,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export const cover2: Variants = {
  initial: {
    clipPath: "inset(0)",
  },
  animate: {
    clipPath: "inset(0 0 100% 0)",
    transition: {
      type: "tween",
      duration: 0.6,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  exit: {
    clipPath: "inset(0 0 100% 0)",
    transition: {
      type: "tween",
      duration: 0.6,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export const slide: Variants = {
  initial: {
    y: "10%",
  },
  animate: {
    y: 0,
    transition: {
      type: "tween",
      duration: 0.6,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  exit: {
    y: "-10%",
    transition: {
      type: "tween",
      duration: 0.6,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};
