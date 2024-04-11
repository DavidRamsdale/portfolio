import { ContactForm } from "@/components/ContactForm";
import { PageSection } from "@/components/PageSection";

export const Contact = () => {
  return (
    <PageSection>
      <div className="flex justify-center items-center h-screen w-full">
        <ContactForm />
      </div>
    </PageSection>
  );
};
