import { useState, useRef } from "react";
import EnvelopeOpening from "@/components/EnvelopeOpening";
import Hero from "@/components/Hero";
import QuranVerse from "@/components/QuranVerse";
import BrideGroom from "@/components/BrideGroom";
import SaveTheDate from "@/components/SaveTheDate";
import EventDetails from "@/components/EventDetails";
import RSVP from "@/components/RSVP";
import WeddingGift from "@/components/WeddingGift";
import Closing from "@/components/Closing";
import JavaneseOrnaments from "@/components/JavaneseOrnaments";
import MusicPlayer from "@/components/MusicPlayer";

const MUSIC_URL = "/music/wedding-music.mp3";

function App() {
  const [opened, setOpened] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  return (
    <div style={{ backgroundColor: "#1a0d10", minHeight: "100vh" }}>
      <audio
        ref={audioRef}
        src={MUSIC_URL}
        loop
        preload="auto"
      />

      <EnvelopeOpening onOpen={() => setOpened(true)} audioRef={audioRef} />

      {opened && (
        <div>
          <JavaneseOrnaments />
          <MusicPlayer
            audioRef={audioRef}
            title="Lana Del Rey - Young and Beautiful"
          />

          {/* 1 — Dark maroon hero */}
          <Hero />

          {/* 2 — Light beige quran verse */}
          <QuranVerse />

          {/* 3 — Dark maroon + glow bride & groom */}
          <BrideGroom />

          {/* 4 — Light beige save the date / countdown */}
          <SaveTheDate />

          {/* 5 — Dark event details */}
          <EventDetails />

          {/* 6 — Light beige RSVP */}
          <RSVP />

          {/* 7 — Dark wedding gift */}
          <WeddingGift />

          {/* 8 — Deep dark closing */}
          <Closing />
        </div>
      )}
    </div>
  );
}

export default App;
