import { motion } from "framer-motion";
import { fonts, colors, sectionBg } from "../lib/fonts";
import { SectionHeader, BATIK_KAWUNG_DARK } from "../lib/shared";

function Portrait({ name, role, birthdate, parents, delay, isGroom, photo }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay }}
      style={{
        textAlign: "center",
        maxWidth: 420,
        margin: "0 auto",
      }}
    >
      {/* FOTO */}
      <div style={{ marginBottom: 26 }}>
        <div
          style={{
            width: "clamp(150px,32vw,190px)",
            height: "clamp(150px,32vw,190px)",
            borderRadius: "50%",
            overflow: "hidden",
            margin: "0 auto",
            border: "2px solid rgba(201,164,108,0.5)",
            boxShadow: "0 0 25px rgba(201,164,108,0.25), 0 12px 45px rgba(0,0,0,0.5)",
          }}
        >
          <img src={photo} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      </div>

      {/* ROLE */}
      <p style={{
        fontFamily: fonts.ui,
        fontSize: 10,
        letterSpacing: "0.45em",
        color: colors.gold,
        opacity: 0.7,
        marginBottom: 10
      }}>
        {role}
      </p>

      {/* NAMA */}
      <h3 style={{
        fontFamily: fonts.script,
        fontSize: "clamp(28px,5vw,40px)",
        color: colors.gold,
        marginBottom: 10,
        textShadow: "0 0 15px rgba(201,164,108,0.4)"
      }}>
        {name}
      </h3>

      {/* TANGGAL LAHIR */}
      <p style={{
        fontFamily: fonts.body,
        fontSize: 14,
        opacity: 0.6,
        marginBottom: 20
      }}>
        {birthdate}
      </p>

      {/* CARD ORTU (LEBIH TERANG) */}
      <div style={{
        background: "linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
        border: "1px solid rgba(201,164,108,0.25)",
        borderRadius: 16,
        padding: "16px 20px",
        backdropFilter: "blur(8px)",
        boxShadow: "0 8px 25px rgba(0,0,0,0.25)",
      }}>
        <p style={{
          fontFamily: fonts.body,
          fontSize: 14,
          color: colors.cream,
          opacity: 0.85,
          lineHeight: 1.6
        }}>
          Putr{isGroom ? "a" : "i"} dari<br />
          {parents}
        </p>
      </div>
    </motion.div>
  );
}

export default function BrideGroom() {
  return (
    <section
      style={{
        padding: "110px 0",
        background: sectionBg.maroonGlow,
        position: "relative",
      }}
    >
      <div style={{ position: "absolute", inset: 0, backgroundImage: BATIK_KAWUNG_DARK, opacity: 0.4 }} />

      <div style={{ maxWidth: 700, margin: "0 auto", padding: "0 24px" }}>
        <div style={{
          background: "rgba(30,12,14,0.6)",
          border: "1px solid rgba(201,164,108,0.25)",
          borderRadius: 24,
          padding: "60px 30px",
          backdropFilter: "blur(14px)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.5)"
        }}>
          <SectionHeader pre="Bismillahirrahmanirrahim" title="Groom & Bride" />

          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 70,
            marginTop: 50
          }}>

            {/* GROOM */}
            <Portrait
              name="D. Sukma Almansyah"
              role="Mempelai Pria"
              birthdate="25 Desember 1990"
              parents="(Alm) Ade Ibrahim & Ibu Yani Riyani"
              delay={0.1}
              isGroom
              photo="/images/groom.png"
            />

            {/* DIVIDER */}
            <div style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 14
            }}>
              <div style={{
                width: 1,
                height: 50,
                background: "rgba(201,164,108,0.3)"
              }} />

              <p style={{
                fontFamily: fonts.script,
                fontSize: 46,
                color: colors.gold,
                opacity: 0.9
              }}>
                &
              </p>

              <div style={{
                width: 1,
                height: 50,
                background: "rgba(201,164,108,0.3)"
              }} />
            </div>

            {/* BRIDE */}
            <Portrait
              name="Tri Andini"
              role="Mempelai Wanita"
              birthdate="04 Maret 2002"
              parents="Bapak Nurohmat & Ibu Siti Mulyani"
              delay={0.2}
              isGroom={false}
              photo="/images/bride.png"
            />

          </div>
        </div>
      </div>
    </section>
  );
}