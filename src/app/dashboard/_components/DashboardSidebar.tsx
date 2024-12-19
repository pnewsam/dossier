import { LogOut } from "lucide-react";
import Link from "next/link";

import { logout } from "@/app/actions/auth";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function DashboardSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="p-4 border-b h-16">
        <h1 className="text-lg font-bold">Indie.Pro</h1>
      </SidebarHeader>
      <SidebarContent className="p-2">
        <SidebarGroup>
          <SidebarMenuItem className="flex">
            <Link
              className="w-full p-2 rounded-md hover:bg-gray-100"
              href="/dashboard"
            >
              Dashboard
            </Link>
          </SidebarMenuItem>
          <SidebarMenuItem className="flex">
            <Link
              className="w-full p-2 rounded-md hover:bg-gray-100"
              href="/dashboard/settings"
            >
              Settings
            </Link>
          </SidebarMenuItem>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <form className="w-full" action={logout}>
          <Button className="w-full" variant="outline">
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </form>
      </SidebarFooter>
    </Sidebar>
  );
}
