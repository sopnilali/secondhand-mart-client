import ManageListingTabs from "@/components/modules/home/filterListingTabs";
import HeroSection from "@/components/modules/home/HeroSection";
import AvailableProducts from "@/components/modules/home/Products";
import { getAllListing } from "@/services/listing";

const HomePage = async() => {

  const { data: listings } = await getAllListing();

  return (
    <div>
        <HeroSection/>
        <AvailableProducts/>

    </div>
  );
};

export default HomePage;