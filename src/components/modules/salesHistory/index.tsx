"use client"

import { SHMTable } from '@/components/ui/core/SHMTable'
import { ISalesHistory } from '@/types/transaction'
import { ColumnDef } from "@tanstack/react-table";
import React from 'react'

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTrigger,
  } from "@/components/ui/dialog"
import Image from 'next/image';
import Link from 'next/link';
import { Carrot, Trash, } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { updateStatusTransaction } from '@/services/Transaction';

const ManageSalesHistory = ({ orders }: { orders: ISalesHistory[] }) => {


    const handleSalesStatusChange = async(_id: any) => {
        // Update sales status

        const toastid = toast.loading('Updateting....')

        try{
            toast.success("Change status", { id: toastid })
            const response = await updateStatusTransaction(_id)
            if(response.success){
                toast.success(response.message, { id: toastid })
                window.location.reload()
            }else{
                toast.error(response.message, { id: toastid })
            }
        }catch{
            toast.error("Something went wrong", { id: toastid })
        }
    }



    const columns: ColumnDef<ISalesHistory>[] = [
        {
            accessorKey: "title",
            header: () => <div>Product</div>,
            cell: ({ row }) => (
                <div className="flex items-center space-x-3">
                    <Image
                        src={row.original?.itemID?.images[0]}
                        alt={row.original?.itemID?.title}
                        width={40}
                        height={40}
                        className="w-8 h-8 rounded-full border object-cover"
                    />
                    <span className="truncate">{row.original?.itemID?.title}</span>
                </div>
            ),
        },
        {
            accessorKey: "price",
            header: () => <div>Price</div>,
            cell: ({ row }) => (
                <div>
                    <p>৳{row?.original?.itemID?.price}</p>
                </div>
            ),
        },
        {
            accessorKey: "date",
            header: () => <div>Sale Date</div>,
            cell: ({ row }) => (
                <div>
                    <p>{new Date(row?.original?.createdAt).toLocaleString()}</p>
                </div>
            ),
        },
        {
            accessorKey: "status",
            header: () => <div>Status</div>,
            cell: ({ row }) => (
                <div className="w-24">
                    {row.original.status === "pending" ? (
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button className="px-3 py-1 text-sm font-medium bg-yellow-600 hover:bg-yellow-800 rounded-full shadow-sm">
                                    <Carrot/> Pending
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                    <h2 className="text-2xl font-bold text-center text-red-600">Now status is Pending</h2>
                                    <DialogDescription className="text-center text-xl">
                                        Are you sure status is completed ?
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="flex justify-around items-center">
                                    <DialogClose asChild>
                                        <Button className=" bg-red-800 cursor-pointer">
                                            No
                                        </Button>
                                    </DialogClose>
                                    <Button onClick={()=> handleSalesStatusChange(row?.original?.transactionId)} className=" cursor-pointer">
                                        Yes
                                    </Button>
                                </div>
                            </DialogContent>
                        </Dialog>
                    ) : (
                        <span className="px-3 py-1 text-sm font-semibold text-green-700 bg-green-100 border border-green-400 rounded shadow-sm">
                            Completed
                        </span>
                    )}
                </div>
            ),

        },
        {
            accessorKey: "action",
            header: () => <div>Action</div>,
            cell: ({ row }) => (
                <>
                    <button
                        className="text-red-500 cursor-pointer"
                        title="Delete"
                    >
                        <Trash className="w-5 h-5" />
                    </button>
                </>
            ),
        },
    ];

  return (
    <div>
      <div>
            <h2 className="md:text-2xl font-bold text-[#ff6f00]">View Sales History</h2>
            <div className="mt-4">
                <SHMTable data={orders} columns={columns} />
            </div>
        </div>
    </div>
  )
}

export default ManageSalesHistory
