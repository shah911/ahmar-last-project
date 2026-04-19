import ContactSection from "@/components/ContactSection";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Transition from "@/components/Transition";

export default function Home() {
  return (
    <Transition>
      <Hero />
      <Projects />
      <Testimonials />
      <ContactSection />
    </Transition>
  );
}
