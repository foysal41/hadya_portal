import HeroSlider from "../features/home-hero/HeroSlider";
import { GlobalUtilityBar } from "../shared/components/GlobalUtilityBar";
import ReusableHeader from "../shared/components/ReusableHeader";

export default function Page() {
  return (
    <>
      <GlobalUtilityBar />
      <ReusableHeader />
      <HeroSlider />
    </>
  );
}