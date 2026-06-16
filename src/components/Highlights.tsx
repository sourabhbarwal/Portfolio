export default function Highlights() {
  const items = [
    {
      title: "IIIT Nagpur",
      description:
        "B.Tech Computer Science",
    },

    {
      title: "Cloud & DevOps",
      description:
        "AWS • Docker • Kubernetes",
    },

    {
      title: "Open To",
      description:
        "Internships & Opportunities",
    },

    {
      title: "Focus",
      description:
        "Infrastructure & Automation",
    },
  ];

  return (
    <section
      id="highlights"
      className="py-32"
    >
      <div
        className="
        mx-auto
        max-w-7xl
        px-6
        "
      >
        <div
          className="
          grid
          gap-6

          md:grid-cols-2
          lg:grid-cols-4
          "
        >
          {items.map((item) => (
            <div
              key={item.title}
              className="
              rounded-[28px]

              border
              border-neutral-200

              bg-white

              p-8

              transition-all
              duration-300

              hover:-translate-y-1
              hover:shadow-xl
              "
            >
              <p
                className="
                text-sm

                uppercase

                tracking-[0.2em]

                text-neutral-500
                "
              >
                {item.title}
              </p>

              <h3
                className="
                mt-4

                text-xl

                font-semibold
                "
              >
                {item.description}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}