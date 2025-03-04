"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

//get all categories




export const getAllListing = async () => {

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/listings`, {
    
      next: {
        revalidate: 5,
        tags: ["LISTING"],
      },
    });

    return res.json();
  } catch (error: any) {
    return Error(error.message);
  }
};

// get single product
export const getSinglelisting = async (productId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/listings/${productId}`,
      {
        next: {
          revalidate: 5,
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