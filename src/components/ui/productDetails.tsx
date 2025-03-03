'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button"; // Adjust the import path
import { useUser } from "@/context/UserContext";
import { toast } from "sonner";
import { addToWish } from "@/services/AddWish";
import BuyNowButton from "./core/BuyNowButton";

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

      {/* Product Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative h-96 w-full rounded-lg overflow-hidden">
            <Image
              src={product.images[0]} // Main product image
              alt={product.title}
              width={400}
              height={400}
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {product.images.slice(1).map((image: any, index: any) => (
              <div
                key={index}
                className="relative h-24 w-full rounded-md overflow-hidden"
              >
                <Image
                  src={image}
                  alt={`${product.title} - ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Information */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-gray-600">{product.description}</p>

          {/* Price and Condition */}
          <div className="space-y-2">
            <p className="text-2xl font-semibold text-green-600">
              ${product.price}
            </p>
            <p className="text-sm text-gray-500">
              Condition: <span className="font-medium">{product.condition}</span>
            </p>
          </div>

          {/* Category */}
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">Category:</span>
            <span className="text-sm font-medium">{product?.category?.name}</span>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 ">
            <BuyNowButton productId={product._id} />
            <Button onClick={() => handleAddWishe(product._id)} className="bg-gray-600 hover:bg-gray-700">Add to Wish</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;