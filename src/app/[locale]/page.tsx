import HeroSlider from "../features/home-hero/HeroSlider";
import PlatformPage from "../features/home-platform/PlatformSection";
import Spotlight from "../features/home-spotlight/Spotlight";

export default function Page() {
  return (
    <>     
      <HeroSlider />
      <PlatformPage></PlatformPage>
      <Spotlight></Spotlight>
    </>
  );
}