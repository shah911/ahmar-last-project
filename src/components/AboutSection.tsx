import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import CTA from "./CTA";
import Link from "next/link";
import ContactSection from "./ContactSection";

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

const stack = [
  {
    icon: "/demo.jpg",
    title: "Framer - Development",
    desc: "Combining design, prototyping, and development in one platform, it empowers creators to build visually stunning, high-performance websites.",
  },
  {
    icon: "/demo.jpg",
    title: "Figma - Web Designing",
    desc: "Figma is a powerful, collaborative design tool that enables real-time collaboration and seamless workflow. With its top intuitive interface and versatile features.",
  },
  {
    icon: "/demo.jpg",
    title: "Notion - Productivity",
    desc: "Notion is an all-in-one workspace that combines note-taking, task management, databases, and collaboration features. With its flexible and customizable interface.",
  },
  {
    icon: "/demo.jpg",
    title: "Apple - Monitor",
    desc: "Apple is a global technology leader known for its innovative products, sleek design, and seamless user experience. From the iconic iPhone to the powerful Mac.",
  },
  {
    icon: "/demo.jpg",
    title: "Nikon - Photography",
    desc: "Renowned for precision, innovation, and reliability, Nikon empowers photographers and videographers to capture stunning visuals with exceptional clarity and detail.",
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
            {/* EXPERIENCE */}
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-2">
                <div className="bg-[#FF462E] h-4 w-4 rounded-sm" />
                <span className="font-medium lg:text-lg">Field Work</span>
              </div>
              <span className="font-geist-mono text-lg font-medium">©2025</span>
            </div>
            <div className=" relative flex flex-col lg:flex-row lg:gap-10">
              <div className="flex-1 lg:sticky lg:top-0 h-fit lg:py-10">
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
                    <h2 className="text-2xl lg:text-3xl font-semibold tracking-tighter leading-[100%] mb-5">
                      {item.company}
                    </h2>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg lg:text-xl font-medium tracking-tighter leading-[100%]">
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
            {/* TOOLS */}
            <hr className="h-px opacity-20 lg:mt-20 mt-10 mb-10" />
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-2">
                <div className="bg-[#FF462E] h-4 w-4 rounded-sm" />
                <span className="font-medium lg:text-lg">Featured Stack</span>
              </div>
              <span className="font-geist-mono text-lg font-medium">©2025</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-4xl md:text-5xl lg:text-[88px] tracking-tighter leading-[100%] font-semibold">
                Favourite Tools
              </h1>
              <p className="tracking-tighter opacity-60 font-medium lg:text-lg text-center lg:w-212.5 my-8">
                My favorite stack includes Framer, Figma, and other cutting-edge
                technologies to ensure seamless and dynamic designs.
              </p>
            </div>
            <div className="flex flex-wrap gap-5 my-10">
              {stack.map((item, i) => (
                <div
                  className="w-full md:w-100 bg-slate-100 rounded-2xl p-5"
                  key={i}
                >
                  {/* HEAD */}
                  <div className="flex items-center justify-between mb-34">
                    <div className="relative h-15 w-15">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        fill
                        className="object-cover rounded-xl"
                      />
                    </div>
                    <div className="flex items-center justify-center gap-1">
                      {stack.map((_, index) => (
                        <span
                          key={index}
                          className={`h-3 w-3 rounded-full ${i >= index ? "bg-[#FF462E]" : "bg-slate-200"} `}
                        ></span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-5">
                    <div className="bg-[#FF462E] h-4 w-4 rounded-sm" />
                    <span className="font-medium lg:text-lg">{item.title}</span>
                  </div>
                  <p className="opacity-60 font-medium tracking-tighter">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <ContactSection />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
