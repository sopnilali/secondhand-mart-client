import { getCurrentUser } from "@/services/AuthService";
import { NextRequest, NextResponse } from "next/server";

type Role = keyof typeof roleBasedPrivateRoutes;

const authRoutes = ["/login", "/register"];

const roleBasedPrivateRoutes = {
  user: [/^\/user/, /^\/dashboard/, /^\/messages/],
  admin: [/^\/admin/],
};

export const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;

  const userInfo = await getCurrentUser();

  if (!userInfo) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(
        new URL(
          `https://secondhand-mart-client.vercel.app/login?redirectPath=${pathname}`,
          request.url
        )
      );
    }
  }

  if (userInfo?.role && roleBasedPrivateRoutes[userInfo?.role as Role]) {
    const routes = roleBasedPrivateRoutes[userInfo?.role as Role];
    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }

  return NextResponse.redirect(new URL("/", request.url));
};

export const config = {
  matcher: [
    "/login",
    "/dashboard",
    "/dashboard/purchase-history",
    "/dashboard/sales-history",
    "/dashboard/listing",
    "/dashboard/profile",
    "/messages",
    "/dashboard/admin",
    "/dashboard/admin/user-management",
    "/dashboard/admin/listings",
  ],
};