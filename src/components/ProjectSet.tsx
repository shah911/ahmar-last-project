import Image from "next/image";
import Link from "next/link";

type singleSet = {
  title: string;
  img: string;
  tag: string;
  url: string;
};

type set = singleSet[];

function ProjectSet({ Set, className }: { Set: set; className?: string }) {
  return (
    <div className={`flex flex-col lg:flex-row gap-5 ${className}`}>
      {Set.map((project: singleSet, i: number) => (
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
  );
}

export default ProjectSet;
