import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const stories = [
  {
    year: "2019",
    title: "Pertemuan Pertama",
    description:
      "Takdir mempertemukan kami di sebuah acara budaya di kota Solo. Senyuman itu tak pernah terlupakan, seolah semesta berbisik bahwa ini adalah awal dari sebuah kisah.",
    icon: "✨",
  },
  {
    year: "2021",
    title: "Jatuh Cinta",
    description:
      "Perjalanan bersama ke Prambanan menjadi momen kami menyadari perasaan satu sama lain. Di bawah cahaya senja yang keemasan, cinta itu tumbuh dengan sendirinya.",
    icon: "💛",
  },
  {
    year: "2024",
    title: "Lamaran",
    description:
      "Dengan restu keluarga dan doa yang tulus, kami mengukuhkan janji untuk bersama seumur hidup. Cincin emas itu menjadi simbol cinta abadi yang kami jaga.",
    icon: "💍",
  },
];

export default function LoveStory() {
  return (
    <section
      id="love-story"
      className="relative py-20 md:py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #2a1618 0%, #4b1f28 50%, #2a1618 100%)" }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Cg fill='%23C9A46C' fill-opacity='0.03'%3E%3Cpath d='M30 15 L45 45 L15 45 Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-3xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p className="text-xs tracking-[0.5em] uppercase mb-4" style={{ color: "#C9A46C", fontFamily: "Apple Garamond, Georgia, serif" }}>
            Our Journey
          </p>
          <h2 className="text-4xl md:text-5xl" style={{ fontFamily: "Amelina Script, cursive", color: "#F5E9E2" }}>
            Kisah Cinta Kami
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-20" style={{ background: "linear-gradient(90deg, transparent, #C9A46C)" }} />
            <Heart size={14} style={{ color: "#C9A46C" }} fill="#C9A46C" />
            <div className="h-px w-20" style={{ background: "linear-gradient(90deg, #C9A46C, transparent)" }} />
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <motion.div
            className="absolute left-1/2 top-0 w-px -translate-x-1/2 hidden md:block"
            style={{ background: "linear-gradient(180deg, #C9A46C, rgba(201,164,108,0.1))" }}
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeOut" }}
          />

          {/* Mobile Timeline Line */}
          <div
            className="absolute left-6 top-0 w-px h-full md:hidden"
            style={{ background: "linear-gradient(180deg, #C9A46C, rgba(201,164,108,0.1))" }}
          />

          <div className="flex flex-col gap-12 md:gap-16">
            {stories.map((story, i) => (
              <motion.div
                key={i}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1, delay: i * 0.2, ease: [0.21, 1.02, 0.73, 1.02] }}
              >
                {/* Card */}
                <div
                  className={`flex-1 p-6 md:p-8 rounded-2xl relative ml-12 md:ml-0 card-glow transition-all duration-500`}
                  style={{
                    background: "rgba(75,31,40,0.4)",
                    border: "1px solid rgba(201,164,108,0.2)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{story.icon}</span>
                    <span
                      className="text-xs tracking-[0.3em] uppercase font-bold"
                      style={{ color: "#C9A46C", fontFamily: "Apple Garamond, Georgia, serif" }}
                    >
                      {story.year}
                    </span>
                  </div>
                  <h3
                    className="text-xl md:text-2xl mb-3"
                    style={{ fontFamily: "Amelina Script, cursive", color: "#C9A46C" }}
                  >
                    {story.title}
                  </h3>
                  <p
                    className="text-sm md:text-base leading-relaxed"
                    style={{ color: "#F5E9E2", fontFamily: "Apple Garamond, Georgia, serif", opacity: 0.8 }}
                  >
                    {story.description}
                  </p>
                </div>

                {/* Timeline Dot — Desktop */}
                <div
                  className="hidden md:flex w-10 h-10 rounded-full items-center justify-center flex-shrink-0 z-10"
                  style={{
                    background: "#4b1f28",
                    border: "2px solid #C9A46C",
                    boxShadow: "0 0 15px rgba(201,164,108,0.4)",
                  }}
                >
                  <div className="w-3 h-3 rounded-full" style={{ background: "#C9A46C" }} />
                </div>

                {/* Mobile Dot */}
                <div
                  className="absolute left-6 top-6 w-3 h-3 rounded-full md:hidden -translate-x-1/2"
                  style={{
                    background: "#C9A46C",
                    boxShadow: "0 0 10px rgba(201,164,108,0.6)",
                  }}
                />

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
