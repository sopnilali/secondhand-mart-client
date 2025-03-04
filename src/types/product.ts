import { ICategory } from "./category"
import { IUser } from "./user"

export interface TListings {
    _id: string
    title: string
    description: string
    price: number
    category: ICategory
    condition: string
    images: string[],
    userID: IUser
    status: 'available' | 'sold'
}