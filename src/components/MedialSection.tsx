import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import CTA from "./CTA";
import Link from "next/link";
import ProjectSection from "./ProjectSection";

const projects = [
  {
    title: "project",
    img: "/demo.jpg",
    tag: "portfolio",
    url: "/work/project-1",
  },
  {
    title: "project",
    img: "/demo.jpg",
    tag: "portfolio",
    url: "/work/project-1",
  },
  {
    title: "project",
    img: "/demo.jpg",
    tag: "portfolio",
    url: "/work/project-1",
  },
  {
    title: "project",
    img: "/demo.jpg",
    tag: "portfolio",
    url: "/work/project-1",
  },
];

const stats = [
  {
    figure: "20+",
    title: "Years Experience",
    desc: "In the web design industry field.",
  },
  {
    figure: "95+",
    title: "Projects Done",
    desc: "Around worldwide in last five years.",
  },
  {
    figure: "200%",
    title: "Satisfied Clients",
    desc: "With a great experience and results.",
  },
];

function MedialSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const scaleY1 = useTransform(scrollYProgress, [0, 1], [0, 0.2]);
  const scaleY2 = useTransform(scrollYProgress, [0, 1], [0, 0.5]);
  const scaleY3 = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const blocks = [scaleY1, scaleY2, scaleY3, scaleY2, scaleY1];

  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div ref={ref} className="relative flex flex-col">
      {/* section 1 */}
      <div className="min-h-150 h-screen bg-black sticky top-0">
        <div className="relative h-full w-full overflow-hidden">
          <motion.div
            style={{ opacity, scale }}
            className="relative h-full w-full "
          >
            <Image
              src="/demo.jpg"
              alt="demo"
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
      {/* section 2 */}
      <div className="bg-white z-999 min-h-screen">
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
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-2">
                <div className="bg-[#FF462E] h-4 w-4 rounded-sm" />
                <span className="font-medium lg:text-lg">Featured Works</span>
              </div>
              <span className="font-geist-mono text-lg font-medium">©2025</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-4xl md:text-5xl lg:text-[88px] tracking-tighter leading-[100%] font-semibold">
                Feartured Portfolio®
              </h1>
              <p className="tracking-tighter opacity-60 font-medium lg:text-lg text-center lg:w-212.5 my-8">
                Explore a collection of high-quality, innovative designs crafted
                to elevate brands and captivate audiences. Each project reflects
                our commitment to creativity and excellence.
              </p>
              <Link className="mb-10" href="/work">
                <CTA
                  text="View portfolio"
                  color="bg-slate-200"
                  ow="w-48"
                  iw="w-46"
                />
              </Link>
            </div>
            {/* PROJECTS */}
            <ProjectSection projects={projects} />
            {/* PROJECTS */}
            {/* LOWER END */}
            <div className="flex flex-col lg:flex-row mb-30">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-5">
                  <div className="bg-[#FF462E] h-4 w-4 rounded-sm" />
                  <span className="font-medium lg:text-lg">Stats & Facts</span>
                </div>
              </div>
              <div className="flex-3 flex-col">
                <h1 className="text-3xl lg:text-5xl font-semibold tracking-tighter leading-[100%]">
                  I take pride in creating solutions that are not only visually
                  stunning® but also highly functional. Every number tells a
                  story, and I’m excited to bring that same dedication.
                </h1>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-20 justify-between mb-20 lg:mb-30">
              {stats.map((stat, i) => (
                <div key={i} className="flex-1 flex flex-col">
                  <h2 className="text-7xl lg:text-9xl font-medium tracking-tighter leading-[100%] font-geist-mono">
                    {stat.figure}
                  </h2>
                  <hr className="h-px opacity-20 my-10" />
                  <span className="text-lg lg:text-3xl font-semibold tracking-tighter leading-[100%] mb-2">
                    {stat.title}
                  </span>
                  <p className="lg:text-lg font-medium opacity-50 tracking-tighter leading-[100%]">
                    {stat.desc}
                  </p>
                </div>
              ))}
            </div>
            {/* LOWER END */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MedialSection;
