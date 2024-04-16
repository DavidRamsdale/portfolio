import { Skill } from "@/constants/types";
import { fadeInText, scaleXVariant } from "@/utils/motion";
import { motion } from "framer-motion";

interface SkillColumnProps {
  title: string;
  skills: Skill[];
}

export const SkillColumn: React.FC<SkillColumnProps> = ({ title, skills }) => {
  return (
    <motion.div className="flex flex-col justify-start">
      <h3 className="text-2xl font-bold">{title}</h3>
      <div className="mt-2 space-y-4 pb-2">
        {skills.map((skill, index) => (
          <div className="w-64" key={index}>
            <motion.h3
              className="text-lg font-semibold text-gray-800"
              variants={fadeInText(0.2 + index * 0.2)}
            >
              {skill.title}
            </motion.h3>
            <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
              <motion.div
                className="h-full bg-indigo-500 rounded-full "
                style={{ width: `${skill.level}%` }}
                variants={scaleXVariant(0.2 + index * 0.2)}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
