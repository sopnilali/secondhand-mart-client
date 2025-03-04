import { IUser } from "./user"

export interface TItem {
    title: string
    description: string
    price: number
    condition: string
    category: string[]
    images: string[]
    userID: IUser
    status: string
}