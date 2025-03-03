// components/AddToWishlistButton.tsx
'use client'; // Mark this as a client component

import { useRouter } from 'next/navigation'; // Use 'next/navigation' instead of 'next/router'
import { useUser } from '@/context/UserContext'; // Adjust the import path as needed
import { toast } from 'sonner';

interface AddToWishlistButtonProps {
  productId: string;
}

const AddToWishlistButton = ({ productId }: AddToWishlistButtonProps) => {
  const router = useRouter();
  const { user, setIsLoading } = useUser();

  const handleAddWish = async () => {
    const wishData = {
      product: productId,
      email: user?.userEmail,
    };

    if (!user) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        toast.error('You need to be logged in to add a wishlist.');
        router.push('/login'); // Redirect to the login page
      }, 2000);
      return;
    }

    // Add your logic to call the API and add the product to the wishlist
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/wish`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(wishData),
      });

      if (response.ok) {
        toast.success('Product added to wishlist!');
      } else {
        toast.error('Failed to add product to wishlist.');
      }
    } catch (error) {
      console.error('Error adding to wishlist:', error);
      toast.error('An error occurred while adding to wishlist.');
    }
  };

  return (
    <button onClick={handleAddWish} className="wishlist-button">
      Add to Wishlist
    </button>
  );
};

export default AddToWishlistButton;