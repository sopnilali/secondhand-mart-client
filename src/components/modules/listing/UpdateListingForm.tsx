
"use client"

import { Button } from "@/components/ui/button";
import NMImageUploader from "@/components/ui/core/NMImageUploader";
import ImagePreviewer from "@/components/ui/core/NMImageUploader/ImagePreviewer";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { updateLising } from "@/services/listing";
import { ICategory } from "@/types/category";
import { TListings } from "@/types/product";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

interface IUpdateListingFormProps {
    listing: TListings;
    categories: ICategory[];
}

const UpdateListingForm = ({listing ,categories }: IUpdateListingFormProps) => {
    const [imageFiles, setImageFiles] = useState<File[] | []>([]);
    const [imagePreview, setImagePreview] = useState<string[] | []>([]);

    const router = useRouter();

    const form = useForm({
        defaultValues : {
            title : listing?.title,
            images : listing?.images[0],
            price : listing?.price,
            condition : listing?.condition,
            description : listing?.description,
            category : listing?.category?.name
        }
    });
    const { formState: { isSubmitting } } = form;

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {


        const modifiedData = {
            ...data,
            price: parseFloat(data.price),
        };



        const formData = new FormData();
    
        formData.append("data", JSON.stringify(modifiedData));
    
        for (const file of imageFiles) {
            formData.append("images", file);
        }

        const toastLoading = toast.loading("Updating...")
        for (const [key, value] of formData.entries()) {
            console.log(key, value);
        }

        try {
            
            const res = await updateLising(formData, listing._id )
            console.log(res);
            if (res.success) {
                toast.success(res?.message, { id: toastLoading })
                router.push('/dashboard/listing')
            } else {
                toast.error("Something went wrong!", { id: toastLoading })
            }
        } catch (error: any) {
            toast.error(error.message, { id: toastLoading })
        }
    }
    return (
        <div className="container mx-auto px-4 my-16 max-w-4xl">
            <div className="p-8 rounded-xl shadow-xl space-y-6">
                <h2 className="text-3xl font-semibold text-center text-[#ff6f00] mb-4">Update Listing Info</h2>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel> Title</FormLabel>
                                    <FormControl>
                                        <Input {...field} value={field.value || ""} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />



                        <FormField
                            control={form.control}
                            name="price"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-lg font-medium">Price</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            className="w-full py-5 px-4 rounded-[4px] shadow-md"
                                            placeholder="Enter price"
                                            {...field}
                                            value={field.value || ''}
                                        />
                                    </FormControl>
                                    <FormMessage className="text-red-500" />
                                </FormItem>
                            )}
                        />


                        <div className="flex items-center justify-between">
                            <FormField
                                control={form.control}
                                name="category"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-lg font-medium">Category</FormLabel>
                                        <FormControl>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Select a category" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectGroup>
                                                        <SelectLabel>Category</SelectLabel>

                                                        {categories?.map((category: ICategory) => (
                                                            <SelectItem key={category?._id} value={category?._id}>
                                                                {category?.name}
                                                            </SelectItem>
                                                        ))}

                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage className="text-red-500" />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="condition"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-lg font-medium">Condition</FormLabel>
                                        <FormControl>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Select a condition" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectGroup>
                                                        <SelectLabel>Condition</SelectLabel>
                                                        <SelectItem value="new">New</SelectItem>
                                                        <SelectItem value="used">Used</SelectItem>
                                                        <SelectItem value="refurbished">Refurbished</SelectItem>
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage className="text-red-500" />
                                    </FormItem>
                                )}
                            />

                        </div>


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


                        <Button type="submit" className="bg-gradient-to-r from-[#e5532a] to-[#d1461cd2] px-6 py-2 rounded-[4px] text-white font-semibold text-[18px] shadow-md transform transition-transform duration-300 hover:scale-105 hover:from-[#e5532a] hover:to-[#e5532a] hover:shadow-lg active:scale-75 focus:outline-none cursor-pointer">
                            {isSubmitting ? "Updating..." : "Update"}
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    );
};

export default UpdateListingForm;