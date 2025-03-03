
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
    return res.json();
  } catch (error: any) {
    return Error(error.message);
  }
};