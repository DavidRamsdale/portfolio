import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { PageSection } from "./PageSection";

const experienceData = [
  {
    date: "2019 September - 2024 February",
    title: "Full Stack Engineer",
    company: "My Muscle Chef",
    description:
      "Developing and maintaining web applications, APIs, and databases.",
  },
  {
    date: "2019 - 2019",
    title: "Front End Developer",
    company: "Laava",
    description:
      "Developing and maintaining web applications, APIs, and databases.",
  },
  {
    date: "2017 - 2019",
    title: "Front End Developer",
    company: "Investing For Charity",
    description:
      "Developing and maintaining web applications, APIs, and databases.",
  },
];

const Experience = () => {
  return (
    <PageSection>
      <h1 className="text-5xl text-center font-bold pb-6">Experience</h1>
      <VerticalTimeline lineColor="black">
        {experienceData.map((experience, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            date={experience.date}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
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

export default Experience;
