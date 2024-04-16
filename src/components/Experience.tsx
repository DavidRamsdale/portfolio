import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { PageSection } from "@/components/common/PageSection";
import { SectionTitle } from "@/components/common/SectionTitle";
import { experienceData } from "@/constants";

export const Experience = () => {
  return (
    <PageSection id="experience">
      <SectionTitle title="Experience" />
      <VerticalTimeline lineColor="black">
        {experienceData.map((experience, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            date={experience.date}
            iconStyle={{ background: "#6366f1" }}
          >
            <h3 className="font-bold">{experience.title}</h3>
            <h4 className="text-gray-600">{experience.company}</h4>
            <p className="text-xl">{experience.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </PageSection>
  );
};
