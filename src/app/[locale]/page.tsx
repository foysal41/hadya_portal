import BoutiqueStorefront from "../features/home-commerce/BoutiqueStorefront";
import DigitalTools from "../features/home-digitalTools/DigitalTools";
import HeroSlider from "../features/home-hero/HeroSlider";
import PlatformPage from "../features/home-platform/PlatformSection";
import TrustProcessPipeline from "../features/home-sponsorship/TrustProcessPipeline";
import Spotlight from "../features/home-spotlight/Spotlight";
import Update from "../features/home-update/Update";

export default function Page() {
  return (
    <>     
      <HeroSlider />
      <PlatformPage></PlatformPage>
      <Spotlight></Spotlight>
      <Update></Update>
      <DigitalTools></DigitalTools>
      <TrustProcessPipeline></TrustProcessPipeline>
      <BoutiqueStorefront></BoutiqueStorefront>
    </>
  );
}