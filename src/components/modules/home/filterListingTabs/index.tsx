
import SectionTitle from "@/components/shared/SectionTitle";
import ProductCard from "@/components/ui/core/ProductCard";
import SHContainer from "@/components/ui/core/SHContainer";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
const ManageListingTabs = ({ listings }: { listings:  any}) => {
    console.log(listings);
    const newProducts = listings?.result?.filter((listing: any) => listing?.condition === 'new')
    const usedProducts = listings?.result?.filter((listing: any) => listing?.condition === 'used')
    const refurbishedProducts = listings?.result?.filter((listing: any) => listing?.condition === 'refurbished')
    console.log(newProducts);
    return (
        <div>
           <SHContainer>
           <div className="text-center mt-24">
                <SectionTitle title="Explore By Condition"/>
                <p className="md:text-lg mt-4 max-w-2xl mx-auto font-medium text-[#3f4343]">
                    Discover the best products across various categories. Shop your favorite items and enjoy seamless shopping today!
                </p>
            </div>
            <div className="my-8">
                <Tabs defaultValue="new">
                    <TabsList className="grid lg:w-1/2 md:w-2/3 w-full grid-cols-3 md:gap-8 gap-2 h-[50px] mx-auto">
                        <TabsTrigger value="new" className="h-[40px] md:text-xl font-bold cursor-pointer">New</TabsTrigger>
                        <TabsTrigger value="used" className="h-[40px] md:text-xl font-bold cursor-pointer" >Used</TabsTrigger>
                        <TabsTrigger value="refurbished" className="h-[40px] md:text-xl font-bold cursor-pointer">Refurbished</TabsTrigger>
                    </TabsList>

                    <TabsContent value="new" className="mt-8">
                        {
                            newProducts?.length > 0 ? <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                            {
                                newProducts?.map((product: any) => <ProductCard product={product} key={product?._id}></ProductCard>)
                            }
                        </div>   : <p className="text-2xl font-bold text-center">No Product available now!</p>
                         }
                    </TabsContent>
                    <TabsContent value="used" className="mt-8">
                        {
                            usedProducts?.length > 0 ? <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                            {
                                usedProducts?.map((product: any) => <ProductCard product={product} key={product?._id}></ProductCard>)
                            }
                        </div>   : <p className="text-2xl font-bold text-center">No Product available now!</p>
                         }
                    </TabsContent>
                    <TabsContent value="refurbished" className="mt-8">
                        {
                            refurbishedProducts?.length > 0 ? <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                            {
                                refurbishedProducts?.map((product: any) => <ProductCard product={product} key={product?._id}></ProductCard>)
                            }
                        </div>   : <p className="text-2xl font-bold text-center">No Product available now!</p>
                         }
                    </TabsContent>
                </Tabs>
            </div>
           </SHContainer>
        </div>
    );
};

export default ManageListingTabs;