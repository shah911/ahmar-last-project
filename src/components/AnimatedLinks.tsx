import React, { useState } from "react";
import { motion, Variants } from "motion/react";
import { letterAnimation, letterAnimationTwo } from "@/util/variants";

export default function AnimatedLinks({
  title,
  index,
}: {
  title: string;
  index?: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative overflow-hidden cursor-pointer flex flex-col"
    >
      <AnimateWord
        title={title}
        index={index}
        animationVariants={letterAnimation}
        isHovered={isHovered}
      />
      <div className="absolute top-0">
        <AnimateWord
          title={title}
          index={index}
          animationVariants={letterAnimationTwo}
          isHovered={isHovered}
        />
      </div>
    </motion.div>
  );
}

const AnimateWord = ({
  title,
  index,
  animationVariants,
  isHovered,
}: {
  title: string;
  index?: number;
  animationVariants: Variants;
  isHovered: boolean;
}) => {
  return (
    <motion.span className="relative whitespace-nowrap">
      {
        <motion.span
          variants={animationVariants}
          initial={isHovered ? "animate" : "initail"}
          animate={isHovered ? "animate" : "initail"}
          className={`relative inline-flex whitespace-nowrap ${
            isHovered ? "opacity-100" : "opacity-50"
          } transition-opacity`}
        >
          {title}
        </motion.span>
      }
      {index && (
        <sup
          className={` font-semibold ml-1 ${
            isHovered ? "opacity-100" : "opacity-30"
          } transition-opacity`}
        >
          {"0" + index}
        </sup>
      )}
    </motion.span>
  );
};
