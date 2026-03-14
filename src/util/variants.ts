import { Variants } from "motion";

export const letterAnimation: Variants = {
  initail: {
    y: 0,
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
