import { Skill } from "@/constants/types";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface SkillColumnProps {
  title: string;
  skills: Skill[];
}

export const SkillColumn: React.FC<SkillColumnProps> = ({ title, skills }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div className="flex flex-col justify-start" ref={ref}>
      <h3 className="text-2xl font-semibold">{title}</h3>
      <div className="mt-2 space-y-4 pb-2">
        {skills.map((skill, index) => (
          <div className="w-64" key={index}>
            <motion.h3
              className="text-xl font-bold text-gray-800"
              initial={{
                opacity: 0,
              }}
              animate={
                inView
                  ? {
                      opacity: 1,
                      transition: {
                        duration: 1,
                        delay: 0.2 + index * 0.2,
                      },
                    }
                  : {}
              }
            >
              {skill.title}
            </motion.h3>
            <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
              <motion.div
                className="h-full bg-indigo-500 rounded-full "
                style={{ width: `${skill.level}%` }}
                initial={{
                  scaleX: 0,
                  originX: 0,
                }}
                animate={
                  inView
                    ? {
                        scaleX: 1,
                        transition: {
                          duration: 1,
                          delay: 0.2 + index * 0.2,
                        },
                      }
                    : {}
                }
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
