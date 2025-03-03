export interface IUser {
  userId: string;
  name: string;
  userEmail: string;
  hasShop?: boolean;
  isActive?: boolean;
  role: "user" | "admin";
  iat?: number;
  exp?: number;
}
