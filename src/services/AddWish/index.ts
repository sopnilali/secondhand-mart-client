"use server"

import { revalidateTag } from "next/cache";


export const addToWish = async (wisheData: any): Promise<any> => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/wish`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(wisheData),
        });
        revalidateTag("WISH");
        return res.json();
    } catch (error: any) {
        return Error(error.message);
    }
};

export const AllgetwishByEmail = async ( query : string) : Promise<any> => {

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/wish?email=${query}`, {
            next: {
                tags: ["WISH"],
            },
            
        }
    );
        return res.json();
    } catch (error: any) {
        return Error(error.message);
    }

}

export const wishDelete = async (id: string)=> {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/wish/${id}`, {
            method: "DELETE",
        });
        revalidateTag("WISH");
        return res.json();
    } catch (error: any) {
        return Error(error.message);
    }
}