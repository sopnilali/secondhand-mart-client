
"use client"

import { Button } from "@/components/ui/button";
import NMImageUploader from "@/components/ui/core/NMImageUploader";
import ImagePreviewer from "@/components/ui/core/NMImageUploader/ImagePreviewer";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { createCategory } from "@/services/category";
import { addListing } from "@/services/listing";
import { ICategory } from "@/types/category";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

interface IAddListingFormProps {
    userId: string;
    categories: ICategory[];
}

const AddCategoryForm = () => {

    const [imageFiles, setImageFiles] = useState<File[] | []>([]);
    const [imagePreview, setImagePreview] = useState<string[] | []>([]);

    const form = useForm();
    const { formState: { isSubmitting }, reset } = form;
    const router = useRouter();

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const modifiedData = {
            ...data,
        };
    
        const formData = new FormData();
    
        formData.append("data", JSON.stringify(modifiedData));
    
        for (const file of imageFiles) {
            formData.append("image", file);
        }


        const toastLoading = toast.loading("Adding...")
        try {
            const res = await createCategory(formData)
            console.log(res)
            if (res.success) {
                toast.success(res?.message, { id: toastLoading })
                reset();
                router.push('/dashboard/category')
            } else {
                toast.error("Something went wrong!", { id: toastLoading })
            }
        } catch (error: any) {
            toast.error(error.message, { id: toastLoading })
        }
    }


  return (
    <div>
      <div className="container mx-auto px-4 max-w-4xl">
            <div className="p-8 rounded-xl shadow-xl space-y-6">
                <h2 className="text-3xl font-semibold text-center text-[#e5532a] mb-4">Add Category</h2>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel> Name</FormLabel>
                                    <FormControl>
                                        <Input {...field} value={field.value || ""} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />



                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-lg font-medium">Description</FormLabel>
                                    <FormControl>
                                        <Textarea className="max-h-[150px]" placeholder="Type description" {...field} />
                                    </FormControl>
                                    <FormMessage className="text-red-500" />
                                </FormItem>
                            )}
                        />
                        <div>
                            <div className="flex gap-4 ">
                                <NMImageUploader
                                    setImageFiles={setImageFiles}
                                    setImagePreview={setImagePreview}
                                    label="Upload Image"
                                    className="w-fit mt-0"
                                />
                                <ImagePreviewer
                                    className="flex flex-wrap gap-4"
                                    setImageFiles={setImageFiles}
                                    imagePreview={imagePreview}
                                    setImagePreview={setImagePreview}
                                />
                            </div>
                        </div>


                        <Button type="submit" className=" w-full bg-gradient-to-r from-[#e5532a] to-[#d1461cd2] px-6 py-2 rounded-[4px] text-white font-semibold text-[18px] shadow-md transform transition-transform duration-300 hover:scale-105 hover:from-[#e5532a] hover:to-[#e5532a] hover:shadow-lg active:scale-75 focus:outline-none cursor-pointer">
                            {isSubmitting ? "Adding..." : "Add"}
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    </div>
  )
}

export default AddCategoryForm
