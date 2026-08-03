import BoutiqueStorefront from "../features/home-commerce/BoutiqueStorefront";
import CTA from "../features/home-cta/page";
import DigitalTools from "../features/home-digitalTools/DigitalTools";
import InformationalFAQ from "../features/home-faqs/InformationalFAQ";
import SupportTestimonials from "../features/home-feedback/SupportTestimonials";
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

      {/* One Platform */}
      <PlatformPage></PlatformPage>

      {/* Featured Spotlight */}
      <Spotlight></Spotlight>

      {/* News & Updates */}
      <Update></Update>

      {/* Digital Tools */}
      <DigitalTools></DigitalTools>

      {/* Sponsorship With Impact & Choose a Sponsorship*/}
      <TrustProcessPipeline></TrustProcessPipeline>

      {/* Premium Store */}
      <BoutiqueStorefront></BoutiqueStorefront>

      {/* Travel • On-Ground */}
      <GroundServices></GroundServices>

      {/* Tour Operator Solutions */}
      <SaaSOperatorSuite></SaaSOperatorSuite>

      {/* Knowledge Centre */}
      <AcademicDirectory></AcademicDirectory>

      {/* Testimonials */}
      <SupportTestimonials></SupportTestimonials>

      {/* Frequently Asked Questions */}
      <InformationalFAQ></InformationalFAQ>

      {/* CTA */}
      <CTA></CTA>
      
    </>
  );
}