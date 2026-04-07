import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Transition from "@/components/Transition";

export default function Home() {
  return (
    <Transition>
      <Hero />
      <Projects />
    </Transition>
  );
}
