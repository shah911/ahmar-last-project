import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

const testimonials = [
  {
    name: "Name",
    img: "/demo.jpg",
    designation: "Designation",
    company: "Company",
    rating: 5,
    comments:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Name",
    img: "/demo.jpg",
    designation: "Designation",
    company: "Company",
    rating: 5,
    comments:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Name",
    img: "/demo.jpg",
    designation: "Designation",
    company: "Company",
    rating: 5,
    comments:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Name",
    img: "/demo.jpg",
    designation: "Designation",
    company: "Company",
    rating: 5,
    comments:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

function Testimonials() {
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
                <span className="font-medium lg:text-lg">Voices About Me</span>
              </div>
              <span className="font-geist-mono text-lg font-medium">©2025</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-4xl md:text-5xl lg:text-[88px] tracking-tighter leading-[100%] font-semibold">
                Trusted By Experts.
              </h1>
              <p className="tracking-tighter opacity-60 font-medium lg:text-lg text-center lg:w-212.5 my-8">
                Real stories from real clients. See how our designs have
                transformed international and elevated businesses, and created
                lasting impressions.
              </p>
            </div>
            <div className="flex flex-wrap gap-5 mt-10">
              {testimonials.map((testimonial, i) => (
                <div
                  key={i}
                  className=" bg-slate-100 rounded-2xl p-5 lg:w-[31%]"
                >
                  <div className="relative h-15 w-15 rounded-full">
                    <Image
                      src={testimonial.img}
                      alt={testimonial.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <div className="flex my-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <title>star_fill</title>
                        <g id="star_fill" fill="none">
                          <path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
                          <path
                            fill="#FF462EFF"
                            d="M10.92 2.868a1.25 1.25 0 0 1 2.16 0l2.795 4.798 5.428 1.176a1.25 1.25 0 0 1 .667 2.054l-3.7 4.141.56 5.525a1.25 1.25 0 0 1-1.748 1.27L12 19.592l-5.082 2.24a1.25 1.25 0 0 1-1.748-1.27l.56-5.525-3.7-4.14a1.25 1.25 0 0 1 .667-2.055l5.428-1.176z"
                          />
                        </g>
                      </svg>
                    ))}
                  </div>
                  <p className="tracking-tighter leading-[100%] lg:text-lg opacity-70 font-medium">
                    {testimonial.comments}
                  </p>
                  <hr className="h-px opacity-10 my-6" />
                  <div className="flex flex-col">
                    <div className="relative flex items-center gap-2">
                      <span className="text-lg font-medium tracking-tighter">
                        {testimonial.name}
                      </span>
                      <span className=" text-3xl font-extrabold -mt-4">.</span>
                      <span className="text-lg font-medium tracking-tighter">
                        {testimonial.designation}
                      </span>
                    </div>
                    <span className="opacity-60 tracking-tighter text-sm">
                      {testimonial.company}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
