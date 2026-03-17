import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Check } from "lucide-react";
import { fonts, colors, sectionBg } from "../lib/fonts";
import { SectionHeader, KawungCorner, BATIK_KAWUNG_LIGHT } from "../lib/shared";

export default function RSVP() {
  const [form, setForm] = useState({ name: "", attendance: "hadir", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1500);
  };

  const inputBase = {
    width: "100%",
    padding: "13px 16px",
    borderRadius: 10,
    background: "rgba(75,31,40,0.1)",
    border: "1px solid rgba(75,31,40,0.25)",
    color: colors.maroon,
    fontFamily: fonts.body,
    fontSize: 15,
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.25s",
  };

  const labelStyle = {
    display: "block",
    fontFamily: fonts.ui,
    fontSize: 10,
    letterSpacing: "0.35em",
    color: colors.maroon,
    textTransform: "uppercase",
    marginBottom: 8,
    opacity: 0.7,
  };

  return (
    <section
      id="rsvp"
      style={{
        position: "relative",
        padding: "100px 0",
        overflow: "hidden",
        background: sectionBg.beigeRadial,
      }}
    >
      <div style={{ position: "absolute", inset: 0, backgroundImage: BATIK_KAWUNG_LIGHT, backgroundSize: "80px 80px" }} />
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 65% 50% at 50% 50%, rgba(201,164,108,0.1) 0%, transparent 70%)" }} />

      <div style={{ position: "absolute", top: 14, left: 14 }}><KawungCorner size={65} light /></div>
      <div style={{ position: "absolute", top: 14, right: 14 }}><KawungCorner size={65} flip light /></div>
      <div style={{ position: "absolute", bottom: 14, left: 14, transform: "rotate(180deg)" }}><KawungCorner size={65} flip light /></div>
      <div style={{ position: "absolute", bottom: 14, right: 14, transform: "rotate(180deg)" }}><KawungCorner size={65} light /></div>

      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, transparent, ${colors.maroon}, transparent)` }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, transparent, ${colors.maroon}, transparent)` }} />

      <div style={{ position: "relative", maxWidth: 560, margin: "0 auto", padding: "0 24px" }}>
        <SectionHeader title="KONFIRMASI KEHADIRAN" light />

        {/* Intro text */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          style={{ fontFamily: fonts.body, fontSize: "clamp(14px,2.2vw,17px)", color: colors.maroon, opacity: 0.7, lineHeight: 1.85, textAlign: "center", marginBottom: 16, fontStyle: "italic" }}
        >
          Kehadiran dan doa restu Anda merupakan kebahagiaan yang sangat berarti bagi kami.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ fontFamily: fonts.body, fontSize: "clamp(13px,2vw,15px)", color: colors.maroon, opacity: 0.6, lineHeight: 1.75, textAlign: "center", marginBottom: 36 }}
        >
          Silakan konfirmasi kehadiran Anda melalui form RSVP yang tersedia. Kami sangat menantikan kehadiran Anda di hari bahagia kami.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.21, 1.02, 0.73, 1.02] }}
          style={{
            borderRadius: 20,
            padding: "40px 32px",
            background: "rgba(255,255,255,0.55)",
            border: "1px solid rgba(75,31,40,0.18)",
            backdropFilter: "blur(14px)",
            position: "relative",
            boxShadow: "0 8px 40px rgba(75,31,40,0.08)",
          }}
        >
          {/* Corner accents */}
          {[
            { top: 0, left: 0, borderTop: `2px solid rgba(75,31,40,0.35)`, borderLeft: `2px solid rgba(75,31,40,0.35)`, borderRadius: "12px 0 0 0" },
            { top: 0, right: 0, borderTop: `2px solid rgba(75,31,40,0.35)`, borderRight: `2px solid rgba(75,31,40,0.35)`, borderRadius: "0 12px 0 0" },
            { bottom: 0, left: 0, borderBottom: `2px solid rgba(75,31,40,0.35)`, borderLeft: `2px solid rgba(75,31,40,0.35)`, borderRadius: "0 0 0 12px" },
            { bottom: 0, right: 0, borderBottom: `2px solid rgba(75,31,40,0.35)`, borderRight: `2px solid rgba(75,31,40,0.35)`, borderRadius: "0 0 12px 0" },
          ].map((s, i) => (
            <div key={i} style={{ position: "absolute", width: 26, height: 26, ...s }} />
          ))}

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              style={{ textAlign: "center", padding: "28px 0" }}
            >
              <div style={{ width: 60, height: 60, borderRadius: "50%", background: "rgba(75,31,40,0.12)", border: `2px solid ${colors.maroon}`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                <Check size={26} color={colors.maroon} />
              </div>
              <h3 style={{ fontFamily: fonts.script, fontSize: 36, color: colors.maroon, marginBottom: 12 }}>Terima Kasih!</h3>
              <p style={{ fontFamily: fonts.body, fontSize: 15, color: colors.maroon, opacity: 0.75, lineHeight: 1.75 }}>
                Konfirmasi kehadiran Anda telah kami terima.<br />Kami menantikan kehadiran Anda dengan penuh sukacita.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div>
                <label style={labelStyle}>Nama Lengkap</label>
                <input
                  type="text" name="name" value={form.name} onChange={handleChange}
                  placeholder="Masukkan nama Anda" required
                  style={inputBase}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(75,31,40,0.55)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(75,31,40,0.25)")}
                />
              </div>

              <div>
                <label style={labelStyle}>Kehadiran</label>
                <select
                  name="attendance" value={form.attendance} onChange={handleChange}
                  style={{ ...inputBase, cursor: "pointer" }}
                >
                  <option value="hadir">Ya, saya akan hadir</option>
                  <option value="tidak">Maaf, saya tidak bisa hadir</option>
                  <option value="mungkin">Mungkin hadir</option>
                </select>
              </div>

              <div>
                <label style={labelStyle}>Pesan & Doa</label>
                <textarea
                  name="message" value={form.message} onChange={handleChange}
                  placeholder="Tuliskan ucapan dan doa terbaik Anda..." rows={4}
                  style={{ ...inputBase, resize: "none" }}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(75,31,40,0.55)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(75,31,40,0.25)")}
                />
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                style={{
                  padding: "15px",
                  borderRadius: 12,
                  background: `linear-gradient(135deg, ${colors.maroon}, #6e2d38, ${colors.maroon})`,
                  color: colors.cream,
                  fontFamily: fonts.ui,
                  fontWeight: 700,
                  fontSize: 12,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  border: "none",
                  cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                  boxShadow: "0 4px 20px rgba(75,31,40,0.25)",
                  opacity: loading ? 0.75 : 1,
                }}
                whileHover={{ scale: 1.02, boxShadow: "0 8px 32px rgba(75,31,40,0.35)" }}
                whileTap={{ scale: 0.98 }}
              >
                {loading ? (
                  <motion.div
                    style={{ width: 18, height: 18, borderRadius: "50%", border: "2px solid rgba(245,233,226,0.5)", borderTopColor: colors.cream }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.75, repeat: Infinity, ease: "linear" }}
                  />
                ) : (
                  <><Send size={14} /> Kirim Konfirmasi</>
                )}
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
