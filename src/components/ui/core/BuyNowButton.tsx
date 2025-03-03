// components/AddToWishlistButton.tsx
'use client'; // Mark this as a client component

import { useRouter } from 'next/navigation'; // Use 'next/navigation' instead of 'next/router'
import { useUser } from '@/context/UserContext'; // Adjust the import path as needed
import { toast } from 'sonner';
import { addTransaction } from '@/services/Transaction';
import { Button } from '../button';

interface BuyNowButtonProps {
  productId: string;
}

const BuyNowButton = ({ productId }: BuyNowButtonProps) => {
  const router = useRouter();
  const { user, setIsLoading } = useUser();

  const handleAddBuy = async () => {

    setIsLoading(true);
    if (!user) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        toast.error(' please login before purchase')
        router.push('/login'); // Redirect to the login page
      }, 2000);
      return;
    }

    // Add your logic to call the API and add the product to the wishlist
    try {
      const response = await addTransaction({itemID: productId})

      if (response.success) {
        toast.success(response.message);
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.error('Error adding to wishlist:', error);
      toast.error('An error occurred while adding to wishlist.');
    }
  };

  return (
    <Button onClick={handleAddBuy} className="bg-green-600 right-0 bottom-1 hover:bg-green-700" >
      Buy Now
    </Button>
  );
};

export default BuyNowButton;