import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
const expertise = [
  {
    title: "Cloud Infrastructure",
    skills: [
      "AWS",
      "EC2",
      "S3",
      "IAM",
      "CloudFront",
    ],
  },
  {
    title: "DevOps & Automation",
    skills: [
      "Docker",
      "Kubernetes",
      "Terraform",
      "GitHub Actions",
    ],
  },
  {
    title: "Frontend Engineering",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
    ],
  },
  {
    title: "Backend Systems",
    skills: [
      "Node.js",
      "Express",
      "Firebase",
      "REST APIs",
    ],
  },
];

export default function Expertise() {
  return (
    <Reveal>
    <section
      id="skills"
      className="py-40"
    >
      <p className="mb-6 uppercase tracking-[0.4em] text-neutral-500">
        Expertise
      </p>

      <h2 className="mb-20 text-7xl font-bold">
        Tech Stack
      </h2>

      <div className="space-y-14">
        {expertise.map((item) => (
          <motion.div
            key={item.title}
            whileHover={{
              x: 8,
            }}
            className="
              border-b
              border-neutral-200
              pb-10
            "
          >
            <h3
              className="
                mb-6
                text-3xl
                font-semibold
              "
            >
              {item.title}
            </h3>

            <div
              className="
                flex
                flex-wrap
                gap-4
              "
            >
              {item.skills.map((skill) => (
                <span
                  key={skill}
                  className="
                    text-xl
                    text-neutral-600
                  "
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
    </Reveal>
  );
}