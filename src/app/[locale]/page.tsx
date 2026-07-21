import BoutiqueStorefront from "../features/home-commerce/BoutiqueStorefront";
import DigitalTools from "../features/home-digitalTools/DigitalTools";
import InformationalFAQ from "../features/home-faqs/InformationalFAQ";
import HeroSlider from "../features/home-hero/HeroSlider";
import AcademicDirectory from "../features/home-knowledge/AcademicDirectory";
import GroundServices from "../features/home-logistics/GroundServices";
import SaaSOperatorSuite from "../features/home-operator/SaaSOperatorSuite";
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
      <GroundServices></GroundServices>
      <SaaSOperatorSuite></SaaSOperatorSuite>
      <AcademicDirectory></AcademicDirectory>
      <InformationalFAQ></InformationalFAQ>
    </>
  );
}