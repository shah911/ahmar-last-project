import Image from "next/image";

type Project = {
  title: string;
  img: string;
  desc: string;
  tags: string[];

  intro: string;

  testimonial: {
    rating: number;
    name: string;
    comments: string;
  };

  problem: {
    title: string;
    desc: string;
    img: string;
  };

  solution: {
    title: string;
    desc: string;
    imgs: string[];
  };

  concept: {
    title: string;
    desc: string;
    img: string;
    final: string;
  };
};

function ProjectTemplate({ project }: { project: Project }) {
  return (
    <>
      <div className="h-screen -mt-20 ">
        <div className="relative h-full w-full">
          <Image
            src={project.img}
            alt={project.title}
            fill
            priority
            className="object-cover"
          />
          <div className="w-[95%] mx-auto absolute left-3 lg:left-8 bottom-8 flex flex-col lg:flex-row gap-4 lg:items-end justify-between text-white">
            <div className="flex flex-col gap-4">
              <h1 className="font-inter font-bold text-7xl lg:text-9xl tracking-tighter">
                {project.title}
              </h1>
              <hr className="h-px opacity-20 my-5 lg:w-[50%]" />
              <p className="flex lg:w-[50%] opacity-50 font-inter text-white text-lg font-medium tracking-tighter leading-[100%]">
                {project.desc}
              </p>
              <div className="flex gap-2 mt-5">
                {project.tags.map((item, i) => (
                  <span
                    className="bg-[#202020] text-white font-medium rounded-full py-2 px-4 w-fit h-fit"
                    key={i}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[95%] mx-auto font-inter">
        {/* INTRO */}
        <hr className="h-px opacity-20 mt-20 mb-10" />
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-5">
              <div className="bg-[#FF462E] h-4 w-4 rounded-sm" />
              <span className="font-medium lg:text-lg">Know More</span>
            </div>
          </div>
          <div className="flex-3 flex-col">
            <h1 className="text-3xl lg:text-5xl font-semibold tracking-tighter leading-[100%]">
              {project.intro}
            </h1>
            <hr className="h-px opacity-20 my-10" />
            <div className="flex flex-col gap-5 mb-15">
              <div className="flex gap-1">
                {[...Array(project.testimonial.rating)].map((_, i) => (
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
              <span className="text-lg font-medium tracking-tighter">
                {project.testimonial.name}
              </span>
              <p className="tracking-tighter leading-[100%] lg:text-lg opacity-70 font-medium">
                {project.testimonial.comments}
              </p>
            </div>
          </div>
        </div>
        <hr className="h-px opacity-20 mb-10 lg:mb-20" />
        {/* PROBLEM */}
        <div className="relative h-100 lg:h-175 w-full">
          <Image
            src={project.problem.img}
            alt={project.problem.title}
            fill
            priority
            className="object-cover rounded-xl"
          />
        </div>
        <div className="flex flex-col lg:flex-row my-20">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-5">
              <div className="bg-[#FF462E] h-4 w-4 rounded-sm" />
              <span className="font-medium lg:text-lg">Problem</span>
            </div>
          </div>
          <div className="flex-3 flex flex-col gap-5">
            <h1 className="text-3xl font-semibold tracking-tighter leading-[100%]">
              {project.problem.title}
            </h1>
            <p className="tracking-tighter leading-[100%] lg:text-lg opacity-70 font-medium">
              {project.problem.desc}
            </p>
          </div>
        </div>
        {/* SOLUTION */}
        <div className="flex flex-col lg:flex-row gap-5 h-200 lg:h-150">
          {project.solution.imgs.map((img, i) => (
            <div className="flex-1 relative h-1/2 lg:h-full" key={i}>
              <Image
                src={img}
                alt={project.solution.title}
                fill
                className="object-cover rounded-xl"
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col lg:flex-row my-20">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-5">
              <div className="bg-[#FF462E] h-4 w-4 rounded-sm" />
              <span className="font-medium lg:text-lg">Solution</span>
            </div>
          </div>
          <div className="flex-3 flex flex-col gap-5">
            <h1 className="text-3xl font-semibold tracking-tighter leading-[100%]">
              {project.solution.title}
            </h1>
            <p className="tracking-tighter leading-[100%] lg:text-lg opacity-70 font-medium">
              {project.solution.desc}
            </p>
          </div>
        </div>
        {/* CONCEPT */}
        <div className="relative h-100 lg:h-175 w-full">
          <Image
            src={project.concept.img}
            alt={project.concept.title}
            fill
            priority
            className="object-cover rounded-xl"
          />
        </div>
        <div className="flex flex-col lg:flex-row my-20">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-5">
              <div className="bg-[#FF462E] h-4 w-4 rounded-sm" />
              <span className="font-medium lg:text-lg">Concept</span>
            </div>
          </div>
          <div className="flex-3 flex flex-col gap-5">
            <h1 className="text-3xl font-semibold tracking-tighter leading-[100%]">
              {project.concept.title}
            </h1>
            <p className="tracking-tighter leading-[100%] lg:text-lg opacity-70 font-medium">
              {project.concept.desc}
            </p>
          </div>
        </div>
        <div className="relative h-100 lg:h-175 w-full">
          <Image
            src={project.concept.final}
            alt={project.concept.title}
            fill
            priority
            className="object-cover rounded-xl"
          />
        </div>
        <hr className="h-px opacity-20 my-10 lg:my-20" />
      </div>
    </>
  );
}

export default ProjectTemplate;
