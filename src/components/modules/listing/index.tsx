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

const ManageListing = ({ listings }: { listings: any }) => {

    const handleDelete = async (id: string) => {
        try {

            const res = await deleteListing(id)
            if (res?.success) {
                toast.success(res?.message || "Successfully Delete Brand")
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
            header: () => <div>Listing</div>,
            cell: ({ row }) => (
                <div className="flex items-center space-x-3">
                    <Image
                        src={row.original?.images[0]}
                        alt={row.original?.title}
                        width={40}
                        height={40}
                        className="w-8 h-8 rounded-full border object-cover"
                    />
                    <Link href={`/products/${row?.original?._id}`} className="hover:text-[#ff8e00]"><span className="truncate">{row.original?.title}</span></Link>
                </div>
            ),
        },
        {
            accessorKey: "price",
            header: () => <div>Price</div>,
            cell: ({ row }) => (
                <div>
                    <p>BDT-{row.original.price}</p>
                </div>
            ),
        },
        {
            accessorKey: "status",
            header: () => <div>Status</div>,
            cell: ({ row }) => (
                <div>
                    {row.original.status === 'available' ? (
                        <p className="text-green-500 border bg-green-100 w-24 text-center px-1 rounded">
                            Available
                        </p>
                    ) : (
                        <p className="text-red-500 border bg-red-100 w-14 text-center px-1 rounded">
                            Sold
                        </p>
                    )}
                </div>
            ),
        },
        {
            accessorKey: "action",
            header: () => <div>Action</div>,
            cell: ({ row }) => (
                <>

                    <Link href={`/products/${row.original?._id}`}>
                        <Button
                            className="bg-gray-500 hover:bg-gray-800 cursor-pointer mr-8"
                            title="Update"
                        >
                            <View className="w-8 h-8" />
                        </Button>
                    </Link>

                    <Link href={`/dashboard/update-listing/${row.original?._id}`}>
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
                <Link href={'/dashboard/add-listing'}>
                    <Button className="bg-gradient-to-r from-[#e5532a] to-[#d1461cd2] px-6 py-2 rounded-[4px] text-white font-semibold text-[18px] shadow-md transform transition-transform duration-300 hover:scale-105 hover:from-[#e5532a] hover:to-[#e5532a] hover:shadow-lg active:scale-75 focus:outline-none cursor-pointer">
                        Add Listing
                    </Button></Link>
            </div>
            <div className="mt-4">
                {/* List of user's listings */}
                <SHMTable data={listings} columns={columns} />
            </div>
        </div>
    )
}

export default ManageListing
