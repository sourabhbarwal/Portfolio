"use client";

import { motion } from "framer-motion";

type Props = {
  text: string;
};

export default function TextReveal({
  text,
}: Props) {
  return (
    <div className="overflow-hidden">
      <motion.span
        initial={{
          y: "100%",
        }}
        animate={{
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
        className="block"
      >
        {text}
      </motion.span>
    </div>
  );
}