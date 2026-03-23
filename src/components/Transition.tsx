import { cover, cover2, slide } from "@/util/variants";
import Footer from "./Footer";
import Header from "./Header";
import { motion } from "motion/react";
import { useEffect } from "react";

function Transition({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="relative">
      <motion.div
        variants={cover}
        initial="initial"
        animate="animate"
        exit="exit"
        className="fixed top-0 flex items-center justify-center bg-[#FF462E] z-30 h-screen w-full"
      />
      <motion.div
        variants={cover2}
        initial="initial"
        animate="animate"
        exit="exit"
        className="fixed top-0 flex items-center justify-center bg-[#FF462E] z-30 h-screen w-full"
      />
      <motion.div
        variants={slide}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Header />
        {children}
        <Footer />
      </motion.div>
    </div>
  );
}

export default Transition;
