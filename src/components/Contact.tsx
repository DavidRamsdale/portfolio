import { ContactForm } from "./ContactForm";
import Earth from "./canvas/Earth";

export const Contact = () => {
  return (
    <section id="contact">
      <div className="relative flex items-end md:items-center h-screen w-full pb-4">
        <div className="absolute inset-0">
          <Earth />
        </div>
        <div className="container z-10 lg:pl-36">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
