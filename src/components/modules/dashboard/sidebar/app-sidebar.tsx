"use client";

import * as React from "react";
import {
    BadgeDollarSign,
  Bot,
  CassetteTapeIcon,
  Frame,
  House,
  LifeBuoy,
  Map,
  NotebookTabs,
  PieChart,
  Send,
  ShoppingBag,
  SquareTerminal,
  User,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "Track Purchases",
      url: "/dashboard/purchase-history",
      icon: ShoppingBag,
    },
    {
      title: "Manage Listings",
      url: "/dashboard/listing",
      icon: NotebookTabs,
    },
    {
      title: "Manage Order",
      url: "/dashboard/order",
      icon: NotebookTabs,
    },
    {
      title: "Manage Category",
      url: "/dashboard/category",
      icon: CassetteTapeIcon,
    },
    {
      title: "Track Sales",
      url: "sales-history",
      icon: BadgeDollarSign,
    },
    {
      title: "Profile",
      url: "dashboard/profile",
      icon: User,
    },
    {
      title: "Home",
      url: "/",
      icon: House,
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="flex items-center justify-center">
                  LOGO
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <h2 className="font-bold text-xl">NextMart</h2>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}