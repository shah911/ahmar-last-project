import { useState } from "react";
import { links } from "./Header";
import Link from "next/link";
import CTA from "./CTA";
import { AnimatePresence, motion } from "motion/react";
import { main } from "@/util/variants";

function Menu() {
  const [isOpen, SetIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => {
          SetIsOpen(!isOpen);
        }}
        className={`relative cursor-pointer h-10 w-10 z-99999 flex items-center justify-center ease-in-out duration-200 ${isOpen ? "rotate-45" : "rotate-0"}`}
      >
        <span className="h-0.5 w-5 bg-white rotate-90 absolute"></span>
        <span className="h-0.5 w-5 bg-white"></span>
      </div>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            variants={main}
            initial="initial"
            animate="animate"
            exit="exit"
            className="bg-[#FF462E] absolute top-0 left-0 w-full z-9999"
          >
            <div className=" mt-20 w-[95%] mx-auto">
              <hr className="border-white h-px opacity-40" />
              {links.map((link, i) => (
                <div key={i} className="flex flex-col">
                  <Link
                    onClick={() => SetIsOpen(!isOpen)}
                    href={link.url}
                    className="text-white capitalize font-semibold py-4"
                  >
                    {link.title}
                    <sup className="font-semibold ml-1">{"0" + (i + 1)}</sup>
                  </Link>
                  <hr className="border-white h-px opacity-40" />
                </div>
              ))}
              <div onClick={() => SetIsOpen(!isOpen)} className="py-5">
                <Link href="/contact">
                  <CTA />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Menu;
