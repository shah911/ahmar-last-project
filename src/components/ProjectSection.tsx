import ProjectSet from "./ProjectSet";
import { sliceArray } from "@/util/func";

type singleSet = {
  title: string;
  img: string;
  tag: string;
  url: string;
};

type set = singleSet[];

function ProjectSection({ projects }: { projects: set }) {
  const SingleProjectSet = sliceArray(projects, 2);
  return (
    <div>
      {/* PROJECTS */}
      <div className="relative flex flex-col gap-5">
        {SingleProjectSet.map((set, i) => (
          <ProjectSet key={i} Set={set} className="lg:sticky lg:top-0" />
        ))}
      </div>
      <hr className="h-px opacity-20 my-10 lg:my-20" />
    </div>
  );
}

export default ProjectSection;
