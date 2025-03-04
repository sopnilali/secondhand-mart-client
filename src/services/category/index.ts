import { revalidateTag } from "next/cache";


export const createCategory = async (data: FormData) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/category`, {
      method: "POST",
      body: data,
    });
    return res.json();
  } catch (error: any) {
    return Error(error.message || error);
  }
};

export const getAllCategory = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/category`, {
      next: {
        tags: ["CATEGORY"]
      }
    })
    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error.message || error)
  }
}

// delete category
export const deleteCategory = async (categoryId: string): Promise<any> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/category/${categoryId}`,
      {
        method: "DELETE",
      }
    );
    revalidateTag("CATEGORY");
    return res.json();
  } catch (error: any) {
    return Error(error.message || error);
  }
};
// single category
export const getSingleCategory = async (categoryId: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/category/${categoryId}`, {
      next: {
        tags: ["CATEGORY"]
      }
    });
    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error.message || error);
  }
};

// update category
export const updateCategoryData = async (categoryData: FormData, categoryId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/category/${categoryId}`,
      {
        method: "PUT",
        body: categoryData,
      }
    );
    return res.json();
  } catch (error: any) {
    return Error(error.message || error);
  }
}