import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Check } from "lucide-react";

export default function RSVP() {
  const [form, setForm] = useState({ name: "", attendance: "hadir", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const inputStyle = {
    width: "100%",
    padding: "14px 18px",
    borderRadius: "10px",
    background: "rgba(75,31,40,0.4)",
    border: "1px solid rgba(201,164,108,0.25)",
    color: "#F5E9E2",
    fontFamily: "Apple Garamond, Georgia, serif",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.3s",
  };

  return (
    <section
      id="rsvp"
      className="relative py-20 md:py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #2a1618 0%, #4b1f28 50%, #2a1618 100%)" }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(201,164,108,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p
            className="text-xs tracking-[0.5em] uppercase mb-4"
            style={{ color: "#C9A46C", fontFamily: "Apple Garamond, Georgia, serif" }}
          >
            Konfirmasi Kehadiran
          </p>
          <h2
            className="text-4xl md:text-5xl"
            style={{ fontFamily: "Amelina Script, cursive", color: "#F5E9E2" }}
          >
            RSVP
          </h2>
          <p
            className="mt-4 text-sm"
            style={{ color: "#F5E9E2", fontFamily: "Apple Garamond, Georgia, serif", opacity: 0.7 }}
          >
            Kehadiran Anda adalah hadiah terindah bagi kami
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-20" style={{ background: "linear-gradient(90deg, transparent, #C9A46C)" }} />
            <div className="w-2 h-2 rotate-45" style={{ background: "#C9A46C" }} />
            <div className="h-px w-20" style={{ background: "linear-gradient(90deg, #C9A46C, transparent)" }} />
          </div>
        </motion.div>

        {/* Card */}
        <motion.div
          className="relative rounded-2xl p-8 md:p-10"
          style={{
            background: "rgba(42,22,24,0.7)",
            border: "1px solid rgba(201,164,108,0.25)",
            backdropFilter: "blur(15px)",
          }}
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.21, 1.02, 0.73, 1.02] }}
        >
          {/* Gold corner accents */}
          {[["top-0 left-0", "top left"], ["top-0 right-0", "top right"]].map(([pos, label]) => (
            <div
              key={label}
              className={`absolute ${pos} w-8 h-8`}
              style={{
                borderTop: "2px solid rgba(201,164,108,0.5)",
                borderLeft: label.includes("right") ? "none" : "2px solid rgba(201,164,108,0.5)",
                borderRight: label.includes("right") ? "2px solid rgba(201,164,108,0.5)" : "none",
                borderRadius: label.includes("right") ? "0 12px 0 0" : "12px 0 0 0",
              }}
            />
          ))}
          {[["bottom-0 left-0", "bottom left"], ["bottom-0 right-0", "bottom right"]].map(([pos, label]) => (
            <div
              key={label}
              className={`absolute ${pos} w-8 h-8`}
              style={{
                borderBottom: "2px solid rgba(201,164,108,0.5)",
                borderLeft: label.includes("right") ? "none" : "2px solid rgba(201,164,108,0.5)",
                borderRight: label.includes("right") ? "2px solid rgba(201,164,108,0.5)" : "none",
                borderRadius: label.includes("right") ? "0 0 12px 0" : "0 0 0 12px",
              }}
            />
          ))}

          {submitted ? (
            <motion.div
              className="text-center py-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ background: "rgba(201,164,108,0.2)", border: "2px solid #C9A46C" }}
              >
                <Check size={28} style={{ color: "#C9A46C" }} />
              </div>
              <h3
                className="text-2xl mb-3"
                style={{ fontFamily: "Amelina Script, cursive", color: "#C9A46C" }}
              >
                Terima Kasih!
              </h3>
              <p
                className="text-sm"
                style={{ color: "#F5E9E2", fontFamily: "Apple Garamond, Georgia, serif", opacity: 0.8 }}
              >
                Konfirmasi kehadiran Anda telah kami terima.<br />
                Kami menantikan kehadiran Anda dengan bahagia.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label
                  className="block text-xs tracking-widest uppercase mb-2"
                  style={{ color: "#C9A46C", fontFamily: "Apple Garamond, Georgia, serif" }}
                >
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Masukkan nama Anda"
                  required
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(201,164,108,0.6)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(201,164,108,0.25)")}
                />
              </div>

              {/* Attendance */}
              <div>
                <label
                  className="block text-xs tracking-widest uppercase mb-2"
                  style={{ color: "#C9A46C", fontFamily: "Apple Garamond, Georgia, serif" }}
                >
                  Kehadiran
                </label>
                <select
                  name="attendance"
                  value={form.attendance}
                  onChange={handleChange}
                  style={{
                    ...inputStyle,
                    cursor: "pointer",
                  }}
                >
                  <option value="hadir" style={{ background: "#2a1618" }}>Ya, saya akan hadir</option>
                  <option value="tidak" style={{ background: "#2a1618" }}>Maaf, saya tidak bisa hadir</option>
                  <option value="mungkin" style={{ background: "#2a1618" }}>Mungkin hadir</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  className="block text-xs tracking-widest uppercase mb-2"
                  style={{ color: "#C9A46C", fontFamily: "Apple Garamond, Georgia, serif" }}
                >
                  Pesan & Doa
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tuliskan ucapan dan doa terbaik Anda..."
                  rows={4}
                  style={{ ...inputStyle, resize: "none" }}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(201,164,108,0.6)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(201,164,108,0.25)")}
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl flex items-center justify-center gap-3 text-sm tracking-widest uppercase"
                style={{
                  background: "linear-gradient(135deg, #C9A46C, #F5E9E2, #C9A46C)",
                  color: "#2a1618",
                  fontFamily: "Apple Garamond, Georgia, serif",
                  fontWeight: "bold",
                  boxShadow: "0 0 20px rgba(201,164,108,0.3)",
                  backgroundSize: "200% auto",
                  opacity: loading ? 0.7 : 1,
                }}
                whileHover={{ scale: 1.02, boxShadow: "0 0 35px rgba(201,164,108,0.5)" }}
                whileTap={{ scale: 0.98 }}
              >
                {loading ? (
                  <motion.div
                    className="w-5 h-5 border-2 rounded-full"
                    style={{ borderColor: "#2a1618", borderTopColor: "transparent" }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                  />
                ) : (
                  <>
                    <Send size={16} />
                    Kirim Konfirmasi
                  </>
                )}
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
