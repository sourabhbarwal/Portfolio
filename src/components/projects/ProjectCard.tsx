type Props = {
  title: string;
  description: string;
};
import { motion } from "framer-motion";
export default function ProjectCard({
  title,
  description,
}: Props) {
  return (
    <motion.div
      whileHover={{
        x: 10,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        border-t
        border-neutral-200
        py-16
      "
    >
      <p
        className="
          mb-4
          uppercase
          tracking-[0.4em]
          text-neutral-500
        "
      >
        Case Study
      </p>

      <motion.h3
        className="
          mb-6
          text-6xl
          font-bold
        "
        whileHover={{x: 12,}}
      >
        {title}
      </motion.h3>

      <p
        className="
          max-w-2xl
          text-xl
          text-neutral-600
        "
      >
        {description}
      </p>

      <button
        className="
          mt-8
          text-lg
          font-medium
        "
      >
        View Project →
      </button>
    </motion. div>
  );
}