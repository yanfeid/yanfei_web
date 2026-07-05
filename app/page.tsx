import HeroV3 from "@/components/HeroV3";
import SelectedWork from "@/components/SelectedWork";
import CraftSection from "@/components/CraftSection";
import PhotoStrip from "@/components/PhotoStrip";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <>
      <HeroV3 />
      <SelectedWork />
      <CraftSection />
      <PhotoStrip />
      <ContactCTA />
    </>
  );
}
