export interface IUser {
  _id: string;
  userId?: string;
  name: string;
  userEmail?: string;
  email?: string;
  phonenumber: string;
  role: "user" | "admin";
  iat?: number;
  exp?: number;
  createdAt: Date;
  updatedAt: Date;
}