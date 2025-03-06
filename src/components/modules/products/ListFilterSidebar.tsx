"use client";

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { ICategory } from '@/types/category';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';

interface IFilterSidebarProps {
  categories: ICategory[];
}

const ListFilterSidebar = ({ categories }: IFilterSidebarProps) => {
  const [price, setPrice] = useState([0, 1000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);

  const pathname = usePathname();
  const searchParams: any = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const categoryParams = searchParams.get('category')?.split(',') || [];
    setSelectedCategories(categoryParams);

    const conditionParams = searchParams.get('condition')?.split(',') || [];
    setSelectedConditions(conditionParams);

    const statusParams = searchParams.get('status')?.split(',') || [];
    setSelectedStatuses(statusParams);

    const priceParam = searchParams.get('price');
    if (priceParam) {
      setPrice([5000, Number(priceParam)]);
    }
  }, [searchParams]);

  const handleSearchQuery = (query: string, value: string | number[]) => {
    const params = new URLSearchParams(searchParams.toString());

    if (query === 'price') {
      // Handle price filter
      params.delete('minPrice');
      params.delete('maxPrice');
      if (Array.isArray(value)) {
        params.append('minPrice', '0');
        params.append('maxPrice', value[1].toString());
      }
    } else if (query === 'category') {
      // Handle category filter
      params.delete('category');
      if (selectedCategories.includes(value as string)) {
        const updatedCategories = selectedCategories.filter((cat) => cat !== value);
        if (updatedCategories.length > 0) {
          params.append('category', updatedCategories.join(','));
        }
      } else {
        params.append('category', [...selectedCategories, value].join(','));
      }
    } else if (query === 'condition') {
      // Handle condition filter
      params.delete('condition');
      if (selectedConditions.includes(value as string)) {
        const updatedConditions = selectedConditions.filter((cond) => cond !== value);
        if (updatedConditions.length > 0) {
          params.append('condition', updatedConditions.join(','));
        }
      } else {
        params.append('condition', [...selectedConditions, value].join(','));
      }
    } else if (query === 'status') {
      // Handle status filter
      params.delete('status');
      if (selectedStatuses.includes(value as string)) {
        const updatedStatuses = selectedStatuses.filter((stat) => stat !== value);
        if (updatedStatuses.length > 0) {
          params.append('status', updatedStatuses.join(','));
        }
      } else {
        params.append('status', [...selectedStatuses, value].join(','));
      }
    }

    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handlePriceChange = (val: number[]) => {
    setPrice(val);
    handleSearchQuery('price', val);
  };

  const handleCategoryChange = (category: string) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((cat) => cat !== category)
      : [...selectedCategories, category];
    setSelectedCategories(updatedCategories);
    handleSearchQuery('category', category);
  };

  const handleConditionChange = (condition: string) => {
    const updatedConditions = selectedConditions.includes(condition)
      ? selectedConditions.filter((cond) => cond !== condition)
      : [...selectedConditions, condition];
    setSelectedConditions(updatedConditions);
    handleSearchQuery('condition', condition);
  };

  const handleStatusChange = (status: string) => {
    const updatedStatuses = selectedStatuses.includes(status)
      ? selectedStatuses.filter((stat) => stat !== status)
      : [...selectedStatuses, status];
    setSelectedStatuses(updatedStatuses);
    handleSearchQuery('status', status);
  };

  return (
    <div className="md:w-64 bg-white p-4 rounded-xl shadow-md">
      {/* Filter by Price */}
      <div className="mb-6">
        <div className="flex justify-between items-center gap-4 mb-4">
          <h2 className="text-[#ff8e00] md:text-2xl text-xl font-bold">Filter</h2>
        </div>
        <h3 className="text-lg font-semibold mb-2">Filter By Price</h3>
        <div className="flex gap-2">
          <input
            type="number"
            placeholder="Min"
            className="w-1/2 border p-2 rounded"
            value={price[0]}
            onChange={(e) => setPrice([Number(e.target.value), price[1]])}
          />
          <input
            type="number"
            placeholder="Max"
            className="w-1/2 border p-2 rounded"
            value={price[1]}
            onChange={(e) => setPrice([price[0], Number(e.target.value)])}
          />
        </div>
        <Slider
          min={0}
          max={100000}
          step={1000}
          className="mt-3"
          value={price}
          onValueChange={handlePriceChange}
        />
        <p className="text-sm mt-1">${price[0]} - ${price[1]}</p>
      </div>

      {/* Product Category */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Product Category</h3>
        <div className="sm:hidden">
          <select
            onChange={(e) => handleCategoryChange(e.target.value)}
            value={searchParams.get('category') || ''}
            className="w-full border p-2 rounded text-[#ff8e00] focus:outline-none focus:ring-2 focus:ring-[#ff8e00]"
          >
            <option value="">Select Category</option>
            {categories?.map((category: ICategory) => (
              <option key={category?._id} value={category?.name}>
                {category?.name}
              </option>
            ))}
          </select>
        </div>
        <div className="hidden sm:block">
          {categories?.map((category: ICategory) => {
            const isChecked = selectedCategories.includes(category?.name);

            return (
              <div key={category?._id} className="flex items-center space-x-2 mb-2">
                <Checkbox
                  onCheckedChange={() => handleCategoryChange(category?.name)}
                  id={category?.name}
                  checked={isChecked}
                />
                <label htmlFor={category?.name} className="cursor-pointer">
                  {category?.name}
                </label>
              </div>
            );
          })}
        </div>
      </div>

      {/* Conditions */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Condition</h3>
        <div className="sm:hidden">
          <select
            onChange={(e) => handleConditionChange(e.target.value)}
            value={searchParams.get('condition') || ''}
            className="w-full border p-2 rounded text-[#ff8e00] focus:outline-none focus:ring-2 focus:ring-[#ff8e00]"
          >
            <option value="">Select Condition</option>
            {['new', 'used', 'refurbished'].map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>
        <div className="hidden sm:block">
          {['new', 'used', 'refurbished'].map((status) => (
            <div key={status} className="flex items-center space-x-2 mb-2">
              <Checkbox
                onCheckedChange={() => handleConditionChange(status)}
                id={status}
                checked={selectedConditions.includes(status)}
              />
              <label htmlFor={status} className="cursor-pointer">
                {status}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Availability */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Availability</h3>
        <div className="sm:hidden">
          <select
            onChange={(e) => handleStatusChange(e.target.value)}
            value={searchParams.get('status') || ''}
            className="w-full border p-2 rounded text-[#ff8e00] focus:outline-none focus:ring-2 focus:ring-[#ff8e00]"
          >
            <option value="">Select Availability</option>
            {["available", "sold"].map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>
        <div className="hidden sm:block">
          {["available", "sold"].map((status) => (
            <div key={status} className="flex items-center space-x-2 mb-2">
              <Checkbox
                onCheckedChange={() => handleStatusChange(status)}
                id={status}
                checked={selectedStatuses.includes(status)}
              />
              <label htmlFor={status} className="cursor-pointer">
                {status}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListFilterSidebar;