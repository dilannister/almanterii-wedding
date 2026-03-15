import { motion } from "framer-motion";
import { Calendar, MapPin, Clock } from "lucide-react";

const events = [
  {
    title: "Akad Nikah",
    subtitle: "Ijab Kabul",
    date: "Sabtu, 12 April 2025",
    time: "08.00 - 10.00 WIB",
    address: "Pendopo Agung Mangkunegaran\nJl. Ronggowarsito, Timuran,\nBanjarsari, Surakarta",
    icon: "🕌",
    color: "#4b1f28",
  },
  {
    title: "Resepsi Pernikahan",
    subtitle: "Wedding Reception",
    date: "Sabtu, 12 April 2025",
    time: "11.00 - 15.00 WIB",
    address: "Ballroom Pura Mangkunegaran\nJl. Ronggowarsito, Timuran,\nBanjarsari, Surakarta",
    icon: "🌹",
    color: "#2a1618",
  },
];

export default function EventDetails() {
  return (
    <section
      id="event-details"
      className="relative py-20 md:py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #2a1618 0%, #1a0d10 50%, #2a1618 100%)" }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Cg fill='%23C9A46C' fill-opacity='0.025'%3E%3Crect x='0' y='0' width='4' height='4'/%3E%3Crect x='40' y='0' width='4' height='4'/%3E%3Crect x='0' y='40' width='4' height='4'/%3E%3Crect x='40' y='40' width='4' height='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p
            className="text-xs tracking-[0.5em] uppercase mb-4"
            style={{ color: "#C9A46C", fontFamily: "Apple Garamond, Georgia, serif" }}
          >
            Event
          </p>
          <h2
            className="text-4xl md:text-5xl"
            style={{ fontFamily: "Amelina Script, cursive", color: "#F5E9E2" }}
          >
            Detail Acara
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-20" style={{ background: "linear-gradient(90deg, transparent, #C9A46C)" }} />
            <Calendar size={14} style={{ color: "#C9A46C" }} />
            <div className="h-px w-20" style={{ background: "linear-gradient(90deg, #C9A46C, transparent)" }} />
          </div>
        </motion.div>

        {/* Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {events.map((event, i) => (
            <motion.div
              key={i}
              className="group relative rounded-2xl p-8 overflow-hidden cursor-default card-glow transition-all duration-500"
              style={{
                background: `linear-gradient(135deg, ${event.color}, rgba(42,22,24,0.8))`,
                border: "1px solid rgba(201,164,108,0.25)",
              }}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.2, ease: [0.21, 1.02, 0.73, 1.02] }}
              whileHover={{
                y: -6,
                boxShadow: "0 20px 60px rgba(201,164,108,0.2), 0 0 30px rgba(201,164,108,0.1)",
              }}
            >
              {/* Gold corner accent */}
              <div
                className="absolute top-0 right-0 w-20 h-20 opacity-20"
                style={{
                  background: "radial-gradient(circle at top right, #C9A46C, transparent)",
                }}
              />

              {/* Icon */}
              <div className="text-4xl mb-6">{event.icon}</div>

              {/* Title */}
              <h3
                className="text-2xl md:text-3xl mb-1"
                style={{ fontFamily: "Amelina Script, cursive", color: "#C9A46C" }}
              >
                {event.title}
              </h3>
              <p
                className="text-xs tracking-[0.3em] uppercase mb-6"
                style={{ color: "#F5E9E2", fontFamily: "Apple Garamond, Georgia, serif", opacity: 0.6 }}
              >
                {event.subtitle}
              </p>

              {/* Divider */}
              <div className="h-px mb-6" style={{ background: "rgba(201,164,108,0.3)" }} />

              {/* Details */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar size={16} style={{ color: "#C9A46C", marginTop: 2 }} />
                  <p
                    className="text-sm"
                    style={{ color: "#F5E9E2", fontFamily: "Apple Garamond, Georgia, serif", opacity: 0.85 }}
                  >
                    {event.date}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={16} style={{ color: "#C9A46C", marginTop: 2 }} />
                  <p
                    className="text-sm"
                    style={{ color: "#F5E9E2", fontFamily: "Apple Garamond, Georgia, serif", opacity: 0.85 }}
                  >
                    {event.time}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={16} style={{ color: "#C9A46C", marginTop: 2, flexShrink: 0 }} />
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#F5E9E2", fontFamily: "Apple Garamond, Georgia, serif", opacity: 0.85 }}
                  >
                    {event.address.split("\n").map((line, j) => (
                      <span key={j}>
                        {line}
                        {j < event.address.split("\n").length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                </div>
              </div>

              {/* Get Directions Button */}
              <motion.a
                href={`https://maps.google.com/?q=Pura+Mangkunegaran+Surakarta`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-xs tracking-widest uppercase"
                style={{ color: "#C9A46C", fontFamily: "Apple Garamond, Georgia, serif" }}
                whileHover={{ x: 4 }}
              >
                <MapPin size={12} />
                Lihat Lokasi
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
