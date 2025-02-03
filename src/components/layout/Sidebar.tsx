import React from "react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Car, Users, Building2, Home } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import Logo from "./Logo";

interface SidebarProps {
  className?: string;
}

const navigationItems = [
  {
    title: "Home",
    icon: Home,
    href: "/",
  },
  {
    title: "Vehicles",
    icon: Car,
    href: "/vehicles",
  },
  {
    title: "Drivers",
    icon: Users,
    href: "/drivers",
  },
  {
    title: "Organization",
    icon: Building2,
    href: "/organization",
  },
];

const Sidebar = ({ className = "" }: SidebarProps) => {
  return (
    <aside
      className={cn(
        "h-screen w-64 bg-[#4F46E5] border-r border-indigo-400/20 flex-shrink-0",
        className,
      )}
    >
      <div className="p-4 border-b border-indigo-400/20">
        <Logo />
      </div>

      <ScrollArea className="flex-1">
        <nav className="p-2">
          {navigationItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all mb-1",
                  isActive
                    ? "bg-white/15 text-white shadow-sm"
                    : "text-indigo-100 hover:bg-white/10 hover:text-white",
                )
              }
            >
              <item.icon className="h-5 w-5" />
              {item.title}
            </NavLink>
          ))}
        </nav>
      </ScrollArea>
    </aside>
  );
};

export default Sidebar;
