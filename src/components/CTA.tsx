import Image from "next/image";
import { useState } from "react";

function CTA({ text, color }: { text?: string; color?: string }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative ${color ? color : "bg-white"} h-14 w-44 flex items-center justify-center rounded-full cursor-pointer`}
    >
      <div
        className={`bg-[#FF462E] rounded-full h-12 ease-in-out duration-500 ${isHovered ? "w-42" : "w-12"} absolute left-1 flex items-center justify-center`}
      >
        <span className="h-12 w-12 absolute left-0 rounded-full overflow-hidden flex items-center justify-center">
          <Image
            src="/arrow_right_line.png"
            alt="arrow_right_line"
            priority
            width={20}
            height={20}
            className={`object-contain ease-in-out duration-500 ${isHovered ? "-translate-x-10" : "translate-x-2.25"} `}
          />
          <Image
            src="/arrow_right_line.png"
            alt="arrow_right_line"
            priority
            width={20}
            height={20}
            className={`object-contain ease-in-out duration-500 ${isHovered ? "-translate-x-2.75" : "translate-x-10"} `}
          />
        </span>
      </div>
      <div className="text-white z-10 absolute right-5 overflow-hidden h-5 flex flex-col items-center justify-center">
        <span
          className={`duration-500 text-black ease-in-out ${isHovered ? "-translate-y-3" : "translate-y-3"}`}
        >
          Get in touch
        </span>
        <span
          className={`duration-500 ease-in-out ${isHovered ? "-translate-y-3" : "translate-y-3"}`}
        >
          {text ? text : "Get in touch"}
        </span>
      </div>
    </div>
  );
}

export default CTA;
