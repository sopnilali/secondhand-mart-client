"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

//get all categories




export const getAllListing = async (
  page?: string,
  limit?: string,
  query?: { [key: string]: string | string[] | undefined }
) => {
  const params = new URLSearchParams();

  // Add query parameters to URLSearchParams
  if (query?.price) {
    params.append('minPrice', '0');
    params.append('maxPrice', query.price.toString());
  }
  if (query?.category) {
    params.append('category', query.category.toString());
  }
  if (query?.condition) {
    params.append('condition', query.condition.toString());
  }
  if (query?.status) {
    params.append('status', query.status.toString());
  }

  // Add pagination parameters to URLSearchParams
  if (page) {
    params.append('page', page);
  }
  if (limit) {
    params.append('limit', limit);
  }

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/listings?${params.toString()}`,
      {
        next: {
          tags: ['LISTING'],
        },
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch listings: ${res.statusText}`);
    }

    return res.json();
  } catch (error: any) {
    console.error('Error fetching listings:', error.message);
    throw new Error(error.message);
  }
};

// get single product
export const getSinglelisting = async (productId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/listings/${productId}`,
      {
        next: {
          tags: ["LISTING"],
        },
      }

    );
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};

// add product
export const addListing = async (productData: FormData): Promise<any> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/listings`, {
      method: "POST",
      body: productData,
      headers: {
        Authorization: (await cookies()).get("accessToken")!.value,
      },
    });
    revalidateTag("LISTING");
    return res.json();
  } catch (error: any) {
    return Error(error.message);
  }
};

// update product
export const updateLising = async (
  productData: FormData,
  productId: string
): Promise<any> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/listings/${productId}`,
      {
        method: "PUT",
        body: productData,
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
        },
      }
    );
    revalidateTag("LISTING");
    return res.json();
  } catch (error: any) {
    return Error(error.message);
  }
};


// update product
export const deleteListing = async (
  productId: string
): Promise<any> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/listings/${productId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
        },
      }
    );
    revalidateTag("LISTING");
    return res.json();
  } catch (error: any) {
    return Error(error.message);
  }
};