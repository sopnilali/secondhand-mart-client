"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

//get all categories




export const getAllProducts = async (page?: string, limit?: string, query?: { [key: string]: string[] } | undefined) => {

  const params = new URLSearchParams();

  if (query?.price) {
    params.append("minPrice", "0");
    params.append("maxPrice", query?.price.toString());
  }

  if (query?.title) {
    params.append("title", query?.category.toString());
  }
  if (query?.description) {
    params.append("description", query?.description.toString());
  }

  if (query?.condition) {
    params.append("condition", query?.condition.toString());
  }


  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/listings?limit=${limit}&page=${page}&${params}`, {
      next: {
        tags: ["listings"],
      },
    });

    return res.json();
  } catch (error: any) {
    return Error(error.message);
  }
};

// get single product
export const getSingleProduct = async (productId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/listings/${productId}`,
      {
        next: {
          tags: ["listings"],
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
export const addProduct = async (productData: FormData): Promise<any> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/listings`, {
      method: "POST",
      body: productData,
      headers: {
        Authorization: (await cookies()).get("accessToken")!.value,
        'Content-Type': 'application/json',
      },
    });
    revalidateTag("listings");
    return res.json();
  } catch (error: any) {
    return Error(error.message);
  }
};

// update product
export const updateProduct = async (
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
          'Content-Type': 'application/json',
        },
      }
    );
    revalidateTag("listings");
    return res.json();
  } catch (error: any) {
    return Error(error.message);
  }
};


// update product
export const deleteProduct = async (
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
    revalidateTag("listings");
    return res.json();
  } catch (error: any) {
    return Error(error.message);
  }
};