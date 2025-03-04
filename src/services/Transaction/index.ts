
"use server"
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

// add product
export const addTransaction = async (transactionData: any): Promise<any> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/transactions`, {
      method: "POST",
      body: JSON.stringify(transactionData),
      headers: {
        Authorization: (await cookies()).get("accessToken")!.value,
        "Content-Type": "application/json",
      },
    });
    revalidateTag("TRANSACTION");
    const result : any = res.json();
    // If there's an issue with JSON parsing, log it
    if (!result) {
      throw new Error("Failed to parse JSON response");
    }
    if (result?.success) {
      window.location.href = result.data?.paymentURL
    }

    return result;

  } catch (error: any) {
    return Error(error.message);
  }
};

// get single history product
export const getPaymentDetails = async (transactionId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/transactions/${transactionId}`,
      {
        next: {
          tags: ["TRANSACTION"],
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};

// get sales history product
export const getSalesHistory = async (userId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/sales/${userId}`,
      {
        next: {
          tags: ["TRANSACTION"],
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};


// get buy history product
export const getPurchasesHistory = async (userId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/purchases/${userId}`,
      
      {
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
        },
        next: {
          tags: ["TRANSACTION"],
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};

export const deleteTransaction = async (orderId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/transactions/${orderId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
        },
      }
    );
    revalidateTag("TRANSACTION");
    return res.json();
  } catch (error: any) {
    return Error(error.message);
  }
}

export const updateStatusTransaction = async (buyerId: string)=> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/transactions/${buyerId}`,
      {
        method: "PUT",
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
        },
      }
    );
    revalidateTag("TRANSACTION");
    return res.json();
  } catch (error: any) {
    return Error(error.message);
  }
}

export const getSinglePurchasesHistory = async (id: string)=> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/single-purchases-history/${id}`,
      {
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
        },
        next: {
          tags: ["TRANSACTION"],
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
}