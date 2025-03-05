
import HeroSection from "@/components/modules/home/HeroSection";
import AvailableProducts from "@/components/modules/home/Products";

const HomePage = async() => {

  return (
    <div>
        <HeroSection/>
        <AvailableProducts/>
    </div>
  );
};

export default HomePage;