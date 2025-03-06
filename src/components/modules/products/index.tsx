"use client";

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import ReactPaginate from 'react-paginate';
import { TListings } from '@/types';
import ListFilterSidebar from './ListFilterSidebar';
import SectionTitle from '@/components/shared/SectionTitle';
import ProductCard from '@/components/ui/core/ProductCard';

interface IManageProductsProps {
  products: TListings[];
  categories: any; // Replace `any` with the appropriate type for categories
}

const ManageProducts = ({ products, categories }: IManageProductsProps) => {
  const searchParams : any = useSearchParams();
  const search = searchParams.get('category');
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6; // Number of items per page

  // Filter products by category name if a category is selected
  const filterByCategoryProducts = search
    ? products?.filter((product: TListings) => product?.category?.name === search)
    : products;

  // Pagination logic
  const pageCount = Math.ceil(filterByCategoryProducts.length / itemsPerPage);
  const offset = currentPage * itemsPerPage;
  const currentProducts = filterByCategoryProducts.slice(offset, offset + itemsPerPage);

  // Handle page change
  const handlePageClick = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  return (
    <div>
      <div>
        <SectionTitle title="All Product" />
        <p className="mt-2 font-medium md:text-xl text-center">
          Discover a wide range of products available at the best prices, handpicked just for you!
        </p>
      </div>

      <div className="md:flex my-8 gap-5">
        <div>
          <ListFilterSidebar categories={categories?.result} />
        </div>

        {/* Render products */}
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-6 md:mt-0 overflow-hidden mt-8">
          {currentProducts?.length > 0 ? (
            currentProducts.map((product: TListings, idx: number) => (
              <ProductCard key={idx} product={product} />
            ))
          ) : (
            <h2>No products available in this category</h2>
          )}
        </div>
      </div>

      {/* Pagination */}
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={'flex justify-center items-center space-x-4 my-8'}
        previousLinkClassName={'px-4 py-2 bg-gray-200 rounded hover:bg-gray-300'}
        nextLinkClassName={'px-4 py-2 bg-gray-200 rounded hover:bg-gray-300'}
        disabledClassName={'opacity-50 cursor-not-allowed'}
        activeClassName={'bg-blue-500 text-white rounded'}
        pageClassName={'px-4 py-2 bg-gray-200 rounded hover:bg-gray-300'}
      />
    </div>
  );
};

export default ManageProducts;