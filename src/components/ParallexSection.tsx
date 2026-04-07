import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import CTA from "./CTA";
import Link from "next/link";

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
  //   {
  //     title: "project",
  //     img: "/demo.jpg",
  //     tag: "portfolio",
  //     url: "/work/project-1"
  //   },
  //   {
  //     title: "project",
  //     img: "/demo.jpg",
  //     tag: "portfolio",
  //     url: "/work/project-1"
  //   },
];

function ParallexSection({ img }: { img?: string }) {
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
              src={img ? img : "/demo.jpg"}
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
              <h1 className="text-[88px] tracking-tighter leading-[100%] font-semibold">
                Feartured Portfolio®
              </h1>
              <p className="tracking-tighter opacity-60 font-medium text-lg text-center lg:w-212.5 my-8">
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
            <div className="flex flex-col lg:flex-row gap-5">
              {projects.map((project, i) => (
                <Link
                  href={project.url}
                  className="flex-1 bg-slate-200 p-3 rounded-2xl"
                  key={i}
                >
                  <div className="h-110 w-full">
                    <div className="relative group h-full w-full overflow-hidden rounded-lg">
                      {/* Overlay */}
                      <div className="absolute inset-0 z-20 bg-inherit/10 backdrop-blur-xs opacity-0 transition duration-700 ease-in-out group-hover:opacity-100" />
                      {/* Image */}
                      <Image
                        src={project.img}
                        alt={project.title}
                        fill
                        className="object-cover transition duration-700 ease-in-out group-hover:scale-125"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between my-5">
                    <span className="capitalize text-lg font-medium">
                      {project.title}
                    </span>
                    <span className="px-3 py-2 rounded-full capitalize bg-slate-100">
                      {project.tag}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            <hr className="h-px opacity-20 mb-10" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParallexSection;
