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
      <div className="pt-5 lg:pt-0">
        <ContactSection />
      </div>
    </Transition>
  );
}

export default Contact;
