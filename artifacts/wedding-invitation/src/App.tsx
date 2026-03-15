import { useState } from "react";
import EnvelopeOpening from "@/components/EnvelopeOpening";
import Hero from "@/components/Hero";
import BrideGroom from "@/components/BrideGroom";
import LoveStory from "@/components/LoveStory";
import EventDetails from "@/components/EventDetails";
import Countdown from "@/components/Countdown";
import Gallery from "@/components/Gallery";
import RSVP from "@/components/RSVP";
import WeddingGift from "@/components/WeddingGift";
import Closing from "@/components/Closing";
import FlowerPetals from "@/components/FlowerPetals";

function App() {
  const [opened, setOpened] = useState(false);

  return (
    <div style={{ backgroundColor: "#2a1618", minHeight: "100vh", overflow: "hidden" }}>
      {/* Envelope Opening Intro */}
      <EnvelopeOpening onOpen={() => setOpened(true)} />

      {/* Main Invitation Content */}
      {opened && (
        <div>
          <FlowerPetals />
          <Hero />
          <BrideGroom />
          <LoveStory />
          <EventDetails />
          <Countdown />
          <Gallery />
          <RSVP />
          <WeddingGift />
          <Closing />
        </div>
      )}
    </div>
  );
}

export default App;
