// app/wishlist/page.tsx
'use client'; // Add this directive at the top

import SHContainer from '@/components/ui/core/SHContainer';
import WishlistItem from '@/components/ui/core/WishlistItem';
import { useUser } from '@/context/UserContext';
import { AllgetwishByEmail } from '@/services/AddWish';
import React, { useEffect, useState } from 'react';

const WishelistPage = () => {
  const { user } = useUser();
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const fetchWishlist = async () => {
      if (user?.userEmail) {
        const data = await AllgetwishByEmail(user.userEmail);
        setWishlistItems(data.data.result); 
      }
    };
    fetchWishlist();
  }, [user]);

  return (
    <div>
      <SHContainer>
      <h1 className="text-3xl font-bold text-center  my-5">Your Wishlist</h1>
      {wishlistItems.length > 0 ? <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {wishlistItems.map((item: any) => (
          <WishlistItem key={item._id} item={item} />
        ))}
      </div>: <>Not Available Wish</>}
      </SHContainer>
    </div>
  );
};

export default WishelistPage;