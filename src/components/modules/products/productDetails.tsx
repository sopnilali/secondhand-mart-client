'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button"; // Adjust the import path
import { useUser } from "@/context/UserContext";
import { toast } from "sonner";
import { addToWish } from "@/services/AddWish";
import BuyNowButton from "../../ui/core/BuyNowButton";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

const ProductDetails = ({ product }: any) => {

  const router = useRouter();

  const { user, setIsLoading } = useUser();

  const handleGoBack = () => {
    router.back(); // Navigate back to the previous page
  };


  const handleAddWishe: any = async (id: string) => {

    if (!user) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        toast.error("You need to be logged in to add a wishlist.");
        // Redirect to the login page after showing the toast message
        router.push('/login'); // Replace '/login' with your actual login page route
      }, 2000);

      return;
    } else {
      const result = await addToWish({ product: id, email: user?.userEmail })

      if (result.success) {
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }
    }


  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Button */}
      <Button
        onClick={handleGoBack}
        className="mb-6 bg-gray-200 hover:bg-gray-300 text-gray-800"
      >
        &larr; Back
      </Button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Image Section */}
                <div className="relative">
                    <a href={product.images[0]} target="_blank" rel="noopener noreferrer">
                        <Image
                            className="w-full h-[500px] object-cover rounded-lg shadow-md"
                            src={product?.images[0]}
                            alt={product?.title}
                            width={1000}
                            height={500}
                        />
                    </a>

                    <Image
                        className="w-[300px] h-[200px] object-cover rounded-lg shadow-md absolute left-2 bottom-2 border-8 border-white"
                        src={ product?.images[1] ? product?.images[1] : product?.images[0]}
                        alt={product?.title}
                        width={300}
                        height={200}

                    />
                </div>

                {/* Product Info Section */}
                <div>
                    <h2 className="text-2xl font-semibold text-[#ff8e00]">{product?.title}</h2>
                    <p className="text-gray-500 text-sm">Category: <Link href={`/products?category=${product?.category?.name}`}>{product?.category?.name}</Link></p>
                    <p className="text-gray-700 my-3">{product?.description}</p>

                    {product.status === 'available' ? <div className="flex items-center space-x-2 text-green-600 font-medium">
                        <CheckCircle /> <span>{product?.status.charAt(0).toUpperCase() + product?.status.slice(1)}</span>
                    </div>: <div className="flex items-center space-x-2 text-red-600 font-medium">
                        <CheckCircle /> <span>{product?.status.charAt(0).toUpperCase() + product?.status.slice(1)}</span>
                    </div>}

                    <p className="mt-3 text-xl font-semibold text-[#ff8e00]">Price: ৳{product?.price}</p>
                    <p className="text-gray-600">Condition: {product?.condition?.charAt(0).toUpperCase() + product?.condition.slice(1)}</p>


                    <div className="mt-6 p-5 bg-white rounded-lg shadow-md border border-gray-200">
                        <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                            <span className="text-[#ff8e00]">🔹</span> Seller Information
                        </h2>

                        <div className="flex items-center gap-4">

                            <div>
                                <p className="font-semibold text-gray-700 text-lg">{product?.userID?.name}</p>
                                <p className="text-sm text-gray-500 flex items-center gap-1">
                                    📧 <span className="text-gray-600">{product?.userID?.email}</span>
                                </p>
                                <p className="text-sm text-gray-500 flex items-center gap-1">
                                    📞 <span className="text-gray-600">{product?.userID?.phonenumber}</span>
                                </p>
                            </div>
                        </div>
                    </div>

          <div className="my-4 space-y-4">
            <div className="flex md:gap-5 gap-2 justify-between">
              <Button disabled={product.status === "sold"} className="bg-blue-600 hover:bg-blue-700 flex-1">
                Add To Cart
              </Button>
              <Button disabled={product.status === "sold"} onClick={() => handleAddWishe(product?._id)} className="bg-gray-600 hover:bg-gray-700 flex-1">
                Add To Favorite
              </Button>
            </div>
            <div>
              <BuyNowButton product={product} />
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;