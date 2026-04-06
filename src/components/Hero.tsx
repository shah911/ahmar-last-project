import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import CTA from "./CTA";

const cards = [
  {
    title: "Bringing Ideas to Life",
    desc: "I specialize in transforming concepts into captivating 3D visuals. Whether it’s product renderings, or immersive environments, my portfolio is designed to tell a story.",
  },
  {
    title: "Collaborate with Me",
    desc: "Let’s create something extraordinary together! Whether you’re looking to visualize a product, animate a concept, or build an interactive experience.",
  },
];

const services = [
  {
    title: "Strategy & Planning",
    desc: "We start by understanding your vision and business goals. Through in-depth research and strategic planning, we define the core structure and key elements needed for your project.",
  },
  {
    title: "Design & Development",
    desc: "Our team crafts a visually stunning and functional design that aligns with your brand. We focus on responsive layouts, and high-performance development to ensure a smooth experience.",
  },
  {
    title: "Launch & Growth",
    desc: "Once everything is tested and refined, we launch your project with precision. Post-launch, we provide ongoing support, updates, and strategies to help you scale and maximize results.",
  },
];

const scores = [
  {
    title: "Strategy",
    rate: "25%",
  },
  {
    title: "Design",
    rate: "60%",
  },
  {
    title: "Launch",
    rate: "100%",
  },
];

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
      <div className="bg-white z-999">
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
          <div className="w-[95%] mx-auto font-inter">
            <hr className="h-px opacity-20 my-10" />
            <div className="flex flex-col lg:flex-row">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-5">
                  <div className="bg-[#FF462E] h-4 w-4 rounded-sm" />
                  <span className="font-medium lg:text-lg">
                    Hey, Just An Intro
                  </span>
                </div>
              </div>
              <div className="flex-3 flex-col">
                <h1 className="text-3xl lg:text-5xl font-semibold tracking-tighter leading-[100%]">
                  A digital designer based in los angeles, passionate about
                  creating immersive visual experiences. From crafting realistic
                  renderings to dynamic animations and interactions.®
                </h1>
                <div className="mt-15 w-fit">
                  <Link href="/contact">
                    <CTA color="bg-slate-200" />
                  </Link>
                </div>
                <hr className="h-px opacity-20 my-10" />
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 lg:items-center lg:justify-between mb-15">
                  {cards.map((card, i) => (
                    <div className="flex flex-col gap-4 lg:w-[40%]" key={i}>
                      <h2 className="font-medium text-lg">{card.title}</h2>
                      <p className="font-medium opacity-50">{card.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <hr className="h-px opacity-20 mb-10" />
            {/* SECTION 3 */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2 mb-5">
                <div className="bg-[#FF462E] h-4 w-4 rounded-sm" />
                <span className="font-medium lg:text-lg">Approach Style</span>
              </div>
              <span className="font-geist-mono text-lg font-medium">©2025</span>
            </div>
            <div className="flex flex-col lg:flex-row gap-5">
              {services.map((service, i) => (
                <div className="flex-1 bg-slate-100 rounded-2xl p-5" key={i}>
                  {/* HEAD */}
                  <div className="flex items-center justify-between mb-34">
                    <span className="font-geist-mono text-3xl font-semibold tracking-tighter">
                      0{i + 1}
                    </span>
                    <div className="flex items-center justify-center gap-1">
                      {services.map((_, index) => (
                        <span
                          key={i}
                          className={`h-3 w-3 rounded-full ${i >= index ? "bg-[#FF462E]" : "bg-slate-200"} `}
                        ></span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-5">
                    <div className="bg-[#FF462E] h-4 w-4 rounded-sm" />
                    <span className="font-medium lg:text-lg">
                      {service.title}
                    </span>
                  </div>
                  <p className="opacity-60 font-medium tracking-tighter">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
            <div className="w-full my-10 md:my-20 flex flex-col-reverse lg:flex-row">
              <div className="flex-1 flex flex-col lg:px-10">
                <Link href="/contact">
                  <CTA color="bg-slate-200" />
                </Link>
              </div>
              <div className="flex-1 flex flex-col my-10 lg:my-0">
                {scores.map((score, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="capitalize flex items-center justify-between py-5 hover:opacity-100 transition-opacity duration-500">
                      <span className="text-lg">{score.title}</span>
                      <span className="font-geist-mono text-lg">
                        {score.rate}
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
