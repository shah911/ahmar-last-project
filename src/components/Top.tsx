import Image from "next/image";

function Top({
  title,
  desc,
  img,
}: {
  title: string;
  desc: string;
  img?: string;
}) {
  return (
    <div className="h-150 bg-slate-300 -mt-20">
      <div className="relative h-full w-full">
        <Image
          src={img ? img : "/demo.jpg"}
          alt="demo"
          fill
          priority
          className="object-cover"
        />
        <div className="w-[95%] mx-auto absolute left-3 lg:left-8 bottom-8 flex flex-col lg:flex-row gap-4 lg:items-end justify-between text-white">
          <div className="flex flex-col gap-4">
            <span className="font-geist-mono text-2xl lg:text-4xl font-semibold tracking-tighter">
              ©2025
            </span>
            <h1 className="font-inter font-bold text-7xl lg:text-9xl tracking-tighter">
              {title}
            </h1>
          </div>
          <p className="flex lg:w-[30%] opacity-50 font-inter text-white text-lg font-medium tracking-tighter leading-[100%]">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Top;
