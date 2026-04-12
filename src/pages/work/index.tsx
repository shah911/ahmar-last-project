import ProjectSection from "@/components/ProjectSection";
import Top from "@/components/Top";
import Transition from "@/components/Transition";
const projects = [
  {
    title: "project",
    img: "/demo.jpg",
    tag: "portfolio",
    url: "/work/project-1",
  },
  {
    title: "project",
    img: "/demo.jpg",
    tag: "portfolio",
    url: "/work/project-1",
  },
  {
    title: "project",
    img: "/demo.jpg",
    tag: "portfolio",
    url: "/work/project-1",
  },
  {
    title: "project",
    img: "/demo.jpg",
    tag: "portfolio",
    url: "/work/project-1",
  },
  {
    title: "project",
    img: "/demo.jpg",
    tag: "portfolio",
    url: "/work/project-1",
  },
  {
    title: "project",
    img: "/demo.jpg",
    tag: "portfolio",
    url: "/work/project-1",
  },
];

function Work() {
  return (
    <Transition>
      <div>
        <Top
          title="Work"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <div className="w-[95%] mx-auto font-inter">
          <hr className="h-px opacity-20 mt-15 lg:mt-20 mb-10" />
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-2">
              <div className="bg-[#FF462E] h-4 w-4 rounded-sm" />
              <span className="font-medium lg:text-lg">Featured Works</span>
            </div>
            <span className="font-geist-mono text-lg font-medium">©2025</span>
          </div>
          <ProjectSection projects={projects} />
        </div>
      </div>
    </Transition>
  );
}

export default Work;
