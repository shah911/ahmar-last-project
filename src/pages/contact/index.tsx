import ContactSection from "@/components/ContactSection";
import Top from "@/components/Top";
import Transition from "@/components/Transition";

function Contact() {
  return (
    <Transition>
      <div>
        <Top
          title="Contact"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
      <ContactSection />
    </Transition>
  );
}

export default Contact;
