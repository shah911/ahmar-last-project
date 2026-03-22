import Top from "@/components/Top";
import Transition from "@/components/Transition";

function About() {
  return (
    <Transition>
      <div>
        <Top
          title="About"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
    </Transition>
  );
}

export default About;
