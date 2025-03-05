
import { WishlistItemProps } from '@/types/wish';
import Image from 'next/image';
import { Button } from '../button';
import { toast } from 'sonner';
import { wishDelete } from '@/services/AddWish';


const WishlistItem = ({ item }: WishlistItemProps) => {

  const handleDeleteWish = async(data : any)=> {
    // Add your own logic to delete the wish from the server
    // For now, we just simulate the deletion

    console.log(data._id)
    const response = await wishDelete(data._id)

    if (response.success) {
      toast.success(response.message);
      setTimeout(()=> {
        window.location.reload();
      }, 1500)
    }else{
      toast.error(response.message);
    }

  }


  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48">
        <Image
          src={item.product?.images[0]}
          alt={item.product?.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{item?.product?.title}</h2>
        <p className="text-gray-600">BDT {item.product?.price}</p>
        <div className="mt-4 flex justify-between items-center">
          <Button onClick={()=> handleDeleteWish(item)} className=" bg-red-500 hover:bg-red-800">
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WishlistItem;