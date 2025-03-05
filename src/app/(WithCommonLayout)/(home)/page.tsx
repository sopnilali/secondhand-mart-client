
import ManageCategory from "@/components/modules/category";
import HeroSection from "@/components/modules/home/HeroSection";
import AvailableProducts from "@/components/modules/home/Products";
import SHContainer from "@/components/ui/core/SHContainer";
import { getAllCategory } from "@/services/category";
import { Metadata } from "next";

export const metadata : Metadata = {
  title: 'Welcome to the Second Hand Marketplace',
  description: 'Welcome to the Second Hand Marketplace',
  keywords: ['second-hand', 'buy', 'sell', 'products'],
}

const HomePage = async() => {



  const { data: categories } = await getAllCategory();

  return (
    <div>
        <HeroSection/>
        <SHContainer>
          <ManageCategory categories={categories}/>
          <AvailableProducts/>
        </SHContainer>
       
    </div>
  );
};

export default HomePage;