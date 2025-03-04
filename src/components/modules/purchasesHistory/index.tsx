"use client"
import { Button } from "@/components/ui/button";
import { SHMTable } from "@/components/ui/core/SHMTable";
import { deleteTransaction } from "@/services/Transaction";
import { IPurchaseHistory, Itransaction } from "@/types/transaction";
import { ColumnDef } from "@tanstack/react-table";
import { Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";

const MangePurchasesHistory = ({ orders }: { orders: any }) => {

    console.log(orders)

    const handleDeleteOrder = async(id: any)=> {
        // implement delete logic here
        const response = await deleteTransaction(id);
        if (response.success) {
            toast.success(response.message);
            setTimeout(()=> {
                window.location.reload();
            }, 1500)
        }
    }

    const columns: ColumnDef<IPurchaseHistory>[] = [
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
                    <Link href={`/dashboard/purchase-history/${row?.original?.transactionID}`} className="hover:text-[#ff8e00]"><span className="truncate">{row.original?.itemID?.title}</span></Link>
                </div>
            ),
        },
        {
            accessorKey: "price",
            header: () => <div>Price</div>,
            cell: ({ row }) => (
                <div>
                    <p>৳{row.original?.itemID?.price}</p>
                </div>
            ),
        },
        {
            accessorKey: "status",
            header: () => <div>Status</div>,
            cell: ({ row }) => (
                <div className="w-24">
                    {row.original.status === "pending" ? (
                        <span className="px-3 py-1 text-sm font-semibold text-yellow-700 bg-yellow-100 border border-yellow-400 rounded shadow-sm">
                            Pending
                        </span>
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
                        onClick={()=>handleDeleteOrder(row.original.transactionID)}
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
            <h2 className="md:text-2xl font-bold text-[#ff6f00]">View Purchase History</h2>
            <div className="mt-4">
                <SHMTable data={orders} columns={columns} />
            </div>
        </div>
    );
};

export default MangePurchasesHistory;