import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

function Loader() {
  const [isLoaded, setIsLoaded] = useState(true);
  useEffect(() => {
    const timeId = setTimeout(() => {
      setIsLoaded(false);
    }, 100);

    return () => {
      clearTimeout(timeId);
    };
  }, []);
  return (
    <AnimatePresence mode="wait">
      {isLoaded && (
        <div className="h-screen flex items-center justify-center fixed top-0 left-0 z-999999 w-full overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex-1 h-full -mx-1 flex flex-col">
              <motion.div
                exit={{
                  clipPath: "inset(0 0 100% 0)",
                  transition: {
                    duration: 1.5,
                    delay: 0.3 * i,
                    ease: [0.83, 0, 0.17, 1],
                  },
                }}
                className="h-[51%] bg-[#FF462E] -my-1"
              />
              <motion.div
                exit={{
                  clipPath: "inset(100% 0 0 0)",
                  transition: {
                    duration: 1.5,
                    delay: 0.3 * i,
                    ease: [0.83, 0, 0.17, 1],
                  },
                }}
                className="h-[51%] bg-[#FF462E] -my-1"
              />
            </div>
          ))}
        </div>
      )}
    </AnimatePresence>
  );
}

export default Loader;
