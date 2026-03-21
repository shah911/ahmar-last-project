import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const scaleY1 = useTransform(scrollYProgress, [0, 1], [0, 0.2]);
  const scaleY2 = useTransform(scrollYProgress, [0, 1], [0, 0.5]);
  const scaleY3 = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scaleY4 = useTransform(scrollYProgress, [0, 1], [0, 0.5]);
  const scaleY5 = useTransform(scrollYProgress, [0, 1], [0, 0.2]);

  const blocks = [scaleY1, scaleY2, scaleY3, scaleY4, scaleY5];

  return (
    <div ref={ref} className="relative flex flex-col -mt-20">
      {/* section 1 */}
      <div className="min-h-150 h-screen bg-slate-300 sticky top-0">
        <div className="relative h-full w-full">
          <Image
            src="/demo.jpg"
            alt="demo"
            fill
            priority
            className="object-cover"
          />
          <div className="w-[95%] mx-auto absolute left-3 lg:left-8 bottom-8 flex flex-col gap-4 text-white">
            <span className="font-geist-mono text-2xl lg:text-4xl font-semibold tracking-tighter">
              ©2025
            </span>
            <h1 className="font-inter font-bold text-7xl lg:text-9xl tracking-tighter">
              Shah
            </h1>
            <p className="flex lg:hidden md:w-[75%] font-inter text-white text-lg font-semibold tracking-tighter leading-[100%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="absolute right-8 top-1/2 w-1/4 lg:flex hidden">
            <p className="font-inter text-white text-lg font-semibold tracking-tighter leading-[100%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
      {/* section 2 */}
      <div className="min-h-150 h-screen bg-white z-999">
        <div className="relative h-full w-full">
          <div className="flex items-center justify-center -mt-50">
            {blocks.map((block, i) => (
              <motion.div
                style={{ scaleY: block, transformOrigin: "bottom" }}
                className="w-[20vw] h-50 bg-white"
                key={i}
              ></motion.div>
            ))}
          </div>
          <p className="font-geist-mono">Geist Mono 01</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
