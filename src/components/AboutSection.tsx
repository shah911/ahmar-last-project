import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import CTA from "./CTA";
import Link from "next/link";

const experience = [
  {
    company: "Clavmen",
    role: "Senior UX Designer",
    duration: "2021–Present",
    desc: "Clavmen inspires creativity and makes learning piano fun. The lightweight body fits easily into gig bags for portability.",
  },
  {
    company: "Losify & Co",
    role: "Lead Product Designer",
    duration: "2019–2021",
    desc: "Fitness and well-being with personalized coaching and innovative wellness solutions.",
  },
  {
    company: "Freelance",
    role: "Product Designer",
    duration: "2015–2019",
    desc: "Bringing creativity, technical expertise, and a passion for design to every project.",
  },
];

function AboutSection() {
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
                <span className="font-medium lg:text-lg">Field Work</span>
              </div>
              <span className="font-geist-mono text-lg font-medium">©2025</span>
            </div>
            <div className=" relative flex flex-col lg:flex-row gap-10">
              <div className="flex-1 lg:sticky lg:top-0 h-fit py-10">
                <h1 className="text-4xl md:text-5xl lg:text-[88px] tracking-tighter leading-[100%] font-semibold">
                  {"Practice"}
                </h1>
                <p className="tracking-tighter leading-[100%] lg:text-lg opacity-50 font-medium my-5 lg:my-10">
                  {
                    "My expertise ensures every project is executed with precision and creativity."
                  }
                </p>
                <Link href="/work">
                  <CTA color="bg-slate-100" />
                </Link>
              </div>
              <div className="flex-2 min-h-screen">
                <hr className="h-px opacity-20 my-10" />
                {experience.map((item, i) => (
                  <div key={i} className="flex flex-col">
                    <h2 className="text-3xl font-semibold tracking-tighter leading-[100%] mb-5">
                      {item.company}
                    </h2>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-medium tracking-tighter leading-[100%]">
                        {item.role}
                      </h3>
                      <span className="bg-slate-100 rounded-full py-2 px-5 w-fit h-fit font-geist-mono font-medium">
                        {item.duration}
                      </span>
                    </div>
                    <p className="lg:w-[70%] tracking-tighter leading-[100%] font-medium opacity-70 mt-2">
                      {item.desc}
                    </p>
                    <hr className="h-px opacity-20 my-10" />
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

export default AboutSection;
