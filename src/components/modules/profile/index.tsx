"use client"
import { Button } from "@/components/ui/button";
import { IUser } from "@/types";
import { Mail, Phone, Shield, Calendar, Edit, Trash, UtensilsCrossed } from "lucide-react";
import Image from "next/image";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { deleteUser, logout, updateUser } from "@/services/AuthService";
import { useUser } from "@/context/UserContext";
import { useRouter } from "next/navigation";

const ManageProfile = ({ user }: { user: IUser }) => {

    const { _id, name, email, phonenumber, role, createdAt } = user;
    const { setIsLoading } = useUser();
    const router = useRouter();

    const form = useForm({
        defaultValues: {
            name: name,
            phonenumber: phonenumber,
        }
    });
    const { formState: { isSubmitting }, reset } = form

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const toastLoading = toast.loading("Editing...")
        try {
            const res = await updateUser(_id, data)
            if (res.success) {
                toast.success(res.message, { id: toastLoading })
                setIsLoading(true)
                router.push('/dashboard/profile')
                reset();
                
            } else if (res.err) {
                toast.error(res?.message || "Something went wrong!", { id: toastLoading })
            }
        } catch (error: any) {
            toast.error(error.message, { id: toastLoading })
        }
    }

    const handleProfileDelete = async ()=>{
        const toastLoading = toast.loading("Deleting...")
        try {
            const res = await deleteUser(_id)
            if (res.success) {
                toast.success(res.message, { id: toastLoading })
                await logout();
                setIsLoading(true)
                router.push('/')
            } else if (res.err) {
                toast.error(res?.message || "Something went wrong!", { id: toastLoading })
            }
        } catch (error: any) {
            toast.error(error.message, { id: toastLoading })
        }
    }

  return (
    <div>
      <div className="flex justify-center">
            <div className="bg-white shadow-xl rounded-lg p-8 flex gap-8">

                {/* User Details */}
                <div >
                    <h2 className="text-2xl font-semibold mt-4 text-[#e5532a]">My Profile</h2>
                    <hr className="w-full border-[#e5532a] border-2" />
                    <div className="flex items-center gap-2">
                        <h2 className="text-2xl font-semibold mt-4 text-gray-800 capitalize">{name}</h2>
                    </div>
                    <div className="space-y-4 my-4">

                        <div className="flex items-center gap-3 text-gray-700">
                            <Mail className="w-5 h-5 text-[#e5532a]" />
                            <span className="text-sm">{email}</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-700">
                            <Phone className="w-5 h-5 text-[#e5532a]" />
                            <span className="text-sm">{phonenumber || "Not Available"}</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-700">
                            <Shield className="w-5 h-5 text-[#e5532a]" />
                            <span className="text-sm capitalize">{role || "User"}</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-700">
                            <Calendar className="w-5 h-5 text-[#e5532a]" />
                            <span className="text-sm">
                                Joined on {new Date(createdAt).toLocaleDateString()}
                            </span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center gap-10 mt-6">
                        <div >
                            <Dialog>
                                <DialogTrigger asChild>
                                    <div className="flex justify-end">
                                        <Button className=" bg-gradient-to-r from-[#e5532a] to-[#d1461cd2] px-4 py-2 rounded-md text-white text-[14px] shadow-md transform transition-transform duration-300 hover:scale-105 hover:from-[#e5532a] hover:to-[#e5532a] hover:shadow-lg active:scale-75 focus:outline-none cursor-pointer">
                                            <Edit /> Edit Profile
                                        </Button>
                                    </div>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]">
                                    <DialogHeader>
                                        <DialogTitle className="text-center active:scale-95  text-2xl text-[#e5532a] ">Edit profile</DialogTitle>
                                        <DialogDescription>
                                            Make changes to your profile here. Click save when you're done.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <Form {...form}>
                                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                            <FormField
                                                control={form.control}
                                                name="name"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="text-lg font-medium">Name</FormLabel>
                                                        <FormControl>
                                                            <Input
                                                                className="w-full py-5 px-4 rounded-[4px] shadow-md"
                                                                placeholder="Enter your name"
                                                                {...field}
                                                                value={field.value || ''}
                                                            />
                                                        </FormControl>
                                                        <FormMessage className="text-red-500" />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="phonenumber"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="text-lg font-medium">Phone Number</FormLabel>
                                                        <FormControl>
                                                            <Input
                                                                className="w-full py-5 px-4 rounded-[4px] shadow-md"
                                                                placeholder="Enter your phone number"
                                                                {...field}
                                                                value={field.value || ''}
                                                            />
                                                        </FormControl>
                                                        <FormMessage className="text-red-500" />
                                                    </FormItem>
                                                )}
                                            />
                                            <Button type="submit" className="bg-gradient-to-r from-[#e5532a] to-[#d1461cd2] px-6 py-2 rounded-[4px] text-white font-semibold text-[18px] shadow-md transform transition-transform duration-300 hover:scale-105 hover:from-[#e5532a] hover:to-[#e5532a] hover:shadow-lg active:scale-75 focus:outline-none cursor-pointer">
                                                {isSubmitting ? "Saving..." : "Save"}
                                            </Button>
                                        </form>
                                    </Form>
                                </DialogContent>
                            </Dialog>
                        </div>
                        <div>
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button className=" bg-gradient-to-r from-[#ff0c79] to-[#bc0c8a] shadow-md transform transition-transform duration-300 hover:scale-105 hover:from-[#ff0c79] hover:to-[#c32758] hover:shadow-lg active:scale-95 focus:outline-none cursor-pointer">
                                        <Trash /> Delete Profile
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]">
                                    <DialogHeader>
                                        <div className="flex justify-center items-center">
                                            <Image src={'https://cdn-icons-png.flaticon.com/512/5253/5253450.png'} alt="delete_icon" width={100} height={100} />
                                        </div>
                                        <h2 className="text-2xl font-bold text-center text-red-600">Delete Profile</h2>
                                        <DialogDescription className="text-center text-xl">
                                            ⚠️ Are you sure delete your user profile ?
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="flex justify-between items-center">
                                        <DialogClose asChild>
                                            <Button className="bg-gradient-to-r from-[#ffbe0c] to-[#ff8e00] px-8 py-6 rounded-[4px] text-white font-semibold text-[18px] shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg active:scale-95 focus:outline-none cursor-pointer">
                                                <UtensilsCrossed /> No
                                            </Button>
                                        </DialogClose>
                                        <Button onClick={handleProfileDelete} className="bg-gradient-to-r from-[#ff410cd6] to-[#ff0000] px-8 py-6 rounded-[4px] text-white font-semibold text-[18px] shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg active:scale-95 focus:outline-none cursor-pointer">
                                            <Trash /> Yes
                                        </Button>
                                    </div>
                                </DialogContent>
                            </Dialog>
                        </div>

                    </div>
                </div>

            </div>
        </div >
    </div>
  )
}

export default ManageProfile
