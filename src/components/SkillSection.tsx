import { Skill } from "@/constants/types";
import { motion } from "framer-motion";

interface SkillSectionProps {
  title: string;
  skills: Skill[];
}

export const SkillSection: React.FC<SkillSectionProps> = ({
  title,
  skills,
}) => {
  return (
    <motion.div className="flex flex-col justify-start items-center">
      <h2 className="text-4xl font-semibold text-center">{title}</h2>
      <div className="mt-8 space-y-4 pb-6">
        {skills.map((skill, index) => (
          <div className="w-64" key={index}>
            <motion.h3
              className="text-xl font-bold text-gray-800"
              initial={{
                opacity: 0,
              }}
              animate="visible"
              variants={{
                visible: {
                  opacity: 1,
                  transition: {
                    duration: 1,
                    delay: 0.2 + index * 0.2,
                  },
                },
              }}
            >
              {skill.title}
            </motion.h3>
            <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
              <motion.div
                className="h-full bg-indigo-500 rounded-full "
                style={{ width: `${skill.level}%` }}
                animate="visible"
                initial={{
                  scaleX: 0,
                  originX: 0,
                }}
                variants={{
                  visible: {
                    scaleX: 1,
                    transition: {
                      duration: 1,
                      delay: 0.2 + index * 0.2,
                    },
                  },
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
