
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './button';

const ItemCard = ({ item }: any) => {
  return (
    <div className="border rounded-lg overflow-hidden  shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className='flex justify-center'>
        <Image
          src={item.images[0]} // Display the first image
          alt={item.title}
          height={200}
          width={300}
        />
      </div>
      <div className="p-4">
        <Link href={`/products/${item._id}`}><h2 className="text-xl font-semibold mb-2">{item.title}</h2></Link>
        <p className="text-gray-600 mb-2">{item.description}</p>
        <div className='flex items-center gap-2'>
          <p className='text-sm text-gray-500'>Price:</p>
          <p className="text-lg font-bold text-green-600"> ${item.price}</p>
        </div>
        <div className="flex relative ">
            <Button className="bg-green-600 absolute right-0 bottom-1 hover:bg-green-700">Buy Now</Button>
          </div>
        <div className='flex justify-between'>
          <p className="text-sm text-gray-500">Condition: {item.condition}</p>
          {/* Action Buttons */}

          <p className="text-sm text-gray-500">Category: {item.category?.name}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;