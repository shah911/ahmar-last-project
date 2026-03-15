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
