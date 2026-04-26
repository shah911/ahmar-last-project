import AboutSection from "@/components/AboutSection";
import CTA from "@/components/CTA";
import Top from "@/components/Top";
import Transition from "@/components/Transition";
import Link from "next/link";

const services = [
  {
    title: "Brand Design",
    desc: "Strategic and visually compelling brand design that tells your story, builds trust, and sets you apart. From logos to full identity systems, we craft brands that leave a lasting impact.",
    price: "$2,999",
  },
  {
    title: "Web Design",
    desc: "We craft stunning, high-performance websites that blend creativity with functionality. From sleek portfolios to powerful business sites, our designs ensure a seamless user experience.",
    price: "$3,599",
  },
  {
    title: "Product Design",
    desc: "Blending creativity with functionality, we craft intuitive and visually stunning product designs that enhance user experience and drive engagement.",
    price: "$5,999",
  },
];

function About() {
  return (
    <Transition>
      <div>
        <Top
          title="About"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
      <div className="w-[95%] mx-auto font-inter">
        <hr className="h-px opacity-20 my-10 lg:my-20" />
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-5">
              <div className="bg-[#FF462E] h-4 w-4 rounded-sm" />
              <span className="font-medium lg:text-lg">
                Building with Passion
              </span>
            </div>
          </div>
          <div className="flex-3 flex-col">
            <h1 className="text-3xl lg:text-5xl font-semibold tracking-tighter leading-[100%]">
              {
                "Every project is an opportunity to push boundaries, tell a story, and create something truly memorable. Let’s build the extraordinary together again.®"
              }
            </h1>
            <div className="mt-15 w-fit">
              <Link href="/contact">
                <CTA color="bg-slate-200" />
              </Link>
            </div>
            <hr className="h-px opacity-20 my-10" />
            <div className="flex flex-col mb-15">
              {services.map((service, i) => (
                <div key={i}>
                  <div className="flex flex-col lg:flex-row gap-5 justify-between">
                    <h2 className="flex-1 font-medium text-lg">
                      {service.title}
                    </h2>
                    {/* assign a specific width */}
                    <p className="flex-[1.5] font-medium opacity-50 tracking-tighter leading-[100%] lg:text-lg">
                      {service.desc}
                    </p>
                    <div className="flex-1 flex lg:justify-end">
                      <span className="bg-slate-100 rounded-full py-2 px-4 w-fit h-fit font-geist-mono">
                        {service.price}
                      </span>
                    </div>
                  </div>
                  <hr className="h-px opacity-20 my-6 md:my-10" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <AboutSection />
    </Transition>
  );
}

export default About;
