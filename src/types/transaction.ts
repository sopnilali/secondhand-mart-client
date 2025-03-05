import { TListings } from "./product";
import { IUser } from "./user";

export type Itransaction = {
    _id: string
    transactionId: string;
    buyerID: IUser
    sellerID: IUser
    itemID: TListings
    status: string
    createdAt: Date;
    updatedAt: Date;
}

export interface IPurchaseHistory {
    transactionId: string;
    itemID: TListings;
    buyerID: IUser
    sellerID: IUser
    status: string
    createdAt: Date;
    updatedAt: Date;
}

export interface ISalesHistory {
    transactionId: string;
    itemID: TListings;
    buyerID: IUser
    sellerID: IUser
    status: string
    createdAt: Date;
    updatedAt: Date;
}


