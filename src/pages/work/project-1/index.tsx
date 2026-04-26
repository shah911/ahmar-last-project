import ProjectTemplate from "@/components/ProjectTemplate";
import Transition from "@/components/Transition";
import { DemoProject } from "@/util/projects";

function Project1() {
  return (
    <Transition>
      <ProjectTemplate project={DemoProject} />
    </Transition>
  );
}

export default Project1;
