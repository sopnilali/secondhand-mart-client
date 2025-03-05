"use client"
import { Button } from '@/components/ui/button'
import { Edit, Trash, View } from 'lucide-react';
import { ColumnDef } from "@tanstack/react-table";
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { SHMTable } from '@/components/ui/core/SHMTable';
import { deleteListing } from '@/services/listing';
import { toast } from 'sonner';
import { deleteCategory } from '@/services/category';

const ManageCategory = ({ categories }: { categories: any }) => {


    const handleDelete = async (id: string) => {
        try {

            const res = await deleteCategory(id)
            if (res?.success) {
                toast.success(res?.message || "Successfully Delete Category")
            } else if (res?.error) {
                toast.error(res?.message || "Something went wrong")
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong")
        }
    };


    const columns: ColumnDef<any>[] = [
        {
            accessorKey: "title",
            header: () => <div>Cateogry</div>,
            cell: ({ row }) => (
                <div className="flex items-center space-x-3">
                    <Image
                        src={row.original?.image}
                        alt={row.original.name}
                        width={40}
                        height={40}
                        className="w-8 h-8 rounded-full border object-cover"
                    />
                    <Link href={`/products?category=${row?.original?.name}`} className="hover:text-[#ff8e00]"><span className="truncate">{row.original?.name}</span></Link>
                </div>
            ),
        },
        {
            accessorKey: "description",
            header: () => <div>Description</div>,
            cell: ({ row }) => (
                <div>
                    <p>{row.original.description.slice(0,60)}</p>
                </div>
            ),
        },
        {
            accessorKey: "action",
            header: () => <div>Action</div>,
            cell: ({ row }) => (
                <>

                    <Link href={`/dashboard/update-category/${row.original?._id}`}>
                        <Button
                            className="bg-blue-500 hover:bg-blue-800 cursor-pointer mr-8"
                            title="Update"
                        >
                            <Edit className="w-5 h-5" />
                        </Button>
                    </Link>
                    <Button
                        className="bg-red-500 hover:bg-red-800 cursor-pointer"
                        title="Delete"
                        onClick={() => handleDelete(row.original?._id)}
                    >
                        <Trash className="w-5 h-5" />
                    </Button>
                </>
            ),
        },
    ];

    return (
        <div>
            <div className="flex justify-between items-center gap-8">
                <h2 className="md:text-2xl font-bold text-[#e5532a]">Manage Listing</h2>
                <Link href={'/dashboard/add-category'}>
                    <Button className="bg-gradient-to-r from-[#e5532a] to-[#d1461cd2] px-4 py-2 rounded-[4px] text-white font-semibold text-[18px] shadow-md transform transition-transform duration-300 hover:scale-105 hover:from-[#e5532a] hover:to-[#e5532a] hover:shadow-lg active:scale-75 focus:outline-none cursor-pointer">
                        Add Category
                    </Button></Link>
            </div>
            <div className="mt-4">
                {/* List of user's listings */}
                <SHMTable data={categories} columns={columns} />
            </div>
        </div>
    )
}

export default ManageCategory
